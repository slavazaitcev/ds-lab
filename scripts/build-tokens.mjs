#!/usr/bin/env node
// Генерация CSS-переменных и TS-манифеста из Figma-экспорта токенов (формат DTCG).
//
//   tokens/primitives.tokens.json  -> --primitive-*   (сырые значения, только для семантики)
//   tokens/light.tokens.json       -> --color-*       (тема light, по умолчанию)
//   tokens/dark.tokens.json        -> --color-*       (тема dark, [data-theme="dark"])
//   tokens/numbers.tokens.json     -> --opacity-*, ...
//
// Результат:
//   src/styles/tokens.css              — переменные
//   src/styles/tokens.generated.ts     — список токенов для Storybook (страницы с цветами)
//
// Запуск: npm run tokens. Руками сгенерированные файлы не правим.

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = (file) => JSON.parse(readFileSync(resolve(root, 'tokens', file), 'utf8'));

const errors = [];
const fail = (message) => errors.push(message);

/** Обходит дерево DTCG и отдаёт листья (узлы с $value). Ключи с $ — служебные. */
function* walk(node, path = []) {
  for (const [key, value] of Object.entries(node)) {
    if (key.startsWith('$') || typeof value !== 'object' || value === null) continue;
    if ('$value' in value) yield { path: [...path, key], token: value };
    else yield* walk(value, [...path, key]);
  }
}

const toByte = (component) => Math.round(component * 255);
const trimAlpha = (alpha) => Number(alpha.toFixed(3));

/** Цвет в CSS: hex для непрозрачных, rgb(... / a) для прозрачных. */
function cssColor(value, name) {
  const { components, alpha = 1, hex } = value;
  if (!Array.isArray(components) || components.length < 3) {
    fail(`${name}: у цвета нет components`);
    return 'transparent';
  }
  if (alpha === 1 && hex) return hex.toUpperCase();
  const [r, g, b] = components.map(toByte);
  return `rgb(${r} ${g} ${b} / ${trimAlpha(alpha)})`;
}

// ---------- примитивы ----------

const primitives = new Map(); // 'gray-20' -> { varName, css }
for (const { path, token } of walk(read('primitives.tokens.json'))) {
  if (path[0] !== 'color') {
    fail(`Примитив ${path.join('.')}: ожидается группа color`);
    continue;
  }
  const key = path.slice(1).join('-'); // color.gray.20 -> gray-20
  primitives.set(key, {
    varName: `--primitive-${key}`,
    css: cssColor(token.$value, path.join('.')),
  });
}

// ---------- семантика ----------

function semanticTheme(file) {
  const result = new Map(); // 'color.bg.brand.default' -> { varName, css, description }
  for (const { path, token } of walk(read(file))) {
    const name = path.join('.');
    const alias = token.$extensions?.['com.figma.aliasData'];
    let css;
    if (alias) {
      if (alias.targetVariableSetName !== 'primitive') {
        fail(`${file}: ${name} ссылается на коллекцию «${alias.targetVariableSetName}», а не на primitive`);
      }
      const targetKey = alias.targetVariableName.split('/').slice(1).join('-'); // color/gray/20 -> gray-20
      if (!primitives.has(targetKey)) {
        fail(`${file}: ${name} ссылается на несуществующий примитив «${alias.targetVariableName}»`);
      }
      css = `var(--primitive-${targetKey})`;
    } else {
      css = cssColor(token.$value, name); // значение задано прямо в семантике, без ссылки
    }
    result.set(name, { varName: `--${path.join('-')}`, css, description: token.$description });
  }
  return result;
}

const light = semanticTheme('light.tokens.json');
const dark = semanticTheme('dark.tokens.json');

for (const name of light.keys()) if (!dark.has(name)) fail(`Токен ${name} есть в light, но нет в dark`);
for (const name of dark.keys()) if (!light.has(name)) fail(`Токен ${name} есть в dark, но нет в light`);

// ---------- числа ----------

const numbers = [];
for (const { path, token } of walk(read('numbers.tokens.json'))) {
  const name = path.join('.');
  if (token.$type !== 'number') {
    fail(`numbers: ${name} имеет тип ${token.$type}, ожидается number`);
    continue;
  }
  // Figma хранит opacity в процентах (50), в CSS нужна доля (0.5).
  const value = path[0] === 'opacity' ? token.$value / 100 : token.$value;
  numbers.push({ varName: `--${path.join('-')}`, css: String(value) });
}

if (errors.length > 0) {
  console.error('Генерация токенов остановлена:\n' + errors.map((line) => `  - ${line}`).join('\n'));
  process.exit(1);
}

// ---------- CSS ----------

const block = (selector, lines) => `${selector} {\n${lines.map((line) => `  ${line}`).join('\n')}\n}\n`;
const declarations = (items) => [...items].map(({ varName, css }) => `${varName}: ${css};`);

const css = [
  '/* Файл сгенерирован scripts/build-tokens.mjs из tokens/*.json. Руками не править: npm run tokens. */',
  '',
  '/* Примитивы: только источник значений для семантических токенов. В компонентах не использовать. */',
  block(':root', declarations(primitives.values())),
  '/* Тема light — по умолчанию */',
  block(':root,\n[data-theme="light"]', ['color-scheme: light;', ...declarations(light.values()), ...declarations(numbers)]),
  '/* Тема dark — включается атрибутом data-theme="dark" на <html> */',
  block('[data-theme="dark"]', ['color-scheme: dark;', ...declarations(dark.values())]),
].join('\n');

writeFileSync(resolve(root, 'src/styles/tokens.css'), css);

// ---------- TS-манифест для Storybook ----------

const semanticColors = [...light.entries()].map(([name, { varName, description }]) => ({
  name,
  cssVar: varName,
  ...(description ? { description } : {}),
}));

const primitiveGroups = new Map();
for (const [key, { varName }] of primitives) {
  const match = key.match(/^(.*?)-(\d+)$/);
  const group = match ? match[1] : 'single';
  if (!primitiveGroups.has(group)) primitiveGroups.set(group, []);
  primitiveGroups.get(group).push({ name: key, cssVar: varName });
}

const ts = `// Файл сгенерирован scripts/build-tokens.mjs. Руками не править: npm run tokens.

export interface TokenInfo {
  /** Имя токена в Figma, например color.bg.brand.default */
  name: string;
  /** CSS-переменная, например --color-bg-brand-default */
  cssVar: string;
  description?: string;
}

export const semanticColorTokens: TokenInfo[] = ${JSON.stringify(semanticColors, null, 2)};

export const primitiveColorGroups: Record<string, { name: string; cssVar: string }[]> = ${JSON.stringify(
  Object.fromEntries(primitiveGroups),
  null,
  2,
)};
`;

writeFileSync(resolve(root, 'src/styles/tokens.generated.ts'), ts);

console.log(
  `Токены: ${primitives.size} примитивов, ${light.size} семантических (light/dark), ${numbers.length} числовых.`,
);
