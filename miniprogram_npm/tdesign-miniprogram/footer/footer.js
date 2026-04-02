Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../../../@babel/runtime/helpers/createClass"),
  r = require("../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../@babel/runtime/helpers/inherits"),
  a = require("../../../@babel/runtime/helpers/createSuper"),
  i = require("tslib"),
  s = require("../common/src/index"),
  u = n(require("../common/config")),
  l = n(require("./props"));

function n(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var o = u.default.prefix,
  c = "".concat(o, "-footer"),
  p = function(i) {
    t(u, i);
    var s = a(u);

    function u() {
      var e;
      return r(this, u), (e = s.apply(this, arguments)).externalClasses = ["".concat(o, "-class")], e.properties = l.default, e.data = {
        prefix: o,
        classPrefix: c
      }, e
    }
    return e(u)
  }(s.SuperComponent),
  f = p = (0, i.__decorate)([(0, s.wxComponent)()], p);
exports.default = f;