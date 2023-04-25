const path = require('path');
const { merge } = require('webpack-merge');
const LoadablePlugin = require('@loadable/webpack-plugin');
const { SsrSyncFederationLoader } = require('@mf/loadable-adapters');
const shared = require('./webpack.shared');
const nodeExternals = require('webpack-node-externals');
const moduleFederationPlugin = require('./module-federation');

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = {
  name: 'server',
  target: false,
  entry: {
    serverAppEntrypoint: path.resolve(__dirname, 'server/index.js'),
  },
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'build/server'),
    filename: '[name].js',
    libraryTarget: 'commonjs-module',
    clean: true,
    chunkFormat: false
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    ...moduleFederationPlugin.server,

    new LoadablePlugin({
      writeToDisk: true,
    }),
  ],
};

module.exports = merge(shared, webpackConfig);