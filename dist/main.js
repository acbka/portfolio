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

/***/ "./img/bg.png":
/*!********************!*\
  !*** ./img/bg.png ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/bg.png\";\n\n//# sourceURL=webpack:///./img/bg.png?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/roboto-fontface/css/roboto/roboto-fontface.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/roboto-fontface/css/roboto/roboto-fontface.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar getUrl = __webpack_require__(/*! ../../../css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../../fonts/roboto/Roboto-Thin.woff2 */ \"./node_modules/roboto-fontface/fonts/roboto/Roboto-Thin.woff2\"));\nvar ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(/*! ../../fonts/roboto/Roboto-Thin.woff */ \"./node_modules/roboto-fontface/fonts/roboto/Roboto-Thin.woff\"));\nvar ___CSS_LOADER_URL___2___ = getUrl(__webpack_require__(/*! ../../fonts/roboto/Roboto-ThinItalic.woff2 */ \"./node_modules/roboto-fontface/fonts/roboto/Roboto-ThinItalic.woff2\"));\nvar ___CSS_LOADER_URL___3___ = getUrl(__webpack_require__(/*! ../../fonts/roboto/Roboto-ThinItalic.woff */ \"./node_modules/roboto-fontface/fonts/roboto/Roboto-ThinItalic.woff\"));\nvar ___CSS_LOADER_URL___4___ = getUrl(__webpack_require__(/*! ../../fonts/roboto/Roboto-Light.woff2 */ \"./node_modules/roboto-fontface/fonts/roboto/Roboto-Light.woff2\"));\nvar ___CSS_LOADER_URL___5___ = getUrl(__webpack_require__(/*! ../../fonts/roboto/Roboto-Light.woff */ \"./node_modules/roboto-fontface/fonts/roboto/Roboto-Light.woff\"));\nvar ___CSS_LOADER_URL___6___ = getUrl(__webpack_require__(/*! ../../fonts/roboto/Roboto-LightItalic.woff2 */ \"./node_modules/roboto-fontface/fonts/roboto/Roboto-LightItalic.woff2\"));\nvar ___CSS_LOADER_URL___7___ = getUrl(__webpack_require__(/*! ../../fonts/roboto/Roboto-LightItalic.woff */ \"./node_modules/roboto-fontface/fonts/roboto/Roboto-LightItalic.woff\"));\nvar ___CSS_LOADER_URL___8___ = getUrl(__webpack_require__(/*! ../../fonts/roboto/Roboto-Regular.woff2 */ \"./node_modules/roboto-fontface/fonts/roboto/Roboto-Regular.woff2\"));\nvar ___CSS_LOADER_URL___9___ = getUrl(__webpack_require__(/*! ../../fonts/roboto/Roboto-Regular.woff */ \"./node_modules/roboto-fontface/fonts/roboto/Roboto-Regular.woff\"));\nvar ___CSS_LOADER_URL___10___ = getUrl(__webpack_require__(/*! ../../fonts/roboto/Roboto-RegularItalic.woff2 */ \"./node_modules/roboto-fontface/fonts/roboto/Roboto-RegularItalic.woff2\"));\nvar ___CSS_LOADER_URL___11___ = getUrl(__webpack_require__(/*! ../../fonts/roboto/Roboto-RegularItalic.woff */ \"./node_modules/roboto-fontface/fonts/roboto/Roboto-RegularItalic.woff\"));\nvar ___CSS_LOADER_URL___12___ = getUrl(__webpack_require__(/*! ../../fonts/roboto/Roboto-Medium.woff2 */ \"./node_modules/roboto-fontface/fonts/roboto/Roboto-Medium.woff2\"));\nvar ___CSS_LOADER_URL___13___ = getUrl(__webpack_require__(/*! ../../fonts/roboto/Roboto-Medium.woff */ \"./node_modules/roboto-fontface/fonts/roboto/Roboto-Medium.woff\"));\nvar ___CSS_LOADER_URL___14___ = getUrl(__webpack_require__(/*! ../../fonts/roboto/Roboto-MediumItalic.woff2 */ \"./node_modules/roboto-fontface/fonts/roboto/Roboto-MediumItalic.woff2\"));\nvar ___CSS_LOADER_URL___15___ = getUrl(__webpack_require__(/*! ../../fonts/roboto/Roboto-MediumItalic.woff */ \"./node_modules/roboto-fontface/fonts/roboto/Roboto-MediumItalic.woff\"));\nvar ___CSS_LOADER_URL___16___ = getUrl(__webpack_require__(/*! ../../fonts/roboto/Roboto-Bold.woff2 */ \"./node_modules/roboto-fontface/fonts/roboto/Roboto-Bold.woff2\"));\nvar ___CSS_LOADER_URL___17___ = getUrl(__webpack_require__(/*! ../../fonts/roboto/Roboto-Bold.woff */ \"./node_modules/roboto-fontface/fonts/roboto/Roboto-Bold.woff\"));\nvar ___CSS_LOADER_URL___18___ = getUrl(__webpack_require__(/*! ../../fonts/roboto/Roboto-BoldItalic.woff2 */ \"./node_modules/roboto-fontface/fonts/roboto/Roboto-BoldItalic.woff2\"));\nvar ___CSS_LOADER_URL___19___ = getUrl(__webpack_require__(/*! ../../fonts/roboto/Roboto-BoldItalic.woff */ \"./node_modules/roboto-fontface/fonts/roboto/Roboto-BoldItalic.woff\"));\nvar ___CSS_LOADER_URL___20___ = getUrl(__webpack_require__(/*! ../../fonts/roboto/Roboto-Black.woff2 */ \"./node_modules/roboto-fontface/fonts/roboto/Roboto-Black.woff2\"));\nvar ___CSS_LOADER_URL___21___ = getUrl(__webpack_require__(/*! ../../fonts/roboto/Roboto-Black.woff */ \"./node_modules/roboto-fontface/fonts/roboto/Roboto-Black.woff\"));\nvar ___CSS_LOADER_URL___22___ = getUrl(__webpack_require__(/*! ../../fonts/roboto/Roboto-BlackItalic.woff2 */ \"./node_modules/roboto-fontface/fonts/roboto/Roboto-BlackItalic.woff2\"));\nvar ___CSS_LOADER_URL___23___ = getUrl(__webpack_require__(/*! ../../fonts/roboto/Roboto-BlackItalic.woff */ \"./node_modules/roboto-fontface/fonts/roboto/Roboto-BlackItalic.woff\"));\n// Module\nexports.push([module.i, \"@font-face {\\n    font-family: 'Roboto';\\n    src: url(\" + ___CSS_LOADER_URL___0___ + \") format('woff2'), url(\" + ___CSS_LOADER_URL___1___ + \") format('woff');\\n    font-weight: 100;\\n    font-style: normal;\\n}\\n\\n@font-face {\\n    font-family: 'Roboto-Thin';\\n    src: url(\" + ___CSS_LOADER_URL___0___ + \") format('woff2'), url(\" + ___CSS_LOADER_URL___1___ + \") format('woff');\\n}\\n\\n@font-face {\\n    font-family: 'Roboto';\\n    src: url(\" + ___CSS_LOADER_URL___2___ + \") format('woff2'), url(\" + ___CSS_LOADER_URL___3___ + \") format('woff');\\n    font-weight: 100;\\n    font-style: italic;\\n}\\n\\n@font-face {\\n    font-family: 'Roboto-ThinItalic';\\n    src: url(\" + ___CSS_LOADER_URL___2___ + \") format('woff2'), url(\" + ___CSS_LOADER_URL___3___ + \") format('woff');\\n}\\n\\n@font-face {\\n    font-family: 'Roboto';\\n    src: url(\" + ___CSS_LOADER_URL___4___ + \") format('woff2'), url(\" + ___CSS_LOADER_URL___5___ + \") format('woff');\\n    font-weight: 300;\\n    font-style: normal;\\n}\\n\\n@font-face {\\n    font-family: 'Roboto-Light';\\n    src: url(\" + ___CSS_LOADER_URL___4___ + \") format('woff2'), url(\" + ___CSS_LOADER_URL___5___ + \") format('woff');\\n}\\n\\n@font-face {\\n    font-family: 'Roboto';\\n    src: url(\" + ___CSS_LOADER_URL___6___ + \") format('woff2'), url(\" + ___CSS_LOADER_URL___7___ + \") format('woff');\\n    font-weight: 300;\\n    font-style: italic;\\n}\\n\\n@font-face {\\n    font-family: 'Roboto-LightItalic';\\n    src: url(\" + ___CSS_LOADER_URL___6___ + \") format('woff2'), url(\" + ___CSS_LOADER_URL___7___ + \") format('woff');\\n}\\n\\n@font-face {\\n    font-family: 'Roboto';\\n    src: url(\" + ___CSS_LOADER_URL___8___ + \") format('woff2'), url(\" + ___CSS_LOADER_URL___9___ + \") format('woff');\\n    font-weight: 400;\\n    font-style: normal;\\n}\\n\\n@font-face {\\n    font-family: 'Roboto-Regular';\\n    src: url(\" + ___CSS_LOADER_URL___8___ + \") format('woff2'), url(\" + ___CSS_LOADER_URL___9___ + \") format('woff');\\n}\\n\\n@font-face {\\n    font-family: 'Roboto';\\n    src: url(\" + ___CSS_LOADER_URL___10___ + \") format('woff2'), url(\" + ___CSS_LOADER_URL___11___ + \") format('woff');\\n    font-weight: 400;\\n    font-style: italic;\\n}\\n\\n@font-face {\\n    font-family: 'Roboto-RegularItalic';\\n    src: url(\" + ___CSS_LOADER_URL___10___ + \") format('woff2'), url(\" + ___CSS_LOADER_URL___11___ + \") format('woff');\\n}\\n\\n@font-face {\\n    font-family: 'Roboto';\\n    src: url(\" + ___CSS_LOADER_URL___12___ + \") format('woff2'), url(\" + ___CSS_LOADER_URL___13___ + \") format('woff');\\n    font-weight: 500;\\n    font-style: normal;\\n}\\n\\n@font-face {\\n    font-family: 'Roboto-Medium';\\n    src: url(\" + ___CSS_LOADER_URL___12___ + \") format('woff2'), url(\" + ___CSS_LOADER_URL___13___ + \") format('woff');\\n}\\n\\n@font-face {\\n    font-family: 'Roboto';\\n    src: url(\" + ___CSS_LOADER_URL___14___ + \") format('woff2'), url(\" + ___CSS_LOADER_URL___15___ + \") format('woff');\\n    font-weight: 500;\\n    font-style: italic;\\n}\\n\\n@font-face {\\n    font-family: 'Roboto-MediumItalic';\\n    src: url(\" + ___CSS_LOADER_URL___14___ + \") format('woff2'), url(\" + ___CSS_LOADER_URL___15___ + \") format('woff');\\n}\\n\\n@font-face {\\n    font-family: 'Roboto';\\n    src: url(\" + ___CSS_LOADER_URL___16___ + \") format('woff2'), url(\" + ___CSS_LOADER_URL___17___ + \") format('woff');\\n    font-weight: 700;\\n    font-style: normal;\\n}\\n\\n@font-face {\\n    font-family: 'Roboto-Bold';\\n    src: url(\" + ___CSS_LOADER_URL___16___ + \") format('woff2'), url(\" + ___CSS_LOADER_URL___17___ + \") format('woff');\\n}\\n\\n@font-face {\\n    font-family: 'Roboto';\\n    src: url(\" + ___CSS_LOADER_URL___18___ + \") format('woff2'), url(\" + ___CSS_LOADER_URL___19___ + \") format('woff');\\n    font-weight: 700;\\n    font-style: italic;\\n}\\n\\n@font-face {\\n    font-family: 'Roboto-BoldItalic';\\n    src: url(\" + ___CSS_LOADER_URL___18___ + \") format('woff2'), url(\" + ___CSS_LOADER_URL___19___ + \") format('woff');\\n}\\n\\n@font-face {\\n    font-family: 'Roboto';\\n    src: url(\" + ___CSS_LOADER_URL___20___ + \") format('woff2'), url(\" + ___CSS_LOADER_URL___21___ + \") format('woff');\\n    font-weight: 900;\\n    font-style: normal;\\n}\\n\\n@font-face {\\n    font-family: 'Roboto-Black';\\n    src: url(\" + ___CSS_LOADER_URL___20___ + \") format('woff2'), url(\" + ___CSS_LOADER_URL___21___ + \") format('woff');\\n}\\n\\n@font-face {\\n    font-family: 'Roboto';\\n    src: url(\" + ___CSS_LOADER_URL___22___ + \") format('woff2'), url(\" + ___CSS_LOADER_URL___23___ + \") format('woff');\\n    font-weight: 900;\\n    font-style: italic;\\n}\\n\\n@font-face {\\n    font-family: 'Roboto-BlackItalic';\\n    src: url(\" + ___CSS_LOADER_URL___22___ + \") format('woff2'), url(\" + ___CSS_LOADER_URL___23___ + \") format('woff');\\n}\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./node_modules/roboto-fontface/css/roboto/roboto-fontface.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/style.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/style.scss ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar getUrl = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ./../img/bg.png */ \"./img/bg.png\"));\n// Module\nexports.push([module.i, \"* {\\n  margin: 0;\\n  padding: 0; }\\n\\nhtml {\\n  font-family: 'Roboto';\\n  line-height: 1.5rem;\\n  color: #555; }\\n\\na, a:hover, a:focus, a:active {\\n  color: #fff;\\n  text-decoration: none; }\\n\\nheader {\\n  background: linear-gradient(rgba(250, 250, 250, 0.8), rgba(250, 250, 250, 0.8)), url(\" + ___CSS_LOADER_URL___0___ + \") no-repeat top center;\\n  background-size: cover; }\\n\\nnav {\\n  background: #3e844e;\\n  color: #fff;\\n  font-size: 1.1rem;\\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);\\n  padding: 10px 0;\\n  text-align: center;\\n  min-height: 70px;\\n  position: relative;\\n  justify-content: center; }\\n\\nul {\\n  margin: 0;\\n  list-style: none; }\\n\\nh1 {\\n  font-size: 5rem;\\n  line-height: 6rem;\\n  letter-spacing: 2px; }\\n\\nh2 {\\n  text-align: center;\\n  padding-bottom: 30px;\\n  color: #3e844e;\\n  font-size: 2rem;\\n  letter-spacing: 1.8px; }\\n\\n.top-menu {\\n  display: flex;\\n  justify-content: space-around;\\n  padding: 20px; }\\n\\n.top-menu_item {\\n  background: transparent;\\n  transition: all 0.3s ease;\\n  position: relative;\\n  display: block;\\n  width: 130px;\\n  height: 40px;\\n  padding: 0;\\n  line-height: 2rem;\\n  border: none; }\\n  .top-menu_item:before, .top-menu_item:after {\\n    position: absolute;\\n    content: \\\"\\\";\\n    right: 0;\\n    top: 0;\\n    background: #fff;\\n    transition: all 0.3s ease; }\\n  .top-menu_item:before {\\n    height: 0%;\\n    width: 2px; }\\n  .top-menu_item:after {\\n    width: 0%;\\n    height: 2px; }\\n\\n.top-menu_item a {\\n  position: relative;\\n  display: block;\\n  width: 100%;\\n  height: 100%; }\\n  .top-menu_item a:before, .top-menu_item a:after {\\n    position: absolute;\\n    content: \\\"\\\";\\n    left: 0;\\n    bottom: 0;\\n    background: #fff;\\n    transition: all 0.3s ease; }\\n  .top-menu_item a:before {\\n    width: 2px;\\n    height: 0%; }\\n  .top-menu_item a:after {\\n    width: 0%;\\n    height: 2px; }\\n\\n.top-menu_item:hover:before {\\n  height: 100%; }\\n\\n.top-menu_item:hover:after {\\n  width: 100%; }\\n\\n.top-menu_item a:hover:before {\\n  height: 100%; }\\n\\n.top-menu_item a:hover:after {\\n  width: 100%; }\\n\\n.top-menu_item.active:before {\\n  height: 100%; }\\n\\n.top-menu_item.active:after {\\n  width: 100%; }\\n\\n.top-menu_item.active a:before {\\n  height: 100%; }\\n\\n.top-menu_item.active a:after {\\n  width: 100%; }\\n\\n.burger {\\n  display: none;\\n  position: absolute;\\n  right: 0;\\n  top: 10px;\\n  padding: 20px 10px 10px;\\n  height: 40px;\\n  width: 50px;\\n  cursor: pointer; }\\n\\n.burger-container {\\n  position: relative;\\n  height: 24px;\\n  width: 26px; }\\n\\n.bar {\\n  position: absolute;\\n  display: block;\\n  height: 3px;\\n  width: 25px;\\n  border-radius: 2px;\\n  background: #fff;\\n  transition: 0.3s ease-in-out; }\\n  .bar:first-child {\\n    top: 0; }\\n  .bar:last-child {\\n    bottom: 0; }\\n  .bar:nth-child(2) {\\n    top: 11px; }\\n\\n.burger-cross .bar {\\n  width: 28px;\\n  left: 0; }\\n  .burger-cross .bar:first-child {\\n    top: 4px;\\n    transform: translateY(7px) rotate(45deg); }\\n  .burger-cross .bar:nth-child(2) {\\n    transform: scale(0); }\\n  .burger-cross .bar:last-child {\\n    bottom: 3px;\\n    transform: translateY(-7px) rotate(-45deg); }\\n\\n.closeMenu .bar {\\n  width: 25px; }\\n  .closeMenu .bar:first-child {\\n    transform: translateY(7px) rotate(45deg); }\\n  .closeMenu .bar:nth-child(2) {\\n    transform: scale(0); }\\n  .closeMenu .bar:last-child {\\n    transform: translateY(-7px) rotate(-45deg); }\\n\\n.toggle {\\n  display: none; }\\n\\n#title {\\n  font-size: 2rem;\\n  margin-top: 50px;\\n  letter-spacing: 1.4px;\\n  font-weight: 700; }\\n\\n.main {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  min-height: 90vh;\\n  padding: 0 20px; }\\n\\n.text {\\n  color: #3e844e;\\n  text-align: center;\\n  text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.7); }\\n\\n.about {\\n  padding: 60px 20%; }\\n\\n.about_me {\\n  margin: 0 auto; }\\n\\n.technology {\\n  padding: 50px 20px;\\n  background: #EAEAEA;\\n  display: grid;\\n  grid-template-columns: repeat(5, 1fr);\\n  grid-gap: 20px;\\n  justify-content: space-around; }\\n\\n.technology-img {\\n  width: 100%;\\n  height: auto;\\n  max-width: 70px;\\n  display: block;\\n  margin: 0 auto; }\\n\\n.portfolio {\\n  text-align: center;\\n  display: grid;\\n  grid-template-areas: \\\"header header\\\" \\\"menu content\\\";\\n  grid-template-columns: 200px 1fr;\\n  grid-gap: 10px;\\n  padding: 60px 80px; }\\n\\n#portfolio-header {\\n  grid-area: header; }\\n\\n#portfolio-menu {\\n  grid-area: menu; }\\n\\n.side-menu {\\n  display: grid;\\n  grid-template-columns: 1fr;\\n  text-align: left; }\\n\\n.side-menu_item {\\n  line-height: 2rem;\\n  cursor: pointer;\\n  display: block; }\\n\\n.side-menu_item:hover, .side-menu_item.active {\\n  color: #3e844e; }\\n\\n#portfolio-content {\\n  grid-area: content;\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, 320px);\\n  grid-template-rows: auto;\\n  grid-gap: 40px;\\n  justify-content: space-around; }\\n\\n.portfolio-content-img {\\n  width: 100%;\\n  height: auto;\\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4); }\\n\\n.all {\\n  opacity: 1;\\n  display: block; }\\n\\n.hide {\\n  display: none; }\\n\\nfooter {\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n  padding: 40px 0;\\n  background: #3e844e;\\n  color: #fff; }\\n\\n.address {\\n  text-align: center; }\\n\\n.social-img {\\n  width: 40px;\\n  height: auto;\\n  padding: 3px;\\n  margin: 0 5px; }\\n\\n.scroll_top {\\n  position: fixed;\\n  bottom: -50px;\\n  right: 10px;\\n  width: 55px;\\n  height: 55px;\\n  border: none;\\n  border-radius: 50%;\\n  background: #3e844e;\\n  z-index: 100;\\n  outline: none;\\n  cursor: pointer;\\n  transition: 0.4s; }\\n\\n.scroll_top:after {\\n  content: \\\"\\\";\\n  width: 15px;\\n  height: 15px;\\n  border-top: 3px solid #fff;\\n  border-left: 3px solid #fff;\\n  transform: rotate(45deg);\\n  position: absolute;\\n  top: 7px;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n  margin: auto; }\\n\\n.scroll_top.show {\\n  bottom: 30px; }\\n\\n.scroll_top:show, .scroll_top:focus, .scroll_top:active {\\n  outline: none; }\\n\\n@media screen and (max-width: 1024px) {\\n  .portfolio {\\n    grid-template-columns: 180px 1fr;\\n    padding: 60px 40px; }\\n  #portfolio-content {\\n    grid-gap: 20px; } }\\n\\n@media screen and (max-width: 700px) {\\n  h1 {\\n    font-size: 4rem;\\n    line-height: 5rem; } }\\n\\n@media screen and (max-width: 600px) {\\n  h1 {\\n    font-size: 3rem;\\n    line-height: 4rem;\\n    letter-spacing: 1.6px; }\\n  .about {\\n    padding: 30px 10%; }\\n  .portfolio {\\n    grid-template-columns: 155px 1fr;\\n    padding: 60px 30px; } }\\n\\n@media screen and (max-width: 550px) {\\n  h1 {\\n    font-size: 2.6rem;\\n    line-height: 2.8rem;\\n    letter-spacing: 1.4px; }\\n  #title {\\n    font-size: 1.6rem;\\n    line-height: 1.7rem;\\n    letter-spacing: 1.2px; }\\n  .technology {\\n    padding: 30px 10px;\\n    grid-gap: 10px; }\\n  .portfolio {\\n    grid-template-areas: \\\"header\\\" \\\"menu\\\" \\\"content\\\";\\n    grid-template-columns: 1fr;\\n    padding: 60px 20px; }\\n  #portfolio-header {\\n    padding-bottom: 10px; }\\n  #portfolio-content {\\n    grid-template-columns: repeat(auto-fit, 280px); }\\n  footer {\\n    flex-direction: column; }\\n  .social-img {\\n    padding-top: 20px; }\\n  .side-menu {\\n    display: grid;\\n    justify-content: space-between;\\n    align-items: center;\\n    text-align: center; }\\n  .side-menu_item {\\n    font-size: .9rem;\\n    line-height: 1.4rem;\\n    letter-spacing: 2px;\\n    cursor: pointer;\\n    display: inline; }\\n  ul.top-menu {\\n    display: none;\\n    flex-direction: column;\\n    text-align: center; }\\n  ul.show {\\n    display: flex;\\n    justify-content: center;\\n    margin: 0 auto; }\\n  .toggle {\\n    display: block; }\\n  .top-menu_item {\\n    position: relative;\\n    margin: 0 auto;\\n    width: auto; }\\n    .top-menu_item:before {\\n      position: absolute;\\n      content: '';\\n      height: 0;\\n      top: 40px;\\n      left: 50%;\\n      transition: all .5s; }\\n    .top-menu_item:after {\\n      position: absolute;\\n      content: '';\\n      height: 0;\\n      top: 40px;\\n      right: 50%;\\n      transition: all .5s; }\\n    .top-menu_item:hover:before {\\n      color: #fff;\\n      height: 2px;\\n      left: 0; }\\n    .top-menu_item:hover:after {\\n      color: #fff;\\n      height: 2px;\\n      right: 0; }\\n  .top-menu_item a {\\n    height: 0; }\\n    .top-menu_item a:before, .top-menu_item a:after {\\n      height: 0; }\\n  .top-menu_item.active:before {\\n    height: 2px;\\n    left: 0; }\\n  .top-menu_item.active:after {\\n    height: 2px;\\n    left: 0; }\\n  .top-menu_item.active a:before {\\n    height: 0; }\\n  .top-menu_item.active a:after {\\n    width: 0; } }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/style.scss?./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, needQuotes) {\n  // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n  url = url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/roboto-fontface/css/roboto/roboto-fontface.css":
