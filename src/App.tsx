import { useState } from 'react';
import { Button } from './components/Button';

/**
 * Песочница для быстрых экспериментов. Экраны-референсы и новые экраны
 * кладём в src/screens/ и подключаем сюда.
 */
export function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    setTheme(next);
  };

  return (
    <main style={{ padding: 'var(--space-6)', display: 'grid', gap: 'var(--space-4)', justifyItems: 'start' }}>
      <h1 style={{ margin: 0 }}>ds-lab</h1>
      <p style={{ margin: 0, color: 'var(--color-text-soft)' }}>
        Песочница дизайн-системы. Компоненты смотрим в Storybook: npm run storybook.
      </p>
      <Button variant="secondary" onClick={toggleTheme}>
        Тема: {theme}
      </Button>
    </main>
  );
}
