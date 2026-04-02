Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../../../@babel/runtime/helpers/typeof"),
  t = require("../../../@babel/runtime/helpers/createClass"),
  a = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/inherits"),
  r = require("../../../@babel/runtime/helpers/createSuper"),
  n = require("tslib"),
  l = d(require("../common/config")),
  o = require("../common/src/index"),
  s = d(require("./props"));

function d(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var u = l.default.prefix,
  c = "".concat(u, "-radio-group"),
  h = function(n) {
    i(o, n);
    var l = r(o);

    function o() {
      var t;
      return a(this, o), (t = l.apply(this, arguments)).behaviors = ["wx://form-field"], t.externalClasses = ["".concat(u, "-class")], t.data = {
        prefix: u,
        classPrefix: c,
        radioOptions: []
      }, t.relations = {
        "../radio/radio": {
          type: "descendant",
          linked: function(e) {
            var t = this.data,
              a = t.value,
              i = t.disabled,
              r = t.readonly;
            e.setData({
              checked: a === e.data.value
            }), e.setDisabled(i), e.setReadonly(r)
          }
        }
      }, t.properties = s.default, t.controlledProps = [{
        key: "value",
        event: "change"
      }], t.observers = {
        value: function(e) {
          this.getChildren().forEach((function(t) {
            t.setData({
              checked: e === t.data.value
            })
          }))
        },
        options: function() {
          this.initWithOptions()
        },
        disabled: function(e) {
          var t;
          (null === (t = this.data.options) || void 0 === t ? void 0 : t.length) ? this.initWithOptions(): this.getChildren().forEach((function(t) {
            t.setDisabled(e)
          }))
        }
      }, t.methods = {
        getChildren: function() {
          var e = this.$children;
          return (null == e ? void 0 : e.length) || (e = this.selectAllComponents(".".concat(u, "-radio-option"))), e
        },
        updateValue: function(e) {
          this._trigger("change", {
            value: e
          })
        },
        handleRadioChange: function(e) {
          var t = e.detail.checked,
            a = e.target.dataset,
            i = a.value,
            r = a.index,
            n = a.allowUncheck;
          this._trigger("change", !1 === t && n ? {
            value: null,
            index: r
          } : {
            value: i,
            index: r
          })
        },
        initWithOptions: function() {
          var t = this.data,
            a = t.options,
            i = t.value,
            r = t.keys,
            n = t.disabled,
            l = t.readonly;
          if ((null == a ? void 0 : a.length) && Array.isArray(a)) {
            var o = [];
            try {
              a.forEach((function(t) {
                var a, s, d, u = e(t);
                "number" === u || "string" === u ? o.push({
                  label: "".concat(t),
                  value: t,
                  checked: i === t,
                  disabled: n,
                  readonly: l
                }) : "object" === u && o.push(Object.assign(Object.assign({}, t), {
                  label: t[null !== (a = null == r ? void 0 : r.label) && void 0 !== a ? a : "label"],
                  value: t[null !== (s = null == r ? void 0 : r.value) && void 0 !== s ? s : "value"],
                  checked: i === t[null !== (d = null == r ? void 0 : r.value) && void 0 !== d ? d : "value"],
                  disabled: t.disabled || n,
                  readonly: t.readonly || l
                }))
              })), this.setData({
                radioOptions: o
              })
            } catch (a) {
              console.error("error", a)
            }
          } else this.setData({
            radioOptions: []
          })
        }
      }, t
    }
    return t(o)
  }(o.SuperComponent),
  v = h = (0, n.__decorate)([(0, o.wxComponent)()], h);
exports.default = v;