Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../../../@babel/runtime/helpers/createClass"),
  r = require("../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../@babel/runtime/helpers/inherits"),
  a = require("../../../@babel/runtime/helpers/createSuper"),
  n = require("tslib"),
  i = require("../common/src/index"),
  s = l(require("../common/config")),
  u = l(require("./props"));

function l(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var o = s.default.prefix,
  p = "".concat(o, "-collapse"),
  c = function(n) {
    t(s, n);
    var i = a(s);

    function s() {
      var e;
      return r(this, s), (e = i.apply(this, arguments)).externalClasses = ["".concat(o, "-class")], e.relations = {
        "../collapse-panel/collapse-panel": {
          type: "descendant"
        }
      }, e.controlledProps = [{
        key: "value",
        event: "change"
      }], e.properties = u.default, e.data = {
        prefix: o,
        classPrefix: p
      }, e.observers = {
        "value, expandMutex ": function() {
          this.updateExpanded()
        }
      }, e.methods = {
        updateExpanded: function() {
          var e = this;
          this.$children.forEach((function(r) {
            r.updateExpanded(e.properties.value)
          }))
        },
        switch: function(e) {
          var r, t = this.properties,
            a = t.expandMutex,
            n = t.value;
          r = n.indexOf(e) > -1 ? n.filter((function(r) {
            return r !== e
          })) : a ? [e] : n.concat(e), this._trigger("change", {
            value: r
          })
        }
      }, e
    }
    return e(s)
  }(i.SuperComponent),
  d = c = (0, n.__decorate)([(0, i.wxComponent)()], c);
exports.default = d;