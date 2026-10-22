import type { Meta, StoryObj } from '@storybook/react-vite';
import { InfoIcon } from './InfoIcon';

const meta = {
  title: 'Формы/InfoIcon',
  component: InfoIcon,
  parameters: { layout: 'padded' },
  args: {
    iconType: 'info',
    disabled: false,
  },
  argTypes: {
    iconType: { control: 'radio', options: ['info', 'help'] },
  },
} satisfies Meta<typeof InfoIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

/** Все состояния рядом */
export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
        <InfoIcon {...args} />
        <span style={{ fontSize: '11px', color: '#888' }}>enabled</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
        <InfoIcon {...args} storyState="hover" />
        <span style={{ fontSize: '11px', color: '#888' }}>hover</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
        <InfoIcon {...args} storyState="focus" />
        <span style={{ fontSize: '11px', color: '#888' }}>focus</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
        <InfoIcon {...args} disabled />
        <span style={{ fontSize: '11px', color: '#888' }}>disabled</span>
      </div>
    </div>
  ),
};

/** Оба типа */
export const Types: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
        <InfoIcon {...args} iconType="info" />
        <span style={{ fontSize: '11px', color: '#888' }}>info</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
        <InfoIcon {...args} iconType="help" />
        <span style={{ fontSize: '11px', color: '#888' }}>help</span>
      </div>
    </div>
  ),
};

/** Тултип при ховере и фокусе */
export const WithTooltip: Story = {
  name: 'С тултипом',
  render: (args) => (
    <div style={{ display: 'flex', gap: 32, alignItems: 'center', padding: 24 }}>
      <InfoIcon {...args} tooltip="Краткое пояснение" />
      <InfoIcon
        {...args}
        tooltip="Это поле обязательно"
        tooltipDescription="Без этого значения система не сможет обработать запрос. Убедитесь, что данные введены корректно."
      />
      <InfoIcon {...args} tooltip="Hover = tooltip виден" storyState="hover" />
    </div>
  ),
};

export const DarkTheme: Story = {
  render: (args) => (
    <div data-theme="dark" style={{ background: 'var(--color-bg-default)', padding: '16px', borderRadius: '8px', display: 'flex', gap: '24px', alignItems: 'center' }}>
      <InfoIcon {...args} />
      <InfoIcon {...args} storyState="hover" />
      <InfoIcon {...args} storyState="focus" />
      <InfoIcon {...args} disabled />
    </div>
  ),
};
