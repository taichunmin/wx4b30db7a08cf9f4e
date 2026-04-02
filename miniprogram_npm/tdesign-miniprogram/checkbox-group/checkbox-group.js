Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0, require("../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../@babel/runtime/helpers/typeof"),
  t = require("../../../@babel/runtime/helpers/createClass"),
  i = require("../../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../../@babel/runtime/helpers/inherits"),
  l = require("../../../@babel/runtime/helpers/createSuper"),
  a = require("tslib"),
  r = require("../common/src/index"),
  c = s(require("../common/config")),
  u = s(require("./props"));

function s(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var o = c.default.prefix,
  d = "".concat(o, "-checkbox-group"),
  h = function(a) {
    n(c, a);
    var r = l(c);

    function c() {
      var t;
      return i(this, c), (t = r.apply(this, arguments)).externalClasses = ["".concat(o, "-class")], t.relations = {
        "../checkbox/checkbox": {
          type: "descendant"
        }
      }, t.data = {
        prefix: o,
        classPrefix: d,
        checkboxOptions: []
      }, t.properties = u.default, t.observers = {
        value: function() {
          this.updateChildren()
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
      }, t.lifetimes = {
        ready: function() {
          this.setCheckall()
        }
      }, t.controlledProps = [{
        key: "value",
        event: "change"
      }], t.$checkAll = null, t.methods = {
        getChildren: function() {
          var e = this.$children;
          return e.length || (e = this.selectAllComponents(".".concat(o, "-checkbox-option"))), e || []
        },
        updateChildren: function() {
          var e = this.getChildren(),
            t = this.data.value;
          e.length > 0 && (e.forEach((function(e) {
            !e.data.checkAll && e.setData({
              checked: null == t ? void 0 : t.includes(e.data.value)
            })
          })), e.some((function(e) {
            return e.data.checkAll
          })) && this.setCheckall())
        },
        updateValue: function(e) {
          var t = e.value,
            i = e.checked,
            n = e.checkAll,
            l = e.item,
            a = e.indeterminate,
            r = this.data.value,
            c = this.data.max,
            u = new Set(this.getChildren().map((function(e) {
              return e.data.value
            })));
          if (r = r.filter((function(e) {
              return u.has(e)
            })), !c || !i || r.length !== c) {
            if (n) {
              var s = this.getChildren();
              r = !i && a ? s.filter((function(e) {
                var t = e.data;
                return !(t.disabled && !r.includes(t.value))
              })).map((function(e) {
                return e.data.value
              })) : s.filter((function(e) {
                var t = e.data;
                return t.disabled ? r.includes(t.value) : i && !t.checkAll
              })).map((function(e) {
                return e.data.value
              }))
            } else if (i) r = r.concat(t);
            else {
              var o = r.findIndex((function(e) {
                return e === t
              }));
              r.splice(o, 1)
            }
            this._trigger("change", {
              value: r,
              context: l
            })
          }
        },
        initWithOptions: function() {
          var t = this.data,
            i = t.options,
            n = t.value,
            l = t.keys;
          if ((null == i ? void 0 : i.length) && Array.isArray(i)) {
            var a = i.map((function(t) {
              var i, a, r;
              return ["number", "string"].includes(e(t)) ? {
                label: "".concat(t),
                value: t,
                checked: null == n ? void 0 : n.includes(t)
              } : Object.assign(Object.assign({}, t), {
                label: t[null !== (i = null == l ? void 0 : l.label) && void 0 !== i ? i : "label"],
                value: t[null !== (a = null == l ? void 0 : l.value) && void 0 !== a ? a : "value"],
                checked: null == n ? void 0 : n.includes(t[null !== (r = null == l ? void 0 : l.value) && void 0 !== r ? r : "value"])
              })
            }));
            this.setData({
              checkboxOptions: a
            })
          }
        },
        handleInnerChildChange: function(e) {
          var t, i = e.target.dataset.item,
            n = e.detail.checked,
            l = {};
          i.checkAll && (l.indeterminate = null === (t = this.$checkAll) || void 0 === t ? void 0 : t.data.indeterminate), this.updateValue(Object.assign(Object.assign(Object.assign({}, i), {
            checked: n,
            item: i
          }), l))
        },
        setCheckall: function() {
          var e = this,
            t = this.getChildren();
          if (this.$checkAll || (this.$checkAll = t.find((function(e) {
              return e.data.checkAll
            }))), this.$checkAll) {
            var i = this.data.value,
              n = new Set(null == i ? void 0 : i.filter((function(t) {
                return t !== e.$checkAll.data.value
              }))),
              l = t.every((function(e) {
                return !!e.data.checkAll || n.has(e.data.value)
              }));
            this.$checkAll.setData({
              checked: n.size > 0,
              indeterminate: !l
            })
          }
        }
      }, t
    }
    return t(c)
  }(r.SuperComponent),
  v = h = (0, a.__decorate)([(0, r.wxComponent)()], h);
exports.default = v;