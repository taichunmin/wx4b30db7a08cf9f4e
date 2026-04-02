Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../../../@babel/runtime/helpers/createClass"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  a = require("../../../@babel/runtime/helpers/inherits"),
  r = require("../../../@babel/runtime/helpers/createSuper"),
  n = require("tslib"),
  i = require("../common/src/index"),
  u = c(require("../common/config")),
  l = c(require("./props")),
  s = require("../common/utils");

function c(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var o = u.default.prefix,
  h = "".concat(o, "-textarea"),
  p = function(n) {
    a(u, n);
    var i = r(u);

    function u() {
      var e;
      return t(this, u), (e = i.apply(this, arguments)).options = {
        multipleSlots: !0
      }, e.behaviors = ["wx://form-field"], e.externalClasses = ["".concat(o, "-class"), "".concat(o, "-class-textarea"), "".concat(o, "-class-label"), "".concat(o, "-class-indicator")], e.properties = l.default, e.data = {
        prefix: o,
        classPrefix: h,
        count: 0
      }, e.observers = {
        value: function(e) {
          this.updateCount(null != e ? e : this.properties.defaultValue)
        }
      }, e.lifetimes = {
        ready: function() {
          var e, t = this.properties,
            a = t.value,
            r = t.defaultValue;
          this.updateValue(null !== (e = null != a ? a : r) && void 0 !== e ? e : "")
        }
      }, e.methods = {
        updateCount: function(e) {
          var t = this.properties,
            a = t.maxcharacter,
            r = t.maxlength,
            n = this.calculateValue(e, a, r).count;
          this.setData({
            count: n
          })
        },
        updateValue: function(e) {
          var t = this.properties,
            a = t.maxcharacter,
            r = t.maxlength,
            n = this.calculateValue(e, a, r),
            i = n.value,
            u = n.count;
          this.setData({
            value: i,
            count: u
          })
        },
        calculateValue: function(e, t, a) {
          var r = this.properties.allowInputOverMax;
          if (t > 0 && !Number.isNaN(t)) {
            var n = (0, s.getCharacterLength)("maxcharacter", e, r ? 1 / 0 : t),
              i = n.length;
            return {
              value: n.characters,
              count: i
            }
          }
          if (a > 0 && !Number.isNaN(a)) {
            var u = (0, s.getCharacterLength)("maxlength", e, r ? 1 / 0 : a),
              l = u.length;
            return {
              value: u.characters,
              count: l
            }
          }
          return {
            value: e,
            count: e ? String(e).length : 0
          }
        },
        onInput: function(e) {
          var t = e.detail,
            a = t.value,
            r = t.cursor;
          this.updateValue(a), this.triggerEvent("change", {
            value: this.data.value,
            cursor: r
          })
        },
        onFocus: function(e) {
          this.triggerEvent("focus", Object.assign({}, e.detail))
        },
        onBlur: function(e) {
          this.triggerEvent("blur", Object.assign({}, e.detail))
        },
        onConfirm: function(e) {
          this.triggerEvent("enter", Object.assign({}, e.detail))
        },
        onLineChange: function(e) {
          this.triggerEvent("line-change", Object.assign({}, e.detail))
        },
        onKeyboardHeightChange: function(e) {
          this.triggerEvent("keyboardheightchange", e.detail)
        }
      }, e
    }
    return e(u)
  }(i.SuperComponent),
  g = p = (0, n.__decorate)([(0, i.wxComponent)()], p);
exports.default = g;