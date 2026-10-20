import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/react-vite';
import type { Plugin } from 'vite';

/*
 * В @tabler/icons-react 3.49.0 файл dist/esm/dynamic-imports.mjs ссылается на ./icons/IconX.ts,
 * а в пакете лежат ./icons/IconX.mjs. Подменяем расширение, иначе ленивые иконки не грузятся.
 * Нужно только инструменту экспериментов с иконками (src/stories/tabler), в приложение не попадает.
 */
const tablerDynamicImportsFix: Plugin = {
  name: 'ds-lab:tabler-dynamic-imports-fix',
  enforce: 'pre',
  resolveId(source, importer, options) {
    if (!importer?.includes('@tabler/icons-react/dist/esm/dynamic-imports')) return null;
    if (!source.startsWith('./icons/') || !source.endsWith('.ts')) return null;
    return this.resolve(source.replace(/\.ts$/, '.mjs'), importer, { ...options, skipSelf: true });
  },
};

const isBuild = (configType?: string) => (configType ?? (process.argv.includes('build') ? 'PRODUCTION' : '')) === 'PRODUCTION';

const config: StorybookConfig = {
  // Инструмент экспериментов с Tabler (src/stories/tabler) есть только в npm run storybook:
  // в статической сборке он добавлял ~6200 файлов и +26 МБ
  stories: (_entries, { configType }) =>
    isBuild(configType)
      ? ['../src/components/**/*.stories.@(ts|tsx)', '../src/screens/**/*.stories.@(ts|tsx)', '../src/stories/*.stories.@(ts|tsx)']
      : ['../src/**/*.stories.@(ts|tsx)'],
  framework: '@storybook/react-vite',
  viteFinal: (viteConfig, { configType }) => {
    viteConfig.plugins = [...(viteConfig.plugins ?? []), tablerDynamicImportsFix];
    // Предсборка зависимостей идёт без плагинов и падает на тех же .ts-путях: отдаём модуль как есть
    viteConfig.optimizeDeps = {
      ...viteConfig.optimizeDeps,
      exclude: [...(viteConfig.optimizeDeps?.exclude ?? []), '@tabler/icons-react/dist/esm/dynamic-imports.mjs'],
    };
    if (isBuild(configType)) {
      // Controls «иконка по имени» у Button в сборке показывают заглушку вместо загрузки всего Tabler
      const stub = fileURLToPath(new URL('../src/stories/tabler/dynamic-imports.build-stub.ts', import.meta.url));
      const aliases = Array.isArray(viteConfig.resolve?.alias) ? viteConfig.resolve.alias : Object.entries(viteConfig.resolve?.alias ?? {}).map(([find, replacement]) => ({ find, replacement }));
      viteConfig.resolve = {
        ...viteConfig.resolve,
        alias: [{ find: /^@tabler\/icons-react\/dist\/esm\/dynamic-imports\.mjs$/, replacement: stub }, ...aliases],
      };
    }
    return viteConfig;
  },
};

export default config;
