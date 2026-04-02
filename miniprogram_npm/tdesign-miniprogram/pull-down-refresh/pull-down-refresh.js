Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var t = require("../../../@babel/runtime/helpers/createClass"),
  e = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/inherits"),
  r = require("../../../@babel/runtime/helpers/createSuper"),
  a = require("tslib"),
  s = require("../common/src/index"),
  o = c(require("../common/config")),
  n = c(require("./props")),
  l = require("../common/utils"),
  h = require("../common/version");

function c(t) {
  return t && t.__esModule ? t : {
    default: t
  }
}
var u = o.default.prefix,
  g = "".concat(u, "-pull-down-refresh"),
  f = ["下拉刷新", "松手刷新", "正在刷新", "刷新完成"],
  p = function(a) {
    i(o, a);
    var s = r(o);

    function o() {
      var t;
      return e(this, o), (t = s.apply(this, arguments)).pixelRatio = 1, t.startPoint = null, t.isPulling = !1, t.maxRefreshAnimateTimeFlag = 0, t.closingAnimateTimeFlag = 0, t.refreshStatusTimer = null, t.externalClasses = ["".concat(u, "-class"), "".concat(u, "-class-loading"), "".concat(u, "-class-text"), "".concat(u, "-class-indicator")], t.behaviors = (0, h.canUseProxyScrollView)() ? ["wx://proxy-scroll-view"] : [], t.options = {
        multipleSlots: !0,
        pureDataPattern: /^_/
      }, t.relations = {
        "../back-top/back-top": {
          type: "descendant"
        }
      }, t.properties = n.default, t.data = {
        prefix: u,
        classPrefix: g,
        distanceTop: 0,
        barHeight: 0,
        tipsHeight: 0,
        refreshStatus: -1,
        loosing: !1,
        enableToRefresh: !0,
        scrollTop: 0,
        _maxBarHeight: 0,
        _loadingBarHeight: 0
      }, t.lifetimes = {
        attached: function() {
          var t = this,
            e = l.systemInfo.screenWidth,
            i = this.properties,
            r = i.loadingTexts,
            a = i.maxBarHeight,
            s = i.loadingBarHeight,
            o = Array.isArray(r) && r.length >= 4;
          this.setData({
            _maxBarHeight: (0, l.unitConvert)(a),
            _loadingBarHeight: (0, l.unitConvert)(s),
            loadingTexts: o ? r : f
          }), this.pixelRatio = 750 / e, (0, l.getRect)(this, ".".concat(g)).then((function(e) {
            t.setData({
              distanceTop: e.top
            })
          }))
        },
        detached: function() {
          clearTimeout(this.maxRefreshAnimateTimeFlag), clearTimeout(this.closingAnimateTimeFlag), this.resetTimer()
        }
      }, t.observers = {
        value: function(t) {
          t ? this.doRefresh() : (clearTimeout(this.maxRefreshAnimateTimeFlag), this.data.refreshStatus > 0 && this.setData({
            refreshStatus: 3
          }), this.setData({
            barHeight: 0
          }))
        },
        barHeight: function(t) {
          var e = this;
          this.resetTimer(), 0 === t && -1 !== this.data.refreshStatus && (this.refreshStatusTimer = setTimeout((function() {
            e.setData({
              refreshStatus: -1
            })
          }), 240)), this.setData({
            tipsHeight: Math.min(t, this.data._loadingBarHeight)
          })
        },
        maxBarHeight: function(t) {
          this.setData({
            _maxBarHeight: (0, l.unitConvert)(t)
          })
        },
        loadingBarHeight: function(t) {
          this.setData({
            _loadingBarHeight: (0, l.unitConvert)(t)
          })
        }
      }, t.methods = {
        resetTimer: function() {
          this.refreshStatusTimer && (clearTimeout(this.refreshStatusTimer), this.refreshStatusTimer = null)
        },
        onScrollToBottom: function() {
          this.triggerEvent("scrolltolower")
        },
        onScrollToTop: function() {
          this.setData({
            enableToRefresh: !0
          })
        },
        onScroll: function(t) {
          var e = t.detail.scrollTop;
          this.setData({
            enableToRefresh: 0 === e
          }), this.triggerEvent("scroll", {
            scrollTop: e
          })
        },
        onTouchStart: function(t) {
          if (!this.isPulling && this.data.enableToRefresh && !this.properties.disabled) {
            var e = t.touches;
            if (1 === e.length) {
              var i = e[0],
                r = i.pageX,
                a = i.pageY;
              this.setData({
                loosing: !1
              }), this.startPoint = {
                pageX: r,
                pageY: a
              }, this.isPulling = !0
            }
          }
        },
        onTouchMove: function(t) {
          if (this.startPoint && !this.properties.disabled) {
            var e = t.touches;
            if (1 === e.length) {
              var i = e[0].pageY - this.startPoint.pageY;
              i > 0 && this.setRefreshBarHeight(i)
            }
          }
        },
        onTouchEnd: function(t) {
          if (this.startPoint && !this.properties.disabled) {
            var e = t.changedTouches;
            if (1 === e.length) {
              var i = e[0].pageY - this.startPoint.pageY;
              this.startPoint = null, this.isPulling = !1, this.setData({
                loosing: !0
              }), i > this.data._loadingBarHeight ? (this._trigger("change", {
                value: !0
              }), this.triggerEvent("refresh")) : this.setData({
                barHeight: 0
              })
            }
          }
        },
        onDragStart: function(t) {
          var e = t.detail,
            i = e.scrollTop,
            r = e.scrollLeft;
          this.triggerEvent("dragstart", {
            scrollTop: i,
            scrollLeft: r
          })
        },
        onDragging: function(t) {
          var e = t.detail,
            i = e.scrollTop,
            r = e.scrollLeft;
          this.triggerEvent("dragging", {
            scrollTop: i,
            scrollLeft: r
          })
        },
        onDragEnd: function(t) {
          var e = t.detail,
            i = e.scrollTop,
            r = e.scrollLeft;
          this.triggerEvent("dragend", {
            scrollTop: i,
            scrollLeft: r
          })
        },
        doRefresh: function() {
          var t = this;
          this.properties.disabled || (this.setData({
            barHeight: this.data._loadingBarHeight,
            refreshStatus: 2,
            loosing: !0
          }), this.maxRefreshAnimateTimeFlag = setTimeout((function() {
            t.maxRefreshAnimateTimeFlag = null, 2 === t.data.refreshStatus && (t.triggerEvent("timeout"), t._trigger("change", {
              value: !1
            }))
          }), this.properties.refreshTimeout))
        },
        setRefreshBarHeight: function(t) {
          var e = this,
            i = Math.min(t, this.data._maxBarHeight),
            r = {
              barHeight: i
            };
          return i >= this.data._loadingBarHeight ? r.refreshStatus = 1 : r.refreshStatus = 0, new Promise((function(t) {
            e.setData(r, (function() {
              return t(i)
            }))
          }))
        },
        setScrollTop: function(t) {
          this.setData({
            scrollTop: t
          })
        },
        scrollToTop: function() {
          this.setScrollTop(0)
        }
      }, t
    }
    return t(o)
  }(s.SuperComponent),
  d = p = (0, a.__decorate)([(0, s.wxComponent)()], p);
exports.default = d;