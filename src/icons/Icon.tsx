import type { CSSProperties } from 'react';
import type { TablerIcon } from '@tabler/icons-react';
import { ICON_SPEC, iconStroke, type IconSize } from './spec';
import './Icon.css';

export type { TablerIcon };

/** Токены группы color.icon.* без префикса: 'brand-default' -> var(--color-icon-brand-default). */
export type IconColor =
  | 'default'
  | 'hover'
  | 'active'
  | 'inverse'
  | 'constant-white'
  | 'bold-default'
  | 'brand-default'
  | 'brand-hover'
  | 'brand-active'
  | 'brand-bold-default'
  | 'brand-bold-hover'
  | 'brand-bold-active'
  | 'danger-default'
  | 'danger-hover'
  | 'danger-active'
  | 'warning-default'
  | 'warning-hover'
  | 'warning-active'
  | 'success-default'
  | 'success-hover'
  | 'success-active'
  | 'info-default'
  | 'info-hover'
  | 'info-active'
  | 'accent-blue'
  | 'accent-red'
  | 'accent-yellow'
  | 'accent-green'
  | 'accent-purple';

export interface IconProps {
  /** Иконка из src/icons (реэкспорт Tabler). */
  icon: TablerIcon;
  size?: IconSize;
  /**
   * Токен color.icon.*. Цвет задаётся явно и не наследуется от текста.
   * 'component' — только внутри компонентов ДС: цвет ставит CSS компонента через
   * --ds-icon-color (тоже токеном color.icon.*), например по состояниям hover/active.
   */
  color: IconColor | 'component';
  /** Подпись для скринридера. Без неё иконка декоративная и скрыта от него. */
  label?: string;
  className?: string;
}

export function Icon({ icon: TablerSvg, size = 'm', color, label, className }: IconProps) {
  const style =
    color === 'component' ? undefined : ({ '--ds-icon-color': `var(--color-icon-${color})` } as CSSProperties);

  return (
    <TablerSvg
      className={['ds-icon', `ds-icon--${size}`, className].filter(Boolean).join(' ')}
      style={style}
      size={ICON_SPEC[size].px}
      stroke={iconStroke(size)}
      // Цвет приходит только из CSS (stroke: var(--ds-icon-color)), без currentColor
      color="none"
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable={false}
    />
  );
}
