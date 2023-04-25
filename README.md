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

