/*
 * Ленивая загрузка любой иконки Tabler по имени (arrow-left). Только для экспериментов
 * в Storybook: в компонентах и экранах иконки берём из src/icons/index.ts.
 */
import { forwardRef, useEffect, useState } from 'react';
import type { IconProps, TablerIcon } from '@tabler/icons-react';
import dynamicImports from '@tabler/icons-react/dist/esm/dynamic-imports.mjs';
import iconsList from '@tabler/icons-react/dist/esm/icons-list.mjs';

export { iconsList };

const known = new Set(iconsList);
/** В статической сборке Storybook загрузчик подменён пустым (см. .storybook/main.ts). */
const devOnly = Object.keys(dynamicImports).length === 0;
const cache = new Map<string, TablerIcon>();

/** Заглушка в той же сетке 24×24: пунктирная рамка и крест. Цвет и размер — как у обычной иконки. */
export function createMissingIcon(name: string): TablerIcon {
  const Missing = forwardRef<SVGSVGElement, IconProps>(({ size = 24, stroke = 2, color, ...rest }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <title>
        {devOnly
          ? 'Иконки Tabler по имени доступны только в npm run storybook'
          : name
            ? `В Tabler нет иконки «${name}»`
            : 'Имя иконки не задано'}
      </title>
      <rect x="3" y="3" width="18" height="18" rx="2" strokeDasharray="2 3" />
      <path d="M9 9l6 6M15 9l-6 6" />
    </svg>
  ));
  Missing.displayName = `MissingTablerIcon(${name})`;
  return Missing;
}

export type TablerIconState =
  | { status: 'loading' }
  | { status: 'ready'; icon: TablerIcon }
  | { status: 'missing'; icon: TablerIcon };

export function useTablerIcon(name: string): TablerIconState {
  const trimmed = name.trim();
  const [state, setState] = useState<TablerIconState>(() => initialState(trimmed));

  useEffect(() => {
    const initial = initialState(trimmed);
    setState(initial);
    if (initial.status !== 'loading') return;

    let cancelled = false;
    dynamicImports[trimmed]()
      .then((module) => {
        cache.set(trimmed, module.default);
        if (!cancelled) setState({ status: 'ready', icon: module.default });
      })
      .catch(() => {
        if (!cancelled) setState({ status: 'missing', icon: createMissingIcon(trimmed) });
      });
    return () => {
      cancelled = true;
    };
  }, [trimmed]);

  return state;
}

function initialState(name: string): TablerIconState {
  const cached = cache.get(name);
  if (cached) return { status: 'ready', icon: cached };
  if (!known.has(name) || !dynamicImports[name]) return { status: 'missing', icon: createMissingIcon(name) };
  return { status: 'loading' };
}
