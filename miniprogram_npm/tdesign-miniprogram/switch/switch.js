Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../../../@babel/runtime/helpers/slicedToArray"),
  r = require("../../../@babel/runtime/helpers/createClass"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  a = require("../../../@babel/runtime/helpers/inherits"),
  s = require("../../../@babel/runtime/helpers/createSuper"),
  l = require("tslib"),
  i = require("../common/src/index"),
  u = n(require("../common/config")),
  o = n(require("./props"));

function n(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var c = u.default.prefix,
  d = "".concat(c, "-switch"),
  h = function(l) {
    a(u, l);
    var i = s(u);

    function u() {
      var r;
      return t(this, u), (r = i.apply(this, arguments)).externalClasses = ["t-class", "t-class-label", "t-class-body", "t-class-dot"], r.behaviors = ["wx://form-field"], r.properties = o.default, r.data = {
        prefix: c,
        classPrefix: d,
        checked: !1
      }, r.controlledProps = [{
        key: "value",
        event: "change"
      }], r.observers = {
        value: function(r) {
          var t = e(this.data.customValue, 1)[0];
          this.setData({
            checked: r === t
          })
        }
      }, r.methods = {
        handleSwitch: function() {
          var r = this.data,
            t = r.loading,
            a = r.disabled,
            s = r.value,
            l = r.customValue,
            i = e(l, 2),
            u = i[0],
            o = i[1];
          t || a || this._trigger("change", {
            value: s === u ? o : u
          })
        }
      }, r
    }
    return r(u)
  }(i.SuperComponent),
  p = h = (0, l.__decorate)([(0, i.wxComponent)()], h);
exports.default = p;