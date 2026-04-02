Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0, require("../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../@babel/runtime/helpers/typeof"),
  e = require("../../../@babel/runtime/helpers/createClass"),
  n = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/inherits"),
  o = require("../../../@babel/runtime/helpers/createSuper"),
  r = require("tslib"),
  a = require("../common/src/index"),
  c = h(require("../common/config")),
  s = h(require("./props")),
  l = require("../common/utils"),
  u = require("../common/validator"),
  p = h(require("../mixins/using-custom-navbar"));

function h(t) {
  return t && t.__esModule ? t : {
    default: t
  }
}
var v = c.default.prefix,
  f = "".concat(v, "-dialog"),
  b = function(r) {
    i(c, r);
    var a = o(c);

    function c() {
      var e;
      return n(this, c), (e = a.apply(this, arguments)).behaviors = [p.default], e.options = {
        multipleSlots: !0
      }, e.externalClasses = ["".concat(v, "-class"), "".concat(v, "-class-content"), "".concat(v, "-class-confirm"), "".concat(v, "-class-cancel"), "".concat(v, "-class-action")], e.properties = s.default, e.data = {
        prefix: v,
        classPrefix: f,
        buttonVariant: "text"
      }, e.observers = {
        "confirmBtn, cancelBtn": function(e, n) {
          var i = this.data,
            o = i.prefix,
            r = i.classPrefix,
            a = i.buttonLayout,
            c = {
              buttonVariant: "text"
            },
            s = [e, n].some((function(t) {
              return (0, u.isObject)(t) && t.variant && "text" !== t.variant
            })),
            l = {
              confirm: e,
              cancel: n
            },
            p = ["".concat(r, "__button")],
            h = [];
          s ? (c.buttonVariant = "base", p.push("".concat(r, "__button--").concat(a))) : (p.push("".concat(r, "__button--text")), h.push("".concat(r, "-button"))), Object.keys(l).forEach((function(e) {
            var n = l[e],
              i = {
                block: !0,
                rootClass: [].concat(p, ["".concat(r, "__button--").concat(e)]),
                tClass: [].concat(h, ["".concat(o, "-class-").concat(e)]),
                variant: c.buttonVariant,
                openType: ""
              };
            "cancel" === e && "base" === c.buttonVariant && (i.theme = "light"), c["_".concat(e)] = "string" == typeof n ? Object.assign(Object.assign({}, i), {
              content: n
            }) : n && "object" == t(n) ? Object.assign(Object.assign({}, i), n) : null
          })), this.setData(Object.assign({}, c))
        }
      }, e.methods = {
        onTplButtonTap: function(t) {
          var e, n, i, o = t.type,
            r = t.target.dataset,
            a = r.type,
            c = r.extra,
            s = this.data["_".concat(a)],
            u = "bind".concat(o);
          if ("action" !== a) {
            if ("function" == typeof s[u] && s[u](t) && this.close(), !s.openType && ["confirm", "cancel"].includes(a) && (null === (e = this[(0, l.toCamel)("on-".concat(a))]) || void 0 === e || e.call(this, a)), "tap" !== o) {
              var p = (null === (i = null === (n = t.detail) || void 0 === n ? void 0 : n.errMsg) || void 0 === i ? void 0 : i.indexOf("ok")) > -1;
              this.triggerEvent(p ? "open-type-event" : "open-type-error-event", t.detail)
            }
          } else this.onActionTap(c)
        },
        onConfirm: function() {
          this.triggerEvent("confirm"), this._onConfirm && (this._onConfirm({
            trigger: "confirm"
          }), this.close())
        },
        onCancel: function() {
          var t = {
            trigger: "cancel"
          };
          this.triggerEvent("cancel"), this.triggerEvent("close", t), this._onCancel && (this._onCancel(t), this.close())
        },
        onClose: function() {
          var t, e = {
            trigger: "close-btn"
          };
          this.triggerEvent("close", e), null === (t = this._onCancel) || void 0 === t || t.call(this, e), this.close()
        },
        close: function() {
          this.setData({
            visible: !1
          })
        },
        overlayClick: function() {
          var t;
          if (this.triggerEvent("overlay-click"), this.properties.closeOnOverlayClick) {
            var e = {
              trigger: "overlay"
            };
            this.triggerEvent("close", e), null === (t = this._onCancel) || void 0 === t || t.call(this, e), this.close()
          }
        },
        onActionTap: function(t) {
          this.triggerEvent("action", {
            index: t
          }), this._onAction && (this._onAction({
            index: t
          }), this.close())
        },
        openValueCBHandle: function(t) {
          this.triggerEvent("open-type-event", t.detail)
        },
        openValueErrCBHandle: function(t) {
          this.triggerEvent("open-type-error-event", t.detail)
        }
      }, e
    }
    return e(c)
  }(a.SuperComponent),
  g = b = (0, r.__decorate)([(0, a.wxComponent)()], b);
exports.default = g;