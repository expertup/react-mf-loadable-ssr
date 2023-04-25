/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @loadable/component */ \"@loadable/component\");\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar Login_register = _loadable_component__WEBPACK_IMPORTED_MODULE_1___default()({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"app2-Login_register\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n    return false;\n  },\n  importAsync: function importAsync() {\n    return __webpack_require__.e(/*! import() | app2-Login_register */ \"app2-Login_register\").then(__webpack_require__.t.bind(__webpack_require__, /*! app2/Login_register */ \"webpack/container/remote/app2/Login_register\", 23));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n    if (true) {\n      return __webpack_require__(id);\n    }\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! app2/Login_register */ \"webpack/container/remote/app2/Login_register\");\n    }\n    return eval('require.resolve')(\"app2/Login_register\");\n  }\n}, {\n  fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"loading content...\")\n});\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"sssss\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Login_register, null));\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack://host/./app/index.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @loadable/server */ \"@loadable/server\");\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loadable_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _renderAndExtractContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderAndExtractContext */ \"./server/renderAndExtractContext.js\");\n/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ \"./node_modules/console-browserify/index.js\");\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\nvar PORT = 65232;\n\n// static path where files such as images and js will be served from\napp.use('/', express__WEBPACK_IMPORTED_MODULE_1___default()[\"static\"]('build/client'));\n\n// =================== WARNING ===================\n// ATTENTION this will expose ALL server files\n// =================== WARNING ===================\napp.use('/server', express__WEBPACK_IMPORTED_MODULE_1___default()[\"static\"]('build/server'));\napp.get('/', function (req, res, next) {\n  var clientExtractor = new _loadable_server__WEBPACK_IMPORTED_MODULE_2__.ChunkExtractor({\n    statsFile: path__WEBPACK_IMPORTED_MODULE_0___default().resolve('build/client', 'loadable-stats.json'),\n    entrypoints: ['clientAppEntrypoint']\n  });\n  res.statusCode = 200;\n  res.setHeader('Content-type', 'text/html');\n  res.write('<!DOCTYPE html>');\n  res.write('<html>');\n  var _renderAndExtractCont = (0,_renderAndExtractContext__WEBPACK_IMPORTED_MODULE_3__.renderAndExtractContext)({\n      chunkExtractor: clientExtractor\n    }),\n    markup = _renderAndExtractCont.markup,\n    linkTags = _renderAndExtractCont.linkTags,\n    styleTags = _renderAndExtractCont.styleTags,\n    scriptTags = _renderAndExtractCont.scriptTags;\n  res.write(\"<head>\".concat(linkTags).concat(styleTags, \"</head><body>\"));\n  res.write(\"<div id=\\\"root\\\">\".concat(markup, \"</div>\"));\n  res.write(scriptTags);\n  res.write('</body></html>');\n  res.send();\n  next();\n});\napp.listen(PORT, function () {\n  console.info(\"[\".concat(new Date().toISOString(), \"]\"), \"App1 is running: \\uD83C\\uDF0E http://localhost:\".concat(PORT));\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack://host/./server/index.js?");

/***/ }),

