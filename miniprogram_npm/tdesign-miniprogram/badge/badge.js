Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../../../@babel/runtime/helpers/createClass"),
  r = require("../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../@babel/runtime/helpers/inherits"),
  a = require("../../../@babel/runtime/helpers/createSuper"),
  i = require("tslib"),
  s = require("../common/src/index"),
  n = c(require("../common/config")),
  l = c(require("./props")),
  o = require("../common/utils");

function c(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var u = n.default.prefix,
  p = "".concat(u, "-badge"),
  d = (0, o.uniqueFactory)("badge"),
  b = function(i) {
    t(n, i);
    var s = a(n);

    function n() {
      var e;
      return r(this, n), (e = s.apply(this, arguments)).options = {
        multipleSlots: !0
      }, e.externalClasses = ["".concat(u, "-class"), "".concat(u, "-class-count"), "".concat(u, "-class-content")], e.properties = l.default, e.data = {
        prefix: u,
        classPrefix: p,
        value: "",
        labelID: "",
        descriptionID: ""
      }, e.lifetimes = {
        ready: function() {
          var e = d();
          this.setData({
            labelID: "".concat(e, "_label"),
            descriptionID: "".concat(e, "_description")
          })
        }
      }, e
    }
    return e(n)
  }(s.SuperComponent),
  f = b = (0, i.__decorate)([(0, s.wxComponent)()], b);
exports.default = f;