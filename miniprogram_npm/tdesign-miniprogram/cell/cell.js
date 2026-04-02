Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../../../@babel/runtime/helpers/defineProperty"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../@babel/runtime/helpers/createClass"),
  c = require("../../../@babel/runtime/helpers/inherits"),
  n = require("../../../@babel/runtime/helpers/createSuper"),
  i = require("tslib"),
  s = require("../common/src/index"),
  o = u(require("../common/config")),
  a = u(require("./props")),
  l = require("../common/utils");

function u(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var p = o.default.prefix,
  h = "".concat(p, "-cell"),
  f = function(i) {
    c(o, i);
    var s = n(o);

    function o() {
      var e;
      return t(this, o), (e = s.apply(this, arguments)).externalClasses = ["".concat(p, "-class"), "".concat(p, "-class-title"), "".concat(p, "-class-description"), "".concat(p, "-class-note"), "".concat(p, "-class-hover"), "".concat(p, "-class-image"), "".concat(p, "-class-left"), "".concat(p, "-class-left-icon"), "".concat(p, "-class-center"), "".concat(p, "-class-right"), "".concat(p, "-class-right-icon")], e.relations = {
        "../cell-group/cell-group": {
          type: "parent"
        }
      }, e.options = {
        multipleSlots: !0
      }, e.properties = a.default, e.data = {
        prefix: p,
        classPrefix: h,
        isLastChild: !1
      }, e.observers = {
        leftIcon: function(e) {
          this.setIcon("_leftIcon", e, "")
        },
        rightIcon: function(e) {
          this.setIcon("_rightIcon", e, "")
        },
        arrow: function(e) {
          this.setIcon("_arrow", e, "chevron-right")
        }
      }, e
    }
    return r(o, [{
      key: "setIcon",
      value: function(t, r, c) {
        this.setData(e({}, t, (0, l.calcIcon)(r, c)))
      }
    }, {
      key: "onClick",
      value: function(e) {
        this.triggerEvent("click", e.detail), this.jumpLink()
      }
    }, {
      key: "jumpLink",
      value: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "url",
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "jumpType",
          r = this.data[e],
          c = this.data[t];
        r && wx[c]({
          url: r
        })
      }
    }]), o
  }(s.SuperComponent),
  d = f = (0, i.__decorate)([(0, s.wxComponent)()], f);
exports.default = d;