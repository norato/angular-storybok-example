module.exports = {
  module: {
    rules: [
      {
        test: /\.stories\.ts?$/,
        loaders: {
          loader: require.resolve('@storybook/addon-storysource/loader'),
          options: { parser: 'typescript' }
        },
        enforce: 'pre'
      }
    ]
  }
};
