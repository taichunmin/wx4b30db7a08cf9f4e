Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../../../@babel/runtime/helpers/typeof"),
  r = require("../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../@babel/runtime/helpers/createClass"),
  s = require("../../../@babel/runtime/helpers/inherits"),
  a = require("../../../@babel/runtime/helpers/createSuper"),
  o = require("tslib"),
  i = require("../common/src/index"),
  u = p(require("../common/config")),
  c = p(require("./props")),
  n = require("./utils"),
  l = require("../common/utils");

function p(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var h = u.default.prefix,
  f = "".concat(h, "-progress"),
  m = function(o) {
    s(u, o);
    var i = a(u);

    function u() {
      var t;
      return r(this, u), (t = i.apply(this, arguments)).externalClasses = ["".concat(h, "-class"), "".concat(h, "-class-bar"), "".concat(h, "-class-label")], t.options = {
        multipleSlots: !0
      }, t.properties = c.default, t.data = {
        prefix: h,
        classPrefix: f,
        colorBar: "",
        heightBar: "",
        computedStatus: "",
        computedProgress: 0,
        isIOS: !1
      }, t.observers = {
        percentage: function(e) {
          e = Math.max(0, Math.min(e, 100)), this.setData({
            computedStatus: 100 === e ? "success" : "",
            computedProgress: e
          })
        },
        color: function(r) {
          this.setData({
            colorBar: (0, n.getBackgroundColor)(r),
            colorCircle: "object" == e(r) ? "" : r
          })
        },
        strokeWidth: function(e) {
          if (!e) return "";
          this.setData({
            heightBar: (0, l.unitConvert)(e)
          })
        },
        trackColor: function(e) {
          this.setData({
            bgColorBar: e
          })
        }
      }, t
    }
    return t(u, [{
      key: "attached",
      value: function() {
        var e = (0, l.isIOS)();
        this.setData({
          isIOS: e
        })
      }
    }]), u
  }(i.SuperComponent),
  d = m = (0, o.__decorate)([(0, i.wxComponent)()], m);
exports.default = d;