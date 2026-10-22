import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextArea } from './TextArea';

const meta = {
  title: 'Формы/TextArea',
  component: TextArea,
  parameters: { layout: 'padded' },
  args: {
    label: 'Label',
    placeholder: 'Введите текст...',
  },
  argTypes: {
    error: { control: 'text' },
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

/** Все состояния */
export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '360px' }}>
      <TextArea {...args} label="Default" placeholder="Placeholder" />
      <TextArea {...args} label="Заполненное" defaultValue="Введённый текст в несколько строк. Это пример содержимого поля." />
      <TextArea {...args} label="С ошибкой" error="Поле заполнено неверно" />
      <TextArea {...args} label="Только рамка ошибки" error placeholder="error без текста" />
      <TextArea {...args} label="С подсказкой" helperText="Вспомогательный текст" />
      <TextArea {...args} label="Disabled" disabled placeholder="Недоступно" />
      <TextArea {...args} label="Disabled с ошибкой" disabled error="Ошибка" />
    </div>
  ),
};

/** Обязательное поле с инфо-иконкой */
export const LabelOptions: Story = {
  name: 'Варианты лейбла',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '360px', padding: '24px' }}>
      <TextArea {...args} label="Обязательное поле" labelRequired />
      <TextArea
        {...args}
        label="С тултипом"
        labelTooltip="Подсказка к полю"
        labelRequired
      />
      <TextArea
        {...args}
        label="Тултип с описанием"
        labelTooltip="Это поле обязательно"
        labelTooltipDescription="Без этого значения система не сможет обработать запрос. Убедитесь, что данные введены корректно."
        labelRequired
      />
      <TextArea {...args} label="Без лейбла" />
    </div>
  ),
};

export const DarkTheme: Story = {
  render: (args) => (
    <div data-theme="dark" style={{ background: 'var(--color-bg-default)', padding: '24px', borderRadius: '8px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '360px' }}>
        <TextArea {...args} label="Default" placeholder="Placeholder" />
        <TextArea {...args} label="Заполненное" defaultValue="Введённый текст" />
        <TextArea {...args} label="С ошибкой" error="Поле заполнено неверно" />
        <TextArea {...args} label="Disabled" disabled placeholder="Недоступно" />
      </div>
    </div>
  ),
};
