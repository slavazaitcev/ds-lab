import { InfoIcon } from '../InfoIcon';
import './FormLabel.css';

export type FormLabelSize = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl';

export interface FormLabelProps {
  label: string;
  required?: boolean;
  /** Иконка-подсказка справа от текста */
  infoIcon?: boolean;
  /** Текст тултипа при ховере на иконку (активирует интерактивный режим InfoIcon) */
  tooltipText?: string;
  /** Описание тултипа (показывается если задан tooltipText) */
  tooltipDescription?: string;
  size?: FormLabelSize;
  htmlFor?: string;
  id?: string;
}

export function FormLabel({ label, required = false, infoIcon = false, tooltipText, tooltipDescription, size = 'm', htmlFor, id }: FormLabelProps) {
  return (
    <div className={`ds-form-label ds-form-label--${size}`} id={id}>
      <label className="ds-form-label__label" htmlFor={htmlFor}>
        {label}
        {required && (
          <span className="ds-form-label__required" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {infoIcon && (
        tooltipText
          ? <InfoIcon tooltip={tooltipText} tooltipDescription={tooltipDescription} className="ds-form-label__info-icon" />
          /* без tooltip — декоративная, не фокусируется */
          : <InfoIcon aria-hidden="true" tabIndex={-1} className="ds-form-label__info-icon" />
      )}
    </div>
  );
}
