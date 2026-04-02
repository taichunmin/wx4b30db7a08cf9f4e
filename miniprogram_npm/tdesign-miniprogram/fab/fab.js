Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../../../@babel/runtime/helpers/createClass"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/inherits"),
  r = require("../../../@babel/runtime/helpers/createSuper"),
  o = require("tslib"),
  s = require("../common/src/index"),
  a = l(require("../common/config")),
  n = l(require("./props")),
  u = l(require("../mixins/using-custom-navbar")),
  c = require("../common/utils");

function l(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var p = a.default.prefix,
  d = "".concat(p, "-fab"),
  h = {
    size: "large",
    shape: "circle",
    theme: "primary",
    tClass: "".concat(p, "-fab__button")
  },
  m = function(o) {
    i(a, o);
    var s = r(a);

    function a() {
      var e;
      return t(this, a), (e = s.apply(this, arguments)).behaviors = [u.default], e.properties = n.default, e.externalClasses = ["class", "".concat(p, "-class"), "".concat(p, "-class-button")], e.data = {
        prefix: p,
        classPrefix: d,
        buttonData: h,
        moveStyle: null
      }, e.observers = {
        "buttonProps.**, icon, text, ariaLabel, yBounds": function() {
          var e;
          this.setData({
            buttonData: Object.assign(Object.assign(Object.assign(Object.assign({}, h), {
              shape: this.properties.text ? "round" : "circle"
            }), this.properties.buttonProps), {
              icon: this.properties.icon,
              content: this.properties.text,
              ariaLabel: this.properties.ariaLabel
            })
          }, null === (e = this.computedSize) || void 0 === e ? void 0 : e.bind(this))
        }
      }, e.methods = {
        onTplButtonTap: function(e) {
          this.triggerEvent("click", e)
        },
        onStart: function(e) {
          this.triggerEvent("dragstart", e.detail.e)
        },
        onMove: function(e) {
          var t = this.properties.yBounds,
            i = this.data.distanceTop,
            r = e.detail,
            o = r.x,
            s = r.y,
            a = r.rect,
            n = c.systemInfo.windowWidth - a.width,
            u = c.systemInfo.windowHeight - Math.max(i, (0, c.unitConvert)(t[0])) - a.height,
            l = Math.max(0, Math.min(o, n)),
            p = Math.max(0, (0, c.unitConvert)(t[1]), Math.min(s, u));
          this.setData({
            moveStyle: "right: ".concat(l, "px; bottom: ").concat(p, "px;")
          })
        },
        onEnd: function(e) {
          this.triggerEvent("dragend", e.detail.e)
        },
        computedSize: function() {
          var e, t;
          if (this.properties.draggable) {
            var i = this.selectComponent("#draggable");
            (null === (t = null === (e = this.properties) || void 0 === e ? void 0 : e.yBounds) || void 0 === t ? void 0 : t[1]) ? this.setData({
              moveStyle: "bottom: ".concat((0, c.unitConvert)(this.properties.yBounds[1]), "px")
            }, i.computedRect): i.computedRect()
          }
        }
      }, e
    }
    return e(a)
  }(s.SuperComponent),
  b = m = (0, o.__decorate)([(0, s.wxComponent)()], m);
exports.default = b;