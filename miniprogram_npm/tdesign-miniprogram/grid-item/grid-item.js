Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../@babel/runtime/helpers/createClass"),
  r = require("../../../@babel/runtime/helpers/inherits"),
  i = require("../../../@babel/runtime/helpers/createSuper"),
  a = require("tslib"),
  n = require("../common/src/index"),
  o = u(require("../common/config")),
  c = u(require("./props")),
  s = require("../common/utils"),
  l = require("../common/validator");

function u(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var p, d, h = o.default.prefix,
  g = "".concat(h, "-grid-item"),
  m = (0, s.uniqueFactory)("grid_item");
(d = p || (p = {}))["redirect-to"] = "redirectTo", d["switch-tab"] = "switchTab", d.relaunch = "reLaunch", d["navigate-to"] = "navigateTo";
var v = function(a) {
    r(o, a);
    var n = i(o);

    function o() {
      var t;
      return e(this, o), (t = n.apply(this, arguments)).externalClasses = ["".concat(h, "-class"), "".concat(h, "-class-content"), "".concat(h, "-class-image"), "".concat(h, "-class-text"), "".concat(h, "-class-description")], t.options = {
        multipleSlots: !0
      }, t.relations = {
        "../grid/grid": {
          type: "ancestor",
          linked: function(e) {
            this.parent = e, this.updateStyle(), this.setData({
              column: e.data.column
            })
          }
        }
      }, t.properties = c.default, t.data = {
        prefix: h,
        classPrefix: g,
        gridItemStyle: "",
        gridItemWrapperStyle: "",
        gridItemContentStyle: "",
        align: "center",
        column: 0,
        describedbyID: ""
      }, t.observers = {
        icon: function(e) {
          var t = (0, s.setIcon)("icon", e, "");
          this.setData(Object.assign({}, t))
        }
      }, t.lifetimes = {
        ready: function() {
          this.setData({
            describedbyID: m()
          })
        }
      }, t
    }
    return t(o, [{
      key: "updateStyle",
      value: function() {
        var e = this.parent.properties,
          t = e.hover,
          r = e.align,
          i = [],
          a = [],
          n = [],
          o = this.getWidthStyle(),
          c = this.getPaddingStyle(),
          s = this.getBorderStyle();
        o && i.push(o), c && a.push(c), s && n.push(s), this.setData({
          gridItemStyle: "".concat(i.join(";")),
          gridItemWrapperStyle: a.join(";"),
          gridItemContentStyle: n.join(";"),
          hover: t,
          layout: this.properties.layout,
          align: r
        })
      }
    }, {
      key: "getWidthStyle",
      value: function() {
        var e = this.parent.properties.column;
        return e > 0 ? "width:".concat(1 / e * 100, "%") : ""
      }
    }, {
      key: "getPaddingStyle",
      value: function() {
        var e = this.parent.properties.gutter;
        return e ? "padding-bottom:".concat(e, "rpx;padding-right:").concat(e, "rpx") : ""
      }
    }, {
      key: "getBorderStyle",
      value: function() {
        var e = this.parent.properties.gutter,
          t = this.parent.properties.border;
        if (!t) return "";
        (0, l.isObject)(t) || (t = {});
        var r = t,
          i = r.color,
          a = void 0 === i ? "#266FE8" : i,
          n = r.width,
          o = void 0 === n ? 2 : n,
          c = r.style,
          s = void 0 === c ? "solid" : c;
        return e ? "border:".concat(o, "rpx ").concat(s, " ").concat(a) : "border-bottom:".concat(o, "rpx ").concat(s, " ").concat(a, ";border-right:").concat(o, "rpx ").concat(s, " ").concat(a)
      }
    }, {
      key: "onClick",
      value: function(e) {
        var t = e.currentTarget.dataset.item;
        this.triggerEvent("click", t), this.jumpLink()
      }
    }, {
      key: "jumpLink",
      value: function() {
        var e = this.properties,
          t = e.url,
          r = e.jumpType;
        t && r && p[r] && wx[p[r]]({
          url: t
        })
      }
    }]), o
  }(n.SuperComponent),
  y = v = (0, a.__decorate)([(0, n.wxComponent)()], v);
exports.default = y;