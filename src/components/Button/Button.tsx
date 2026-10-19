import type { ComponentProps, ReactNode } from 'react';
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger';
export type ButtonSize = 's' | 'm' | 'l';

export interface ButtonProps extends Omit<ComponentProps<'button'>, 'children'> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Показывает спиннер и блокирует нажатия, фокус остаётся на кнопке. */
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = 'primary',
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
      {leftIcon && <span className="ds-button__icon">{leftIcon}</span>}
      <span className="ds-button__label">{children}</span>
      {rightIcon && <span className="ds-button__icon">{rightIcon}</span>}
    </button>
  );
}
