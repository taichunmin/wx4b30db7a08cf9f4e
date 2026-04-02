Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../@babel/runtime/helpers/createClass"),
  r = require("../../../@babel/runtime/helpers/inherits"),
  i = require("../../../@babel/runtime/helpers/createSuper"),
  s = require("tslib"),
  a = require("../common/src/index"),
  o = l(require("../common/config")),
  n = l(require("./props"));

function l(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var u = o.default.prefix,
  c = "".concat(u, "-loading"),
  p = function(s) {
    r(o, s);
    var a = i(o);

    function o() {
      var t;
      return e(this, o), (t = a.apply(this, arguments)).externalClasses = ["".concat(u, "-class"), "".concat(u, "-class-text"), "".concat(u, "-class-indicator")], t.data = {
        prefix: u,
        classPrefix: c,
        show: !0
      }, t.options = {
        multipleSlots: !0
      }, t.properties = Object.assign({}, n.default), t.timer = null, t.observers = {
        loading: function(e) {
          var t = this,
            r = this.properties.delay;
          this.timer && clearTimeout(this.timer), e && r ? this.timer = setTimeout((function() {
            t.setData({
              show: e
            }), t.timer = null
          }), r) : this.setData({
            show: e
          })
        }
      }, t.lifetimes = {
        detached: function() {
          clearTimeout(this.timer)
        }
      }, t
    }
    return t(o, [{
      key: "refreshPage",
      value: function() {
        this.triggerEvent("reload")
      }
    }]), o
  }(a.SuperComponent),
  h = p = (0, s.__decorate)([(0, a.wxComponent)()], p);
exports.default = h;