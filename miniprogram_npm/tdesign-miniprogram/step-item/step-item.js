Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../../../@babel/runtime/helpers/createClass"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  s = require("../../../@babel/runtime/helpers/inherits"),
  r = require("../../../@babel/runtime/helpers/createSuper"),
  a = require("tslib"),
  i = require("../common/src/index"),
  u = c(require("../common/config")),
  n = c(require("./props"));

function c(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var o = u.default.prefix,
  l = "".concat(o, "-steps-item"),
  p = function(a) {
    s(u, a);
    var i = r(u);

    function u() {
      var e;
      return t(this, u), (e = i.apply(this, arguments)).options = {
        multipleSlots: !0
      }, e.relations = {
        "../steps/steps": {
          type: "parent"
        }
      }, e.externalClasses = ["".concat(o, "-class"), "".concat(o, "-class-content"), "".concat(o, "-class-title"), "".concat(o, "-class-description"), "".concat(o, "-class-extra")], e.properties = n.default, e.data = {
        classPrefix: l,
        prefix: o,
        index: 0,
        isDot: !1,
        curStatus: "",
        layout: "vertical",
        isLastChild: !1,
        sequence: "positive"
      }, e.observers = {
        status: function(e) {
          var t = this.data.curStatus;
          "" !== t && e !== t && this.setData({
            curStatus: e
          })
        }
      }, e.methods = {
        updateStatus: function(e) {
          var t = e.current,
            s = e.currentStatus,
            r = e.index,
            a = e.theme,
            i = e.layout,
            u = e.items,
            n = e.sequence,
            c = this.data.status;
          "default" === c && (r < Number(t) ? c = "finish" : r === Number(t) && (c = s)), this.setData({
            curStatus: c,
            index: r,
            isDot: "dot" === a,
            layout: i,
            theme: a,
            sequence: n,
            isLastChild: r === ("positive" === n ? u.length - 1 : 0)
          })
        },
        onTap: function() {
          this.$parent.handleClick(this.data.index)
        }
      }, e
    }
    return e(u)
  }(i.SuperComponent),
  d = p = (0, a.__decorate)([(0, i.wxComponent)()], p);
exports.default = d;