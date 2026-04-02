Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../@babel/runtime/helpers/createClass"),
  a = require("../../../@babel/runtime/helpers/inherits"),
  i = require("../../../@babel/runtime/helpers/createSuper"),
  r = require("tslib"),
  s = require("../common/src/index"),
  n = l(require("./props"));

function l(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var u = l(require("../common/config")).default.prefix,
  o = "".concat(u, "-tab-panel"),
  c = function(r) {
    a(l, r);
    var s = i(l);

    function l() {
      var t;
      return e(this, l), (t = s.apply(this, arguments)).externalClasses = ["".concat(u, "-class")], t.relations = {
        "../tabs/tabs": {
          type: "ancestor"
        }
      }, t.options = {
        multipleSlots: !0
      }, t.properties = n.default, t.data = {
        prefix: u,
        classPrefix: o,
        active: !1,
        hide: !0,
        id: "",
        hasActivated: !1
      }, t.observers = {
        "label, badgeProps, disabled, icon, panel, value, lazy": function() {
          this.update()
        }
      }, t
    }
    return t(l, [{
      key: "setId",
      value: function(e) {
        this.setData({
          id: e
        })
      }
    }, {
      key: "getComputedName",
      value: function() {
        return null != this.properties.value ? "".concat(this.properties.value) : "".concat(this.index)
      }
    }, {
      key: "update",
      value: function() {
        var e;
        null === (e = this.$parent) || void 0 === e || e.updateTabs()
      }
    }, {
      key: "render",
      value: function(e, t) {
        this.initialized = this.initialized || e, e && !this.data.hasActivated && this.setData({
          hasActivated: !0
        }), this.setData({
          active: e,
          hide: !t.data.animation && !e
        })
      }
    }]), l
  }(s.SuperComponent),
  p = c = (0, r.__decorate)([(0, s.wxComponent)()], c);
exports.default = p;