Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../../../@babel/runtime/helpers/createClass"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../@babel/runtime/helpers/inherits"),
  i = require("../../../@babel/runtime/helpers/createSuper"),
  o = require("tslib"),
  s = require("../common/src/index"),
  n = c(require("../common/config")),
  a = c(require("./props")),
  l = require("../common/utils");

function c(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var u = n.default.prefix,
  p = "".concat(u, "-back-top"),
  h = function(o) {
    r(n, o);
    var s = i(n);

    function n() {
      var e;
      return t(this, n), (e = s.apply(this, arguments)).externalClasses = ["".concat(u, "-class"), "".concat(u, "-class-icon"), "".concat(u, "-class-text")], e.options = {
        multipleSlots: !0
      }, e.properties = a.default, e.relations = {
        "../pull-down-refresh/pull-down-refresh": {
          type: "ancestor"
        }
      }, e.data = {
        prefix: u,
        classPrefix: p,
        _icon: null,
        hidden: !0
      }, e.observers = {
        icon: function() {
          this.setIcon()
        },
        scrollTop: function(e) {
          var t = this.properties.visibilityHeight;
          this.setData({
            hidden: e < t
          })
        }
      }, e.lifetimes = {
        ready: function() {
          var e = this.properties.icon;
          this.setIcon(e)
        }
      }, e.methods = {
        setIcon: function(e) {
          this.setData({
            _icon: (0, l.calcIcon)(e, "backtop")
          })
        },
        toTop: function() {
          var e;
          this.triggerEvent("to-top"), this.$parent ? (null === (e = this.$parent) || void 0 === e || e.setScrollTop(0), this.setData({
            hidden: !0
          })) : wx.pageScrollTo({
            scrollTop: 0,
            duration: 300
          })
        }
      }, e
    }
    return e(n)
  }(s.SuperComponent),
  d = h = (0, o.__decorate)([(0, s.wxComponent)()], h);
exports.default = d;