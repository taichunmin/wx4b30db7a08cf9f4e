Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../../../@babel/runtime/helpers/createClass"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  a = require("../../../@babel/runtime/helpers/inherits"),
  s = require("../../../@babel/runtime/helpers/createSuper"),
  r = require("tslib"),
  i = require("../common/src/index"),
  c = d(require("../common/config")),
  l = d(require("./props"));

function d(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var n = c.default.prefix,
  o = "".concat(n, "-checkbox"),
  u = function(r) {
    a(c, r);
    var i = s(c);

    function c() {
      var e;
      return t(this, c), (e = i.apply(this, arguments)).externalClasses = ["".concat(n, "-class"), "".concat(n, "-class-label"), "".concat(n, "-class-icon"), "".concat(n, "-class-content"), "".concat(n, "-class-border")], e.behaviors = ["wx://form-field"], e.relations = {
        "../checkbox-group/checkbox-group": {
          type: "ancestor",
          linked: function(e) {
            var t = e.data,
              a = t.value,
              s = t.disabled,
              r = t.borderless,
              i = new Set(a),
              c = i.has(this.data.value),
              l = {
                _disabled: null == this.data.disabled ? s : this.data.disabled
              };
            r && (l.borderless = !0), l.checked = this.data.checked || c, this.data.checked && e.updateValue(this.data), this.data.checkAll && (l.checked = i.size > 0), this.setData(l)
          }
        }
      }, e.options = {
        multipleSlots: !0
      }, e.properties = Object.assign(Object.assign({}, l.default), {
        theme: {
          type: String,
          value: "default"
        },
        tId: {
          type: String
        }
      }), e.data = {
        prefix: n,
        classPrefix: o,
        _disabled: !1
      }, e.observers = {
        disabled: function(e) {
          this.setData({
            _disabled: e
          })
        }
      }, e.controlledProps = [{
        key: "checked",
        event: "change"
      }], e.methods = {
        handleTap: function(e) {
          var t = this.data,
            a = t._disabled,
            s = t.readonly,
            r = t.contentDisabled,
            i = e.currentTarget.dataset.target;
          if (!(a || s || "text" === i && r)) {
            var c = this.data,
              l = c.value,
              d = c.label,
              n = !this.data.checked,
              o = this.$parent;
            o ? o.updateValue(Object.assign(Object.assign({}, this.data), {
              checked: n,
              item: {
                label: d,
                value: l,
                checked: n
              }
            })) : this._trigger("change", {
              context: {
                value: l,
                label: d
              },
              checked: n
            })
          }
        },
        setDisabled: function(e) {
          this.setData({
            _disabled: this.data.disabled || e
          })
        }
      }, e
    }
    return e(c)
  }(i.SuperComponent),
  h = u = (0, r.__decorate)([(0, i.wxComponent)()], u);
exports.default = h;