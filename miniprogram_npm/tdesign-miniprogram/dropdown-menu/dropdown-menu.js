Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../../../@babel/runtime/helpers/createClass"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../@babel/runtime/helpers/inherits"),
  n = require("../../../@babel/runtime/helpers/createSuper"),
  a = require("tslib"),
  i = require("../common/src/index"),
  o = c(require("../common/config")),
  s = c(require("./props")),
  l = require("../common/utils");

function c(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var u = o.default.prefix,
  d = "".concat(u, "-dropdown-menu"),
  p = function(a) {
    r(o, a);
    var i = n(o);

    function o() {
      var e;
      return t(this, o), (e = i.apply(this, arguments)).externalClasses = ["".concat(u, "-class"), "".concat(u, "-class-item"), "".concat(u, "-class-label"), "".concat(u, "-class-icon")], e.properties = s.default, e.nodes = null, e.data = {
        prefix: u,
        classPrefix: d,
        menus: null,
        activeIdx: -1,
        bottom: 0,
        _arrowIcon: {
          name: s.default.arrowIcon.value
        }
      }, e.relations = {
        "../dropdown-item/dropdown-item": {
          type: "child"
        }
      }, e.lifetimes = {
        ready: function() {
          this.getAllItems()
        }
      }, e.observers = {
        arrowIcon: function(e) {
          this.setData({
            _arrowIcon: (0, l.calcIcon)(e)
          })
        },
        activeIdx: function(e) {
          this.triggerEvent(-1 === e ? "close" : "open")
        }
      }, e.methods = {
        toggle: function(e) {
          var t = this.data,
            r = t.activeIdx,
            n = t.duration,
            a = this.$children[r],
            i = this.$children[e];
          (null == i ? void 0 : i.data.disabled) || (-1 !== r && (a.triggerEvent("close"), a.setData({
            show: !1
          }, (function() {
            setTimeout((function() {
              a.triggerEvent("closed")
            }), n)
          }))), null == e || r === e ? this.setData({
            activeIdx: -1
          }) : (i.triggerEvent("open"), this.setData({
            activeIdx: e
          }), i.setData({
            show: !0
          }, (function() {
            setTimeout((function() {
              i.triggerEvent("opened")
            }), n)
          }))))
        },
        getAllItems: function() {
          var e = this.$children.map((function(e) {
            var t = e.data;
            return {
              label: t.label || t.computedLabel,
              disabled: t.disabled
            }
          }));
          this.setData({
            menus: e
          })
        },
        handleToggle: function(e) {
          var t = e.currentTarget.dataset.index;
          this.toggle(t)
        },
        noop: function() {}
      }, e
    }
    return e(o)
  }(i.SuperComponent),
  m = p = (0, a.__decorate)([(0, i.wxComponent)()], p);
exports.default = m;