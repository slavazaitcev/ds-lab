/*
 * Спецификация иконок: размеры и толщина линии. Единственное место, где они задаются.
 *
 * Размер иконки на экране берётся из CSS-переменной --icon-size-* (pending-tokens.css).
 * Числа в `px` должны совпадать с этими переменными: по ним считается stroke.
 *
 * Толщина линии. Tabler рисует иконку в системе 24×24, и stroke-width масштабируется
 * вместе с иконкой. Чтобы получить нужную толщину на экране, в prop `stroke` передаём
 *   stroke = толщина на экране × 24 / размер в px
 *   24px: 1.5 × 24 / 24 = 1.5
 *   20px: 1.5 × 24 / 20 = 1.8
 *   16px: 1.3 × 24 / 16 = 1.95
 */

/** Сетка, в которой Tabler рисует иконки. */
export const TABLER_VIEWBOX = 24;

export const ICON_SPEC = {
  s: { px: 16, cssVar: '--icon-size-s', screenStroke: 1.3 },
  m: { px: 20, cssVar: '--icon-size-m', screenStroke: 1.5 },
  l: { px: 24, cssVar: '--icon-size-l', screenStroke: 1.5 },
} as const;

export type IconSize = keyof typeof ICON_SPEC;

/** Значение для prop `stroke` у Tabler-иконки. */
export function iconStroke(size: IconSize): number {
  const { px, screenStroke } = ICON_SPEC[size];
  return Number(((screenStroke * TABLER_VIEWBOX) / px).toFixed(2));
}
