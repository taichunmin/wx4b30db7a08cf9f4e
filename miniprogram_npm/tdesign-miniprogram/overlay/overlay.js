Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../../../@babel/runtime/helpers/createClass"),
  r = require("../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../@babel/runtime/helpers/inherits"),
  i = require("../../../@babel/runtime/helpers/createSuper"),
  n = require("tslib"),
  o = require("../common/src/index"),
  u = c(require("../common/config")),
  s = c(require("./props")),
  a = c(require("../mixins/transition")),
  l = c(require("../mixins/using-custom-navbar"));

function c(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var p = u.default.prefix,
  d = "".concat(p, "-overlay"),
  f = function(n) {
    t(u, n);
    var o = i(u);

    function u() {
      var e;
      return r(this, u), (e = o.apply(this, arguments)).properties = s.default, e.behaviors = [(0, a.default)(), l.default], e.data = {
        prefix: p,
        classPrefix: d,
        computedStyle: "",
        _zIndex: 11e3
      }, e.observers = {
        backgroundColor: function(e) {
          this.setData({
            computedStyle: e ? "background-color: ".concat(e, ";") : ""
          })
        },
        zIndex: function(e) {
          0 !== e && this.setData({
            _zIndex: e
          })
        }
      }, e.methods = {
        handleClick: function() {
          this.triggerEvent("click", {
            visible: !this.properties.visible
          })
        },
        noop: function() {}
      }, e
    }
    return e(u)
  }(o.SuperComponent),
  b = f = (0, n.__decorate)([(0, o.wxComponent)()], f);
exports.default = b;