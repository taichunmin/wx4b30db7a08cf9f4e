Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../../../@babel/runtime/helpers/createClass"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  a = require("../../../@babel/runtime/helpers/inherits"),
  n = require("../../../@babel/runtime/helpers/createSuper"),
  i = require("tslib"),
  o = l(require("../common/config")),
  r = require("../common/src/index"),
  s = l(require("./props"));

function l(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var c = o.default.prefix,
  d = "".concat(c, "-radio"),
  u = function(i) {
    a(r, i);
    var o = n(r);

    function r() {
      var e;
      return t(this, r), (e = o.apply(this, arguments)).externalClasses = ["".concat(c, "-class"), "".concat(c, "-class-label"), "".concat(c, "-class-icon"), "".concat(c, "-class-content"), "".concat(c, "-class-border")], e.behaviors = ["wx://form-field"], e.relations = {
        "../radio-group/radio-group": {
          type: "ancestor",
          linked: function(e) {
            e.data.borderless && this.setData({
              borderless: !0
            })
          }
        }
      }, e.options = {
        multipleSlots: !0
      }, e.lifetimes = {
        attached: function() {
          this.init()
        }
      }, e.properties = Object.assign(Object.assign({}, s.default), {
        borderless: {
          type: Boolean,
          value: !1
        },
        tId: {
          type: String
        }
      }), e.controlledProps = [{
        key: "checked",
        event: "change"
      }], e.data = {
        prefix: c,
        classPrefix: d,
        customIcon: !1,
        slotIcon: !1,
        optionLinked: !1,
        iconVal: [],
        _placement: "",
        _disabled: !1,
        _readonly: !1
      }, e.observers = {
        disabled: function(e) {
          this.setData({
            _disabled: e
          })
        },
        readonly: function(e) {
          this.setData({
            _readonly: e
          })
        }
      }, e.methods = {
        handleTap: function(e) {
          var t = this.data,
            a = t._disabled,
            n = t._readonly,
            i = t.contentDisabled,
            o = e.currentTarget.dataset.target;
          a || n || "text" === o && i || this.doChange()
        },
        doChange: function() {
          var e, t = this.data,
            a = t.value,
            n = t.checked,
            i = t.allowUncheck,
            o = Boolean(i || (null === (e = this.$parent) || void 0 === e ? void 0 : e.data.allowUncheck));
          this.$parent ? this.$parent.updateValue(n && o ? null : a) : this._trigger("change", {
            checked: !o || !n
          })
        },
        init: function() {
          var e, t, a, n, i = this.data.icon,
            o = Array.isArray((null === (e = this.$parent) || void 0 === e ? void 0 : e.icon) || i);
          this.setData({
            customIcon: o,
            slotIcon: "slot" === i,
            iconVal: o ? (null === (t = this.$parent) || void 0 === t ? void 0 : t.icon) || i : [],
            _placement: this.data.placement || (null === (n = null === (a = this.$parent) || void 0 === a ? void 0 : a.data) || void 0 === n ? void 0 : n.placement) || "left"
          })
        },
        setDisabled: function(e) {
          this.setData({
            _disabled: this.data.disabled || e
          })
        },
        setReadonly: function(e) {
          this.setData({
            _readonly: this.data.readonly || e
          })
        }
      }, e
    }
    return e(r)
  }(r.SuperComponent),
  h = u = (0, i.__decorate)([(0, r.wxComponent)()], u);
exports.default = h;