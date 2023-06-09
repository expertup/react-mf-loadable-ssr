const { dependencies } = require('./package.json');
const { ModuleFederationPlugin } = require('webpack').container;
const { NodeFederationPlugin, StreamingTargetPlugin } = require('@module-federation/node');
const { FederationStatsPlugin, FederationModuleIdPlugin } = require('@mf/loadable-adapters');

module.exports = {
  client: [
    new FederationStatsPlugin(),
    new FederationModuleIdPlugin(),
    new ModuleFederationPlugin({
      name: 'app1',
      filename: 'remoteEntry.js',
      remotes: {
        app2: 'app2@http://localhost:3002/static/remoteEntry.js',
      },
      /*shared: [
        {
          'styled-components': {
            requiredVersion: dependencies['styled-components'],
            singleton: true,
            eager: true,
          },
          react: {
            requiredVersion: dependencies.react,
            singleton: true,
            eager: true,
          },
          'react-dom': {
            requiredVersion: dependencies['react-dom'],
            singleton: true,
            eager: true,
          },
        },
      ],*/
    }),
  ],
  server: [
    new NodeFederationPlugin({
      name: 'app1',
      filename: 'remoteEntry.js',
      library: { type: 'commonjs-module' },
      runtime: false,
      remotes: {
        app2: 'app2@http://localhost:3002/server/remoteEntry.js',
        /*app2:  `promise new Promise((r)=>{
          fetch('http://localhost:3003/server/remoteEntry.js')
            .then(res => res.text())
            .then((text) => {
                r('http://localhost:3002/server/remoteEntry.js')
            }).catch(()=>{
              r('http://localhost:65232/server/remoteEntry.js')
            })
        })`*/
      },
      /*shared: [
        {
          react: {
            requiredVersion: dependencies.react,
            singleton: true,
            eager: true,
          },
          'react-dom': {
            requiredVersion: dependencies['react-dom'],
            eager: false,
            singleton: true,
          },
        },
      ],*/
    }),
    new StreamingTargetPlugin({
      name: 'app1',
      library: { type: 'commonjs-module' },
      remotes: {
        app2: 'app2@http://localhost:3002/server/remoteEntry.js',
      },
    }),
  ],
};
