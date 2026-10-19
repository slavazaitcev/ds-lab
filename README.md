# ds-lab

Лаборатория дизайн-системы: токены из Figma → компоненты в коде → прототипы экранов.

## Быстрый старт

Нужны Node.js (LTS) и Git.

```bash
npm install
npm run storybook   # каталог компонентов, http://localhost:6006
```

В Storybook в панели сверху переключается тема (Light / Dark). Страницы `Tokens/Colors` показывают все токены с названиями переменных.

Другие команды: `npm run dev` (песочница), `npm run tokens` (пересобрать токены), `npm run typecheck`, `npm run build-storybook`.

## Как устроено

```
tokens/              экспорт из Figma (DTCG): primitives, light, dark, numbers
scripts/             build-tokens.mjs: tokens/*.json → CSS-переменные
src/styles/          tokens.css (генерируется), pending-tokens.css (временные), global.css
src/components/      компоненты: Button, дальше по одному
src/screens/         экраны-референсы и новые экраны
src/stories/         документация токенов
docs/token-gaps.md   чего не хватило в токенах
CLAUDE.md            правила для Claude Code
```

Цепочка токенов: `primitives` (сырые значения) → семантические токены `light` и `dark` (ссылаются на примитивы) → компоненты (используют только семантику). Тема меняется атрибутом `data-theme` на `<html>`.

## Обновить токены из Figma

1. Экспортируйте коллекции переменных из Figma в JSON (формат DTCG) и замените файлы в `tokens/`:
   `primitives.tokens.json`, `light.tokens.json`, `dark.tokens.json`, `numbers.tokens.json`.
2. `npm run tokens`. Скрипт остановится с понятной ошибкой, если токен ссылается на несуществующий примитив или набор токенов в light и dark разошёлся.
3. Закоммитьте `tokens/` и сгенерированные `src/styles/tokens.*`.

## Что пока временное

Типографика, отступы, скругления и размеры контролов лежат в `src/styles/pending-tokens.css`. Значения там рабочие предположения, их нужно сверить с Figma и заменить настоящими токенами.