/***/ "./server/renderAndExtractContext.js":
/*!*******************************************!*\
  !*** ./server/renderAndExtractContext.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderAndExtractContext\": function() { return /* binding */ renderAndExtractContext; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mf_loadable_adapters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mf/loadable-adapters */ \"@mf/loadable-adapters\");\n/* harmony import */ var _mf_loadable_adapters__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mf_loadable_adapters__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/index.js */ \"./app/index.js\");\n\n\n\n\n\nvar APP_HOST = 'http://localhost:3002';\nvar publicHost = \"\".concat(APP_HOST, \"/static\");\nvar federatedChunkExtractor = new _mf_loadable_adapters__WEBPACK_IMPORTED_MODULE_3__.FederatedChunkExtractor({\n  name: 'app2',\n  publicHost: publicHost,\n  federationStats: \"\".concat(publicHost, \"/federation-stats.json\")\n});\nfunction renderAndExtractContext(_ref) {\n  var chunkExtractor = _ref.chunkExtractor;\n  var styleSheet = new styled_components__WEBPACK_IMPORTED_MODULE_2__.ServerStyleSheet();\n  var markup = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToString)(styleSheet.collectStyles(chunkExtractor.collectChunks( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_app_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null))));\n  federatedChunkExtractor.collectMfChunks(chunkExtractor);\n  var mfStyleTags = federatedChunkExtractor.getStyleTags();\n  var mfScriptTags = federatedChunkExtractor.getScriptTags({}, {\n    loadMode: 'defer'\n  });\n  var linkTags = chunkExtractor.getLinkTags();\n  var styleTags = \"\".concat(mfStyleTags).concat(chunkExtractor.getStyleTags()).concat(styleSheet.getStyleTags());\n  var scriptTags = \"\".concat(mfScriptTags).concat(chunkExtractor.getScriptTags());\n  styleSheet.seal();\n  return {\n    markup: markup,\n    linkTags: linkTags,\n    styleTags: styleTags,\n    scriptTags: scriptTags\n  };\n}\n\n//# sourceURL=webpack://host/./server/renderAndExtractContext.js?");

/***/ }),

/***/ "./node_modules/console-browserify/index.js":
/*!**************************************************!*\
  !*** ./node_modules/console-browserify/index.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/*global window, global*/\nvar util = __webpack_require__(/*! util */ \"util\")\nvar assert = __webpack_require__(/*! assert */ \"assert\")\nfunction now() { return new Date().getTime() }\n\nvar slice = Array.prototype.slice\nvar console\nvar times = {}\n\nif (typeof __webpack_require__.g !== \"undefined\" && __webpack_require__.g.console) {\n    console = __webpack_require__.g.console\n} else if (typeof window !== \"undefined\" && window.console) {\n    console = window.console\n} else {\n    console = {}\n}\n\nvar functions = [\n    [log, \"log\"],\n    [info, \"info\"],\n    [warn, \"warn\"],\n    [error, \"error\"],\n    [time, \"time\"],\n    [timeEnd, \"timeEnd\"],\n    [trace, \"trace\"],\n    [dir, \"dir\"],\n    [consoleAssert, \"assert\"]\n]\n\nfor (var i = 0; i < functions.length; i++) {\n    var tuple = functions[i]\n    var f = tuple[0]\n    var name = tuple[1]\n\n    if (!console[name]) {\n        console[name] = f\n    }\n}\n\nmodule.exports = console\n\nfunction log() {}\n\nfunction info() {\n    console.log.apply(console, arguments)\n}\n\nfunction warn() {\n    console.log.apply(console, arguments)\n}\n\nfunction error() {\n    console.warn.apply(console, arguments)\n}\n\nfunction time(label) {\n    times[label] = now()\n}\n\nfunction timeEnd(label) {\n    var time = times[label]\n    if (!time) {\n        throw new Error(\"No such label: \" + label)\n    }\n\n    delete times[label]\n    var duration = now() - time\n    console.log(label + \": \" + duration + \"ms\")\n}\n\nfunction trace() {\n    var err = new Error()\n    err.name = \"Trace\"\n    err.message = util.format.apply(null, arguments)\n    console.error(err.stack)\n}\n\nfunction dir(object) {\n    console.log(util.inspect(object) + \"\\n\")\n}\n\nfunction consoleAssert(expression) {\n    if (!expression) {\n        var arr = slice.call(arguments, 1)\n        assert.ok(false, util.format.apply(null, arr))\n    }\n}\n\n\n//# sourceURL=webpack://host/./node_modules/console-browserify/index.js?");

/***/ }),

/***/ "@loadable/component":
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@loadable/component");

/***/ }),

/***/ "@loadable/server":
/*!***********************************!*\
  !*** external "@loadable/server" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@loadable/server");

/***/ }),

