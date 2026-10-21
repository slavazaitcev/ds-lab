import type { ComponentProps } from 'react';
import { Icon, type TablerIcon } from '../../icons/Icon';
import './ButtonIcon.css';

export type ButtonIconVariant = 'default' | 'primary' | 'danger' | 'warning' | 'success';
/** В Figma есть только size=medium. */
export type ButtonIconSize = 'm';
/** default — с padding (высота 36px), inline — без padding (высота 20px). */
export type ButtonIconShape = 'default' | 'inline';

export interface ButtonIconProps extends ComponentProps<'button'> {
  /** Иконка из src/icons. */
  icon: TablerIcon;
  variant?: ButtonIconVariant;
  size?: ButtonIconSize;
  /** Форма: default с padding 8px, inline — только иконка без отступов. */
  shape?: ButtonIconShape;
  /** Числовой счётчик-бейдж рядом с иконкой. */
  counter?: number;
  /** Показывает стрелку-индикатор выпадающего списка. */
  arrow?: boolean;
  /** Показывает спиннер и блокирует нажатия. */
  loading?: boolean;
}

/** Стрелка-индикатор: 8×4px, кастомный SVG (в Tabler аналога нет). */
function ToggleArrow({ color }: { color: string }) {
  return (
    <svg
      width="8"
      height="4"
      viewBox="0 0 8 4"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 0.5L4 3.5L8 0.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ButtonIcon({
  icon,
  variant = 'default',
  size = 'm',
  shape = 'default',
  counter,
  arrow = false,
  loading = false,
  className,
  onClick,
  disabled,
  ...rest
}: ButtonIconProps) {
  const classes = [
    'ds-btnicon',
    variant !== 'default' && `ds-btnicon--${variant}`,
    shape === 'inline' && 'ds-btnicon--inline',
    loading && 'is-loading',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      {...rest}
      type="button"
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      onClick={loading ? undefined : onClick}
    >
      {loading && <span className="ds-btnicon__spinner" aria-hidden="true" />}
      <span className="ds-btnicon__icon">
        <Icon icon={icon} size="m" color="component" />
      </span>
      {counter !== undefined && (
        <span className="ds-btnicon__counter" aria-hidden="true">
          {counter}
        </span>
      )}
      {arrow && (
        <span className="ds-btnicon__arrow">
          {/* stroke берётся не через currentColor, а напрямую через CSS-переменную */}
          <ToggleArrow color="var(--btnicon-fg)" />
        </span>
      )}
    </button>
  );
}
