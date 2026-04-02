Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = o, exports.hideToast = function() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    o = t.context,
    s = t.selector,
    n = void 0 === s ? "#t-toast" : s,
    r = (0, e.getInstance)(o, n);
  r && r.hide()
}, exports.showToast = function() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  o(t)
};
var t = require("tslib"),
  e = require("../common/utils");

function o(o) {
  var s, n = o.context,
    r = o.selector,
    i = void 0 === r ? "#t-toast" : r,
    a = (0, t.__rest)(o, ["context", "selector"]),
    c = (0, e.getInstance)(n, i);
  c && c.show(Object.assign(Object.assign({}, a), {
    duration: null !== (s = a.duration) && void 0 !== s ? s : 2e3
  }))
}