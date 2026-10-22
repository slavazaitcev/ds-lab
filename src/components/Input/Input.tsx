import { useId, useRef, useState, type InputHTMLAttributes } from 'react';
import { ButtonIcon } from '../ButtonIcon';
import { Feedback } from '../Feedback';
import { FormLabel, type FormLabelSize } from '../FormLabel';
import { Icon, type TablerIcon } from '../../icons/Icon';
import './Input.css';

export type InputSize = 's' | 'm' | 'l';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  labelRequired?: boolean;
  labelTooltip?: string;
  labelTooltipDescription?: string;
  /** Размер лейбла (по умолчанию подбирается под size инпута) */
  labelSize?: FormLabelSize;
  /** Вспомогательный текст под полем */
  helperText?: string;
  /** true — только красная рамка; string — рамка + текст ошибки */
  error?: boolean | string;
  size?: InputSize;
  leftIcon?: TablerIcon;
  /** Иконка справа. Без onRightIconClick — декоративная; с ним — кликабельная кнопка */
  rightIcon?: TablerIcon;
  onRightIconClick?: () => void;
  rightIconAriaLabel?: string;
}

const labelSizeMap: Record<InputSize, FormLabelSize> = { s: 'xs', m: 'm', l: 'l' };

export function Input({
  label,
  labelRequired,
  labelTooltip,
  labelTooltipDescription,
  labelSize,
  helperText,
  error,
  size = 'm',
  leftIcon,
  rightIcon,
  onRightIconClick,
  rightIconAriaLabel,
  disabled,
  id: idProp,
  className,
  ...inputProps
}: InputProps) {
  const generatedId = useId();
  const id = idProp ?? generatedId;
  const hasError = Boolean(error);
  const errorText = typeof error === 'string' ? error : undefined;

  // Кольцо фокуса только при клавиатурной навигации (не при клике мышью)
  const isMouseDown = useRef(false);
  const [keyboardFocused, setKeyboardFocused] = useState(false);

  return (
    <div
      className={[
        'ds-input',
        `ds-input--${size}`,
        hasError && 'ds-input--error',
        disabled && 'ds-input--disabled',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {label && (
        <div className="ds-input__label">
          <FormLabel
            label={label}
            required={labelRequired}
            infoIcon={Boolean(labelTooltip)}
            tooltipText={labelTooltip}
            tooltipDescription={labelTooltipDescription}
            size={labelSize ?? labelSizeMap[size]}
            htmlFor={id}
          />
        </div>
      )}

      <div
        className="ds-input__field"
        data-keyboard-focus={keyboardFocused || undefined}
        onMouseDown={() => { isMouseDown.current = true; }}
      >
        {leftIcon && (
          <span className="ds-input__icon" aria-hidden="true">
            <Icon icon={leftIcon} size="m" color="component" />
          </span>
        )}

        <input
          {...inputProps}
          id={id}
          className="ds-input__control"
          disabled={disabled}
          aria-invalid={hasError || undefined}
          onFocus={(e) => {
            setKeyboardFocused(!isMouseDown.current);
            isMouseDown.current = false;
            inputProps.onFocus?.(e);
          }}
          onBlur={(e) => {
            setKeyboardFocused(false);
            inputProps.onBlur?.(e);
          }}
        />

        {rightIcon && (
          <span className="ds-input__icon">
            {onRightIconClick ? (
              <ButtonIcon
                icon={rightIcon}
                shape="inline"
                onClick={onRightIconClick}
                aria-label={rightIconAriaLabel}
                disabled={disabled}
              />
            ) : (
              <Icon icon={rightIcon} size="m" color="component" />
            )}
          </span>
        )}
      </div>

      {(errorText || helperText) && (
        <div className="ds-input__feedback">
          <Feedback
            text={errorText ?? helperText!}
            type={errorText ? 'danger' : 'helper-text'}
          />
        </div>
      )}
    </div>
  );
}
