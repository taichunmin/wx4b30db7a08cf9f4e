Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.canIUseFormFieldButton = function() {
  return n("2.10.3")
}, exports.canUseProxyScrollView = function() {
  return n("2.19.2")
}, exports.canUseVirtualHost = function() {
  return n("2.19.2")
}, exports.compareVersion = t;
var r, e = require("./wechat");

function t(r, e) {
  r = r.split("."), e = e.split(".");
  for (var t = Math.max(r.length, e.length); r.length < t;) r.push("0");
  for (; e.length < t;) e.push("0");
  for (var n = 0; n < t; n += 1) {
    var o = parseInt(r[n], 10),
      s = parseInt(e[n], 10);
    if (o > s) return 1;
    if (o < s) return -1
  }
  return 0
}

function n(n) {
  return t((null == r && (r = (0, e.getAppBaseInfo)()), r).SDKVersion, n) >= 0
}