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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/my-pony.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/my-pony.js":
/*!************************!*\
  !*** ./src/my-pony.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const div = document.querySelector('.my-pony');\r\n\r\nfunction addPony() {\r\n  const ponyElement = document.createElement('img');\r\n\r\n  ponyElement.src = 'assets/pony.gif';\r\n  ponyElement.className = 'my-pony__image';\r\n  ponyElement.style = `top: ${Math.random() * 700}px;`;\r\n\r\n  div.appendChild(ponyElement);\r\n\r\n  ponyElement.animate([\r\n    {left: '-50%'},\r\n    {left: '100%'}\r\n  ], 5000 + Math.random() * 20000)\r\n\r\n  setTimeout(addPony, 1000);\r\n}\r\n\r\ndiv.animate([\r\n  {transform: 'translateY(0px)'},\r\n  {transform: 'translateY(3px)'}\r\n], {\r\n  duration: 200,\r\n  iterations: Infinity\r\n});\r\n\r\naddPony();\r\n\n\n//# sourceURL=webpack:///./src/my-pony.js?");

/***/ })

/******/ });