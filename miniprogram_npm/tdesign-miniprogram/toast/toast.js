Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../../../@babel/runtime/helpers/createClass"),
  i = require("../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../@babel/runtime/helpers/inherits"),
  r = require("../../../@babel/runtime/helpers/createSuper"),
  l = require("tslib"),
  s = require("../common/src/index"),
  a = d(require("../common/config")),
  n = d(require("./props")),
  o = d(require("../mixins/transition")),
  u = require("../common/utils"),
  c = d(require("../mixins/using-custom-navbar"));

function d(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var h = a.default.prefix,
  m = "".concat(h, "-toast"),
  f = function(l) {
    t(a, l);
    var s = r(a);

    function a() {
      var e;
      return i(this, a), (e = s.apply(this, arguments)).externalClasses = ["".concat(h, "-class")], e.options = {
        multipleSlots: !0
      }, e.behaviors = [(0, o.default)(), c.default], e.hideTimer = null, e.data = {
        prefix: h,
        classPrefix: m,
        typeMapIcon: ""
      }, e.properties = n.default, e.lifetimes = {
        detached: function() {
          this.destroyed()
        }
      }, e.pageLifetimes = {
        hide: function() {
          this.hide()
        }
      }, e.methods = {
        show: function(e) {
          var i = this;
          this.hideTimer && clearTimeout(this.hideTimer);
          var t = {
              loading: "loading",
              success: "check-circle",
              warning: "error-circle",
              error: "close-circle"
            } [null == e ? void 0 : e.theme],
            r = {
              direction: n.default.direction.value,
              duration: n.default.duration.value,
              icon: n.default.icon.value,
              message: n.default.message.value,
              placement: n.default.placement.value,
              preventScrollThrough: n.default.preventScrollThrough.value,
              theme: n.default.theme.value
            },
            l = Object.assign(Object.assign(Object.assign({}, r), e), {
              visible: !0,
              isLoading: "loading" === (null == e ? void 0 : e.theme),
              _icon: (0, u.calcIcon)(null != t ? t : e.icon)
            }),
            s = l.duration;
          this.setData(l), s > 0 && (this.hideTimer = setTimeout((function() {
            i.hide()
          }), s))
        },
        hide: function() {
          var e, i;
          this.data.visible && (this.setData({
            visible: !1
          }), null === (i = null === (e = this.data) || void 0 === e ? void 0 : e.close) || void 0 === i || i.call(e), this.triggerEvent("close"))
        },
        destroyed: function() {
          this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null), this.triggerEvent("destory")
        },
        loop: function() {}
      }, e
    }
    return e(a)
  }(s.SuperComponent),
  p = f = (0, l.__decorate)([(0, s.wxComponent)()], f);
exports.default = p;