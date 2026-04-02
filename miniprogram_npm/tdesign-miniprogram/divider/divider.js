Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../../../@babel/runtime/helpers/createClass"),
  r = require("../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../@babel/runtime/helpers/inherits"),
  i = require("../../../@babel/runtime/helpers/createSuper"),
  s = require("tslib"),
  o = require("../common/src/index"),
  l = a(require("../common/config")),
  n = a(require("./props"));

function a(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var u = l.default.prefix,
  c = "".concat(u, "-divider"),
  p = function(s) {
    t(l, s);
    var o = i(l);

    function l() {
      var e;
      return r(this, l), (e = o.apply(this, arguments)).externalClasses = ["".concat(u, "-class"), "".concat(u, "-class-content")], e.options = {
        multipleSlots: !0
      }, e.properties = n.default, e.data = {
        prefix: u,
        classPrefix: c
      }, e.observers = {
        lineColor: function() {
          this.setStyle()
        }
      }, e.methods = {
        setStyle: function() {
          var e = this.properties.lineColor,
            r = "" + (e ? "border-color: ".concat(e, ";") : "");
          this.setData({
            dividerStyle: r
          })
        }
      }, e
    }
    return e(l)
  }(o.SuperComponent),
  d = p = (0, s.__decorate)([(0, o.wxComponent)()], p);
exports.default = d;