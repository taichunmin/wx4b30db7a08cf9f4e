Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.toObject = exports.iterateInheritedPrototype = exports.getPrototypeOf = void 0;
var t = require("../../common/validator"),
  e = function(t) {
    return Object.getPrototypeOf ? Object.getPrototypeOf(t) : t.__proto__
  };
exports.getPrototypeOf = e;
var r = function(t, r, o) {
  for (var n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], i = r.prototype || r, c = o.prototype || o; i && (n || i !== c) && !1 !== t(i) && i !== c;) i = e(i)
};
exports.iterateInheritedPrototype = r;
exports.toObject = function(e) {
  var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    n = {};
  if (!(0, t.isObject)(e)) return n;
  var i = o.excludes || ["constructor"],
    c = o.enumerable,
    p = void 0 === c || c,
    a = o.configurable,
    f = void 0 === a ? 0 : a,
    s = o.writable,
    u = void 0 === s ? 0 : s,
    O = {};
  return 0 !== p && (O.enumerable = p), 0 !== f && (O.configurable = f), 0 !== u && (O.writable = u), r((function(t) {
    Object.getOwnPropertyNames(t).forEach((function(e) {
      if (!(i.indexOf(e) >= 0 || Object.prototype.hasOwnProperty.call(n, e))) {
        var r = Object.getOwnPropertyDescriptor(t, e);
        ["get", "set", "value"].forEach((function(t) {
          if ("function" == typeof r[t]) {
            var e = r[t];
            r[t] = function() {
              for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
              return e.apply(Object.prototype.hasOwnProperty.call(o, "bindTo") ? o.bindTo : this, r)
            }
          }
        })), Object.defineProperty(n, e, Object.assign(Object.assign({}, r), O))
      }
    }))
  }), e, o.till || Object, !1), n
};