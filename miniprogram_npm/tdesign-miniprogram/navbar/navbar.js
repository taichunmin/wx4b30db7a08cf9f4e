Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var t = require("../../../@babel/runtime/helpers/slicedToArray");
require("../../../@babel/runtime/helpers/Objectentries");
var e = require("../../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../../@babel/runtime/helpers/createClass"),
  i = require("../../../@babel/runtime/helpers/inherits"),
  a = require("../../../@babel/runtime/helpers/createSuper"),
  c = require("tslib"),
  r = require("../common/src/index"),
  s = require("../common/utils"),
  o = u(require("../common/config")),
  l = u(require("./props"));

function u(t) {
  return t && t.__esModule ? t : {
    default: t
  }
}
var h = o.default.prefix,
  f = "".concat(h, "-navbar"),
  d = function(c) {
    i(o, c);
    var r = a(o);

    function o() {
      var n;
      return e(this, o), (n = r.apply(this, arguments)).externalClasses = ["".concat(h, "-class"), "".concat(h, "-class-placeholder"), "".concat(h, "-class-content"), "".concat(h, "-class-title"), "".concat(h, "-class-left"), "".concat(h, "-class-center"), "".concat(h, "-class-left-icon"), "".concat(h, "-class-home-icon"), "".concat(h, "-class-capsule"), "".concat(h, "-class-nav-btn")], n.timer = null, n.options = {
        multipleSlots: !0
      }, n.properties = l.default, n.observers = {
        visible: function(t) {
          var e = this,
            n = this.properties.animation,
            i = "".concat(f).concat(t ? "--visible" : "--hide");
          this.setData({
            visibleClass: "".concat(i).concat(n ? "-animation" : "")
          }), this.timer && clearTimeout(this.timer), n && (this.timer = setTimeout((function() {
            e.setData({
              visibleClass: i
            })
          }), 300))
        },
        "title,titleMaxLength": function() {
          var t = this.properties.title,
            e = this.properties.titleMaxLength || Number.MAX_SAFE_INTEGER,
            n = t.slice(0, e);
          e < t.length && (n += "..."), this.setData({
            showTitle: n
          })
        }
      }, n.data = {
        prefix: h,
        classPrefix: f,
        boxStyle: "",
        showTitle: "",
        hideLeft: !1,
        hideCenter: !1,
        _menuRect: null,
        _leftRect: null,
        _boxStyle: {}
      }, n.methods = {
        initStyle: function() {
          this.getMenuRect();
          var t = this.data,
            e = t._menuRect,
            n = t._leftRect;
          if (e && n && s.systemInfo) {
            var i = {
              "--td-navbar-padding-top": "".concat(s.systemInfo.statusBarHeight, "px"),
              "--td-navbar-right": s.systemInfo.windowWidth - e.left + "px",
              "--td-navbar-left-max-width": "".concat(e.left, "px"),
              "--td-navbar-capsule-height": "".concat(e.height, "px"),
              "--td-navbar-capsule-width": "".concat(e.width, "px"),
              "--td-navbar-height": "".concat(2 * (e.top - s.systemInfo.statusBarHeight) + e.height, "px")
            };
            this.calcCenterStyle(n, e, i)
          }
        },
        calcCenterStyle: function(e, n, i) {
          var a = Math.max(e.right, s.systemInfo.windowWidth - n.left),
            c = Object.assign(Object.assign({}, i), {
              "--td-navbar-center-left": "".concat(a, "px"),
              "--td-navbar-center-width": "".concat(Math.max(n.left - a, 0), "px")
            }),
            r = Object.entries(c).map((function(e) {
              var n = t(e, 2),
                i = n[0],
                a = n[1];
              return "".concat(i, ": ").concat(a)
            })).join("; ");
          this.setData({
            boxStyle: r,
            _boxStyle: c
          })
        },
        getLeftRect: function() {
          var t = this;
          (0, s.getRect)(this, ".".concat(f, "__left")).then((function(e) {
            e.right > t.data._leftRect.right && t.calcCenterStyle(e, t.data._menuRect, t.data._boxStyle)
          }))
        },
        getMenuRect: function() {
          if (wx.getMenuButtonBoundingClientRect) {
            var t = wx.getMenuButtonBoundingClientRect();
            this.setData({
              _menuRect: t,
              _leftRect: {
                right: s.systemInfo.windowWidth - t.left
              }
            })
          }
        },
        onMenuButtonBoundingClientRectWeightChange: function() {
          var t = this;
          wx.onMenuButtonBoundingClientRectWeightChange && wx.onMenuButtonBoundingClientRectWeightChange((function(e) {
            return t.queryElements(e)
          }))
        },
        offMenuButtonBoundingClientRectWeightChange: function() {
          var t = this;
          wx.offMenuButtonBoundingClientRectWeightChange && wx.offMenuButtonBoundingClientRectWeightChange((function(e) {
            return t.queryElements(e)
          }))
        },
        queryElements: function(e) {
          var n = this;
          Promise.all([(0, s.getRect)(this, ".".concat(this.data.classPrefix, "__left")), (0, s.getRect)(this, ".".concat(this.data.classPrefix, "__center"))]).then((function(i) {
            var a = t(i, 2),
              c = a[0],
              r = a[1];
            Math.round(c.right) > e.left ? n.setData({
              hideLeft: !0,
              hideCenter: !0
            }) : Math.round(r.right) > e.left ? n.setData({
              hideLeft: !1,
              hideCenter: !0
            }) : n.setData({
              hideLeft: !1,
              hideCenter: !1
            })
          }))
        },
        goBack: function() {
          var t = this.data.delta,
            e = this;
          this.triggerEvent("go-back"), t > 0 && wx.navigateBack({
            delta: t,
            fail: function(t) {
              e.triggerEvent("fail", t)
            },
            complete: function(t) {
              e.triggerEvent("complete", t)
            },
            success: function(t) {
              e.triggerEvent("success", t)
            }
          })
        }
      }, n
    }
    return n(o, [{
      key: "attached",
      value: function() {
        this.initStyle(), this.getLeftRect(), this.onMenuButtonBoundingClientRectWeightChange()
      }
    }, {
      key: "detached",
      value: function() {
        this.offMenuButtonBoundingClientRectWeightChange()
      }
    }]), o
  }(r.SuperComponent),
  g = d = (0, c.__decorate)([(0, r.wxComponent)()], d);
exports.default = g;