/***/ "@mf/loadable-adapters":
/*!****************************************!*\
  !*** external "@mf/loadable-adapters" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@mf/loadable-adapters");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "webpack/container/reference/app2":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** external "new Promise(function (resolve, reject) {\n    if(!global.__remote_scope__) {\n      // create a global scope for container, similar to how remotes are set on window in the browser\n      global.__remote_scope__ = {\n        _config: {},\n      }\n    }\n\n    if (typeof global.__remote_scope__[\"app2\"] !== 'undefined') return resolve(global.__remote_scope__[\"app2\"]);\n    global.__remote_scope__._config[\"app2\"] = \"http://localhost:3002/server/remoteEntry.js\";\n    var __webpack_error__ = new Error();\n\n    __webpack_require__.l(\n      \"http://localhost:3002/server/remoteEntry.js\",\n      function (event) {\n        if (typeof global.__remote_scope__[\"app2\"] !== 'undefined') return resolve(global.__remote_scope__[\"app2\"]);\n         var realSrc = event && event.target && event.target.src;\n        __webpack_error__.message = 'Loading script failed.\\n(' + event.message + ': ' + realSrc + ')';\n        __webpack_error__.name = 'ScriptExternalLoadError';\n        __webpack_error__.stack = event.stack;\n        reject(__webpack_error__);\n      },\n      \"app2\",\n    );\n  }).catch((e)=> {\n    console.error(\"app2\", 'is offline, returning fake remote');\n    console.error(e);\n\n    return {\n      fake: true,\n      get: (arg) => {\n        console.log('faking', arg, 'module on', \"app2\");\n\n        return Promise.resolve(() => {\n          return () => null\n        });\n      },\n      init: () => {\n      }\n    }\n  }).then(function (remote) {\n    if(remote.fake) {\n      return remote;\n    }\n    const proxy = {\n      get: (arg)=>{\n        return remote.get(arg).then((f)=>{\n          const m = f();\n          return ()=>new Proxy(m, {\n            get: (target, prop)=>{\n              if(global.usedChunks) global.usedChunks.add(\"app2\" + \"->\" + arg);\n              return target[prop];\n            }\n          })\n        })\n      },\n      init: function(shareScope) {\n        const handler = {\n          get(target, prop) {\n            if (target[prop]) {\n              Object.values(target[prop]).forEach(function(o) {\n                if(o.from === '_N_E') {\n                  o.loaded = 1\n                }\n              })\n            }\n            return target[prop]\n          },\n          set(target, property, value) {\n            if(global.usedChunks) global.usedChunks.add(\"app2\" + \"->\" + property);\n            if (target[property]) {\n              return target[property]\n            }\n            target[property] = value\n            return true\n          }\n        }\n        try {\n          global.__remote_scope__[\"app2\"].init(new Proxy(shareScope, handler))\n        } catch (e) {\n\n        }\n        global.__remote_scope__[\"app2\"].__initialized = true\n      }\n    }\n    try  {\n      proxy.init(__webpack_require__.S.default)\n    } catch(e) {\n      console.error('failed to init', \"app2\", e)\n    }\n    return proxy\n  })" ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = new Promise(function (resolve, reject) {
    if(!global.__remote_scope__) {
      // create a global scope for container, similar to how remotes are set on window in the browser
      global.__remote_scope__ = {
        _config: {},
      }
    }

    if (typeof global.__remote_scope__["app2"] !== 'undefined') return resolve(global.__remote_scope__["app2"]);
    global.__remote_scope__._config["app2"] = "http://localhost:3002/server/remoteEntry.js";
    var __webpack_error__ = new Error();

    __webpack_require__.l(
      "http://localhost:3002/server/remoteEntry.js",
      function (event) {
        if (typeof global.__remote_scope__["app2"] !== 'undefined') return resolve(global.__remote_scope__["app2"]);
         var realSrc = event && event.target && event.target.src;
        __webpack_error__.message = 'Loading script failed.\n(' + event.message + ': ' + realSrc + ')';
        __webpack_error__.name = 'ScriptExternalLoadError';
        __webpack_error__.stack = event.stack;
        reject(__webpack_error__);
      },
      "app2",
    );
  }).catch((e)=> {
    console.error("app2", 'is offline, returning fake remote');
    console.error(e);

    return {
      fake: true,
      get: (arg) => {
        console.log('faking', arg, 'module on', "app2");

        return Promise.resolve(() => {
          return () => null
        });
      },
      init: () => {
      }
    }
  }).then(function (remote) {
    if(remote.fake) {
      return remote;
    }
    const proxy = {
      get: (arg)=>{
        return remote.get(arg).then((f)=>{
          const m = f();
          return ()=>new Proxy(m, {
            get: (target, prop)=>{
              if(global.usedChunks) global.usedChunks.add("app2" + "->" + arg);
              return target[prop];
            }
          })
        })
      },
      init: function(shareScope) {
        const handler = {
          get(target, prop) {
            if (target[prop]) {
              Object.values(target[prop]).forEach(function(o) {
                if(o.from === '_N_E') {
                  o.loaded = 1
                }
              })
            }
            return target[prop]
          },
          set(target, property, value) {
            if(global.usedChunks) global.usedChunks.add("app2" + "->" + property);
            if (target[property]) {
              return target[property]
            }
            target[property] = value
            return true
          }
        }
        try {
          global.__remote_scope__["app2"].init(new Proxy(shareScope, handler))
        } catch (e) {

        }
        global.__remote_scope__["app2"].__initialized = true
      }
    }
    try  {
      proxy.init(__webpack_require__.S.default)
    } catch(e) {
      console.error('failed to init', "app2", e)
    }
    return proxy
  });

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	!function() {
/******/ 		var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__; };
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return value[key]; }; });
/******/ 			}
/******/ 			def['default'] = function() { return value; };
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/remotes loading */
/******/ 	!function() {
/******/ 		var chunkMapping = {
/******/ 			"app2-Login_register": [
/******/ 				"webpack/container/remote/app2/Login_register"
/******/ 			]
/******/ 		};
/******/ 		var idToExternalAndNameMapping = {
/******/ 			"webpack/container/remote/app2/Login_register": [
/******/ 				"default",
/******/ 				"./Login_register",
/******/ 				"webpack/container/reference/app2"
/******/ 			]
/******/ 		};
/******/ 		__webpack_require__.f.remotes = function(chunkId, promises) {
/******/ 			if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 				chunkMapping[chunkId].forEach(function(id) {
/******/ 					var getScope = __webpack_require__.R;
/******/ 					if(!getScope) getScope = [];
/******/ 					var data = idToExternalAndNameMapping[id];
/******/ 					if(getScope.indexOf(data) >= 0) return;
/******/ 					getScope.push(data);
/******/ 					if(data.p) return promises.push(data.p);
/******/ 					var onError = function(error) {
/******/ 						if(!error) error = new Error("Container missing");
/******/ 						if(typeof error.message === "string")
/******/ 							error.message += '\nwhile loading "' + data[1] + '" from ' + data[2];
/******/ 						__webpack_require__.m[id] = function() {
/******/ 							throw error;
/******/ 						}
/******/ 						data.p = 0;
/******/ 					};
/******/ 					var handleFunction = function(fn, arg1, arg2, d, next, first) {
/******/ 						try {
/******/ 							var promise = fn(arg1, arg2);
/******/ 							if(promise && promise.then) {
/******/ 								var p = promise.then(function(result) { return next(result, d); }, onError);
/******/ 								if(first) promises.push(data.p = p); else return p;
/******/ 							} else {
/******/ 								return next(promise, d, first);
/******/ 							}
/******/ 						} catch(error) {
/******/ 							onError(error);
/******/ 						}
/******/ 					}
/******/ 					var onExternal = function(external, _, first) { return external ? handleFunction(__webpack_require__.I, data[0], 0, external, onInitialized, first) : onError(); };
/******/ 					var onInitialized = function(_, external, first) { return handleFunction(external.get, data[1], getScope, 0, onFactory, first); };
/******/ 					var onFactory = function(factory) {
/******/ 						data.p = 1;
/******/ 						__webpack_require__.m[id] = function(module) {
/******/ 							module.exports = factory();
/******/ 						}
/******/ 					};
/******/ 					handleFunction(__webpack_require__, data[2], 0, 0, onExternal, 1);
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	!function() {
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = function(name, initScope) {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			var initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			var scope = __webpack_require__.S[name];
/******/ 			var warn = function(msg) { return typeof console !== "undefined" && console.warn && console.warn(msg); };
/******/ 			var uniqueName = "host";
/******/ 			var register = function(name, version, factory, eager) {
/******/ 				var versions = scope[name] = scope[name] || {};
/******/ 				var activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			var initExternal = function(id) {
/******/ 				var handleError = function(err) { warn("Initialization of sharing external failed: " + err); };
/******/ 				try {
/******/ 					var module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					var initFn = function(module) { return module && module.init && module.init(__webpack_require__.S[name], initScope); }
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					var initResult = initFn(module);
/******/ 					if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			var promises = [];
/******/ 			switch(name) {
/******/ 				case "default": {
/******/ 					initExternal("webpack/container/reference/app2");
/******/ 				}
/******/ 				break;
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(function() { return initPromises[name] = 1; });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/readFile chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "0" means "already loaded", Promise means loading
/******/ 		var installedChunks = {
/******/ 			"serverAppEntrypoint": 0
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = function(chunk) {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++) {
/******/ 				if(installedChunks[chunkIds[i]]) {
/******/ 					installedChunks[chunkIds[i]][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// load script equivalent for server side
/******/ 		__webpack_require__.l = function(url,callback,chunkId) {
/******/ 				if(!global.__remote_scope__) {
/******/ 					// create a global scope for container, similar to how remotes are set on window in the browser
/******/ 					global.__remote_scope__ = {
/******/ 					_config: {},
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				  function executeLoad(url, callback, name) {
/******/ 				    if(!name) {
/******/ 				      throw new Error('__webpack_require__.l name is required for ' + url);
/******/ 				    }
/******/ 		
/******/ 				    if (typeof global.__remote_scope__[name] !== 'undefined') return callback(global.__remote_scope__[name]);
/******/ 		
/******/ 				    const vm = require('vm');
/******/ 				    (global.webpackChunkLoad || global.fetch || require("node-fetch"))(url).then(function (res) {
/******/ 				      return res.text();
/******/ 				    }).then(function (scriptContent) {
/******/ 				      try {
/******/ 				        // TODO: remove conditional in v7, this is to prevent breaking change between v6.0.x and v6.1.x
/******/ 				        const vmContext = typeof URLSearchParams === 'undefined' ?
/******/ 				          {exports, require, module, global, __filename, __dirname, URL, console, process,Buffer, ...global, remoteEntryName: name} :
/******/ 				          {exports, require, module, global, __filename, __dirname, URL, URLSearchParams, console, process,Buffer, ...global, remoteEntryName: name};
/******/ 		
/******/ 				        const remote = vm.runInNewContext(scriptContent + '\nmodule.exports', vmContext, {filename: 'node-federation-loader-' + name + '.vm'});
/******/ 				        const foundContainer = remote[name] || remote
/******/ 		
/******/ 				        if(!global.__remote_scope__[name]) {
/******/ 				          global.__remote_scope__[name] = {
/******/ 				            get: foundContainer.get,
/******/ 				            init: function(initScope, initToken) {
/******/ 				              try {
/******/ 				                foundContainer.init(initScope, initToken)
/******/ 				              } catch (e) {
/******/ 				                // already initialized
/******/ 				              }
/******/ 				            }
/******/ 				          };
/******/ 				          global.__remote_scope__._config[name] = url;
/******/ 				        }
/******/ 				        callback(global.__remote_scope__[name]);
/******/ 				      } catch (e) {
/******/ 				        console.error('executeLoad hit catch block');
/******/ 				        e.target = {src: url};
/******/ 				        callback(e);
/******/ 				      }
/******/ 				    }).catch((e) => {
/******/ 				      e.target = {src: url};
/******/ 				      callback(e);
/******/ 				    });
/******/ 				  }
/******/ 				executeLoad(url,callback,chunkId)
/******/ 		}
/******/ 		// ReadFile + VM.run chunk loading for javascript
/******/ 		__webpack_require__.f.readFileVm = function(chunkId, promises) {
/******/ 		
/******/ 			var installedChunkData = installedChunks[chunkId];
/******/ 			if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 				// array of [resolve, reject, promise] means "currently loading"
/******/ 				if(installedChunkData) {
/******/ 					promises.push(installedChunkData[2]);
/******/ 				} else {
/******/ 					if("serverAppEntrypoint" == chunkId) {
/******/ 						// load the chunk and return promise to it
/******/ 						var promise = new Promise(async function(resolve, reject) {
/******/ 							installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 							var filename = require('path').join(__dirname, "" + __webpack_require__.u(chunkId));
/******/ 							var fs = require('fs');
/******/ 							if(fs.existsSync(filename)) {
/******/ 								fs.readFile(filename, 'utf-8', function(err, content) {
/******/ 									if(err) return reject(err);
/******/ 									var chunk = {};
/******/ 									require('vm').runInThisContext('(function(exports, require, __dirname, __filename) {' + content + '\n})', filename)(chunk, require, require('path').dirname(filename), filename);
/******/ 									installChunk(chunk);
/******/ 								});
/******/ 							} else {
/******/ 		
/******/ 								  function loadScript(url, cb, chunkID) {
/******/ 								    if (global.webpackChunkLoad) {
/******/ 								      global.webpackChunkLoad(url).then(function (resp) {
/******/ 								        return resp.text();
/******/ 								      }).then(function (rawData) {
/******/ 								        cb(null, rawData);
/******/ 								      }).catch(function (err) {
/******/ 								        console.error('Federated Chunk load failed', error);
/******/ 								        return cb(error)
/******/ 								      });
/******/ 								    } else {
/******/ 								      //TODO https support
/******/ 								      let request = (url.startsWith('https') ? require('https') : require('http')).get(url, function (resp) {
/******/ 								        if (resp.statusCode === 200) {
/******/ 								          let rawData = '';
/******/ 								          resp.setEncoding('utf8');
/******/ 								          resp.on('data', chunk => {
/******/ 								            rawData += chunk;
/******/ 								          });
/******/ 								          resp.on('end', () => {
/******/ 								            cb(null, rawData);
/******/ 								          });
/******/ 								        } else {
/******/ 								          cb(resp);
/******/ 								        }
/******/ 								      });
/******/ 								      request.on('error', error => {
/******/ 								        console.error('Federated Chunk load failed', error);
/******/ 								        return cb(error)
/******/ 								      });
/******/ 								    }
/******/ 								  }
/******/ 		
/******/ 		
/******/ 								var remotes = {"app2":"http://localhost:3002/server/remoteEntry.js"};
/******/ 								Object.assign(global.__remote_scope__._config, remotes)
/******/ 								const remoteRegistry = global.__remote_scope__._config
/******/ 		
/******/ 		
/******/ 		
/******/ 		
/******/ 		
/******/ 								var requestedRemote = remoteRegistry["app1"]
/******/ 		
/******/ 								if(typeof requestedRemote === 'function'){
/******/ 								                    requestedRemote = await requestedRemote()
/******/ 								                  }
/******/ 		
/******/ 								var scriptUrl = new URL(requestedRemote);
/******/ 		
/******/ 								var chunkName = __webpack_require__.u(chunkId);
/******/ 		
/******/ 								var fileToReplace = require('path').basename(scriptUrl.pathname);
/******/ 								scriptUrl.pathname = scriptUrl.pathname.replace(fileToReplace, chunkName);
/******/ 		
/******/ 								loadScript(scriptUrl.toString(), function(err, content) {
/******/ 		
/******/ 									if(err) {console.error('error loading remote chunk', scriptUrl.toString(),'got',content,'with error', err); return reject(err);}
/******/ 									var chunk = {};
/******/ 									try {
/******/ 									require('vm').runInThisContext('(function(exports, require, __dirname, __filename) {' + content + '\n})', filename)(chunk, require, require('path').dirname(filename), filename);
/******/ 									} catch (e) {
/******/ 									console.error('runInThisContext threw', e)
/******/ 									}
/******/ 									installChunk(chunk);
/******/ 								}, chunkId);
/******/ 							}
/******/ 						});
/******/ 						promises.push(installedChunkData[2] = promise);
/******/ 					} else installedChunks[chunkId] = 0;
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module factories are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;