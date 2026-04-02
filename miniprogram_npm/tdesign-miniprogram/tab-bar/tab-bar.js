Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../../../@babel/runtime/helpers/createClass"),
  r = require("../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../@babel/runtime/helpers/inherits"),
  a = require("../../../@babel/runtime/helpers/createSuper"),
  i = require("tslib"),
  n = require("../common/src/index"),
  u = l(require("../common/config")),
  s = l(require("./props"));

function l(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var o = u.default.prefix,
  c = "".concat(o, "-tab-bar"),
  h = function(i) {
    t(u, i);
    var n = a(u);

    function u() {
      var e;
      return r(this, u), (e = n.apply(this, arguments)).relations = {
        "../tab-bar-item/tab-bar-item": {
          type: "descendant"
        }
      }, e.externalClasses = ["".concat(o, "-class")], e.backupValue = -1, e.data = {
        prefix: o,
        classPrefix: c
      }, e.properties = s.default, e.controlledProps = [{
        key: "value",
        event: "change"
      }], e.observers = {
        value: function() {
          this.updateChildren()
        }
      }, e.lifetimes = {
        ready: function() {
          this.showChildren()
        }
      }, e.methods = {
        showChildren: function() {
          var e = this,
            r = this.data.value;
          this.$children.forEach((function(t) {
            t.setData({
              crowded: e.$children.length > 3
            }), t.properties.value === r && t.showSpread()
          }))
        },
        updateChildren: function() {
          var e = this.data.value;
          this.$children.forEach((function(r) {
            r.checkActive(e)
          }))
        },
        updateValue: function(e) {
          this._trigger("change", {
            value: e
          })
        },
        changeOtherSpread: function(e) {
          this.$children.forEach((function(r) {
            r.properties.value !== e && r.closeSpread()
          }))
        },
        initName: function() {
          return this.backupValue += 1
        }
      }, e
    }
    return e(u)
  }(n.SuperComponent),
  d = h = (0, i.__decorate)([(0, n.wxComponent)()], h);
exports.default = d;