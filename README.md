# React SSR + Loadable + Module Federation baed on @brunos3d example

This project is to illustrate the error `__webpack_modules__[moduleId] is not a function` when loading a remote component. It is based on the @brunos3d project, [react-mf-loadable-ssr/sample-4/](https://github.com/brunos3d/react-mf-loadable-ssr/tree/main/sample-4)

## Reproducing the error
Clone this repository
```
git clone https://github.com/expertup/react-mf-loadable-ssr.git
```
Enter to `host` folder, install the packages and start the server on localhost port 3000
```
cd host
yarn
yarn debug
```

Follow the same steps for the login directory and run the server on localhost 3002

```
cd login
yarn
yarn debug
```

Instead of yarn you can use npm
```
cd login
npm i
npm run debug
```

## Error description
When starting the `host` server with SSR it downloads the `Login_register` component from `login` using [loadable-components](https://github.com/gregberge/loadable-components).
```
new ModuleFederationPlugin({
  name: 'app1',
  filename: 'remoteEntry.js',
  remotes: {
    app2: 'app2@http://localhost:3002/static/remoteEntry.js',
  },
}),
...
new NodeFederationPlugin({
  name: 'app1',
  filename: 'remoteEntry.js',
  library: { type: 'commonjs-module' },
  runtime: false,
  remotes: {
    app2: 'app2@http://localhost:3002/server/remoteEntry.js',
  }
}),
new StreamingTargetPlugin({
  name: 'app1',
  library: { type: 'commonjs-module' },
  remotes: {
    app2: 'app2@http://localhost:3002/server/remoteEntry.js',
  },
})
```
When downloading a component, an error is returned:
```
[2023-04-25T14:05:11.600Z] App1 is running: 🌎 http://localhost:3000
loadable-components: failed to synchronously load component, which expected to be available {
  fileName: 'webpack/container/remote/app2/Login_register',
  chunkName: 'app2-Login_register',
  error: '__webpack_modules__[moduleId] is not a function'
}
TypeError: __webpack_modules__[moduleId] is not a function
    at __webpack_require__ (host\build\server\serverAppEntrypoint.js:287:41)
    at Object.requireSync (webpack://host/./app/index.js?:38:14)
    at InnerLoadable.loadSync (host\node_modules\@loadable\component\dist\loadable.cjs.js:308:35)
    at new InnerLoadable (host\node_modules\@loadable\component\dist\loadable.cjs.js:203:17)
    at constructClassInstance (host\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:4399:18)
    at renderClassComponent (host\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:5698:18)
    at renderElement (host\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:5947:7)
    at renderNodeDestructiveImpl (host\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:6108:11)
    at renderNodeDestructive (host\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:6080:14)
    at renderContextConsumer (host\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:5910:3)
```

It looks like webpack in `login` does not expose the component.

The question is: what are the possible solutions to this problem?
