Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var t = require("../../../@babel/runtime/helpers/slicedToArray"),
  e = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/createClass"),
  n = require("../../../@babel/runtime/helpers/inherits"),
  a = require("../../../@babel/runtime/helpers/createSuper"),
  s = require("tslib"),
  o = require("../common/src/index"),
  r = h(require("../common/config")),
  c = h(require("../message/props")),
  l = require("../common/utils"),
  u = require("../common/validator");

function h(t) {
  return t && t.__esModule ? t : {
    default: t
  }
}
var m = r.default.prefix,
  f = "".concat(m, "-message"),
  d = {
    info: "info-circle-filled",
    success: "check-circle-filled",
    warning: "info-circle-filled",
    error: "error-circle-filled"
  },
  p = function(s) {
    n(r, s);
    var o = a(r);

    function r() {
      var t;
      return e(this, r), (t = o.apply(this, arguments)).externalClasses = ["".concat(m, "-class"), "".concat(m, "-class-content"), "".concat(m, "-class-icon"), "".concat(m, "-class-link"), "".concat(m, "-class-close-btn")], t.options = {
        multipleSlots: !0
      }, t.properties = Object.assign({}, c.default), t.data = {
        prefix: m,
        classPrefix: f,
        loop: -1,
        animation: [],
        showAnimation: [],
        wrapTop: -999,
        fadeClass: ""
      }, t.closeTimeoutContext = 0, t.nextAnimationContext = 0, t.resetAnimation = wx.createAnimation({
        duration: 0,
        timingFunction: "linear"
      }), t.observers = {
        marquee: function(t) {
          "{}" !== JSON.stringify(t) && "true" !== JSON.stringify(t) || this.setData({
            marquee: {
              speed: 50,
              loop: -1,
              delay: 0
            }
          })
        },
        "icon, theme": function(t, e) {
          this.setData({
            _icon: (0, l.calcIcon)(t, d[e])
          })
        },
        link: function(t) {
          var e = (0, u.isObject)(t) ? Object.assign({}, t) : {
            content: t
          };
          this.setData({
            _link: e
          })
        },
        closeBtn: function(t) {
          this.setData({
            _closeBtn: (0, l.calcIcon)(t, "close")
          })
        }
      }, t.lifetimes = {
        ready: function() {
          this.memoInitialData()
        },
        detached: function() {
          this.clearMessageAnimation()
        }
      }, t
    }
    return i(r, [{
      key: "memoInitialData",
      value: function() {
        this.initialData = Object.assign(Object.assign({}, this.properties), this.data)
      }
    }, {
      key: "resetData",
      value: function(t) {
        this.setData(Object.assign({}, this.initialData), t)
      }
    }, {
      key: "checkAnimation",
      value: function() {
        var e = this,
          i = this.properties.marquee;
        if (i && 0 !== i.loop) {
          var n = i.speed;
          if (this.data.loop > 0) this.data.loop -= 1;
          else if (0 === this.data.loop) return void this.setData({
            animation: this.resetAnimation.translateX(0).step().export()
          });
          this.nextAnimationContext && this.clearMessageAnimation();
          var a = "#".concat(f, "__text-wrap"),
            s = "#".concat(f, "__text");
          Promise.all([(0, l.getRect)(this, s), (0, l.getRect)(this, a)]).then((function(i) {
            var a = t(i, 2),
              s = a[0],
              o = a[1];
            e.setData({
              animation: e.resetAnimation.translateX(o.width).step().export()
            }, (function() {
              var t = (s.width + o.width) / n * 1e3,
                i = wx.createAnimation({
                  duration: t
                }).translateX(-s.width).step().export();
              setTimeout((function() {
                e.nextAnimationContext = setTimeout(e.checkAnimation.bind(e), t), e.setData({
                  animation: i
                })
              }), 20)
            }))
          }))
        }
      }
    }, {
      key: "clearMessageAnimation",
      value: function() {
        clearTimeout(this.nextAnimationContext), this.nextAnimationContext = 0
      }
    }, {
      key: "show",
      value: function() {
        var t = this,
          e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          i = this.properties,
          n = i.duration,
          a = i.marquee,
          s = i.offset,
          o = i.id;
        this.setData({
          visible: !0,
          loop: a.loop || this.data.loop,
          fadeClass: "".concat(f, "__fade"),
          wrapTop: (0, l.unitConvert)(s[0]) + e
        }), this.reset(), this.checkAnimation(), n && n > 0 && (this.closeTimeoutContext = setTimeout((function() {
          t.hide(), t.triggerEvent("duration-end", {
            self: t
          })
        }), n)), (0, l.getRect)(this, "#".concat(o || f)).then((function(e) {
          t.setData({
            height: e.height
          }, (function() {
            t.setData({
              fadeClass: ""
            })
          }))
        }))
      }
    }, {
      key: "hide",
      value: function() {
        var t = this;
        this.reset(), this.setData({
          fadeClass: "".concat(f, "__fade")
        }), setTimeout((function() {
          t.setData({
            visible: !1,
            animation: []
          })
        }), 500), "function" == typeof this.onHide && this.onHide()
      }
    }, {
      key: "reset",
      value: function() {
        this.nextAnimationContext && this.clearMessageAnimation(), clearTimeout(this.closeTimeoutContext), this.closeTimeoutContext = 0
      }
    }, {
      key: "handleClose",
      value: function() {
        this.hide(), this.triggerEvent("close-btn-click")
      }
    }, {
      key: "handleLinkClick",
      value: function() {
        this.triggerEvent("link-click")
      }
    }]), r
  }(o.SuperComponent),
  v = p = (0, s.__decorate)([(0, o.wxComponent)()], p);
exports.default = v;