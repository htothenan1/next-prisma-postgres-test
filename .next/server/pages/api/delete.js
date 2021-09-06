"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/delete";
exports.ids = ["pages/api/delete"];
exports.modules = {

/***/ "./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\n\nif (true) {\n  if (false) {} else {\n    if (!global.prisma) {\n      global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n\n    prisma = global.prisma;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBVUEsSUFBSUMsTUFBSjs7QUFFQSxJQUFJLE1BQStCO0FBQy9CLGFBQTJDLEVBQTNDLE1BRU87QUFDSCxRQUFJLENBQUNDLE1BQU0sQ0FBQ0QsTUFBWixFQUFvQjtBQUNoQkMsTUFBQUEsTUFBTSxDQUFDRCxNQUFQLEdBQWdCLElBQUlELHdEQUFKLEVBQWhCO0FBQ0g7O0FBRURDLElBQUFBLE1BQU0sR0FBR0MsTUFBTSxDQUFDRCxNQUFoQjtBQUNIO0FBQ0o7O0FBRUQsaUVBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXByaXNtYS1hcHAvLi9saWIvcHJpc21hLnRzP2Q3MjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgICBuYW1lc3BhY2UgTm9kZUpTIHtcbiAgICAgICAgaW50ZXJmYWNlIEdsb2JhbCB7XG4gICAgICAgICAgICBwcmlzbWE6IFByaXNtYUNsaWVudFxuICAgICAgICB9XG4gICAgfVxufVxuXG5sZXQgcHJpc21hOiBQcmlzbWFDbGllbnQ7XG5cbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWdsb2JhbC5wcmlzbWEpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gICAgICAgIH1cblxuICAgICAgICBwcmlzbWEgPSBnbG9iYWwucHJpc21hO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/prisma.ts\n");

/***/ }),

/***/ "./pages/api/delete.ts":
/*!*****************************!*\
  !*** ./pages/api/delete.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"./lib/prisma.ts\");\n/* eslint-disable import/no-anonymous-default-export */\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  try {\n    const {\n      id\n    } = req.body;\n\n    if (!id) {\n      res.json({\n        error: \"You should have an id!\"\n      });\n      return;\n    }\n\n    const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.user.delete({\n      where: {\n        id\n      }\n    });\n    res.status(200).json(user);\n  } catch (error) {\n    res.status(400).json({\n      message: 'Something went terribly wrong!'\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZGVsZXRlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFQTtBQUVBLGlFQUFlLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUMvQixNQUFJO0FBQ0EsVUFBTTtBQUFDQyxNQUFBQTtBQUFELFFBQU9GLEdBQUcsQ0FBQ0csSUFBakI7O0FBQ0EsUUFBSSxDQUFDRCxFQUFMLEVBQVM7QUFDTEQsTUFBQUEsR0FBRyxDQUFDRyxJQUFKLENBQVM7QUFBQ0MsUUFBQUEsS0FBSyxFQUFFO0FBQVIsT0FBVDtBQUNBO0FBQ0g7O0FBQ0QsVUFBTUMsSUFBSSxHQUFHLE1BQU1QLDREQUFBLENBQW1CO0FBQ2xDUyxNQUFBQSxLQUFLLEVBQUU7QUFBQ04sUUFBQUE7QUFBRDtBQUQyQixLQUFuQixDQUFuQjtBQUdBRCxJQUFBQSxHQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCTCxJQUFoQixDQUFxQkUsSUFBckI7QUFDSCxHQVZELENBVUUsT0FBT0QsS0FBUCxFQUFjO0FBQ1pKLElBQUFBLEdBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JMLElBQWhCLENBQXFCO0FBQUVNLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBQXJCO0FBQ0g7QUFDSixDQWREIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1wcmlzbWEtYXBwLy4vcGFnZXMvYXBpL2RlbGV0ZS50cz83NzY1Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1hbm9ueW1vdXMtZGVmYXVsdC1leHBvcnQgKi9cblxuaW1wb3J0ICBwcmlzbWEgIGZyb20gXCIuLi8uLi9saWIvcHJpc21hXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHtpZH0gPSByZXEuYm9keTtcbiAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgICAgcmVzLmpzb24oe2Vycm9yOiBcIllvdSBzaG91bGQgaGF2ZSBhbiBpZCFcIn0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5kZWxldGUoe1xuICAgICAgICAgICAgd2hlcmU6IHtpZH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVzZXIpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiAnU29tZXRoaW5nIHdlbnQgdGVycmlibHkgd3JvbmchJyB9KVxuICAgIH1cbn0iXSwibmFtZXMiOlsicHJpc21hIiwicmVxIiwicmVzIiwiaWQiLCJib2R5IiwianNvbiIsImVycm9yIiwidXNlciIsImRlbGV0ZSIsIndoZXJlIiwic3RhdHVzIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/delete.ts\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/delete.ts"));
module.exports = __webpack_exports__;

})();