Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/createClass"),
  n = require("../../../@babel/runtime/helpers/inherits"),
  r = require("../../../@babel/runtime/helpers/createSuper"),
  l = require("tslib"),
  a = require("../common/src/index"),
  s = require("../common/utils"),
  u = d(require("../common/config")),
  c = d(require("./props")),
  o = d(require("../mixins/using-custom-navbar"));

function d(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var h = u.default.prefix,
  p = "".concat(h, "-picker"),
  m = function(l) {
    n(u, l);
    var a = r(u);

    function u() {
      var i;
      return t(this, u), (i = a.apply(this, arguments)).behaviors = [o.default], i.properties = c.default, i.externalClasses = ["".concat(h, "-class"), "".concat(h, "-class-confirm"), "".concat(h, "-class-cancel"), "".concat(h, "-class-title")], i.options = {
        multipleSlots: !0
      }, i.relations = {
        "../picker-item/picker-item": {
          type: "child",
          linked: function() {
            this.updateChildren()
          }
        }
      }, i.observers = {
        "value, visible": function() {
          this.updateChildren()
        }
      }, i.lifetimes = {
        attached: function() {
          this.setData({
            pickItemHeight: (0, s.rpx2px)(this.properties.itemHeight)
          })
        }
      }, i.data = {
        prefix: h,
        classPrefix: p,
        defaultPopUpProps: {},
        defaultPopUpzIndex: 11500,
        pickItemHeight: 0
      }, i.methods = {
        updateChildren: function() {
          var e = this.data.pickItemHeight,
            t = this.properties,
            i = t.value,
            n = t.defaultValue;
          this.$children.forEach((function(t, r) {
            var l, a;
            t.setData({
              value: null !== (a = null !== (l = null == i ? void 0 : i[r]) && void 0 !== l ? l : null == n ? void 0 : n[r]) && void 0 !== a ? a : "",
              columnIndex: r,
              pickItemHeight: e
            }), t.update()
          }))
        },
        getSelectedValue: function() {
          return [this.$children.map((function(e) {
            return e._selectedValue
          })), this.$children.map((function(e) {
            return e._selectedLabel
          }))]
        },
        getColumnIndexes: function() {
          return this.$children.map((function(e, t) {
            return {
              column: t,
              index: e._selectedIndex
            }
          }))
        },
        onConfirm: function() {
          var t = this.getSelectedValue(),
            i = e(t, 2),
            n = i[0],
            r = i[1],
            l = this.getColumnIndexes();
          this.close("confirm-btn"), this.triggerEvent("confirm", {
            value: n,
            label: r,
            columns: l
          }), JSON.stringify(this.data.value) !== JSON.stringify(n) && this.triggerEvent("change", {
            value: n,
            label: r,
            columns: l
          })
        },
        triggerColumnChange: function(t) {
          var i = t.column,
            n = t.index,
            r = this.getSelectedValue(),
            l = e(r, 2),
            a = l[0],
            s = l[1];
          this.triggerEvent("pick", {
            value: a,
            label: s,
            column: i,
            index: n
          })
        },
        onCancel: function() {
          this.close("cancel-btn"), this.triggerEvent("cancel")
        },
        onPopupChange: function(e) {
          var t = e.detail.visible;
          this.close("overlay"), this.triggerEvent("visible-change", {
            visible: t
          })
        },
        close: function(e) {
          this.data.autoClose && this.setData({
            visible: !1
          }), this.triggerEvent("close", {
            trigger: e
          })
        }
      }, i
    }
    return i(u, [{
      key: "ready",
      value: function() {
        this.$children.map((function(e, t) {
          return e.columnIndex = t
        }))
      }
    }]), u
  }(a.SuperComponent),
  f = m = (0, l.__decorate)([(0, a.wxComponent)()], m);
exports.default = f;