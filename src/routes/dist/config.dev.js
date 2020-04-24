"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lazyLoad = _interopRequireDefault(require("./lazyLoad"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = [{
  path: '/Home/AccountManagement',
  component: (0, _lazyLoad["default"])('AccountManagement')
}, {
  path: '/Home/ContentSetting',
  component: (0, _lazyLoad["default"])('ContentSetting')
}, {
  path: '/Home/Feedback',
  component: (0, _lazyLoad["default"])('Feedback')
}, {
  path: '/Home/HomePage',
  component: (0, _lazyLoad["default"])('HomePage')
}, {
  path: '/Home/OnlineTest',
  component: (0, _lazyLoad["default"])('OnlineTest')
}, {
  path: '/Home/Product',
  component: (0, _lazyLoad["default"])('Product')
}, {
  path: '/Home/ProjectManagement',
  component: (0, _lazyLoad["default"])('ProjectManagement')
}, {
  path: '/Home/Solution',
  component: (0, _lazyLoad["default"])('Solution')
}, {
  path: '/Home/SystemManagement',
  component: (0, _lazyLoad["default"])('SystemManagement')
}, {
  path: '/Home/TestData',
  component: (0, _lazyLoad["default"])('TestData')
}, {
  path: '/Home/UserManagement',
  component: (0, _lazyLoad["default"])('UserManagement')
}];
exports["default"] = _default;