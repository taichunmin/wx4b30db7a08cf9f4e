Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../../../@babel/runtime/helpers/createClass"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../@babel/runtime/helpers/inherits"),
  i = require("../../../@babel/runtime/helpers/createSuper"),
  n = require("tslib"),
  o = require("../common/src/index"),
  a = c(require("../common/config")),
  s = require("../common/validator"),
  u = c(require("./props"));

function c(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var l = a.default.prefix,
  p = "".concat(l, "-grid"),
  d = function(n) {
    r(a, n);
    var o = i(a);

    function a() {
      var e;
      return t(this, a), (e = o.apply(this, arguments)).externalClasses = ["t-class"], e.relations = {
        "../grid-item/grid-item": {
          type: "descendant"
        }
      }, e.properties = u.default, e.data = {
        prefix: l,
        classPrefix: p,
        contentStyle: ""
      }, e.observers = {
        "column,hover,align,gutter,border": function() {
          this.updateContentStyle(), this.doForChild((function(e) {
            return e.updateStyle()
          }))
        }
      }, e.lifetimes = {
        attached: function() {
          this.updateContentStyle()
        }
      }, e.methods = {
        doForChild: function(e) {
          this.$children.forEach(e)
        },
        updateContentStyle: function() {
          var e = [],
            t = this.getContentMargin();
          t && e.push(t), this.setData({
            contentStyle: e.join(";")
          })
        },
        getContentMargin: function() {
          var e = this.properties.gutter,
            t = this.properties.border;
          if (!t) return "margin-bottom:-".concat(e, "rpx; margin-right:-").concat(e, "rpx");
          (0, s.isObject)(t) || (t = {});
          var r = t.width,
            i = void 0 === r ? 2 : r;
          return "margin-bottom:-".concat(i, "rpx; margin-right:-").concat(i, "rpx")
        }
      }, e
    }
    return e(a)
  }(o.SuperComponent),
  h = d = (0, n.__decorate)([(0, o.wxComponent)()], d);
exports.default = h;