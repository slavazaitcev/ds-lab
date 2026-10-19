import type { Meta, StoryObj } from '@storybook/react-vite';
import { primitiveColorGroups, semanticColorTokens, type TokenInfo } from '../styles/tokens.generated';
import './Colors.css';

const meta = {
  title: 'Tokens/Colors',
  parameters: { layout: 'padded' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

function Swatch({ token }: { token: { name: string; cssVar: string; description?: string } }) {
  return (
    <div className="swatch" title={token.description}>
      <div className="swatch__chip">
        <div className="swatch__fill" style={{ background: `var(${token.cssVar})` }} />
      </div>
      <div className="swatch__name">{token.name}</div>
      <div className="swatch__var">{token.cssVar}</div>
    </div>
  );
}

/** Семантические токены: именно их используют компоненты. Переключайте тему в панели сверху. */
export const Semantic: Story = {
  render: () => {
    const groups = new Map<string, TokenInfo[]>();
    for (const token of semanticColorTokens) {
      const group = token.name.split('.')[1]; // color.bg.brand.default -> bg
      if (!groups.has(group)) groups.set(group, []);
      groups.get(group)!.push(token);
    }
    return (
      <div className="colors">
        {[...groups].map(([group, tokens]) => (
          <section key={group}>
            <h2 className="colors__title">{group}</h2>
            <div className="colors__grid">
              {tokens.map((token) => (
                <Swatch key={token.name} token={token} />
              ))}
            </div>
          </section>
        ))}
      </div>
    );
  },
};

/** Примитивы: сырая палитра из Figma. В компонентах напрямую не используются. */
export const Primitives: Story = {
  render: () => (
    <div className="colors">
      {Object.entries(primitiveColorGroups).map(([group, tokens]) => (
        <section key={group}>
          <h2 className="colors__title">{group}</h2>
          <div className="colors__grid">
            {tokens.map((token) => (
              <Swatch key={token.name} token={token} />
            ))}
          </div>
        </section>
      ))}
    </div>
  ),
};
