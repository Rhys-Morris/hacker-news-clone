/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhacker_news_clone"] = self["webpackChunkhacker_news_clone"] || []).push([["app_components_Post_js"],{

/***/ "./app/components/Comment.js":
/*!***********************************!*\
  !*** ./app/components/Comment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Comment)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _contexts_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/theme */ \"./app/contexts/theme.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/helpers */ \"./app/utils/helpers.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\nvar Comment = /*#__PURE__*/function (_React$Component) {\n  _inherits(Comment, _React$Component);\n\n  var _super = _createSuper(Comment);\n\n  function Comment() {\n    _classCallCheck(this, Comment);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(Comment, [{\n    key: \"renderMarkup\",\n    value: function renderMarkup() {\n      var comment = this.props.comment;\n      return {\n        __html: \"\".concat(comment.text)\n      };\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      var comment = this.props.comment;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_contexts_theme__WEBPACK_IMPORTED_MODULE_1__.ThemeConsumer, null, function (_ref) {\n        var theme = _ref.theme;\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n          className: \"comment \".concat(theme)\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n          className: \"byline \".concat(theme)\n        }, \"by \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n          to: \"/user?id=\".concat(comment.by),\n          className: \"underline byline__author\"\n        }, \"\".concat(comment.by))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n          className: \"byline \".concat(theme)\n        }, \"on \".concat((0,_utils_helpers__WEBPACK_IMPORTED_MODULE_2__.formatTimestamp)(comment.time))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n          className: \"comment__text\",\n          dangerouslySetInnerHTML: _this.renderMarkup()\n        }));\n      });\n    }\n  }]);\n\n  return Comment;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n\n\n//# sourceURL=webpack://hacker-news-clone/./app/components/Comment.js?");

/***/ }),

/***/ "./app/components/Post.js":
/*!********************************!*\
  !*** ./app/components/Post.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Post)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! query-string */ \"./node_modules/query-string/index.js\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/api */ \"./app/utils/api.js\");\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Loading */ \"./app/components/Loading.js\");\n/* harmony import */ var _Byline_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Byline.js */ \"./app/components/Byline.js\");\n/* harmony import */ var _Comment_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Comment.js */ \"./app/components/Comment.js\");\n/* harmony import */ var _contexts_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contexts/theme */ \"./app/contexts/theme.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\nvar Post = /*#__PURE__*/function (_React$Component) {\n  _inherits(Post, _React$Component);\n\n  var _super = _createSuper(Post);\n\n  function Post() {\n    var _this;\n\n    _classCallCheck(this, Post);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      loading: true,\n      comments: [],\n      post: null,\n      error: null\n    });\n\n    return _this;\n  }\n\n  _createClass(Post, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var _queryString$parse = query_string__WEBPACK_IMPORTED_MODULE_1__.parse(this.props.location.search),\n          id = _queryString$parse.id;\n\n      _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n        var data, comments, fetchedComments;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__.fetchData)(\"https://hacker-news.firebaseio.com/v0/item/\".concat(id, \".json\"));\n\n              case 2:\n                data = _context2.sent;\n                comments = data.kids;\n\n                if (comments) {\n                  _context2.next = 7;\n                  break;\n                }\n\n                _this2.setState({\n                  loading: false,\n                  post: data\n                });\n\n                return _context2.abrupt(\"return\");\n\n              case 7:\n                _context2.next = 9;\n                return Promise.all(comments.map( /*#__PURE__*/function () {\n                  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(comment) {\n                    var fetched;\n                    return regeneratorRuntime.wrap(function _callee$(_context) {\n                      while (1) {\n                        switch (_context.prev = _context.next) {\n                          case 0:\n                            _context.next = 2;\n                            return (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__.fetchData)(\"https://hacker-news.firebaseio.com/v0/item/\".concat(comment, \".json\"));\n\n                          case 2:\n                            fetched = _context.sent;\n                            return _context.abrupt(\"return\", fetched);\n\n                          case 4:\n                          case \"end\":\n                            return _context.stop();\n                        }\n                      }\n                    }, _callee);\n                  }));\n\n                  return function (_x) {\n                    return _ref2.apply(this, arguments);\n                  };\n                }()));\n\n              case 9:\n                fetchedComments = _context2.sent;\n                fetchedComments = fetchedComments.filter(function (comment) {\n                  return !comment.deleted;\n                });\n\n                _this2.setState({\n                  loading: false,\n                  post: data,\n                  comments: fetchedComments\n                });\n\n              case 12:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }))()[\"catch\"](function (err) {\n        var errorMessage = err.message === \"An error occured fetching data\" ? err.message : \"An unexpected error occured\";\n\n        _this2.setState({\n          error: errorMessage,\n          loading: false\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          loading = _this$state.loading,\n          post = _this$state.post,\n          comments = _this$state.comments,\n          error = _this$state.error;\n\n      if (error) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_contexts_theme__WEBPACK_IMPORTED_MODULE_6__.ThemeConsumer, null, function (_ref3) {\n          var theme = _ref3.theme;\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n            className: \"error \".concat(theme)\n          }, error);\n        });\n      }\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Loading__WEBPACK_IMPORTED_MODULE_3__.default, null), !loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_contexts_theme__WEBPACK_IMPORTED_MODULE_6__.ThemeConsumer, null, function (_ref4) {\n        var theme = _ref4.theme;\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n          className: \"post\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", {\n          className: \"post__title\"\n        }, post.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Byline_js__WEBPACK_IMPORTED_MODULE_4__.default, {\n          post: post\n        })), comments.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", {\n          className: \"post__comments-list\"\n        }, comments.map(function (comment) {\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", {\n            key: comment.id\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Comment_js__WEBPACK_IMPORTED_MODULE_5__.default, {\n            comment: comment\n          }));\n        }))));\n      }));\n    }\n  }]);\n\n  return Post;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n\n\n//# sourceURL=webpack://hacker-news-clone/./app/components/Post.js?");

/***/ })

}]);