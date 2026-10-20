import type { Meta, StoryObj } from '@storybook/react-vite';
import * as icons from '../icons';
import { Icon } from '../icons/Icon';
import { ICON_SPEC, iconStroke, type IconSize } from '../icons/spec';
import './Icons.css';

const meta = {
  title: 'Tokens/Icons',
  parameters: { layout: 'padded' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const sizes = Object.keys(ICON_SPEC) as IconSize[];
const entries = Object.entries(icons);

function IconTable({ theme }: { theme: 'light' | 'dark' }) {
  return (
    <section className="icons" data-theme={theme}>
      <h2 className="icons__title">{theme === 'light' ? 'Light' : 'Dark'}</h2>
      <table className="icons__table">
        <thead>
          <tr>
            <th>Название</th>
            {sizes.map((size) => (
              <th key={size}>
                {size} · {ICON_SPEC[size].px}px · линия {ICON_SPEC[size].screenStroke} (stroke {iconStroke(size)})
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {entries.map(([name, icon]) => (
            <tr key={name}>
              <td className="icons__name">{name}</td>
              {sizes.map((size) => (
                <td key={size}>
                  <Icon icon={icon} size={size} color="default" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

/** Все иконки из src/icons в трёх размерах. Цвет: color.icon.default. Слева light, справа dark. */
export const Catalog: Story = {
  render: () => (
    <div className="icons__themes">
      <IconTable theme="light" />
      <IconTable theme="dark" />
    </div>
  ),
};
