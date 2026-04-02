Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.getBackgroundColor = function(r) {
  if ("string" == typeof r) return r;
  if (Array.isArray(r)) return r[0] && "#" === r[0][0] && r.unshift("90deg"), "linear-gradient( ".concat(r.join(","), " )");
  var e = r.from,
    n = r.to,
    o = r.direction,
    i = void 0 === o ? "to right" : o,
    a = (0, t.__rest)(r, ["from", "to", "direction"]),
    c = Object.keys(a);
  if (c.length) return c = c.sort((function(t, r) {
    return parseFloat(t.substr(0, t.length - 1)) - parseFloat(r.substr(0, r.length - 1))
  })), "linear-gradient(".concat(i, ", ").concat(c.map((function(t) {
    return "".concat(a[t], " ").concat(t)
  })).join(","), ")");
  return "linear-gradient(".concat(i, ", ").concat(e, ", ").concat(n, ")")
};
var t = require("tslib");