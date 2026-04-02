Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var t = require("../../../@babel/runtime/helpers/slicedToArray"),
  i = require("../../../@babel/runtime/helpers/createClass"),
  e = require("../../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../../@babel/runtime/helpers/inherits"),
  r = require("../../../@babel/runtime/helpers/createSuper"),
  a = require("tslib"),
  o = require("../common/src/index"),
  c = require("../common/utils"),
  s = l(require("./props"));

function l(t) {
  return t && t.__esModule ? t : {
    default: t
  }
}
var u = l(require("../common/config")).default.prefix,
  h = "".concat(u, "-notice-bar"),
  f = {
    info: "info-circle-filled",
    success: "check-circle-filled",
    warning: "info-circle-filled",
    error: "error-circle-filled"
  },
  m = function(a) {
    n(l, a);
    var o = r(l);

    function l() {
      var i;
      return e(this, l), (i = o.apply(this, arguments)).externalClasses = ["".concat(u, "-class"), "".concat(u, "-class-content"), "".concat(u, "-class-prefix-icon"), "".concat(u, "-class-operation"), "".concat(u, "-class-suffix-icon")], i.options = {
        multipleSlots: !0,
        pureDataPattern: /^__/
      }, i.properties = s.default, i.data = {
        prefix: u,
        classPrefix: h,
        loop: -1,
        __ready: !1
      }, i.observers = {
        marquee: function(t) {
          "{}" !== JSON.stringify(t) && "true" !== JSON.stringify(t) || this.setData({
            marquee: {
              speed: 50,
              loop: -1,
              delay: 0
            }
          })
        },
        visible: function(t) {
          this.data.__ready && (t ? this.show() : this.clearNoticeBarAnimation())
        },
        prefixIcon: function(t) {
          this.setPrefixIcon(t)
        },
        suffixIcon: function(t) {
          this.setData({
            _suffixIcon: (0, c.calcIcon)(t)
          })
        },
        content: function() {
          this.data.__ready && (this.clearNoticeBarAnimation(), this.initAnimation())
        }
      }, i.lifetimes = {
        created: function() {
          this.resetAnimation = wx.createAnimation({
            duration: 0,
            timingFunction: "linear"
          })
        },
        detached: function() {
          this.clearNoticeBarAnimation()
        },
        ready: function() {
          this.show(), this.setData({
            __ready: !0
          })
        }
      }, i.methods = {
        initAnimation: function() {
          var i = this,
            e = ".".concat(h, "__content-wrap"),
            n = ".".concat(h, "__content");
          (0, c.getAnimationFrame)(this, (function() {
            Promise.all([(0, c.getRect)(i, n), (0, c.getRect)(i, e)]).then((function(e) {
              var n = t(e, 2),
                r = n[0],
                a = n[1],
                o = i.properties.marquee;
              if (null != r && null != a && r.width && a.width && !1 !== o && (o || a.width < r.width)) {
                var c = o.speed || 50,
                  s = o.delay || 0,
                  l = (a.width + r.width) / c * 1e3,
                  u = r.width / c * 1e3;
                i.setData({
                  wrapWidth: Number(a.width),
                  nodeWidth: Number(r.width),
                  animationDuration: l,
                  delay: s,
                  loop: o.loop - 1,
                  firstAnimationDuration: u
                }), 0 !== o.loop && i.startScrollAnimation(!0)
              }
            })).catch((function() {}))
          }))
        },
        startScrollAnimation: function() {
          var t = this,
            i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.clearNoticeBarAnimation();
          var e = this.data,
            n = e.wrapWidth,
            r = e.nodeWidth,
            a = e.firstAnimationDuration,
            o = e.animationDuration,
            s = e.delay,
            l = i ? s : 0,
            u = i ? a : o;
          this.setData({
            animationData: this.resetAnimation.translateX(i ? 0 : n).step().export()
          }), (0, c.getAnimationFrame)(this, (function() {
            t.setData({
              animationData: wx.createAnimation({
                duration: u,
                timingFunction: "linear",
                delay: l
              }).translateX(-r).step().export()
            })
          })), this.nextAnimationContext = setTimeout((function() {
            t.data.loop > 0 ? (t.data.loop -= 1, t.startScrollAnimation()) : 0 === t.data.loop ? t.setData({
              animationData: t.resetAnimation.translateX(0).step().export()
            }) : t.data.loop < 0 && t.startScrollAnimation()
          }), u + l)
        },
        show: function() {
          this.clearNoticeBarAnimation(), this.setPrefixIcon(this.properties.prefixIcon), this.initAnimation()
        },
        clearNoticeBarAnimation: function() {
          this.nextAnimationContext && clearTimeout(this.nextAnimationContext), this.nextAnimationContext = null
        },
        setPrefixIcon: function(t) {
          var i = this.properties.theme;
          this.setData({
            _prefixIcon: (0, c.calcIcon)(t, f[i])
          })
        },
        onChange: function(t) {
          var i = t.detail,
            e = i.current,
            n = i.source;
          this.triggerEvent("change", {
            current: e,
            source: n
          })
        },
        clickPrefixIcon: function() {
          this.triggerEvent("click", {
            trigger: "prefix-icon"
          })
        },
        clickContent: function() {
          this.triggerEvent("click", {
            trigger: "content"
          })
        },
        clickSuffixIcon: function() {
          this.triggerEvent("click", {
            trigger: "suffix-icon"
          })
        },
        clickOperation: function() {
          this.triggerEvent("click", {
            trigger: "operation"
          })
        }
      }, i
    }
    return i(l)
  }(o.SuperComponent),
  d = m = (0, a.__decorate)([(0, o.wxComponent)()], m);
exports.default = d;