/*!*********************************************************************!*\
  !*** ./node_modules/roboto-fontface/css/roboto/roboto-fontface.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../css-loader/dist/cjs.js!./roboto-fontface.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/roboto-fontface/css/roboto/roboto-fontface.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./node_modules/roboto-fontface/css/roboto/roboto-fontface.css?");

/***/ }),

/***/ "./node_modules/roboto-fontface/fonts/roboto/Roboto-Black.woff":
/*!*********************************************************************!*\
  !*** ./node_modules/roboto-fontface/fonts/roboto/Roboto-Black.woff ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"node_modules/roboto-fontface/fonts/roboto/Roboto-Black.woff\";\n\n//# sourceURL=webpack:///./node_modules/roboto-fontface/fonts/roboto/Roboto-Black.woff?");

/***/ }),

/***/ "./node_modules/roboto-fontface/fonts/roboto/Roboto-Black.woff2":
/*!**********************************************************************!*\
  !*** ./node_modules/roboto-fontface/fonts/roboto/Roboto-Black.woff2 ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"node_modules/roboto-fontface/fonts/roboto/Roboto-Black.woff2\";\n\n//# sourceURL=webpack:///./node_modules/roboto-fontface/fonts/roboto/Roboto-Black.woff2?");

/***/ }),

/***/ "./node_modules/roboto-fontface/fonts/roboto/Roboto-BlackItalic.woff":
/*!***************************************************************************!*\
  !*** ./node_modules/roboto-fontface/fonts/roboto/Roboto-BlackItalic.woff ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"node_modules/roboto-fontface/fonts/roboto/Roboto-BlackItalic.woff\";\n\n//# sourceURL=webpack:///./node_modules/roboto-fontface/fonts/roboto/Roboto-BlackItalic.woff?");

/***/ }),

/***/ "./node_modules/roboto-fontface/fonts/roboto/Roboto-BlackItalic.woff2":
/*!****************************************************************************!*\
  !*** ./node_modules/roboto-fontface/fonts/roboto/Roboto-BlackItalic.woff2 ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"node_modules/roboto-fontface/fonts/roboto/Roboto-BlackItalic.woff2\";\n\n//# sourceURL=webpack:///./node_modules/roboto-fontface/fonts/roboto/Roboto-BlackItalic.woff2?");

/***/ }),

/***/ "./node_modules/roboto-fontface/fonts/roboto/Roboto-Bold.woff":
/*!********************************************************************!*\
  !*** ./node_modules/roboto-fontface/fonts/roboto/Roboto-Bold.woff ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"node_modules/roboto-fontface/fonts/roboto/Roboto-Bold.woff\";\n\n//# sourceURL=webpack:///./node_modules/roboto-fontface/fonts/roboto/Roboto-Bold.woff?");

/***/ }),

/***/ "./node_modules/roboto-fontface/fonts/roboto/Roboto-Bold.woff2":
/*!*********************************************************************!*\
  !*** ./node_modules/roboto-fontface/fonts/roboto/Roboto-Bold.woff2 ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"node_modules/roboto-fontface/fonts/roboto/Roboto-Bold.woff2\";\n\n//# sourceURL=webpack:///./node_modules/roboto-fontface/fonts/roboto/Roboto-Bold.woff2?");

/***/ }),

/***/ "./node_modules/roboto-fontface/fonts/roboto/Roboto-BoldItalic.woff":
/*!**************************************************************************!*\
  !*** ./node_modules/roboto-fontface/fonts/roboto/Roboto-BoldItalic.woff ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"node_modules/roboto-fontface/fonts/roboto/Roboto-BoldItalic.woff\";\n\n//# sourceURL=webpack:///./node_modules/roboto-fontface/fonts/roboto/Roboto-BoldItalic.woff?");

/***/ }),

/***/ "./node_modules/roboto-fontface/fonts/roboto/Roboto-BoldItalic.woff2":
/*!***************************************************************************!*\
  !*** ./node_modules/roboto-fontface/fonts/roboto/Roboto-BoldItalic.woff2 ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"node_modules/roboto-fontface/fonts/roboto/Roboto-BoldItalic.woff2\";\n\n//# sourceURL=webpack:///./node_modules/roboto-fontface/fonts/roboto/Roboto-BoldItalic.woff2?");

/***/ }),

/***/ "./node_modules/roboto-fontface/fonts/roboto/Roboto-Light.woff":
/*!*********************************************************************!*\
  !*** ./node_modules/roboto-fontface/fonts/roboto/Roboto-Light.woff ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"node_modules/roboto-fontface/fonts/roboto/Roboto-Light.woff\";\n\n//# sourceURL=webpack:///./node_modules/roboto-fontface/fonts/roboto/Roboto-Light.woff?");

/***/ }),

/***/ "./node_modules/roboto-fontface/fonts/roboto/Roboto-Light.woff2":
/*!**********************************************************************!*\
  !*** ./node_modules/roboto-fontface/fonts/roboto/Roboto-Light.woff2 ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"node_modules/roboto-fontface/fonts/roboto/Roboto-Light.woff2\";\n\n//# sourceURL=webpack:///./node_modules/roboto-fontface/fonts/roboto/Roboto-Light.woff2?");

/***/ }),

/***/ "./node_modules/roboto-fontface/fonts/roboto/Roboto-LightItalic.woff":
/*!***************************************************************************!*\
  !*** ./node_modules/roboto-fontface/fonts/roboto/Roboto-LightItalic.woff ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"node_modules/roboto-fontface/fonts/roboto/Roboto-LightItalic.woff\";\n\n//# sourceURL=webpack:///./node_modules/roboto-fontface/fonts/roboto/Roboto-LightItalic.woff?");

/***/ }),

/***/ "./node_modules/roboto-fontface/fonts/roboto/Roboto-LightItalic.woff2":
/*!****************************************************************************!*\
  !*** ./node_modules/roboto-fontface/fonts/roboto/Roboto-LightItalic.woff2 ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"node_modules/roboto-fontface/fonts/roboto/Roboto-LightItalic.woff2\";\n\n//# sourceURL=webpack:///./node_modules/roboto-fontface/fonts/roboto/Roboto-LightItalic.woff2?");

/***/ }),

/***/ "./node_modules/roboto-fontface/fonts/roboto/Roboto-Medium.woff":
/*!**********************************************************************!*\
  !*** ./node_modules/roboto-fontface/fonts/roboto/Roboto-Medium.woff ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"node_modules/roboto-fontface/fonts/roboto/Roboto-Medium.woff\";\n\n//# sourceURL=webpack:///./node_modules/roboto-fontface/fonts/roboto/Roboto-Medium.woff?");

/***/ }),

/***/ "./node_modules/roboto-fontface/fonts/roboto/Roboto-Medium.woff2":
/*!***********************************************************************!*\
  !*** ./node_modules/roboto-fontface/fonts/roboto/Roboto-Medium.woff2 ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"node_modules/roboto-fontface/fonts/roboto/Roboto-Medium.woff2\";\n\n//# sourceURL=webpack:///./node_modules/roboto-fontface/fonts/roboto/Roboto-Medium.woff2?");

/***/ }),

/***/ "./node_modules/roboto-fontface/fonts/roboto/Roboto-MediumItalic.woff":
/*!****************************************************************************!*\
  !*** ./node_modules/roboto-fontface/fonts/roboto/Roboto-MediumItalic.woff ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"node_modules/roboto-fontface/fonts/roboto/Roboto-MediumItalic.woff\";\n\n//# sourceURL=webpack:///./node_modules/roboto-fontface/fonts/roboto/Roboto-MediumItalic.woff?");

/***/ }),

/***/ "./node_modules/roboto-fontface/fonts/roboto/Roboto-MediumItalic.woff2":
/*!*****************************************************************************!*\
  !*** ./node_modules/roboto-fontface/fonts/roboto/Roboto-MediumItalic.woff2 ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"node_modules/roboto-fontface/fonts/roboto/Roboto-MediumItalic.woff2\";\n\n//# sourceURL=webpack:///./node_modules/roboto-fontface/fonts/roboto/Roboto-MediumItalic.woff2?");

/***/ }),

/***/ "./node_modules/roboto-fontface/fonts/roboto/Roboto-Regular.woff":
/*!***********************************************************************!*\
  !*** ./node_modules/roboto-fontface/fonts/roboto/Roboto-Regular.woff ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"node_modules/roboto-fontface/fonts/roboto/Roboto-Regular.woff\";\n\n//# sourceURL=webpack:///./node_modules/roboto-fontface/fonts/roboto/Roboto-Regular.woff?");

/***/ }),

/***/ "./node_modules/roboto-fontface/fonts/roboto/Roboto-Regular.woff2":
/*!************************************************************************!*\
  !*** ./node_modules/roboto-fontface/fonts/roboto/Roboto-Regular.woff2 ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"node_modules/roboto-fontface/fonts/roboto/Roboto-Regular.woff2\";\n\n//# sourceURL=webpack:///./node_modules/roboto-fontface/fonts/roboto/Roboto-Regular.woff2?");

/***/ }),

/***/ "./node_modules/roboto-fontface/fonts/roboto/Roboto-RegularItalic.woff":
/*!*****************************************************************************!*\
  !*** ./node_modules/roboto-fontface/fonts/roboto/Roboto-RegularItalic.woff ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"node_modules/roboto-fontface/fonts/roboto/Roboto-RegularItalic.woff\";\n\n//# sourceURL=webpack:///./node_modules/roboto-fontface/fonts/roboto/Roboto-RegularItalic.woff?");

/***/ }),

/***/ "./node_modules/roboto-fontface/fonts/roboto/Roboto-RegularItalic.woff2":
/*!******************************************************************************!*\
  !*** ./node_modules/roboto-fontface/fonts/roboto/Roboto-RegularItalic.woff2 ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"node_modules/roboto-fontface/fonts/roboto/Roboto-RegularItalic.woff2\";\n\n//# sourceURL=webpack:///./node_modules/roboto-fontface/fonts/roboto/Roboto-RegularItalic.woff2?");

/***/ }),

/***/ "./node_modules/roboto-fontface/fonts/roboto/Roboto-Thin.woff":
/*!********************************************************************!*\
  !*** ./node_modules/roboto-fontface/fonts/roboto/Roboto-Thin.woff ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"node_modules/roboto-fontface/fonts/roboto/Roboto-Thin.woff\";\n\n//# sourceURL=webpack:///./node_modules/roboto-fontface/fonts/roboto/Roboto-Thin.woff?");

/***/ }),

/***/ "./node_modules/roboto-fontface/fonts/roboto/Roboto-Thin.woff2":
/*!*********************************************************************!*\
  !*** ./node_modules/roboto-fontface/fonts/roboto/Roboto-Thin.woff2 ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"node_modules/roboto-fontface/fonts/roboto/Roboto-Thin.woff2\";\n\n//# sourceURL=webpack:///./node_modules/roboto-fontface/fonts/roboto/Roboto-Thin.woff2?");

/***/ }),

/***/ "./node_modules/roboto-fontface/fonts/roboto/Roboto-ThinItalic.woff":
/*!**************************************************************************!*\
  !*** ./node_modules/roboto-fontface/fonts/roboto/Roboto-ThinItalic.woff ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"node_modules/roboto-fontface/fonts/roboto/Roboto-ThinItalic.woff\";\n\n//# sourceURL=webpack:///./node_modules/roboto-fontface/fonts/roboto/Roboto-ThinItalic.woff?");

/***/ }),

/***/ "./node_modules/roboto-fontface/fonts/roboto/Roboto-ThinItalic.woff2":
/*!***************************************************************************!*\
  !*** ./node_modules/roboto-fontface/fonts/roboto/Roboto-ThinItalic.woff2 ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"node_modules/roboto-fontface/fonts/roboto/Roboto-ThinItalic.woff2\";\n\n//# sourceURL=webpack:///./node_modules/roboto-fontface/fonts/roboto/Roboto-ThinItalic.woff2?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var roboto_fontface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! roboto-fontface */ \"./node_modules/roboto-fontface/css/roboto/roboto-fontface.css\");\n/* harmony import */ var roboto_fontface__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(roboto_fontface__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction start(){ \n   let item = document.querySelector(\".active\").childNodes[0]; \n   scrollMenu(item);\n}\n\n// burger\n\nfunction burgerMenu() {\n   document.querySelector(\".burger\").addEventListener(\"click\", function () {\n      document.querySelector(\".top-menu\").classList.toggle(\"show\");\n      this.classList.toggle(\"burger-cross\");\n   })\n}\n\n// active menu item\n\nlet menuItems = Array.from(document.querySelectorAll(\".item\"));\n\nlet anchors = menuItems.map(el => { \n   let hash = el.href.replace(/[^#]*(.*)/, '$1'); \n   return hash;\n})\n\nlet sections = anchors.map(hash => {\n   let block = document.querySelector(hash);\n   return block ;\n})\n\nlet menuHeight = document.querySelector(\".top-menu\").offsetHeight;\nlet V = .1;\n\nfunction activeMenuItem() {\n   menuItems.forEach(elem => {\n      elem.addEventListener('click', function (e) {\n         e.preventDefault();\n         scrollMenu(elem); \n         \n         menuItems.forEach((nl) => {\n            if (nl != this) {\n               nl.parentNode.classList.remove('active');\n            }\n         });\n\n         this.parentNode.classList.add('active');\n        document.querySelector(\".top-menu\").classList.toggle(\"show\");\n        document.querySelector(\".burger\").classList.remove(\"burger-cross\");\n      }, false);\n   });\n}\n\n// scroll menu\n\n   function scrollMenu(item) { \n      let w = window.pageYOffset;\n      let hash = item.href.replace(/[^#]*(.*)/, '$1'); \n      let t = document.querySelector(hash).getBoundingClientRect().top; \n\n      let start = null;\n   \n      requestAnimationFrame(step);\n   \n      function step(time) {\n         let menuHeight = document.querySelector(\".top-menu\").offsetHeight;\n\n         if (start === null) start = time;\n\n         let progress = time - start;\n         let r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));\n         window.scrollTo(0, r); \n\n         if (r != w + t) {\n            requestAnimationFrame(step)\n         } else { \n            //window.scrollTo(0, t + w - menuHeight) // if menu is fixed\n            location.hash = hash // -  URL с хэшем если меню не fixed\n         }\n      };\n   }\n   \n// scroll page\n\nfunction scrollPage(){\n   let menuItems = Array.from(document.querySelectorAll(\".item\"));\n   window.addEventListener('scroll', activeBlock);\n\n   function activeBlock(){\n      sections.forEach(item => {\n         let start = item.offsetTop - menuHeight;\n         let end = item.offsetTop + item.offsetHeight/1.3;\n\n         if (pageYOffset > start && pageYOffset < end){\n            document.querySelector(\".active\").classList.remove(\"active\");\n            let index = sections.indexOf(item);\n            menuItems[index].parentNode.classList.add(\"active\");\n         }\n      })\n   }\n}     \n\n// go to top\n\nlet scrollButton = document.querySelector(\".scroll_top\");\n\nfunction goToTop() {\n   window.addEventListener(\"scroll\", trackScroll);\n   scrollButton.addEventListener(\"click\", goUp);\n}\n\nfunction trackScroll() {\n   let scrolled = window.scrollY + 200;\n   let y = document.documentElement.clientHeight;\n\n   if (scrolled > y) {\n      scrollButton.classList.add(\"show\");\n   } else {\n      scrollButton.classList.remove(\"show\");\n   }\n}\n\nfunction goUp() {\n   if (window.pageYOffset > 0) {\n      window.scrollBy(0, -80);\n      setTimeout(goUp, 0);\n   };\n   document.querySelector(\".active\").classList.remove(\"active\");\n   document.querySelector('a[href=\"#home\"]').parentNode.classList.add(\"active\");\n}\n\n// portfolio\n\nfunction portfolio(){\n   let links = Array.from(document.querySelectorAll(\".side-menu_item\"));\n   let allPict = document.querySelectorAll(\".all\");\n   let linkName = null;\n    \n   links.forEach(link => {\n      link.addEventListener(\"click\", function(){\n         let activeLink = links.find(item => item.classList.contains(\"active\"));\n         activeLink.classList.remove(\"active\");\n         link.classList.add(\"active\")\n\n         linkName = link.dataset.item; // get value from data-item \n\n         allPict.forEach(pict => {\n            if (!pict.classList.contains(linkName)) {\n               pict.classList.add(\"hide\")\n            } else {\n               if (pict.classList.contains(\"hide\")) {\n                  pict.classList.remove(\"hide\")\n               }\n            }\n         })\n      })   \n   })\n}\n\n//start()\nactiveMenuItem()\nburgerMenu()\nscrollPage()\ngoToTop()\nportfolio()\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--4-1!../node_modules/sass-loader/dist/cjs.js!../node_modules/postcss-loader/src!./style.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/style.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ })

/******/ });