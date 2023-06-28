export default ({ config }) => ({
  ...config,
  name: 'gluestack-ui-pro',
  slug: 'gluestack-ui-pro',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  owner: 'gluestack',
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
    eas: {
      projectId: '093b6eb9-d309-4634-8fdf-c92030118322',
    },
  },
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  updates: {
    url: 'https://u.expo.dev/093b6eb9-d309-4634-8fdf-c92030118322',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.geekyants.gluestackuipro',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
    package: 'com.gluestack.gluestackuipro',
  },
  web: {
    favicon: './assets/favicon.png',
  },
  runtimeVersion: {
    policy: 'sdkVersion',
  },
  scheme: 'glue',
});
