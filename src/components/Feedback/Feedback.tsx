import './Feedback.css';

export type FeedbackType = 'helper-text' | 'danger' | 'warning' | 'success';

export interface FeedbackProps {
  /** Текст подписи */
  text: string;
  /** Тип: нейтральный, ошибка, предупреждение, успех */
  type?: FeedbackType;
  className?: string;
}

export function Feedback({ text, type = 'helper-text', className }: FeedbackProps) {
  return (
    <p className={['ds-feedback', `ds-feedback--${type}`, className].filter(Boolean).join(' ')}>
      {text}
    </p>
  );
}
