import type { ComponentProps, ReactNode } from 'react';
import { Icon, type TablerIcon } from '../../icons/Icon';
import type { IconSize } from '../../icons/spec';
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'light' | 'text';
/** Смысловой цвет. В Figma есть только у primary, outline и text, у secondary и light не действует. */
export type ButtonIntent = 'default' | 'danger' | 'warning' | 'success';
/** В Figma есть только m. Размеры s и l пока на предположениях. */
export type ButtonSize = 's' | 'm' | 'l';

export interface ButtonProps extends Omit<ComponentProps<'button'>, 'children'> {
  children: ReactNode;
  variant?: ButtonVariant;
  intent?: ButtonIntent;
  size?: ButtonSize;
  /** Показывает спиннер и блокирует нажатия, фокус остаётся на кнопке. */
  loading?: boolean;
  /** Иконка из src/icons. Цвет по варианту и состоянию задаёт кнопка. */
  leftIcon?: TablerIcon;
  rightIcon?: TablerIcon;
  fullWidth?: boolean;
}

/** Размер иконки по размеру кнопки. В Figma есть только medium -> 20px (переменная `m`). */
const iconSizeByButtonSize: Record<ButtonSize, IconSize> = {
  s: 'm', // TODO(token): в Figma нет size=small, размер иконки неизвестен
  m: 'm',
  l: 'm', // TODO(token): в Figma нет size=large, размер иконки неизвестен
};

export function Button({
  children,
  variant = 'primary',
  intent = 'default',
  size = 'm',
  loading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  type = 'button',
  className,
  onClick,
  ...rest
}: ButtonProps) {
  const classes = [
    'ds-button',
    `ds-button--${variant}`,
    intent !== 'default' && `ds-button--${intent}`,
    `ds-button--${size}`,
    loading && 'is-loading',
    fullWidth && 'ds-button--full',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      {...rest}
      type={type}
      className={classes}
      aria-busy={loading || undefined}
      onClick={loading ? undefined : onClick}
    >
      {loading && <span className="ds-button__spinner" aria-hidden="true" />}
      {leftIcon && (
        <span className="ds-button__icon">
          <Icon icon={leftIcon} size={iconSizeByButtonSize[size]} color="component" />
        </span>
      )}
      <span className="ds-button__label">{children}</span>
      {rightIcon && (
        <span className="ds-button__icon">
          <Icon icon={rightIcon} size={iconSizeByButtonSize[size]} color="component" />
        </span>
      )}
    </button>
  );
}
