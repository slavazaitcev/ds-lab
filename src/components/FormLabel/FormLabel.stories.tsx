import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormLabel } from './FormLabel';

const meta = {
  title: 'Формы/FormLabel',
  component: FormLabel,
  parameters: { layout: 'padded' },
  args: {
    label: 'Label',
    required: true,
    infoIcon: true,
    size: 'm',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xxs', 'xs', 's', 'm', 'l', 'xl'],
    },
  },
} satisfies Meta<typeof FormLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
      {(['xxs', 'xs', 's', 'm', 'l', 'xl'] as const).map((size) => (
        <FormLabel key={size} {...args} size={size} label={`Label (${size})`} />
      ))}
    </div>
  ),
};

export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
      <FormLabel {...args} label="Необязательное" required={false} infoIcon={false} />
      <FormLabel {...args} label="Обязательное" required={true} infoIcon={false} />
      <FormLabel {...args} label="С иконкой" required={false} infoIcon={true} />
      <FormLabel {...args} label="Обязательное с иконкой" required={true} infoIcon={true} />
    </div>
  ),
};

export const DarkTheme: Story = {
  render: (args) => (
    <div data-theme="dark" style={{ background: 'var(--color-bg-default)', padding: '16px', borderRadius: '8px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
        <FormLabel {...args} label="Необязательное" required={false} infoIcon={false} />
        <FormLabel {...args} label="Обязательное" required={true} infoIcon={false} />
        <FormLabel {...args} label="С иконкой" required={false} infoIcon={true} />
        <FormLabel {...args} label="Обязательное с иконкой" required={true} infoIcon={true} />
      </div>
    </div>
  ),
};
