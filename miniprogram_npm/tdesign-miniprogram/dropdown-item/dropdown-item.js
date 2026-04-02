Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0, require("../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../@babel/runtime/helpers/createClass"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  a = require("../../../@babel/runtime/helpers/inherits"),
  r = require("../../../@babel/runtime/helpers/createSuper"),
  i = require("tslib"),
  l = require("../common/src/index"),
  n = c(require("../common/config")),
  s = c(require("./props")),
  o = c(require("../dropdown-menu/props")),
  u = require("../common/utils");

function c(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var d = n.default.prefix,
  h = "".concat(d, "-dropdown-item"),
  p = function(i) {
    a(n, i);
    var l = r(n);

    function n() {
      var e;
      return t(this, n), (e = l.apply(this, arguments)).options = {
        multipleSlots: !0
      }, e.externalClasses = ["".concat(d, "-class"), "".concat(d, "-class-content"), "".concat(d, "-class-column"), "".concat(d, "-class-column-item"), "".concat(d, "-class-column-item-label"), "".concat(d, "-class-footer")], e.properties = s.default, e.data = {
        prefix: d,
        classPrefix: h,
        show: !1,
        top: 0,
        maskHeight: 0,
        initValue: null,
        hasChanged: !1,
        duration: o.default.duration.value,
        zIndex: o.default.zIndex.value,
        overlay: o.default.showOverlay.value,
        labelAlias: "label",
        valueAlias: "value",
        computedLabel: "",
        firstCheckedValue: ""
      }, e.relations = {
        "../dropdown-menu/dropdown-menu": {
          type: "parent",
          linked: function(e) {
            var t = e.properties,
              a = t.zIndex,
              r = t.duration,
              i = t.showOverlay;
            this.setData({
              zIndex: a,
              duration: r,
              showOverlay: i
            })
          }
        }
      }, e.controlledProps = [{
        key: "value",
        event: "change"
      }], e.observers = {
        keys: function(e) {
          this.setData({
            labelAlias: e.label || "label",
            valueAlias: e.value || "value"
          })
        },
        value: function(e) {
          var t = this.data,
            a = t.options,
            r = t.labelAlias,
            i = t.valueAlias;
          if (this.data.multiple && !Array.isArray(e)) throw TypeError("应传入数组类型的 value");
          var l = a.find((function(t) {
            return t[i] === e
          }));
          l && this.setData({
            computedLabel: l[r]
          })
        },
        "label, computedLabel, disabled": function() {
          var e;
          null === (e = this.$parent) || void 0 === e || e.getAllItems()
        },
        show: function(e) {
          var t = this;
          e && this.getParentBottom((function() {
            t.setData({
              wrapperVisible: !0
            })
          }))
        }
      }, e.methods = {
        closeDropdown: function() {
          var e;
          null === (e = this.$parent) || void 0 === e || e.setData({
            activeIdx: -1
          }), this.setData({
            show: !1
          }), this.triggerEvent("close")
        },
        getParentBottom: function(e) {
          var t = this;
          (0, u.getRect)(this.$parent, "#".concat(d, "-bar")).then((function(a) {
            t.setData({
              top: a.bottom,
              maskHeight: a.top
            }, e)
          }))
        },
        handleTreeClick: function(e) {
          var t = e.currentTarget.dataset,
            a = t.level,
            r = t.value,
            i = this.data.value;
          i[a] = r, this._trigger("change", {
            value: i
          })
        },
        handleRadioChange: function(e) {
          var t = e.detail.value;
          if (this._trigger("change", {
              value: t
            }), this.data.multiple) {
            var a = this.data.options.find((function(e) {
              return t.includes(e.value)
            }));
            a && (this.data.firstCheckedValue = a.value)
          } else this.closeDropdown()
        },
        handleMaskClick: function() {
          var e;
          (null === (e = this.$parent) || void 0 === e ? void 0 : e.properties.closeOnClickOverlay) && this.closeDropdown()
        },
        handleReset: function() {
          this._trigger("change", {
            value: []
          }), this._trigger("reset")
        },
        handleConfirm: function() {
          this._trigger("confirm", {
            value: this.data.value
          }), this.closeDropdown(), this.setData({
            firstCheckedValue: this.data.firstCheckedValue
          })
        },
        onLeaved: function() {
          this.setData({
            wrapperVisible: !1
          })
        }
      }, e
    }
    return e(n)
  }(l.SuperComponent),
  v = p = (0, i.__decorate)([(0, l.wxComponent)()], p);
exports.default = v;