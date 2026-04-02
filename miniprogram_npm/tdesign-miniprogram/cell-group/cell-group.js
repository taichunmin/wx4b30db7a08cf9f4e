Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../../../@babel/runtime/helpers/createClass"),
  r = require("../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../@babel/runtime/helpers/inherits"),
  i = require("../../../@babel/runtime/helpers/createSuper"),
  a = require("tslib"),
  n = require("../common/src/index"),
  s = u(require("../common/config")),
  l = u(require("./props"));

function u(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var c = s.default.prefix,
  o = "".concat(c, "-cell-group"),
  p = function(a) {
    t(s, a);
    var n = i(s);

    function s() {
      var e;
      return r(this, s), (e = n.apply(this, arguments)).externalClasses = ["".concat(c, "-class"), "".concat(c, "-class-title")], e.relations = {
        "../cell/cell": {
          type: "child",
          linked: function() {
            this.updateLastChid()
          },
          unlinked: function() {
            this.updateLastChid()
          }
        }
      }, e.properties = l.default, e.data = {
        prefix: c,
        classPrefix: o
      }, e.methods = {
        updateLastChid: function() {
          var e = this.$children;
          e.forEach((function(r, t) {
            return r.setData({
              isLastChild: t === e.length - 1
            })
          }))
        }
      }, e
    }
    return e(s)
  }(n.SuperComponent),
  d = p = (0, a.__decorate)([(0, n.wxComponent)()], p);
exports.default = d;