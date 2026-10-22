import type { ReactNode } from 'react';
import './Tooltip.css';

export type TooltipArrow =
  | 'top-left' | 'top-center' | 'top-right'
  | 'bottom-left' | 'bottom-center' | 'bottom-right'
  | 'left' | 'right' | 'none';

export interface TooltipProps {
  title: string;
  description?: string;
  arrow?: TooltipArrow;
  /** Слот для дополнительного контента под текстом */
  children?: ReactNode;
  className?: string;
}


export function Tooltip({
  title,
  description,
  arrow = 'none',
  children,
  className,
}: TooltipProps) {
  const hasArrow = arrow !== 'none';

return (
    <div
      className={[
        'ds-tooltip',
        hasArrow && `ds-tooltip--arrow-${arrow}`,
        description && 'ds-tooltip--has-description',
        className,
      ].filter(Boolean).join(' ')}
    >
      <div className="ds-tooltip__container">
        <div className="ds-tooltip__body">
          <p className="ds-tooltip__title">{title}</p>
          {description && <p className="ds-tooltip__description">{description}</p>}
        </div>
        {children && <div className="ds-tooltip__extension">{children}</div>}
      </div>
    </div>
  );
}
