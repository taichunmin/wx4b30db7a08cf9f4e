Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0, require("../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../@babel/runtime/helpers/createClass"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../@babel/runtime/helpers/inherits"),
  s = require("../../../@babel/runtime/helpers/createSuper"),
  n = require("tslib"),
  i = require("../common/src/index"),
  a = l(require("../common/config")),
  c = l(require("./props")),
  o = require("../common/utils");

function l(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var u = a.default.prefix,
  p = "".concat(u, "-link"),
  f = function(n) {
    r(a, n);
    var i = s(a);

    function a() {
      var e;
      return t(this, a), (e = i.apply(this, arguments)).externalClasses = ["".concat(u, "-class"), "".concat(u, "-class-hover"), "".concat(u, "-class-prefix-icon"), "".concat(u, "-class-content"), "".concat(u, "-class-suffix-icon")], e.properties = c.default, e.options = {
        multipleSlots: !0
      }, e.data = {
        prefix: u,
        classPrefix: p
      }, e.observers = {
        "theme, disabled, size, underline, navigatorProps": function() {
          this.setClass()
        },
        prefixIcon: function(e) {
          this.setData({
            _prefixIcon: (0, o.calcIcon)(e)
          })
        },
        suffixIcon: function(e) {
          this.setData({
            _suffixIcon: (0, o.calcIcon)(e)
          })
        }
      }, e.lifetimes = {
        attached: function() {
          this.setClass()
        }
      }, e.methods = {
        setClass: function() {
          var e = this.properties,
            t = e.theme,
            r = e.size,
            s = e.underline,
            n = e.navigatorProps,
            i = e.disabled,
            a = [p, "".concat(p, "--").concat(t), "".concat(p, "--").concat(r)],
            c = null != n ? n : {},
            o = c.url,
            l = c.appId,
            u = c.shortLink,
            f = c.target,
            d = c.openType,
            h = !(o || "miniProgram" === f && (l || u));
          s && a.push("".concat(p, "--underline")), (n && h && !["navigateBack", "exit"].includes(d) || i) && a.push("".concat(p, "--disabled")), this.setData({
            className: a.join(" ")
          })
        },
        onSuccess: function(e) {
          this.triggerEvent("success", e)
        },
        onFail: function(e) {
          this.triggerEvent("fail", e)
        },
        onComplete: function(e) {
          this.triggerEvent("complete", e)
        }
      }, e
    }
    return e(a)
  }(i.SuperComponent),
  d = f = (0, n.__decorate)([(0, i.wxComponent)()], f);
exports.default = d;