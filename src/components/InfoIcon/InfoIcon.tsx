import type { ButtonHTMLAttributes } from 'react';
import { IconHelpCircle, IconInfoCircle } from '../../icons';
import { Icon } from '../../icons/Icon';
import './InfoIcon.css';

export type InfoIconType = 'info' | 'help';

export interface InfoIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Тип иконки: info-circle или help-circle */
  iconType?: InfoIconType;
  /** Состояние для Storybook (в браузере управляется CSS) */
  storyState?: 'hover' | 'focus';
}

const ICONS = {
  info: IconInfoCircle,
  help: IconHelpCircle,
} as const;

export function InfoIcon({ iconType = 'info', storyState, className, ...props }: InfoIconProps) {
  const icon = ICONS[iconType];
  const stateClass = storyState ? ` is-${storyState}` : '';
  return (
    <button type="button" className={`ds-info-icon${stateClass}${className ? ` ${className}` : ''}`} {...props}>
      <Icon icon={icon} size="s" color="component" />
    </button>
  );
}
