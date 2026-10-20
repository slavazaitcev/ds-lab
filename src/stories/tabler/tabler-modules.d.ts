// Типы для внутренних модулей @tabler/icons-react: пакет их не описывает.
declare module '@tabler/icons-react/dist/esm/dynamic-imports.mjs' {
  import type { TablerIcon } from '@tabler/icons-react';
  const dynamicImports: Record<string, () => Promise<{ default: TablerIcon }>>;
  export default dynamicImports;
}

declare module '@tabler/icons-react/dist/esm/icons-list.mjs' {
  const iconsList: string[];
  export default iconsList;
}
