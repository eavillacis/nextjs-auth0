module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/profile.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n// ./src/pages/profile.js\n\nconst Picture = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({\n  displayName: \"profile__Picture\",\n  componentId: \"sc-1r36kyj-0\"\n})([\"border-radius:50%;border:3px solid white;width:100px;\"]);\n\nfunction Profile({\n  user\n}) {\n  return __jsx(\"div\", null, __jsx(\"h2\", null, __jsx(Picture, {\n    src: user.picture,\n    alt: user.displayName\n  }), \" Hello,\", \" \", user.displayName), __jsx(\"p\", null, \"This is what we know about you:\"), __jsx(\"ul\", null, Object.keys(user).map(key => __jsx(\"li\", {\n    key: key\n  }, key, \": \", user[key].toString()))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9maWxlLmpzPzViZTIiXSwibmFtZXMiOlsiUGljdHVyZSIsInN0eWxlZCIsImltZyIsIlByb2ZpbGUiLCJ1c2VyIiwicGljdHVyZSIsImRpc3BsYXlOYW1lIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFQTtBQUVBLE1BQU1BLE9BQU8sR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw2REFBYjs7QUFNQSxTQUFTQyxPQUFULENBQWlCO0FBQUVDO0FBQUYsQ0FBakIsRUFBMkI7QUFDekIsU0FDRSxtQkFDRSxrQkFDRSxNQUFDLE9BQUQ7QUFBUyxPQUFHLEVBQUVBLElBQUksQ0FBQ0MsT0FBbkI7QUFBNEIsT0FBRyxFQUFFRCxJQUFJLENBQUNFO0FBQXRDLElBREYsYUFDK0QsR0FEL0QsRUFFR0YsSUFBSSxDQUFDRSxXQUZSLENBREYsRUFLRSxtREFMRixFQU1FLGtCQUNHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUosSUFBWixFQUFrQkssR0FBbEIsQ0FBdUJDLEdBQUQsSUFDckI7QUFBSSxPQUFHLEVBQUVBO0FBQVQsS0FDR0EsR0FESCxRQUNVTixJQUFJLENBQUNNLEdBQUQsQ0FBSixDQUFVQyxRQUFWLEVBRFYsQ0FERCxDQURILENBTkYsQ0FERjtBQWdCRDs7QUFFY1Isc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLi9zcmMvcGFnZXMvcHJvZmlsZS5qc1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBQaWN0dXJlID0gc3R5bGVkLmltZ2BcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcbiAgd2lkdGg6IDEwMHB4O1xuYDtcblxuZnVuY3Rpb24gUHJvZmlsZSh7IHVzZXIgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+XG4gICAgICAgIDxQaWN0dXJlIHNyYz17dXNlci5waWN0dXJlfSBhbHQ9e3VzZXIuZGlzcGxheU5hbWV9IC8+IEhlbGxvLHtcIiBcIn1cbiAgICAgICAge3VzZXIuZGlzcGxheU5hbWV9XG4gICAgICA8L2gyPlxuICAgICAgPHA+VGhpcyBpcyB3aGF0IHdlIGtub3cgYWJvdXQgeW91OjwvcD5cbiAgICAgIDx1bD5cbiAgICAgICAge09iamVjdC5rZXlzKHVzZXIpLm1hcCgoa2V5KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17a2V5fT5cbiAgICAgICAgICAgIHtrZXl9OiB7dXNlcltrZXldLnRvU3RyaW5nKCl9XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/profile.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });