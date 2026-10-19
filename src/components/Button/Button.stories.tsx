import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, type ButtonSize, type ButtonVariant } from './Button';

const variants: ButtonVariant[] = ['primary', 'secondary', 'tertiary', 'danger'];
const sizes: ButtonSize[] = ['s', 'm', 'l'];

const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Сохранить',
    variant: 'primary',
    size: 'm',
    disabled: false,
    loading: false,
    fullWidth: false,
  },
  argTypes: {
    variant: { control: 'inline-radio', options: variants },
    size: { control: 'inline-radio', options: sizes },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const row = { display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' } as const;
const label = { width: 96, fontSize: 12, opacity: 0.6 } as const;

/** Одна кнопка с управлением в панели Controls. */
export const Playground: Story = {};

/** Все варианты и размеры. */
export const VariantsAndSizes: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 24 }}>
      {variants.map((variant) => (
        <div key={variant} style={row}>
          <span style={label}>{variant}</span>
          {sizes.map((size) => (
            <Button key={size} variant={variant} size={size}>
              Кнопка {size.toUpperCase()}
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
};

/** Состояния по вариантам: покой, hover, active, фокус, disabled, загрузка. */
export const States: Story = {
  render: () => {
    const states: { name: string; props: Record<string, unknown> }[] = [
      { name: 'default', props: {} },
      { name: 'hover', props: { className: 'is-hover' } },
      { name: 'active', props: { className: 'is-active' } },
      { name: 'focus', props: { className: 'is-focus' } },
      { name: 'disabled', props: { disabled: true } },
      { name: 'loading', props: { loading: true } },
    ];
    return (
      <div style={{ display: 'grid', gap: 24 }}>
        {variants.map((variant) => (
          <div key={variant} style={{ display: 'grid', gap: 8 }}>
            <span style={label}>{variant}</span>
            <div style={row}>
              {states.map(({ name, props }) => (
                <div key={name} style={{ display: 'grid', gap: 8, justifyItems: 'start' }}>
                  <Button variant={variant} {...props}>
                    Кнопка
                  </Button>
                  <span style={{ fontSize: 12, opacity: 0.6 }}>{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};

/** Иконки слева и справа. Здесь символы-заглушки, настоящие иконки появятся вместе с набором иконок. */
export const WithIcons: Story = {
  render: () => (
    <div style={row}>
      <Button leftIcon="+">Добавить</Button>
      <Button variant="secondary" rightIcon="→">
        Далее
      </Button>
      <Button variant="tertiary" leftIcon="↻">
        Обновить
      </Button>
    </div>
  ),
};

export const FullWidth: Story = {
  args: { fullWidth: true, children: 'На всю ширину' },
};
