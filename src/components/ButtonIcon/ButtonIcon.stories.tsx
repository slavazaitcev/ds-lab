import type { Meta, StoryObj } from '@storybook/react';
import { IconPencil } from '../../icons';
import { ButtonIcon } from './ButtonIcon';

const meta: Meta<typeof ButtonIcon> = {
  title: 'Кнопки/ButtonIcon',
  component: ButtonIcon,
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'danger', 'warning', 'success'],
    },
    shape: { control: 'select', options: ['default', 'inline'] },
    counter: { control: 'number' },
    arrow: { control: 'boolean' },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    icon: IconPencil,
    variant: 'default',
    shape: 'default',
    arrow: false,
    loading: false,
    disabled: false,
    'aria-label': 'Редактировать',
  },
};

export default meta;
type Story = StoryObj<typeof ButtonIcon>;

export const Playground: Story = {};

/* Все варианты */
export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      {(['default', 'primary', 'danger', 'warning', 'success'] as const).map((v) => (
        <ButtonIcon key={v} {...args} variant={v} aria-label={v} />
      ))}
    </div>
  ),
};

/* Типы: default vs inline */
export const Types: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <ButtonIcon {...args} shape="default" aria-label="default" />
      <ButtonIcon {...args} shape="inline" aria-label="inline" />
    </div>
  ),
};

/* Все состояния рядом (default variant) */
export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
      <ButtonIcon {...args} aria-label="enabled" />
      <ButtonIcon {...args} className="is-hover" aria-label="hover" />
      <ButtonIcon {...args} className="is-active" aria-label="active" />
      <ButtonIcon {...args} className="is-focus" aria-label="focus" />
      <ButtonIcon {...args} disabled aria-label="disabled" />
      <ButtonIcon {...args} loading aria-label="loading" />
    </div>
  ),
};

/* Все состояния для primary */
export const StatesPrimary: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
      <ButtonIcon {...args} variant="primary" aria-label="enabled" />
      <ButtonIcon {...args} variant="primary" className="is-hover" aria-label="hover" />
      <ButtonIcon {...args} variant="primary" className="is-active" aria-label="active" />
      <ButtonIcon {...args} variant="primary" className="is-focus" aria-label="focus" />
      <ButtonIcon {...args} variant="primary" disabled aria-label="disabled" />
      <ButtonIcon {...args} variant="primary" loading aria-label="loading" />
    </div>
  ),
};

/* С счётчиком и стрелкой */
export const WithCounterAndArrow: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <ButtonIcon {...args} counter={2} aria-label="с счётчиком" />
      <ButtonIcon {...args} arrow aria-label="с стрелкой" />
      <ButtonIcon {...args} counter={2} arrow aria-label="со счётчиком и стрелкой" />
    </div>
  ),
};

/* Счётчик меняет цвет вместе с иконкой */
export const CounterInheritsFg: Story = {
  name: 'Counter наследует fg (все варианты)',
  render: (args) => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
      {(['default', 'primary', 'danger', 'warning', 'success'] as const).map((v) => (
        <ButtonIcon key={v} {...args} variant={v} counter={2} arrow aria-label={v} />
      ))}
    </div>
  ),
};
