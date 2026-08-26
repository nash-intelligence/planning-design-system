import type { Preview } from '@storybook/react-vite';
import '../src/styles/tokens.css';
import '../src/styles/global.css';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Foundations', 'Components', 'Axis Experiences'],
      },
    },
    a11y: {
      test: 'error',
    },
    backgrounds: {
      disable: true,
    },
  },
  tags: ['autodocs'],
};

export default preview;
