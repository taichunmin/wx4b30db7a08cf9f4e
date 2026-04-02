Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.unitConvert = exports.uniqueFactory = exports.toCamel = exports.throttle = exports.systemInfo = exports.styles = exports.setIcon = exports.rpx2px = exports.nextTick = exports.isOverSize = exports.isIOS = exports.getTreeDepth = exports.getRect = exports.getInstance = exports.getCurrentPage = exports.getCharacterLength = exports.getAnimationFrame = exports.deviceInfo = exports.debounce = exports.classNames = exports.chunk = exports.calcIcon = exports.appBaseInfo = exports.addUnit = void 0;
var e = require("../../../@babel/runtime/helpers/defineProperty");
require("../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../@babel/runtime/helpers/toConsumableArray"),
  r = require("../../../@babel/runtime/helpers/typeof"),
  n = require("./config"),
  o = require("./validator"),
  a = require("./wechat"),
  i = (0, a.getWindowInfo)();
exports.systemInfo = i;
var c = (0, a.getAppBaseInfo)();
exports.appBaseInfo = c;
var s = (0, a.getDeviceInfo)();
exports.deviceInfo = s;
exports.debounce = function(e) {
  var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
  return function() {
    for (var n = this, o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
    t && clearTimeout(t), t = setTimeout((function() {
      e.apply(n, a)
    }), r)
  }
};
exports.throttle = function(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
    n = 0,
    o = null;
  return r || (r = {
      leading: !0
    }),
    function() {
      var a = Date.now();
      n || r.leading || (n = a);
      for (var i = this, c = arguments.length, s = new Array(c), u = 0; u < c; u++) s[u] = arguments[u];
      t - (a - n) <= 0 && (o && (clearTimeout(o), o = null), n = a, e.apply(i, s))
    }
};
exports.classNames = function e() {
  for (var n = {}.hasOwnProperty, o = [], a = arguments.length, i = new Array(a), c = 0; c < a; c++) i[c] = arguments[c];
  return i.forEach((function(a) {
    if (a) {
      var i = r(a);
      if ("string" === i || "number" === i) o.push(a);
      else if (Array.isArray(a) && a.length) {
        var c = e.apply(void 0, t(a));
        c && o.push(c)
      } else if ("object" === i)
        for (var s in a) n.call(a, s) && a[s] && o.push(s)
    }
  })), o.join(" ")
};
exports.styles = function(e) {
  return Object.keys(e).map((function(t) {
    return "".concat(t, ": ").concat(e[t])
  })).join("; ")
};
exports.getAnimationFrame = function(e, t) {
  return e.createSelectorQuery().selectViewport().boundingClientRect().exec((function() {
    t()
  }))
};
exports.getRect = function(e, t) {
  var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  return new Promise((function(n, o) {
    e.createSelectorQuery()[r ? "selectAll" : "select"](t).boundingClientRect((function(e) {
      e ? n(e) : o(e)
    })).exec()
  }))
};
exports.getTreeDepth = function e(t, r) {
  return t.reduce((function(t, n) {
    return n[null != r ? r : "children"] && n[null != r ? r : "children"].length > 0 ? Math.max(t, e(n[null != r ? r : "children"], r) + 1) : Math.max(t, 1)
  }), 0)
};
exports.isIOS = function() {
  var e;
  return !!((null === (e = null == s ? void 0 : s.system) || void 0 === e ? void 0 : e.toLowerCase().search("ios")) + 1)
};
exports.addUnit = function(e) {
  if ((0, o.isDef)(e)) return e = String(e), (0, o.isNumber)(e) ? "".concat(e, "px") : e
};
exports.getCharacterLength = function(e, t, r) {
  var n = String(null != t ? t : "");
  if (0 === n.length) return {
    length: 0,
    characters: ""
  };
  if ("maxcharacter" === e) {
    for (var o = 0, a = 0; a < n.length; a += 1) {
      var i;
      if (o + (i = n.charCodeAt(a) > 127 || 94 === n.charCodeAt(a) ? 2 : 1) > r) return {
        length: o,
        characters: n.slice(0, a)
      };
      o += i
    }
    return {
      length: o,
      characters: n
    }
  }
  if ("maxlength" === e) {
    var c = n.length > r ? r : n.length;
    return {
      length: c,
      characters: n.slice(0, c)
    }
  }
  return {
    length: n.length,
    characters: n
  }
};
exports.chunk = function(e, t) {
  return Array.from({
    length: Math.ceil(e.length / t)
  }, (function(r, n) {
    return e.slice(n * t, n * t + t)
  }))
};
exports.getInstance = function(e, t) {
  if (!e) {
    var r = getCurrentPages(),
      n = r[r.length - 1];
    e = n.$$basePage || n
  }
  return (e ? e.selectComponent(t) : null) || (console.warn("未找到组件,请检查selector是否正确"), null)
};
exports.unitConvert = function(e) {
  var t;
  return "string" == typeof e ? e.includes("rpx") ? parseInt(e, 10) * (null !== (t = null == i ? void 0 : i.screenWidth) && void 0 !== t ? t : 750) / 750 : parseInt(e, 10) : null != e ? e : 0
};
exports.setIcon = function(t, n, o) {
  var a, i, c, s;
  return n ? "string" == typeof n ? (e(a = {}, "".concat(t, "Name"), n), e(a, "".concat(t, "Data"), {}), a) : "object" == r(n) ? (e(i = {}, "".concat(t, "Name"), ""), e(i, "".concat(t, "Data"), n), i) : (e(c = {}, "".concat(t, "Name"), o), e(c, "".concat(t, "Data"), {}), c) : (e(s = {}, "".concat(t, "Name"), ""), e(s, "".concat(t, "Data"), {}), s)
};
exports.toCamel = function(e) {
  return e.replace(/-(\w)/g, (function(e, t) {
    return t.toUpperCase()
  }))
};
exports.getCurrentPage = function() {
  var e = getCurrentPages();
  return e[e.length - 1]
};
exports.uniqueFactory = function(e) {
  var t = 0;
  return function() {
    var r = "".concat(n.prefix, "_").concat(e, "_").concat(t);
    return t += 1, r
  }
};
exports.calcIcon = function(e, t) {
  return e && ((0, o.isBoolean)(e) && t || (0, o.isString)(e)) ? {
    name: (0, o.isBoolean)(e) ? t : e
  } : (0, o.isObject)(e) ? e : null
};
exports.isOverSize = function(e, t) {
  var r;
  if (!t) return !1;
  var n = {
    B: 1,
    KB: 1e3,
    MB: 1e6,
    GB: 1e9
  };
  return e > ("number" == typeof t ? 1e3 * t : (null == t ? void 0 : t.size) * n[null !== (r = null == t ? void 0 : t.unit) && void 0 !== r ? r : "KB"])
};
exports.rpx2px = function(e) {
  return Math.floor(i.windowWidth * e / 750)
};
exports.nextTick = function() {
  return new Promise((function(e) {
    wx.nextTick((function() {
      e()
    }))
  }))
};