import { useId, useRef, useState, type TextareaHTMLAttributes } from 'react';
import { Feedback } from '../Feedback';
import { FormLabel, type FormLabelSize } from '../FormLabel';
import './TextArea.css';

export interface TextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  label?: string;
  labelRequired?: boolean;
  labelTooltip?: string;
  labelTooltipDescription?: string;
  labelSize?: FormLabelSize;
  helperText?: string;
  /** true — только красная рамка; string — рамка + текст ошибки */
  error?: boolean | string;
}

export function TextArea({
  label,
  labelRequired,
  labelTooltip,
  labelTooltipDescription,
  labelSize = 'm',
  helperText,
  error,
  disabled,
  id: idProp,
  className,
  ...textareaProps
}: TextAreaProps) {
  const generatedId = useId();
  const id = idProp ?? generatedId;
  const hasError = Boolean(error);
  const errorText = typeof error === 'string' ? error : undefined;

  // Кольцо фокуса только при клавиатурной навигации
  const isMouseDown = useRef(false);
  const [keyboardFocused, setKeyboardFocused] = useState(false);

  return (
    <div
      className={[
        'ds-textarea',
        hasError && 'ds-textarea--error',
        disabled && 'ds-textarea--disabled',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {label && (
        <div className="ds-textarea__label">
          <FormLabel
            label={label}
            required={labelRequired}
            infoIcon={Boolean(labelTooltip)}
            tooltipText={labelTooltip}
            tooltipDescription={labelTooltipDescription}
            size={labelSize}
            htmlFor={id}
          />
        </div>
      )}

      <div
        className="ds-textarea__field"
        data-keyboard-focus={keyboardFocused || undefined}
        onMouseDown={() => { isMouseDown.current = true; }}
      >
        <textarea
          {...textareaProps}
          id={id}
          className="ds-textarea__control"
          disabled={disabled}
          aria-invalid={hasError || undefined}
          onFocus={(e) => {
            setKeyboardFocused(!isMouseDown.current);
            isMouseDown.current = false;
            textareaProps.onFocus?.(e);
          }}
          onBlur={(e) => {
            setKeyboardFocused(false);
            textareaProps.onBlur?.(e);
          }}
        />
      </div>

      {(errorText || helperText) && (
        <div className="ds-textarea__feedback">
          <Feedback
            text={errorText ?? helperText!}
            type={errorText ? 'danger' : 'helper-text'}
          />
        </div>
      )}
    </div>
  );
}
