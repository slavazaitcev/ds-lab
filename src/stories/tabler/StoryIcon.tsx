/*
 * StoryIcon: любая иконка Tabler по имени, через нашу обёртку Icon.
 * Только для экспериментов в Storybook. Утверждённую иконку добавляем в src/icons/index.ts.
 */
import { Icon, type IconColor } from '../../icons/Icon';
import type { IconSize } from '../../icons/spec';
import { useTablerIcon } from './useTablerIcon';
import './StoryIcon.css';

export interface StoryIconProps {
  /** Имя в формате Tabler: arrow-left, pencil, cash-banknote-off. */
  name: string;
  size?: IconSize;
  color?: IconColor | 'component';
}

export function StoryIcon({ name, size = 'm', color = 'default' }: StoryIconProps) {
  const state = useTablerIcon(name);

  if (state.status === 'loading') {
    return <span className={`story-icon__pending ds-icon--${size}`} aria-hidden="true" />;
  }
  return (
    <Icon
      icon={state.icon}
      size={size}
      color={state.status === 'missing' ? 'danger-default' : color}
      label={state.status === 'missing' ? `Нет иконки «${name}»` : undefined}
    />
  );
}
