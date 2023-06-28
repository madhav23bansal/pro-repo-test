import { themes } from '@storybook/theming';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    disable: true,
    values: [
      {
        name: 'light',
        value: '#E2E8F0',
      },
      {
        name: 'dark',
        value: '#171923',
      },
    ],
  },
  darkMode: {
    dark: { ...themes.dark, appBg: '#171923' },
    light: {
      ...themes.light,
      appBg: '#E2E8F0',
    },
    current: 'light',
    stylePreview: true,
  },
  layout: 'fullscreen',
};
