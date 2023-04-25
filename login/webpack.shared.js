const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

const webpackConfig = {
  mode: 'development',
  //devtool: 'inline-source-map',
  optimization: {
    minimize: false,
  },
  externals: {
    'node-fetch': 'node-fetch',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  plugins: [
    new NodePolyfillPlugin()
  ]
};

module.exports = webpackConfig;