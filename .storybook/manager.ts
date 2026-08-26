import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming/create';

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'Nash Design System',
    colorPrimary: '#76e4c4',
    colorSecondary: '#8ea7ff',
    appBg: '#09100f',
    appContentBg: '#101917',
    appBorderColor: '#263633',
    appBorderRadius: 10,
    fontBase: 'Inter, ui-sans-serif, system-ui, sans-serif',
    textColor: '#edf4ef',
    textMutedColor: '#9baba5',
    barTextColor: '#b8c7c1',
    barSelectedColor: '#76e4c4',
    barHoverColor: '#edf4ef',
    inputBg: '#121d1a',
    inputBorder: '#30433e',
    inputTextColor: '#edf4ef',
    inputBorderRadius: 8,
  }),
});
