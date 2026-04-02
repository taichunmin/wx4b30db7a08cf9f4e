Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../../../@babel/runtime/helpers/createClass"),
  r = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/inherits"),
  t = require("../../../@babel/runtime/helpers/createSuper"),
  s = require("tslib"),
  l = require("../common/src/index"),
  n = c(require("../common/config")),
  a = c(require("./props")),
  o = c(require("../mixins/transition")),
  u = c(require("../mixins/using-custom-navbar"));

function c(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
delete a.default.visible;
var p = n.default.prefix,
  d = "".concat(p, "-popup"),
  b = function(s) {
    i(n, s);
    var l = t(n);

    function n() {
      var e;
      return r(this, n), (e = l.apply(this, arguments)).externalClasses = ["".concat(p, "-class"), "".concat(p, "-class-content")], e.behaviors = [(0, o.default)(), u.default], e.options = {
        multipleSlots: !0
      }, e.properties = a.default, e.data = {
        prefix: p,
        classPrefix: d
      }, e.methods = {
        handleOverlayClick: function() {
          this.properties.closeOnOverlayClick && this.triggerEvent("visible-change", {
            visible: !1,
            trigger: "overlay"
          })
        },
        handleClose: function() {
          this.triggerEvent("visible-change", {
            visible: !1,
            trigger: "close-btn"
          })
        }
      }, e
    }
    return e(n)
  }(l.SuperComponent),
  f = b = (0, s.__decorate)([(0, l.wxComponent)()], b);
exports.default = f;