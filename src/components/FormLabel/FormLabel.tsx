import { InfoIcon } from '../InfoIcon';
import './FormLabel.css';

export type FormLabelSize = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl';

export interface FormLabelProps {
  label: string;
  required?: boolean;
  /** Иконка-подсказка справа от текста (декоративная, без tooltip пока) */
  infoIcon?: boolean;
  size?: FormLabelSize;
  htmlFor?: string;
  id?: string;
}

export function FormLabel({ label, required = false, infoIcon = false, size = 'm', htmlFor, id }: FormLabelProps) {
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
        /* aria-hidden: в контексте FormLabel иконка декоративная, интерактив добавит родитель */
        <InfoIcon aria-hidden="true" tabIndex={-1} className="ds-form-label__info-icon" />
      )}
    </div>
  );
}
