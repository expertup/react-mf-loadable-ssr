const path = require('path');
const { merge } = require('webpack-merge');
const LoadablePlugin = require('@loadable/webpack-plugin');
const shared = require('./webpack.shared');
const moduleFederationPlugin = require('./module-federation');

const webpackConfig = {
  name: 'web',
  entry: {
    clientAppEntrypoint: path.resolve(__dirname, 'client/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'build/client'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    ...moduleFederationPlugin.client,

    new LoadablePlugin({
      writeToDisk: true,
    }),
  ],
};

module.exports = merge(shared, webpackConfig);