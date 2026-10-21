import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconCashBanknoteOff, IconPencil } from '../../icons';
// Эксперименты с любыми иконками Tabler, только для Storybook (см. src/stories/tabler)
import { useTablerIcon } from '../../stories/tabler/useTablerIcon';
import { Button, type ButtonIntent, type ButtonProps, type ButtonSize, type ButtonVariant } from './Button';

const variants: ButtonVariant[] = ['primary', 'secondary', 'outline', 'light', 'text'];
const intents: ButtonIntent[] = ['default', 'danger', 'warning', 'success'];
const sizes: ButtonSize[] = ['s', 'm', 'l'];
// Сочетания вариант + intent, которые есть в Figma
const withIntents: ButtonVariant[] = ['primary', 'outline', 'text'];

type ButtonStoryArgs = ButtonProps & {
  /** Имя иконки Tabler слева, например arrow-left. Пусто — без иконки. */
  leftIconName?: string;
  /** Имя иконки Tabler справа. Пусто — без иконки. */
  rightIconName?: string;
};

/** Кнопка для Controls: иконки берёт по имени из Tabler. В продукте — только src/icons. */
function ButtonWithTablerIcons({ leftIconName = '', rightIconName = '', ...props }: ButtonStoryArgs) {
  const left = useTablerIcon(leftIconName);
  const right = useTablerIcon(rightIconName);
  return (
    <Button
      {...props}
      leftIcon={leftIconName.trim() && left.status !== 'loading' ? left.icon : props.leftIcon}
      rightIcon={rightIconName.trim() && right.status !== 'loading' ? right.icon : props.rightIcon}
    />
  );
}

const meta = {
  title: 'Кнопки/Button',
  component: Button,
  render: (args) => <ButtonWithTablerIcons {...args} />,
  args: {
    // Иконка из набора ДС; имя Tabler в Controls её подменяет
    leftIcon: IconPencil,
    leftIconName: '',
    rightIconName: '',
    children: 'Сохранить',
    variant: 'primary',
    intent: 'default',
    size: 'm',
    disabled: false,
    loading: false,
    fullWidth: false,
  },
  argTypes: {
    variant: { control: 'inline-radio', options: variants },
    intent: { control: 'inline-radio', options: intents },
    size: { control: 'inline-radio', options: sizes },
    leftIconName: { control: 'text', name: 'leftIcon (Tabler)', description: 'Имя иконки Tabler, например arrow-left. Каталог: Icons / All Tabler icons' },
    rightIconName: { control: 'text', name: 'rightIcon (Tabler)', description: 'Имя иконки Tabler справа' },
    leftIcon: { table: { disable: true } },
    rightIcon: { table: { disable: true } },
  },
} satisfies Meta<ButtonStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

const row = { display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' } as const;
const label = { width: 140, fontSize: 12, opacity: 0.6 } as const;

/** Одна кнопка с управлением в панели Controls. */
export const Playground: Story = {};

/** Все варианты и смысловые цвета (intent) в размере m, как в Figma. */
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 24 }}>
      {variants.map((variant) =>
        (withIntents.includes(variant) ? intents : (['default'] as ButtonIntent[])).map((intent) => (
          <div key={`${variant}-${intent}`} style={row}>
            <span style={label}>
              {variant}
              {intent !== 'default' && ` / ${intent}`}
            </span>
            <Button variant={variant} intent={intent} leftIcon={IconCashBanknoteOff}>
              Кнопка
            </Button>
          </div>
        )),
      )}
    </div>
  ),
};

/** Размеры. В Figma есть только m, s и l собраны на предположениях. */
export const Sizes: Story = {
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
    const combos = variants.flatMap((variant) =>
      (withIntents.includes(variant) ? intents : (['default'] as ButtonIntent[])).map((intent) => ({ variant, intent })),
    );
    return (
      <div style={{ display: 'grid', gap: 24 }}>
        {combos.map(({ variant, intent }) => (
          <div key={`${variant}-${intent}`} style={{ display: 'grid', gap: 8 }}>
            <span style={label}>
              {variant}
              {intent !== 'default' && ` / ${intent}`}
            </span>
            <div style={row}>
              {states.map(({ name, props }) => (
                <div key={name} style={{ display: 'grid', gap: 8, justifyItems: 'start' }}>
                  <Button variant={variant} intent={intent} leftIcon={IconCashBanknoteOff} {...props}>
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

/** Иконки слева и справа. Набор иконок: src/icons (только те, что есть в Figma). */
export const WithIcons: Story = {
  render: () => (
    <div style={row}>
      <Button leftIcon={IconCashBanknoteOff}>Без оплаты</Button>
      <Button variant="secondary" rightIcon={IconPencil}>
        Изменить
      </Button>
      <Button variant="outline" leftIcon={IconPencil}>
        Изменить
      </Button>
      <Button variant="text" intent="danger" leftIcon={IconCashBanknoteOff}>
        Отменить оплату
      </Button>
      {sizes.map((size) => (
        <Button key={size} size={size} variant="light" leftIcon={IconPencil} rightIcon={IconPencil}>
          Размер {size.toUpperCase()}
        </Button>
      ))}
    </div>
  ),
};

export const FullWidth: Story = {
  args: { fullWidth: true, children: 'На всю ширину' },
};
