module.exports = {
  // stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  stories: [
    // PRO
    '../src/stories/Pro/**/*.stories.mdx',
    '../src/stories/Pro/**/*.stories.@(js|jsx|ts|tsx)',

    // UI COMPONENTS
    '../src/stories/DataDisplay/**/*.stories.mdx',
    '../src/stories/DataDisplay/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/stories/Disclosure/**/*.stories.mdx',
    '../src/stories/Disclosure/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/stories/Feedback/**/*.stories.mdx',
    '../src/stories/Feedback/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/stories/Forms/**/*.stories.mdx',
    '../src/stories/Forms/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/stories/Icons/**/*.stories.mdx',
    '../src/stories/Icons/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/stories/Layout/**/*.stories.mdx',
    '../src/stories/Layout/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/stories/MediaAndIcons/**/*.stories.mdx',
    '../src/stories/MediaAndIcons/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/stories/Others/**/*.stories.mdx',
    '../src/stories/Others/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/stories/Overlay/**/*.stories.mdx',
    '../src/stories/Overlay/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/stories/Typography/**/*.stories.mdx',
    '../src/stories/Typography/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-react-native-web',
    'storybook-dark-mode',
    '@storybook/addon-backgrounds',
  ],
  core: {
    builder: 'webpack5',
  },
  framework: '@storybook/react',
  typescript: {
    reactDocgen: 'none',
  },
};
