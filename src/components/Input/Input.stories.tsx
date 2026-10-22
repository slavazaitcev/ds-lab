import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';
import { IconInfoCircle, IconPencil } from '../../icons';

const meta = {
  title: 'Формы/Input',
  component: Input,
  parameters: { layout: 'padded' },
  args: {
    label: 'Label',
    placeholder: 'Введите значение...',
    size: 'm',
  },
  argTypes: {
    size: { control: 'radio', options: ['s', 'm', 'l'] },
    error: { control: 'text' },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

/** Все размеры */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '320px' }}>
      {(['s', 'm', 'l'] as const).map((size) => (
        <Input key={size} {...args} size={size} label={`Size ${size}`} />
      ))}
    </div>
  ),
};

/** Все состояния */
export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '320px' }}>
      <Input {...args} label="Default" placeholder="Default" />
      <Input {...args} label="Заполненное" defaultValue="Введённое значение" />
      <Input {...args} label="С ошибкой" error="Это поле заполнено неверно" />
      <Input {...args} label="Только рамка ошибки" error placeholder="error без текста" />
      <Input {...args} label="С подсказкой" helperText="Вспомогательный текст" />
      <Input {...args} label="Disabled" disabled placeholder="Недоступно" />
      <Input {...args} label="Disabled с ошибкой" disabled error="Ошибка" />
    </div>
  ),
};

/** Иконки слева и справа */
export const WithIcons: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '320px' }}>
      <Input {...args} label="Иконка слева" leftIcon={IconInfoCircle} />
      <Input {...args} label="Иконка справа (декоративная)" rightIcon={IconPencil} />
      <Input {...args} label="Обе иконки" leftIcon={IconInfoCircle} rightIcon={IconPencil} />
    </div>
  ),
};

/** Правая иконка как кнопка-действие (кликабельная) */
export const WithActionIcon: Story = {
  name: 'Правая иконка-кнопка',
  render: (args) => {
    const [value, setValue] = useState('Текст который можно очистить');
    return (
      <div style={{ maxWidth: '320px' }}>
        <Input
          {...args}
          label="Очистить поле"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rightIcon={IconPencil}
          onRightIconClick={() => setValue('')}
          rightIconAriaLabel="Очистить поле"
          helperText="Нажмите на иконку справа чтобы очистить поле"
        />
      </div>
    );
  },
};

/** С тултипом на лейбле */
export const WithLabelTooltip: Story = {
  name: 'С тултипом на лейбле',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '320px', padding: '24px' }}>
      <Input
        {...args}
        label="Краткий тултип"
        labelTooltip="Подсказка к полю"
      />
      <Input
        {...args}
        label="Тултип с описанием"
        labelTooltip="Это поле обязательно"
        labelTooltipDescription="Без этого значения система не сможет обработать запрос. Убедитесь, что данные введены корректно."
        labelRequired
      />
    </div>
  ),
};

export const DarkTheme: Story = {
  render: (args) => (
    <div data-theme="dark" style={{ background: 'var(--color-bg-default)', padding: '24px', borderRadius: '8px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '320px' }}>
        <Input {...args} label="Default" placeholder="Default" />
        <Input {...args} label="Заполненное" defaultValue="Введённое значение" />
        <Input {...args} label="С ошибкой" error="Это поле заполнено неверно" />
        <Input {...args} label="Disabled" disabled placeholder="Недоступно" />
      </div>
    </div>
  ),
};
