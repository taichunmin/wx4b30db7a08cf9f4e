Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../@babel/runtime/helpers/createClass"),
  a = require("../../../@babel/runtime/helpers/inherits"),
  r = require("../../../@babel/runtime/helpers/createSuper"),
  i = require("tslib"),
  s = require("../common/src/index"),
  l = c(require("../common/config")),
  n = c(require("./props")),
  u = require("../common/utils");

function c(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var o = l.default.prefix,
  h = "".concat(o, "-search"),
  v = function(i) {
    a(l, i);
    var s = r(l);

    function l() {
      var t;
      return e(this, l), (t = s.apply(this, arguments)).externalClasses = ["".concat(o, "-class"), "".concat(o, "-class-input-container"), "".concat(o, "-class-input"), "".concat(o, "-class-action"), "".concat(o, "-class-left"), "".concat(o, "-class-clear")], t.options = {
        multipleSlots: !0
      }, t.properties = n.default, t.observers = {
        resultList: function(e) {
          var t = this.data.isSelected;
          e.length ? t ? this.setData({
            isShowResultList: !1,
            isSelected: !1
          }) : this.setData({
            isShowResultList: !0
          }) : this.setData({
            isShowResultList: !1
          })
        },
        "clearTrigger, clearable, disabled, readonly": function() {
          this.updateClearIconVisible()
        }
      }, t.data = {
        classPrefix: h,
        prefix: o,
        isShowResultList: !1,
        isSelected: !1,
        showClearIcon: !0
      }, t
    }
    return t(l, [{
      key: "updateClearIconVisible",
      value: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = this.properties,
          a = t.clearTrigger,
          r = t.disabled,
          i = t.readonly;
        r || i ? this.setData({
          showClearIcon: !1
        }) : this.setData({
          showClearIcon: e || "always" === String(a)
        })
      }
    }, {
      key: "onInput",
      value: function(e) {
        var t = e.detail.value,
          a = this.properties.maxcharacter;
        a && "number" == typeof a && a > 0 && (t = (0, u.getCharacterLength)("maxcharacter", t, a).characters);
        this.setData({
          value: t
        }), this.triggerEvent("change", {
          value: t
        })
      }
    }, {
      key: "onFocus",
      value: function(e) {
        var t = e.detail.value;
        this.updateClearIconVisible(!0), this.triggerEvent("focus", {
          value: t
        })
      }
    }, {
      key: "onBlur",
      value: function(e) {
        var t = e.detail.value;
        this.updateClearIconVisible(), this.triggerEvent("blur", {
          value: t
        })
      }
    }, {
      key: "handleClear",
      value: function() {
        this.setData({
          value: ""
        }), this.triggerEvent("clear", {
          value: ""
        }), this.triggerEvent("change", {
          value: ""
        })
      }
    }, {
      key: "onConfirm",
      value: function(e) {
        var t = e.detail.value;
        this.triggerEvent("submit", {
          value: t
        })
      }
    }, {
      key: "onActionClick",
      value: function() {
        this.triggerEvent("action-click")
      }
    }, {
      key: "onSelectResultItem",
      value: function(e) {
        var t = e.currentTarget.dataset.index,
          a = this.properties.resultList[t];
        this.setData({
          value: a,
          isSelected: !0
        }), this.triggerEvent("change", {
          value: a
        }), this.triggerEvent("selectresult", {
          index: t,
          item: a
        })
      }
    }]), l
  }(s.SuperComponent),
  d = v = (0, i.__decorate)([(0, s.wxComponent)()], v);
exports.default = d;