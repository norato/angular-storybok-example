module.exports = {
    stories: ['../src/stories/**/*.stories.@(ts|mdx)'],
    logLevel: 'debug',
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-notes',
        '@storybook/addon-knobs',
        '@storybook/addon-viewport',
        '@storybook/addon-storysource',
        '@storybook/addon-options',
        '@storybook/addon-backgrounds',
        '@storybook/addon-jest',
    ],
    core: {
      builder: 'webpack4',
    },
  };