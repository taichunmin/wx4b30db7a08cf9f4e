Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var t = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/createClass"),
  n = require("../../../@babel/runtime/helpers/inherits"),
  r = require("../../../@babel/runtime/helpers/createSuper"),
  a = require("tslib"),
  s = require("../common/src/index"),
  c = d(require("./props")),
  o = d(require("../common/config")),
  h = d(require("../mixins/touch")),
  u = require("../common/utils"),
  l = require("../common/wechat");

function d(t) {
  return t && t.__esModule ? t : {
    default: t
  }
}
var f = o.default.prefix,
  p = "".concat(f, "-tabs"),
  b = (0, u.uniqueFactory)("tabs"),
  v = function(s) {
    n(d, s);
    var o = r(d);

    function d() {
      var i;
      return e(this, d), (i = o.apply(this, arguments)).options = {
        pureDataPattern: /^currentLabels$/
      }, i.behaviors = [h.default], i.externalClasses = ["".concat(f, "-class"), "".concat(f, "-class-item"), "".concat(f, "-class-active"), "".concat(f, "-class-track"), "".concat(f, "-class-content")], i.relations = {
        "../tab-panel/tab-panel": {
          type: "descendant",
          linked: function(t) {
            this.children.push(t), this.initChildId(), t.index = this.children.length - 1, this.updateTabs()
          },
          unlinked: function(t) {
            var e = this;
            this.children = this.children.filter((function(e) {
              return e.index !== t.index
            })), this.updateTabs((function() {
              return e.setTrack()
            })), this.initChildId()
          }
        }
      }, i.properties = c.default, i.controlledProps = [{
        key: "value",
        event: "change"
      }], i.observers = {
        value: function(t) {
          t !== this.getCurrentName() && this.setCurrentIndexByName(t)
        }
      }, i.data = {
        prefix: f,
        classPrefix: p,
        tabs: [],
        currentLabels: [],
        currentIndex: -1,
        trackOption: {
          lineWidth: 0,
          distance: 0,
          isInit: !0
        },
        offset: 0,
        scrollLeft: 0,
        tabID: "",
        placement: "top"
      }, i.lifetimes = {
        created: function() {
          this.children = this.children || []
        },
        attached: function() {
          var t = this;
          wx.nextTick((function() {
            t.setTrack()
          })), (0, u.getRect)(this, ".".concat(p)).then((function(e) {
            t.containerWidth = e.width
          })), this.setData({
            tabID: b()
          })
        }
      }, i.methods = {
        onScroll: function(t) {
          var e = t.detail.scrollLeft;
          this.setData({
            scrollLeft: e
          })
        },
        updateTabs: function(t) {
          var e = this.children.map((function(t) {
            return t.data
          }));
          e.forEach((function(t) {
            "string" == typeof t.icon && (t.icon = {
              name: t.icon
            })
          })), this.setData({
            tabs: e
          }, t), this.setCurrentIndexByName(this.properties.value)
        },
        setCurrentIndexByName: function(t) {
          var e = this.children.findIndex((function(e) {
            return e.getComputedName() === "".concat(t)
          }));
          e > -1 && this.setCurrentIndex(e)
        },
        setCurrentIndex: function(t) {
          var e = this;
          if (!(t <= -1 || t >= this.children.length)) {
            var i = [];
            this.children.forEach((function(n, r) {
              var a = t === r;
              a === n.data.active && n.initialized || n.render(a, e), i.push(n.data.label)
            }));
            var n = this.data,
              r = n.currentIndex,
              a = n.currentLabels;
            r === t && a.join("") === i.join("") || this.setData({
              currentIndex: t,
              currentLabels: i
            }, (function() {
              e.setTrack()
            }))
          }
        },
        getCurrentName: function() {
          if (this.children) {
            var t = this.children[this.data.currentIndex];
            if (t) return t.getComputedName()
          }
        },
        calcScrollOffset: function(t, e, i, n) {
          return n + e - .5 * t + i / 2
        },
        getTabHeight: function() {
          return (0, u.getRect)(this, ".".concat(p))
        },
        getTrackSize: function() {
          var t = this,
            e = this.properties.bottomLineMode,
            i = {
              fixed: ".".concat(f, "-tabs__track"),
              auto: ".".concat(f, "-tabs__item--active .").concat(f, "-tabs__item-inner"),
              full: ".".concat(f, "-tabs__item--active")
            };
          return new Promise((function(n, r) {
            t.trackWidth ? n(t.trackWidth) : (0, u.getRect)(t, i[e] || i.fixed).then((function(t) {
              t && n(t.width)
            })).catch(r)
          }))
        },
        setTrack: function() {
          return (0, a.__awaiter)(this, void 0, void 0, t().mark((function e() {
            var i, n, r, a, s, c, o, h, d, b, v = this;
            return t().wrap((function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (this.children) {
                    t.next = 3;
                    break
                  }
                  return t.abrupt("return");
                case 3:
                  if ((i = this.data.currentIndex) <= -1) {
                    t.next = 25;
                    break
                  }
                  return t.prev = 5, t.next = 8, (0, u.getRect)(this, ".".concat(f, "-tabs__item"), !0);
                case 8:
                  if (n = t.sent, r = n[i]) {
                    t.next = 12;
                    break
                  }
                  return t.abrupt("return");
                case 12:
                  return a = 0, s = 0, c = 0, n.forEach((function(t) {
                    a < i && (s += t.width, a += 1), c += t.width
                  })), this.containerWidth ? (o = this.calcScrollOffset(this.containerWidth, r.left, r.width, this.data.scrollLeft), h = c - this.containerWidth, this.setData({
                    offset: Math.min(Math.max(o, 0), h)
                  })) : this._hasObserved || (this._hasObserved = !0, (0, l.getObserver)(this, ".".concat(p)).then((function() {
                    return v.setTrack()
                  }))), t.next = 16, this.getTrackSize();
                case 16:
                  d = t.sent, "line" === this.data.theme && (s += (r.width - d) / 2), ((b = void 0 === this.previousIndex) || this.previousIndex !== i) && (this.previousIndex = i, this.setData({
                    trackOption: {
                      lineWidth: d,
                      distance: s,
                      isInit: b
                    }
                  })), t.next = 25;
                  break;
                case 22:
                  t.prev = 22, t.t0 = t.catch(5), this.triggerEvent("error", t.t0);
                case 25:
                case "end":
                  return t.stop()
              }
            }), e, this, [
              [5, 22]
            ])
          })))
        },
        onTabTap: function(t) {
          var e = t.currentTarget.dataset.index;
          this.changeIndex(e)
        },
        onTouchStart: function(t) {
          this.properties.swipeable && this.touchStart(t)
        },
        onTouchMove: function(t) {
          this.properties.swipeable && this.touchMove(t)
        },
        onTouchEnd: function() {
          if (this.properties.swipeable) {
            var t = this.direction,
              e = this.deltaX,
              i = this.offsetX;
            if ("horizontal" === t && i >= 50) {
              var n = this.getAvailableTabIndex(e); - 1 !== n && this.changeIndex(n)
            }
          }
        },
        onTouchScroll: function(t) {
          this._trigger("scroll", t.detail)
        },
        changeIndex: function(t) {
          var e = this.data.tabs[t],
            i = e.value,
            n = e.label;
          (null == e ? void 0 : e.disabled) || t === this.data.currentIndex || this._trigger("change", {
            value: i,
            label: n
          }), this._trigger("click", {
            value: i,
            label: n
          })
        },
        getAvailableTabIndex: function(t) {
          for (var e = t > 0 ? -1 : 1, i = this.data, n = i.currentIndex, r = i.tabs, a = r.length, s = e; n + e >= 0 && n + e < a; s += e) {
            var c = n + s;
            if (!(c >= 0 && c < a && r[c])) return n;
            if (!r[c].disabled) return c
          }
          return -1
        }
      }, i
    }
    return i(d, [{
      key: "initChildId",
      value: function() {
        var t = this;
        this.children.forEach((function(e, i) {
          e.setId("".concat(t.data.tabID, "_panel_").concat(i))
        }))
      }
    }]), d
  }(s.SuperComponent),
  x = v = (0, a.__decorate)([(0, s.wxComponent)()], v);
exports.default = x;