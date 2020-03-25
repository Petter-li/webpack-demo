/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: E:\\\\workspace\\\\webpack\\\\src\\\\index.js: Support for the experimental syntax 'classProperties' isn't currently enabled (12:7):\\n\\n\\u001b[0m \\u001b[90m 10 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 11 | \\u001b[39m\\u001b[36mclass\\u001b[39m \\u001b[33mA\\u001b[39m {\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 12 | \\u001b[39m    a \\u001b[33m=\\u001b[39m\\u001b[35m1\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m      \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 13 | \\u001b[39m}\\u001b[0m\\n\\nAdd @babel/plugin-proposal-class-properties (https://git.io/vb4SL) to the 'plugins' section of your Babel config to enable transformation.\\n    at Parser._raise (E:\\\\workspace\\\\webpack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:742:17)\\n    at Parser.raiseWithData (E:\\\\workspace\\\\webpack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:735:17)\\n    at Parser.expectPlugin (E:\\\\workspace\\\\webpack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8762:18)\\n    at Parser.parseClassProperty (E:\\\\workspace\\\\webpack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12110:12)\\n    at Parser.pushClassProperty (E:\\\\workspace\\\\webpack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12070:30)\\n    at Parser.parseClassMemberWithIsStatic (E:\\\\workspace\\\\webpack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12003:14)\\n    at Parser.parseClassMember (E:\\\\workspace\\\\webpack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11940:10)\\n    at E:\\\\workspace\\\\webpack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11885:14\\n    at Parser.withTopicForbiddingContext (E:\\\\workspace\\\\webpack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10956:14)\\n    at Parser.parseClassBody (E:\\\\workspace\\\\webpack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11862:10)\\n    at Parser.parseClass (E:\\\\workspace\\\\webpack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11836:22)\\n    at Parser.parseStatementContent (E:\\\\workspace\\\\webpack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11123:21)\\n    at Parser.parseStatement (E:\\\\workspace\\\\webpack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11081:17)\\n    at Parser.parseBlockOrModuleBlockBody (E:\\\\workspace\\\\webpack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11656:25)\\n    at Parser.parseBlockBody (E:\\\\workspace\\\\webpack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11642:10)\\n    at Parser.parseTopLevel (E:\\\\workspace\\\\webpack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11012:10)\\n    at Parser.parse (E:\\\\workspace\\\\webpack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12637:10)\\n    at parse (E:\\\\workspace\\\\webpack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12688:38)\\n    at parser (E:\\\\workspace\\\\webpack\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\parser\\\\index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (E:\\\\workspace\\\\webpack\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:93:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (E:\\\\workspace\\\\webpack\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:31:50)\\n    at run.next (<anonymous>)\\n    at Function.transform (E:\\\\workspace\\\\webpack\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transform.js:27:41)\\n    at transform.next (<anonymous>)\\n    at step (E:\\\\workspace\\\\webpack\\\\node_modules\\\\gensync\\\\index.js:254:32)\\n    at E:\\\\workspace\\\\webpack\\\\node_modules\\\\gensync\\\\index.js:266:13\\n    at async.call.result.err.err (E:\\\\workspace\\\\webpack\\\\node_modules\\\\gensync\\\\index.js:216:11)\\n    at E:\\\\workspace\\\\webpack\\\\node_modules\\\\gensync\\\\index.js:184:28\\n    at E:\\\\workspace\\\\webpack\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\gensync-utils\\\\async.js:72:7\\n    at E:\\\\workspace\\\\webpack\\\\node_modules\\\\gensync\\\\index.js:108:33\\n    at step (E:\\\\workspace\\\\webpack\\\\node_modules\\\\gensync\\\\index.js:280:14)\\n    at E:\\\\workspace\\\\webpack\\\\node_modules\\\\gensync\\\\index.js:266:13\\n    at async.call.result.err.err (E:\\\\workspace\\\\webpack\\\\node_modules\\\\gensync\\\\index.js:216:11)\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });