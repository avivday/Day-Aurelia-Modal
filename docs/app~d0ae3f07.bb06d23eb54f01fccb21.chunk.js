(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app~d0ae3f07"],{

/***/ 0:
/*!*****************************************************************************************************************************!*\
  !*** multi aurelia-webpack-plugin/runtime/empty-entry aurelia-webpack-plugin/runtime/pal-loader-entry aurelia-bootstrapper ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! aurelia-webpack-plugin/runtime/empty-entry */"GAND");
__webpack_require__(/*! aurelia-webpack-plugin/runtime/pal-loader-entry */"GmYv");
module.exports = __webpack_require__(/*! aurelia-bootstrapper */"b9nV");


/***/ }),

/***/ "app":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-pal */ \"70NS\");\n\r\nvar App = (function () {\r\n    function App() {\r\n    }\r\n    App.prototype.configureRouter = function (config, router) {\r\n        config.title = 'Day Aurelia Modal';\r\n        config.map([\r\n            { route: '', name: 'home', moduleId: 'components/home', title: 'Documentation' }\r\n        ]);\r\n    };\r\n    return App;\r\n}());\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cz8wNjZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBMQVRGT1JNIH0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuaW1wb3J0IHtSb3V0ZXJDb25maWd1cmF0aW9uLCBSb3V0ZXJ9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcblxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gIGNvbmZpZ3VyZVJvdXRlcihjb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24sIHJvdXRlcjogUm91dGVyKTogdm9pZCB7XG4gICAgY29uZmlnLnRpdGxlID0gJ0RheSBBdXJlbGlhIE1vZGFsJztcbiAgICBjb25maWcubWFwKFtcbiAgICAgIHsgcm91dGU6ICcnLCBuYW1lOiAnaG9tZScsIG1vZHVsZUlkOlBMQVRGT1JNLm1vZHVsZU5hbWUoJ2NvbXBvbmVudHMvaG9tZScpLCAgdGl0bGU6J0RvY3VtZW50YXRpb24nIH1cbiAgICBdKTtcbiAgfVxufVxuXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQU9BO0FBTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///app\n");

/***/ }),

/***/ "app.html":
/*!**********************!*\
  !*** ./src/app.html ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<template>\\n  <modal-container></modal-container>\\n  <router-view></router-view>\\n</template>\\n\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmh0bWwuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmh0bWw/NDVhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcbiAgPG1vZGFsLWNvbnRhaW5lcj48L21vZGFsLWNvbnRhaW5lcj5cXG4gIDxyb3V0ZXItdmlldz48L3JvdXRlci12aWV3PlxcbjwvdGVtcGxhdGU+XFxuXCI7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///app.html\n");

/***/ }),

/***/ "components/home":
/*!********************************!*\
  !*** ./src/components/home.ts ***!
  \********************************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Home\", function() { return Home; });\n/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-pal */ \"70NS\");\n/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-framework */ \"aurelia-framework\");\n/* harmony import */ var day_aurelia_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! day-aurelia-modal */ \"day-aurelia-modal\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (undefined && undefined.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\n\r\n\r\n\r\nvar Home = (function () {\r\n    function Home(modalService) {\r\n        this.modalService = modalService;\r\n    }\r\n    Home.prototype.openViewOnlyModal = function () {\r\n        this.modalService.openModal({ view: 'modals/view-only-modal.html' });\r\n    };\r\n    Home = __decorate([\r\n        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_1__[\"autoinject\"])(),\r\n        __metadata(\"design:paramtypes\", [day_aurelia_modal__WEBPACK_IMPORTED_MODULE_2__[\"ModalService\"]])\r\n    ], Home);\r\n    return Home;\r\n}());\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9ob21lLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZS50cz85ZWM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBMQVRGT1JNIH0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnZGF5LWF1cmVsaWEtbW9kYWwnO1xuXG5AYXV0b2luamVjdCgpXG5leHBvcnQgY2xhc3MgSG9tZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSkge31cblxuICBvcGVuVmlld09ubHlNb2RhbCgpIHtcbiAgICB0aGlzLm1vZGFsU2VydmljZS5vcGVuTW9kYWwoe3ZpZXc6IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCJtb2RhbHMvdmlldy1vbmx5LW1vZGFsLmh0bWxcIil9KTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBTkE7QUFEQTtBQUdBO0FBRkE7QUFPQTtBQUFBO0FBUEE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///components/home\n");

/***/ }),

/***/ "components/home.html":
/*!**********************************!*\
  !*** ./src/components/home.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<template>\\n  <style>\\n    code {\\n      background-color: grey;\\n      color: #fff;\\n      font-family: monospace;\\n    }\\n\\n  </style>\\n  <h1>Day Aurelia Modal - Documentation</h1>\\n  <div>\\n      <h3>Getting Started</h3>\\n      <div>\\n        <h3>Install</h3>\\n        <code>\\n          npm install day-aurelia-modal\\n        </code>\\n        <br>\\n        <span>or</span>\\n        <br>\\n        <code>\\n          yarn add day-aurelia-modal\\n        </code>\\n      </div>\\n    </div>\\n  <div>\\n    <h3>Display a view only modal</h3>\\n    <button click.delegate=\\\"openViewOnlyModal()\\\">Open View Only Modal</button>\\n    <div>\\n      <code>\\n        this.modalService.openModal({view: PLATFORM.moduleName(\\\"modals/view-only-modal.html\\\")});\\n      </code>\\n    </div>\\n  </div>\\n</template>\\n\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9ob21lLmh0bWwuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lLmh0bWw/ZjJmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcbiAgPHN0eWxlPlxcbiAgICBjb2RlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICAgIH1cXG5cXG4gIDwvc3R5bGU+XFxuICA8aDE+RGF5IEF1cmVsaWEgTW9kYWwgLSBEb2N1bWVudGF0aW9uPC9oMT5cXG4gIDxkaXY+XFxuICAgICAgPGgzPkdldHRpbmcgU3RhcnRlZDwvaDM+XFxuICAgICAgPGRpdj5cXG4gICAgICAgIDxoMz5JbnN0YWxsPC9oMz5cXG4gICAgICAgIDxjb2RlPlxcbiAgICAgICAgICBucG0gaW5zdGFsbCBkYXktYXVyZWxpYS1tb2RhbFxcbiAgICAgICAgPC9jb2RlPlxcbiAgICAgICAgPGJyPlxcbiAgICAgICAgPHNwYW4+b3I8L3NwYW4+XFxuICAgICAgICA8YnI+XFxuICAgICAgICA8Y29kZT5cXG4gICAgICAgICAgeWFybiBhZGQgZGF5LWF1cmVsaWEtbW9kYWxcXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8ZGl2PlxcbiAgICA8aDM+RGlzcGxheSBhIHZpZXcgb25seSBtb2RhbDwvaDM+XFxuICAgIDxidXR0b24gY2xpY2suZGVsZWdhdGU9XFxcIm9wZW5WaWV3T25seU1vZGFsKClcXFwiPk9wZW4gVmlldyBPbmx5IE1vZGFsPC9idXR0b24+XFxuICAgIDxkaXY+XFxuICAgICAgPGNvZGU+XFxuICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5vcGVuTW9kYWwoe3ZpZXc6IFBMQVRGT1JNLm1vZHVsZU5hbWUoXFxcIm1vZGFscy92aWV3LW9ubHktbW9kYWwuaHRtbFxcXCIpfSk7XFxuICAgICAgPC9jb2RlPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXCI7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///components/home.html\n");

/***/ }),

/***/ "e2Tw":
/*!****************************!*\
  !*** ./src/environment.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    debug: true,\r\n    testing: true\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZTJUdy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9lbnZpcm9ubWVudC50cz83YjY0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgZGVidWc6IHRydWUsXG4gIHRlc3Rpbmc6IHRydWVcbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///e2Tw\n");

/***/ }),

/***/ "main":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"configure\", function() { return configure; });\n/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment */ \"e2Tw\");\n/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ \"70NS\");\n/* harmony import */ var day_aurelia_modal_styles_modal_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! day-aurelia-modal/styles/modal.css */ \"GWFg\");\n/* harmony import */ var day_aurelia_modal_styles_modal_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(day_aurelia_modal_styles_modal_css__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\nfunction configure(aurelia) {\r\n    aurelia.use\r\n        .standardConfiguration()\r\n        .feature('resources/index')\r\n        .plugin('day-aurelia-modal');\r\n    aurelia.use.developmentLogging(_environment__WEBPACK_IMPORTED_MODULE_0__[\"default\"].debug ? 'debug' : 'warn');\r\n    if (_environment__WEBPACK_IMPORTED_MODULE_0__[\"default\"].testing) {\r\n        aurelia.use.plugin('aurelia-testing');\r\n    }\r\n    aurelia.start().then(function () { return aurelia.setRoot('app'); });\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLnRzP2NkNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdXJlbGlhfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yaydcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50JztcbmltcG9ydCB7UExBVEZPUk19IGZyb20gJ2F1cmVsaWEtcGFsJztcbmltcG9ydCAnZGF5LWF1cmVsaWEtbW9kYWwvc3R5bGVzL21vZGFsLmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKFBMQVRGT1JNLm1vZHVsZU5hbWUoJ3Jlc291cmNlcy9pbmRleCcpKVxuICAgIC5wbHVnaW4oUExBVEZPUk0ubW9kdWxlTmFtZSgnZGF5LWF1cmVsaWEtbW9kYWwnKSk7XG5cbiAgYXVyZWxpYS51c2UuZGV2ZWxvcG1lbnRMb2dnaW5nKGVudmlyb25tZW50LmRlYnVnID8gJ2RlYnVnJyA6ICd3YXJuJyk7XG5cbiAgaWYgKGVudmlyb25tZW50LnRlc3RpbmcpIHtcbiAgICBhdXJlbGlhLnVzZS5wbHVnaW4oUExBVEZPUk0ubW9kdWxlTmFtZSgnYXVyZWxpYS10ZXN0aW5nJykpO1xuICB9XG5cbiAgYXVyZWxpYS5zdGFydCgpLnRoZW4oKCkgPT4gYXVyZWxpYS5zZXRSb290KFBMQVRGT1JNLm1vZHVsZU5hbWUoJ2FwcCcpKSk7XG59XG4iXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///main\n");

/***/ }),

/***/ "modals/view-only-modal.html":
/*!*****************************************!*\
  !*** ./src/modals/view-only-modal.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<template>\\n  <h1>TEST</h1>\\n</template>\\n\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWxzL3ZpZXctb25seS1tb2RhbC5odG1sLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZGFscy92aWV3LW9ubHktbW9kYWwuaHRtbD8xNDRkIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxuICA8aDE+VEVTVDwvaDE+XFxuPC90ZW1wbGF0ZT5cXG5cIjsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///modals/view-only-modal.html\n");

/***/ }),

/***/ "resources/index":
/*!********************************!*\
  !*** ./src/resources/index.ts ***!
  \********************************/
/*! exports provided: configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"configure\", function() { return configure; });\nfunction configure(config) {\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VzL2luZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc291cmNlcy9pbmRleC50cz83NDBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQUE7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///resources/index\n");

/***/ })

},[[0,"runtime~app","vendors~2a42e354","vendors~0ba1d959","vendors~556c66f2","vendors~72fdf3f2","vendors~50e8d500","vendors~ecff2e3d","vendors~9e0f4621","vendors~90a5e300","vendors~f9ca8911"]]]);