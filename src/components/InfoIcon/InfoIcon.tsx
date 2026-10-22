import { useId, type ButtonHTMLAttributes } from 'react';
import { IconHelpCircle, IconInfoCircle } from '../../icons';
import { Icon } from '../../icons/Icon';
import { Tooltip } from '../Tooltip';
import './InfoIcon.css';

export type InfoIconType = 'info' | 'help';

export interface InfoIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Тип иконки: info-circle или help-circle */
  iconType?: InfoIconType;
  /** Состояние для Storybook (в браузере управляется CSS) */
  storyState?: 'hover' | 'focus';
  /** Текст тултипа. Если задан — показывается при ховере и фокусе */
  tooltip?: string;
  /** Дополнительное описание внутри тултипа */
  tooltipDescription?: string;
}

const ICONS = {
  info: IconInfoCircle,
  help: IconHelpCircle,
} as const;

export function InfoIcon({
  iconType = 'info',
  storyState,
  tooltip,
  tooltipDescription,
  className,
  ...props
}: InfoIconProps) {
  const icon = ICONS[iconType];
  const stateClass = storyState ? ` is-${storyState}` : '';
  const tooltipId = useId();

  const button = (
    <button
      type="button"
      className={`ds-info-icon${stateClass}${className ? ` ${className}` : ''}`}
      aria-describedby={tooltip ? tooltipId : undefined}
      {...props}
    >
      <Icon icon={icon} size="s" color="component" />
    </button>
  );

  if (!tooltip) return button;

  return (
    <span className="ds-info-icon-wrapper" data-disabled={props.disabled || undefined}>
      {button}
      <div id={tooltipId} className="ds-info-icon-tooltip" role="tooltip">
        <Tooltip title={tooltip} description={tooltipDescription} arrow="top-left" />
      </div>
    </span>
  );
}
