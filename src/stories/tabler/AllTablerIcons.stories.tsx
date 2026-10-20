import { useMemo, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { StoryIcon } from './StoryIcon';
import { iconsList } from './useTablerIcon';
import './AllTablerIcons.css';

/*
 * Каталог всех иконок Tabler для подбора. Это не набор дизайн-системы:
 * в компонентах и экранах можно только иконки из src/icons/index.ts.
 */
const meta = {
  title: 'Icons/All Tabler icons',
  parameters: { layout: 'padded' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const LIMIT = 200;

/** Буфер обмена в iframe Storybook бывает недоступен — тогда копируем через выделение. */
async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.append(area);
    area.select();
    const ok = document.execCommand('copy');
    area.remove();
    return ok;
  }
}

function CatalogView() {
  const [query, setQuery] = useState('');
  const [showFilled, setShowFilled] = useState(false);
  const [copied, setCopied] = useState<string | null>(null); // текст статуса копирования

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    return iconsList.filter((name) => (showFilled || !name.endsWith('-filled')) && (!q || name.includes(q)));
  }, [query, showFilled]);

  const copy = async (name: string) => {
    setCopied((await copyText(name)) ? `скопировано «${name}»` : `не удалось скопировать «${name}»`);
  };

  return (
    <div className="tabler-catalog">
      <div className="tabler-catalog__toolbar">
        <input
          className="tabler-catalog__search"
          type="search"
          placeholder="Поиск по названию, например arrow"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Поиск иконки"
        />
        <label className="tabler-catalog__toggle">
          <input type="checkbox" checked={showFilled} onChange={(event) => setShowFilled(event.target.checked)} />
          Показывать filled
        </label>
        <span className="tabler-catalog__count" aria-live="polite">
          {matches.length > LIMIT ? `Показаны первые ${LIMIT} из ${matches.length}` : `Найдено: ${matches.length}`}
          {copied && ` · ${copied}`}
        </span>
      </div>

      <div className="tabler-catalog__grid">
        {matches.slice(0, LIMIT).map((name) => (
          <button key={name} type="button" className="tabler-catalog__item" onClick={() => copy(name)} title="Скопировать название">
            <StoryIcon name={name} size="l" />
            <span className="tabler-catalog__name">{name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/** Поиск по названию, первые 200 совпадений. Клик копирует название для StoryIcon или Controls у Button. */
export const Catalog: Story = {
  render: () => <CatalogView />,
};
