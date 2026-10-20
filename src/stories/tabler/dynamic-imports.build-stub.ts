/*
 * Подменяет @tabler/icons-react/dist/esm/dynamic-imports.mjs в статической сборке Storybook
 * (npm run build-storybook). Там инструмент экспериментов с иконками выключен: иначе
 * в сборку попадают все ~6200 иконок Tabler отдельными файлами (+26 МБ). Работает в npm run storybook.
 */
import type { TablerIcon } from '@tabler/icons-react';

const dynamicImports: Record<string, () => Promise<{ default: TablerIcon }>> = {};
export default dynamicImports;
