"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/slices/token.js":
/*!*****************************!*\
  !*** ./src/slices/token.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reducer\": function() { return /* binding */ reducer; },\n/* harmony export */   \"tokenSlice\": function() { return /* binding */ tokenSlice; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nvar initialState = {\n    search: \"\"\n};\nvar tokenSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"token\",\n    initialState: initialState,\n    reducers: {\n        changeSearch: function changeSearch(state, action) {\n            var value = action.payload;\n            state.search = value;\n        }\n    }\n});\nvar reducer = tokenSlice.reducer;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2xpY2VzL3Rva2VuLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQztBQUUvQyxJQUFNQyxZQUFZLEdBQUc7SUFDakJDLE1BQU0sRUFBQyxFQUFFO0NBQ1Y7QUFFTSxJQUFNQyxVQUFVLEdBQUdILDZEQUFXLENBQUM7SUFDcENJLElBQUksRUFBRSxPQUFPO0lBQ2JILFlBQVksRUFBWkEsWUFBWTtJQUNaSSxRQUFRLEVBQUU7UUFDVkMsWUFBWSxFQUFaQSxTQUFBQSxZQUFZLENBQUNDLEtBQUssRUFBQ0MsTUFBTSxFQUFDO1lBQ3hCLElBQU1DLEtBQUssR0FBR0QsTUFBTSxDQUFDRSxPQUFPO1lBRTVCSCxLQUFLLENBQUNMLE1BQU0sR0FBQ08sS0FBSyxDQUFDO1FBQ3JCLENBQUM7S0FDQTtDQUNGLENBQUMsQ0FBQztBQUVJLElBQU0sT0FBUyxHQUFLTixVQUFVLENBQXRCUSxPQUFPLENBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zbGljZXMvdG9rZW4uanM/NDJjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgc2VhcmNoOlwiXCIsXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IHRva2VuU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogJ3Rva2VuJyxcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgcmVkdWNlcnM6IHtcbiAgICBjaGFuZ2VTZWFyY2goc3RhdGUsYWN0aW9uKXtcbiAgICAgIGNvbnN0IHZhbHVlID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgICAgIHN0YXRlLnNlYXJjaD12YWx1ZTtcbiAgICB9XG4gICAgfVxuICB9KTtcbiAgXG4gIGV4cG9ydCBjb25zdCB7IHJlZHVjZXIgfSA9IHRva2VuU2xpY2U7XG4gICJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsInNlYXJjaCIsInRva2VuU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJjaGFuZ2VTZWFyY2giLCJzdGF0ZSIsImFjdGlvbiIsInZhbHVlIiwicGF5bG9hZCIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/slices/token.js\n"));

/***/ })

});