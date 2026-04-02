Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../../../@babel/runtime/helpers/createClass"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  a = require("../../../@babel/runtime/helpers/inherits"),
  i = require("../../../@babel/runtime/helpers/createSuper"),
  r = require("tslib"),
  n = require("../common/src/index"),
  s = u(require("../common/config")),
  c = u(require("./props")),
  l = require("../common/utils"),
  o = require("../common/validator");

function u(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var h = s.default.prefix,
  f = "".concat(h, "-input"),
  d = function(r) {
    a(s, r);
    var n = i(s);

    function s() {
      var e;
      return t(this, s), (e = n.apply(this, arguments)).options = {
        multipleSlots: !0
      }, e.externalClasses = ["".concat(h, "-class"), "".concat(h, "-class-prefix-icon"), "".concat(h, "-class-label"), "".concat(h, "-class-input"), "".concat(h, "-class-clearable"), "".concat(h, "-class-suffix"), "".concat(h, "-class-suffix-icon"), "".concat(h, "-class-tips")], e.behaviors = ["wx://form-field"], e.properties = c.default, e.data = {
        prefix: h,
        classPrefix: f,
        classBasePrefix: h,
        showClearIcon: !0
      }, e.lifetimes = {
        ready: function() {
          var e, t = this.properties,
            a = t.value,
            i = t.defaultValue;
          this.updateValue(null !== (e = null != a ? a : i) && void 0 !== e ? e : "")
        }
      }, e.observers = {
        prefixIcon: function(e) {
          this.setData({
            _prefixIcon: (0, l.calcIcon)(e)
          })
        },
        suffixIcon: function(e) {
          this.setData({
            _suffixIcon: (0, l.calcIcon)(e)
          })
        },
        clearable: function(e) {
          this.setData({
            _clearIcon: (0, l.calcIcon)(e, "close-circle-filled")
          })
        },
        "clearTrigger, clearable, disabled, readonly": function() {
          this.updateClearIconVisible()
        }
      }, e.methods = {
        updateValue: function(e) {
          var t = this.properties,
            a = t.allowInputOverMax,
            i = t.maxcharacter,
            r = t.maxlength;
          if (!a && i && i > 0 && !Number.isNaN(i)) {
            var n = (0, l.getCharacterLength)("maxcharacter", e, i),
              s = n.length,
              c = n.characters;
            this.setData({
              value: c,
              count: s
            })
          } else if (!a && r && r > 0 && !Number.isNaN(r)) {
            var u = (0, l.getCharacterLength)("maxlength", e, r),
              h = u.length,
              f = u.characters;
            this.setData({
              value: f,
              count: h
            })
          } else this.setData({
            value: e,
            count: (0, o.isDef)(e) ? String(e).length : 0
          })
        },
        updateClearIconVisible: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = this.properties,
            a = t.clearTrigger,
            i = t.disabled,
            r = t.readonly;
          i || r ? this.setData({
            showClearIcon: !1
          }) : this.setData({
            showClearIcon: e || "always" === a
          })
        },
        onInput: function(e) {
          var t = e.detail,
            a = t.value,
            i = t.cursor,
            r = t.keyCode;
          this.updateValue(a), this.triggerEvent("change", {
            value: this.data.value,
            cursor: i,
            keyCode: r
          })
        },
        onFocus: function(e) {
          this.updateClearIconVisible(!0), this.triggerEvent("focus", e.detail)
        },
        onBlur: function(e) {
          if (this.updateClearIconVisible(), "function" == typeof this.properties.format) {
            var t = this.properties.format(e.detail.value);
            return this.updateValue(t), void this.triggerEvent("blur", {
              value: this.data.value,
              cursor: this.data.count
            })
          }
          this.triggerEvent("blur", e.detail)
        },
        onConfirm: function(e) {
          this.triggerEvent("enter", e.detail)
        },
        onSuffixClick: function() {
          this.triggerEvent("click", {
            trigger: "suffix"
          })
        },
        onSuffixIconClick: function() {
          this.triggerEvent("click", {
            trigger: "suffix-icon"
          })
        },
        clearInput: function(e) {
          this.triggerEvent("clear", e.detail), this.setData({
            value: ""
          })
        },
        onKeyboardHeightChange: function(e) {
          this.triggerEvent("keyboardheightchange", e.detail)
        },
        onNickNameReview: function(e) {
          this.triggerEvent("nicknamereview", e.detail)
        }
      }, e
    }
    return e(s)
  }(n.SuperComponent),
  p = d = (0, r.__decorate)([(0, n.wxComponent)()], d);
exports.default = p;