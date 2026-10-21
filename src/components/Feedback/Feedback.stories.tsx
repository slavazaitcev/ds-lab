import type { Meta, StoryObj } from '@storybook/react';
import { Feedback } from './Feedback';

const meta: Meta<typeof Feedback> = {
  title: 'Формы/Feedback',
  component: Feedback,
  parameters: { layout: 'padded' },
  argTypes: {
    type: {
      control: 'select',
      options: ['helper-text', 'danger', 'warning', 'success'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Feedback>;

/** Playground с Controls */
export const Playground: Story = {
  args: {
    text: 'Подсказка к полю',
    type: 'helper-text',
  },
};

/** Все типы рядом */
export const AllTypes: Story = {
  name: 'Все типы',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      <Feedback type="helper-text" text="Вспомогательный текст" />
      <Feedback type="danger"      text="Ошибка: поле обязательно" />
      <Feedback type="warning"     text="Внимание: данные устарели" />
      <Feedback type="success"     text="Сохранено успешно" />
    </div>
  ),
};
