import type { Preview } from '@storybook/react-vite';
import '../src/styles/index.css';

const preview: Preview = {
  parameters: {
    layout: 'padded',
    backgrounds: { disabled: true }, // фон берём из токенов, см. global.css
  },
  globalTypes: {
    theme: {
      description: 'Тема',
      toolbar: {
        title: 'Тема',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
    surface: {
      description: 'Фон',
      toolbar: {
        title: 'Фон',
        icon: 'paintbrush',
        items: [
          { value: 'canvas', title: 'Canvas (серый)' },
          { value: 'container', title: 'Container (белый)' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { theme: 'light', surface: 'canvas' },
  decorators: [
    (Story, context) => {
      document.documentElement.dataset.theme = context.globals.theme === 'dark' ? 'dark' : 'light';
      document.documentElement.dataset.surface = context.globals.surface === 'container' ? 'container' : 'canvas';
      return <Story />;
    },
  ],
};

export default preview;