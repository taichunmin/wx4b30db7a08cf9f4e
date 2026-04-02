Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.isBoolean = function(t) {
  return "boolean" == typeof t
}, exports.isDef = function(t) {
  return !n(t) && !e(t)
}, exports.isFunction = function(t) {
  return "function" == typeof t
}, exports.isNull = void 0, exports.isNumber = function(t) {
  return /^\d+(\.\d+)?$/.test(t)
}, exports.isObject = function(e) {
  var n = t(e);
  return null !== e && ("object" === n || "function" === n)
}, exports.isPlainObject = function(e) {
  return null !== e && "object" == t(e) && "[object Object]" === Object.prototype.toString.call(e)
}, exports.isUndefined = exports.isString = void 0;
var t = require("../../../@babel/runtime/helpers/typeof");
exports.isString = function(t) {
  return "string" == typeof t
};
var e = function(t) {
  return null === t
};
exports.isNull = e;
var n = function(t) {
  return void 0 === t
};
exports.isUndefined = n;