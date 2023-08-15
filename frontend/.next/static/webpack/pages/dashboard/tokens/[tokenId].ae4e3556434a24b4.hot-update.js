"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard/tokens/[tokenId]",{

/***/ "./src/components/dashboard/token/chart-two.jsx":
/*!******************************************************!*\
  !*** ./src/components/dashboard/token/chart-two.jsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChartTwo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lightweight_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lightweight-charts */ \"./node_modules/lightweight-charts/dist/lightweight-charts.development.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nfunction ChartTwo(props) {\n    _s();\n    var data = props.data, volumeData = props.volumeData, atsData = props.atsData, name = props.name, symbol = props.symbol, tmp = props.colors, ref = tmp === void 0 ? {} : tmp, _backgroundColor = ref.backgroundColor, backgroundColor = _backgroundColor === void 0 ? \"#171B26\" : _backgroundColor, _lineColor = ref.lineColor, lineColor = _lineColor === void 0 ? \"#2962FF\" : _lineColor, _textColor = ref.textColor, textColor = _textColor === void 0 ? \"#A0AEC0\" : _textColor, _areaTopColor = ref.areaTopColor, areaTopColor = _areaTopColor === void 0 ? \"transparent\" : _areaTopColor, _areaBottomColor = ref.areaBottomColor, areaBottomColor = _areaBottomColor === void 0 ? \"transparent\" : _areaBottomColor;\n    var firtColor = \"#2962FF\";\n    var secondColor = \"#26a69a\";\n    var chartTwoContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var handleResize = function() {\n            chartTwo.applyOptions({\n                width: chartTwoContainerRef.current.clientWidth\n            });\n        };\n        var chartTwo = (0,lightweight_charts__WEBPACK_IMPORTED_MODULE_2__.createChart)(chartTwoContainerRef.current, {\n            rightPriceScale: {\n                visible: true\n            },\n            leftPriceScale: {\n                visible: true\n            },\n            layout: {\n                background: {\n                    type: lightweight_charts__WEBPACK_IMPORTED_MODULE_2__.ColorType.Solid,\n                    color: backgroundColor\n                },\n                textColor: textColor\n            },\n            width: chartTwoContainerRef.current.clientWidth,\n            height: 400,\n            priceFormat: {\n                type: \"volume\"\n            },\n            grid: {\n                vertLines: {\n                    color: \"#2D3748\"\n                },\n                horzLines: {\n                    color: \"#2D3748\"\n                }\n            }\n        });\n        var lineSeries = chartTwo.addLineSeries({\n            color: firtColor\n        });\n        lineSeries.setData(data);\n        // const volumeSeries = chartTwo.addHistogramSeries({\n        //   color: '#26a69a',\n        //   priceFormat: {\n        //     type: 'volume',\n        //   },\n        //   priceScaleId: '', // set as an overlay by setting a blank priceScaleId\n        //   // set the positioning of the volume series\n        //   scaleMargins: {\n        //     top: 0.7, // highest point of the series will be 70% away from the top\n        //     bottom: 0,\n        //   },\n        // });\n        // volumeSeries.priceScale().applyOptions({\n        //   scaleMargins: {\n        //     top: 0.7, // highest point of the series will be 70% away from the top\n        //     bottom: 0,\n        //   },\n        // });\n        // volumeSeries.setData(volumeData)\n        var volumeSeries = chartTwo.addHistogramSeries({\n            priceScaleId: \"left\",\n            color: secondColor\n        });\n        volumeSeries.setData(atsData);\n        chartTwo.timeScale().fitContent();\n        window.addEventListener(\"resize\", handleResize);\n        return function() {\n            window.removeEventListener(\"resize\", handleResize);\n            chartTwo.remove();\n        };\n    }, [\n        data,\n        backgroundColor,\n        lineColor,\n        textColor,\n        areaTopColor,\n        areaBottomColor, \n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            margin: \"0 40px\",\n            position: \"relative\"\n        },\n        ref: chartTwoContainerRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"token-info\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"token-name\",\n                        children: [\n                            name,\n                            \"/U.S. Dollar, 1D, \",\n                            symbol,\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"29424 +70 (+0.24%)\"\n                            }, void 0, false, {\n                                fileName: \"/home/dev/Tai1/new/5545/5545/frontend/src/components/dashboard/token/chart-two.jsx\",\n                                lineNumber: 97,\n                                columnNumber: 68\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/dev/Tai1/new/5545/5545/frontend/src/components/dashboard/token/chart-two.jsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"token-volume\",\n                        children: [\n                            \"Vol \",\n                            symbol,\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"189\"\n                            }, void 0, false, {\n                                fileName: \"/home/dev/Tai1/new/5545/5545/frontend/src/components/dashboard/token/chart-two.jsx\",\n                                lineNumber: 98,\n                                columnNumber: 50\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/dev/Tai1/new/5545/5545/frontend/src/components/dashboard/token/chart-two.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"token-name\",\n                        children: [\n                            name,\n                            \"/U.S. Dollar, 1D, \",\n                            symbol,\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"29424 +70 (+0.24%)\"\n                            }, void 0, false, {\n                                fileName: \"/home/dev/Tai1/new/5545/5545/frontend/src/components/dashboard/token/chart-two.jsx\",\n                                lineNumber: 99,\n                                columnNumber: 68\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/dev/Tai1/new/5545/5545/frontend/src/components/dashboard/token/chart-two.jsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"token-volume\",\n                        children: [\n                            \"Vol \",\n                            symbol,\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"189\"\n                            }, void 0, false, {\n                                fileName: \"/home/dev/Tai1/new/5545/5545/frontend/src/components/dashboard/token/chart-two.jsx\",\n                                lineNumber: 100,\n                                columnNumber: 50\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/dev/Tai1/new/5545/5545/frontend/src/components/dashboard/token/chart-two.jsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dev/Tai1/new/5545/5545/frontend/src/components/dashboard/token/chart-two.jsx\",\n                lineNumber: 96,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"chart-info\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"chart-info-item\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"chart-info-item-color\",\n                                style: {\n                                    backgroundColor: firtColor\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/dev/Tai1/new/5545/5545/frontend/src/components/dashboard/token/chart-two.jsx\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"chart-info-item-name\",\n                                children: \"Price\"\n                            }, void 0, false, {\n                                fileName: \"/home/dev/Tai1/new/5545/5545/frontend/src/components/dashboard/token/chart-two.jsx\",\n                                lineNumber: 105,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/dev/Tai1/new/5545/5545/frontend/src/components/dashboard/token/chart-two.jsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"chart-info-item\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"chart-info-item-color\",\n                                style: {\n                                    backgroundColor: secondColor\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/dev/Tai1/new/5545/5545/frontend/src/components/dashboard/token/chart-two.jsx\",\n                                lineNumber: 108,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"chart-info-item-name\",\n                                children: \"ATS\"\n                            }, void 0, false, {\n                                fileName: \"/home/dev/Tai1/new/5545/5545/frontend/src/components/dashboard/token/chart-two.jsx\",\n                                lineNumber: 109,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/dev/Tai1/new/5545/5545/frontend/src/components/dashboard/token/chart-two.jsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dev/Tai1/new/5545/5545/frontend/src/components/dashboard/token/chart-two.jsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/dev/Tai1/new/5545/5545/frontend/src/components/dashboard/token/chart-two.jsx\",\n        lineNumber: 95,\n        columnNumber: 14\n    }, this);\n};\n_s(ChartTwo, \"hCWFUdUGc9rOQGOdJPCTVVyvTMI=\");\n_c = ChartTwo;\nvar _c;\n$RefreshReg$(_c, \"ChartTwo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvdG9rZW4vY2hhcnQtdHdvLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBNEM7QUFDZ0I7QUFFN0MsU0FBU0ssUUFBUSxDQUFDQyxLQUFLLEVBQUU7O0lBQ3BDLElBQ0lDLElBQUksR0FZRkQsS0FBSyxDQVpQQyxJQUFJLEVBQ0pDLFVBQVUsR0FXUkYsS0FBSyxDQVhQRSxVQUFVLEVBQ1ZDLE9BQU8sR0FVTEgsS0FBSyxDQVZQRyxPQUFPLEVBQ1BDLElBQUksR0FTRkosS0FBSyxDQVRQSSxJQUFJLEVBQ0pDLE1BQU0sR0FRSkwsS0FBSyxDQVJQSyxNQUFNLEVBQ0UsR0FNRixHQUNKTCxLQUFLLENBUFBNLE1BQU0sUUFBRSxHQU1GLGNBQUYsRUFBRSxHQU5FLEdBTUYseUJBTEpDLGVBQWUsRUFBZkEsZUFBZSxpQ0FBRyxTQUFTLHNDQUMzQkMsU0FBUyxFQUFUQSxTQUFTLDJCQUFHLFNBQVMsZ0NBQ3JCQyxTQUFTLEVBQVRBLFNBQVMsMkJBQUcsU0FBUyxtQ0FDckJDLFlBQVksRUFBWkEsWUFBWSw4QkFBRyxhQUFhLHlDQUM1QkMsZUFBZSxFQUFmQSxlQUFlLGlDQUFHLGFBQWE7SUFHckMsSUFBTUMsU0FBUyxHQUFHLFNBQVM7SUFDM0IsSUFBTUMsV0FBVyxHQUFDLFNBQVM7SUFDekIsSUFBTUMsb0JBQW9CLEdBQUduQiw2Q0FBTSxFQUFFO0lBRXJDQyxnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFNbUIsWUFBWSxHQUFHLFdBQU07WUFDekJDLFFBQVEsQ0FBQ0MsWUFBWSxDQUFDO2dCQUFFQyxLQUFLLEVBQUVKLG9CQUFvQixDQUFDSyxPQUFPLENBQUNDLFdBQVc7YUFBRSxDQUFDLENBQUM7UUFDN0UsQ0FBQztRQUVELElBQU1KLFFBQVEsR0FBR25CLCtEQUFXLENBQUNpQixvQkFBb0IsQ0FBQ0ssT0FBTyxFQUFFO1lBQ3pERSxlQUFlLEVBQUU7Z0JBQ2ZDLE9BQU8sRUFBRSxJQUFJO2FBQ2Q7WUFD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O29DQUFPOzRCQUFBLEdBQUM7Ozs7Ozs0QkFBSTtrQ0FDL0YsOERBQUNELEdBQUM7d0JBQUNELFNBQVMsRUFBQyxjQUFjOzs0QkFBQyxNQUFJOzRCQUFDOUMsTUFBTTs0QkFBQyxHQUFDOzBDQUFBLDhEQUFDZ0QsTUFBSTswQ0FBQyxLQUFHOzs7OztvQ0FBTzs0QkFBQSxHQUFDOzs7Ozs7NEJBQUk7Ozs7OztvQkFDMUQ7MEJBQ04sOERBQUNQLEtBQUc7Z0JBQUNLLFNBQVMsRUFBQyxZQUFZOztrQ0FDekIsOERBQUNMLEtBQUc7d0JBQUNLLFNBQVMsRUFBQyxpQkFBaUI7OzBDQUM5Qiw4REFBQ0wsS0FBRztnQ0FBQ0ssU0FBUyxFQUFDLHVCQUF1QjtnQ0FBQ0osS0FBSyxFQUFFO29DQUFDeEMsZUFBZSxFQUFDSyxTQUFTO2lDQUFDOzs7OztvQ0FBUTswQ0FDakYsOERBQUNrQyxLQUFHO2dDQUFDSyxTQUFTLEVBQUMsc0JBQXNCOzBDQUFDLE9BQUs7Ozs7O29DQUFNOzs7Ozs7NEJBQzdDO2tDQUNOLDhEQUFDTCxLQUFHO3dCQUFDSyxTQUFTLEVBQUMsaUJBQWlCOzswQ0FDOUIsOERBQUNMLEtBQUc7Z0NBQUNLLFNBQVMsRUFBQyx1QkFBdUI7Z0NBQUNKLEtBQUssRUFBRTtvQ0FBQ3hDLGVBQWUsRUFBQ00sV0FBVztpQ0FBQzs7Ozs7b0NBQVE7MENBQ25GLDhEQUFDaUMsS0FBRztnQ0FBQ0ssU0FBUyxFQUFDLHNCQUFzQjswQ0FBQyxLQUFHOzs7OztvQ0FBTTs7Ozs7OzRCQUMzQzs7Ozs7O29CQUNGOzs7Ozs7WUFDQSxDQUFDO0FBQ2IsQ0FBQztHQTdHdUJwRCxRQUFRO0FBQVJBLEtBQUFBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL3Rva2VuL2NoYXJ0LXR3by5qc3g/YjNjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVJlZix1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3JlYXRlQ2hhcnQsIENvbG9yVHlwZSB9IGZyb20gXCJsaWdodHdlaWdodC1jaGFydHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhcnRUd28ocHJvcHMpIHtcbiAgICBjb25zdCB7XG4gICAgICAgIGRhdGEsXG4gICAgICAgIHZvbHVtZURhdGEsXG4gICAgICAgIGF0c0RhdGEsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHN5bWJvbCxcbiAgICAgICAgY29sb3JzOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yID0gXCIjMTcxQjI2XCIsXG4gICAgICAgICAgbGluZUNvbG9yID0gXCIjMjk2MkZGXCIsXG4gICAgICAgICAgdGV4dENvbG9yID0gXCIjQTBBRUMwXCIsXG4gICAgICAgICAgYXJlYVRvcENvbG9yID0gXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgIGFyZWFCb3R0b21Db2xvciA9IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgfSA9IHt9LFxuICAgICAgfSA9IHByb3BzO1xuICAgIGNvbnN0IGZpcnRDb2xvciA9IFwiIzI5NjJGRlwiXG4gICAgY29uc3Qgc2Vjb25kQ29sb3I9XCIjMjZhNjlhXCI7XG4gICAgICBjb25zdCBjaGFydFR3b0NvbnRhaW5lclJlZiA9IHVzZVJlZigpO1xuICAgIFxuICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAgICAgICAgIGNoYXJ0VHdvLmFwcGx5T3B0aW9ucyh7IHdpZHRoOiBjaGFydFR3b0NvbnRhaW5lclJlZi5jdXJyZW50LmNsaWVudFdpZHRoIH0pO1xuICAgICAgICB9O1xuICAgIFxuICAgICAgICBjb25zdCBjaGFydFR3byA9IGNyZWF0ZUNoYXJ0KGNoYXJ0VHdvQ29udGFpbmVyUmVmLmN1cnJlbnQsIHtcbiAgICAgICAgICByaWdodFByaWNlU2NhbGU6IHtcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsZWZ0UHJpY2VTY2FsZToge1xuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxheW91dDoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogeyB0eXBlOiBDb2xvclR5cGUuU29saWQsIGNvbG9yOiBiYWNrZ3JvdW5kQ29sb3IgfSxcbiAgICAgICAgICAgIHRleHRDb2xvcixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHdpZHRoOiBjaGFydFR3b0NvbnRhaW5lclJlZi5jdXJyZW50LmNsaWVudFdpZHRoLFxuICAgICAgICAgIGhlaWdodDogNDAwLFxuICAgICAgICAgIHByaWNlRm9ybWF0OiB7XG4gICAgICAgICAgICB0eXBlOiAndm9sdW1lJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgIHZlcnRMaW5lczogeyBjb2xvcjogXCIjMkQzNzQ4XCIgfSxcbiAgICAgICAgICAgIGhvcnpMaW5lczogeyBjb2xvcjogXCIjMkQzNzQ4XCIgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgbGluZVNlcmllcyA9IGNoYXJ0VHdvLmFkZExpbmVTZXJpZXMoeyBjb2xvcjogZmlydENvbG9yIH0pO1xuICAgICAgICBsaW5lU2VyaWVzLnNldERhdGEoZGF0YSk7XG4gICAgXG4gICAgICAgIC8vIGNvbnN0IHZvbHVtZVNlcmllcyA9IGNoYXJ0VHdvLmFkZEhpc3RvZ3JhbVNlcmllcyh7XG4gICAgICAgIC8vICAgY29sb3I6ICcjMjZhNjlhJyxcbiAgICAgICAgLy8gICBwcmljZUZvcm1hdDoge1xuICAgICAgICAvLyAgICAgdHlwZTogJ3ZvbHVtZScsXG4gICAgICAgIC8vICAgfSxcbiAgICAgICAgLy8gICBwcmljZVNjYWxlSWQ6ICcnLCAvLyBzZXQgYXMgYW4gb3ZlcmxheSBieSBzZXR0aW5nIGEgYmxhbmsgcHJpY2VTY2FsZUlkXG4gICAgICAgIC8vICAgLy8gc2V0IHRoZSBwb3NpdGlvbmluZyBvZiB0aGUgdm9sdW1lIHNlcmllc1xuICAgICAgICAvLyAgIHNjYWxlTWFyZ2luczoge1xuICAgICAgICAvLyAgICAgdG9wOiAwLjcsIC8vIGhpZ2hlc3QgcG9pbnQgb2YgdGhlIHNlcmllcyB3aWxsIGJlIDcwJSBhd2F5IGZyb20gdGhlIHRvcFxuICAgICAgICAvLyAgICAgYm90dG9tOiAwLFxuICAgICAgICAvLyAgIH0sXG4gICAgICAgIC8vIH0pO1xuICAgICAgICAvLyB2b2x1bWVTZXJpZXMucHJpY2VTY2FsZSgpLmFwcGx5T3B0aW9ucyh7XG4gICAgICAgIC8vICAgc2NhbGVNYXJnaW5zOiB7XG4gICAgICAgIC8vICAgICB0b3A6IDAuNywgLy8gaGlnaGVzdCBwb2ludCBvZiB0aGUgc2VyaWVzIHdpbGwgYmUgNzAlIGF3YXkgZnJvbSB0aGUgdG9wXG4gICAgICAgIC8vICAgICBib3R0b206IDAsXG4gICAgICAgIC8vICAgfSxcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIC8vIHZvbHVtZVNlcmllcy5zZXREYXRhKHZvbHVtZURhdGEpXG4gICAgXG4gICAgICAgIGNvbnN0IHZvbHVtZVNlcmllcyA9IGNoYXJ0VHdvLmFkZEhpc3RvZ3JhbVNlcmllcyh7IHByaWNlU2NhbGVJZDogJ2xlZnQnLGNvbG9yOnNlY29uZENvbG9yIH0pO1xuICAgICAgICBcbiAgICAgICAgdm9sdW1lU2VyaWVzLnNldERhdGEoYXRzRGF0YSk7XG5cblxuICAgICAgICBjaGFydFR3by50aW1lU2NhbGUoKS5maXRDb250ZW50KCk7XG4gICAgXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG4gICAgXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcbiAgICBcbiAgICAgICAgICBjaGFydFR3by5yZW1vdmUoKTtcbiAgICAgICAgfTtcbiAgICAgIH0sIFtcbiAgICAgICAgZGF0YSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yLFxuICAgICAgICBsaW5lQ29sb3IsXG4gICAgICAgIHRleHRDb2xvcixcbiAgICAgICAgYXJlYVRvcENvbG9yLFxuICAgICAgICBhcmVhQm90dG9tQ29sb3IsXG4gICAgICBdKTtcbiAgICBcbiAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7bWFyZ2luOlwiMCA0MHB4XCIscG9zaXRpb246XCJyZWxhdGl2ZVwifX0gcmVmPXtjaGFydFR3b0NvbnRhaW5lclJlZn0+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva2VuLWluZm9cIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidG9rZW4tbmFtZVwiPntuYW1lfS9VLlMuIERvbGxhciwgMUQsIHtzeW1ib2x9IDxzcGFuPjI5NDI0ICs3MCAoKzAuMjQlKTwvc3Bhbj4gPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0b2tlbi12b2x1bWVcIj5Wb2wge3N5bWJvbH0gPHNwYW4+MTg5PC9zcGFuPiA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRva2VuLW5hbWVcIj57bmFtZX0vVS5TLiBEb2xsYXIsIDFELCB7c3ltYm9sfSA8c3Bhbj4yOTQyNCArNzAgKCswLjI0JSk8L3NwYW4+IDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidG9rZW4tdm9sdW1lXCI+Vm9sIHtzeW1ib2x9IDxzcGFuPjE4OTwvc3Bhbj4gPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0LWluZm9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydC1pbmZvLWl0ZW1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0LWluZm8taXRlbS1jb2xvclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOmZpcnRDb2xvcn19PjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnQtaW5mby1pdGVtLW5hbWVcIj5QcmljZTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydC1pbmZvLWl0ZW1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0LWluZm8taXRlbS1jb2xvclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOnNlY29uZENvbG9yfX0+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydC1pbmZvLWl0ZW0tbmFtZVwiPkFUUzwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+O1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3JlYXRlQ2hhcnQiLCJDb2xvclR5cGUiLCJDaGFydFR3byIsInByb3BzIiwiZGF0YSIsInZvbHVtZURhdGEiLCJhdHNEYXRhIiwibmFtZSIsInN5bWJvbCIsImNvbG9ycyIsImJhY2tncm91bmRDb2xvciIsImxpbmVDb2xvciIsInRleHRDb2xvciIsImFyZWFUb3BDb2xvciIsImFyZWFCb3R0b21Db2xvciIsImZpcnRDb2xvciIsInNlY29uZENvbG9yIiwiY2hhcnRUd29Db250YWluZXJSZWYiLCJoYW5kbGVSZXNpemUiLCJjaGFydFR3byIsImFwcGx5T3B0aW9ucyIsIndpZHRoIiwiY3VycmVudCIsImNsaWVudFdpZHRoIiwicmlnaHRQcmljZVNjYWxlIiwidmlzaWJsZSIsImxlZnRQcmljZVNjYWxlIiwibGF5b3V0IiwiYmFja2dyb3VuZCIsInR5cGUiLCJTb2xpZCIsImNvbG9yIiwiaGVpZ2h0IiwicHJpY2VGb3JtYXQiLCJncmlkIiwidmVydExpbmVzIiwiaG9yekxpbmVzIiwibGluZVNlcmllcyIsImFkZExpbmVTZXJpZXMiLCJzZXREYXRhIiwidm9sdW1lU2VyaWVzIiwiYWRkSGlzdG9ncmFtU2VyaWVzIiwicHJpY2VTY2FsZUlkIiwidGltZVNjYWxlIiwiZml0Q29udGVudCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwiZGl2Iiwic3R5bGUiLCJtYXJnaW4iLCJwb3NpdGlvbiIsInJlZiIsImNsYXNzTmFtZSIsInAiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/dashboard/token/chart-two.jsx\n"));

/***/ })

});