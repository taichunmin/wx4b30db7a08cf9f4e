Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../../../@babel/runtime/helpers/createClass"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../@babel/runtime/helpers/inherits"),
  i = require("../../../@babel/runtime/helpers/createSuper"),
  n = require("tslib"),
  a = require("../common/src/index"),
  s = l(require("../common/config")),
  u = l(require("./props"));

function l(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var o = s.default.prefix,
  c = "".concat(o, "-steps"),
  d = function(n) {
    r(s, n);
    var a = i(s);

    function s() {
      var e;
      return t(this, s), (e = a.apply(this, arguments)).relations = {
        "../step-item/step-item": {
          type: "child",
          linked: function(e) {
            this.updateChildren();
            var t = this.data.readonly;
            e.setData({
              readonly: t
            })
          },
          unlinked: function() {
            this.updateLastChid()
          }
        }
      }, e.externalClasses = ["".concat(o, "-class")], e.properties = u.default, e.controlledProps = [{
        key: "current",
        event: "change"
      }], e.data = {
        prefix: o,
        classPrefix: c
      }, e.observers = {
        "current, theme, sequence": function() {
          this.updateChildren()
        }
      }, e.methods = {
        updateChildren: function() {
          var e = this,
            t = this.$children;
          t.forEach((function(r, i) {
            r.updateStatus(Object.assign({
              index: i,
              items: t
            }, e.data))
          }))
        },
        updateLastChid: function() {
          var e = this.$children;
          e.forEach((function(t, r) {
            return t.setData({
              isLastChild: r === e.length - 1
            })
          }))
        },
        handleClick: function(e) {
          if (!this.data.readonly) {
            var t = this.data.current;
            this._trigger("change", {
              previous: t,
              current: e
            })
          }
        }
      }, e
    }
    return e(s)
  }(a.SuperComponent),
  h = d = (0, n.__decorate)([(0, a.wxComponent)()], d);
exports.default = h;