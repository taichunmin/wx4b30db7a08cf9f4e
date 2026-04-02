Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var t = require("../../../@babel/runtime/helpers/createClass"),
  e = require("../../../@babel/runtime/helpers/classCallCheck"),
  a = require("../../../@babel/runtime/helpers/inherits"),
  i = require("../../../@babel/runtime/helpers/createSuper"),
  n = require("tslib"),
  r = require("../common/src/index"),
  s = u(require("../common/config")),
  o = u(require("./props")),
  c = require("../common/version"),
  l = require("../common/utils");

function u(t) {
  return t && t.__esModule ? t : {
    default: t
  }
}
var h = s.default.prefix,
  d = "".concat(h, "-button"),
  p = function(n) {
    a(s, n);
    var r = i(s);

    function s() {
      var t;
      return e(this, s), (t = r.apply(this, arguments)).externalClasses = ["".concat(h, "-class"), "".concat(h, "-class-icon"), "".concat(h, "-class-loading")], t.behaviors = (0, c.canIUseFormFieldButton)() ? ["wx://form-field-button"] : [], t.properties = o.default, t.options = {
        multipleSlots: !0
      }, t.data = {
        prefix: h,
        className: "",
        classPrefix: d
      }, t.observers = {
        "theme, size, plain, block, shape, disabled, loading, variant": function() {
          this.setClass()
        },
        icon: function(t) {
          this.setData({
            _icon: (0, l.calcIcon)(t, "")
          })
        }
      }, t.lifetimes = {
        attached: function() {
          this.setClass()
        }
      }, t.methods = {
        setClass: function() {
          var t = [d, "".concat(h, "-class"), "".concat(d, "--").concat(this.data.variant || "base"), "".concat(d, "--").concat(this.data.theme || "default"), "".concat(d, "--").concat(this.data.shape || "rectangle"), "".concat(d, "--size-").concat(this.data.size || "medium")];
          this.data.block && t.push("".concat(d, "--block")), this.data.disabled && t.push("".concat(d, "--disabled")), this.data.ghost && t.push("".concat(d, "--ghost")), this.setData({
            className: t.join(" ")
          })
        },
        getuserinfo: function(t) {
          this.triggerEvent("getuserinfo", t.detail)
        },
        contact: function(t) {
          this.triggerEvent("contact", t.detail)
        },
        getphonenumber: function(t) {
          this.triggerEvent("getphonenumber", t.detail)
        },
        error: function(t) {
          this.triggerEvent("error", t.detail)
        },
        opensetting: function(t) {
          this.triggerEvent("opensetting", t.detail)
        },
        launchapp: function(t) {
          this.triggerEvent("launchapp", t.detail)
        },
        chooseavatar: function(t) {
          this.triggerEvent("chooseavatar", t.detail)
        },
        agreeprivacyauthorization: function(t) {
          this.triggerEvent("agreeprivacyauthorization", t.detail)
        },
        handleTap: function(t) {
          this.data.disabled || this.data.loading || this.triggerEvent("tap", t)
        }
      }, t
    }
    return t(s)
  }(r.SuperComponent),
  g = p = (0, n.__decorate)([(0, r.wxComponent)()], p);
exports.default = g;