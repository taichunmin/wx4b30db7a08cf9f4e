Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0, require("../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../@babel/runtime/helpers/createClass"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  a = require("../../../@babel/runtime/helpers/inherits"),
  i = require("../../../@babel/runtime/helpers/createSuper"),
  r = require("tslib"),
  n = require("../common/src/index"),
  s = p(require("../common/config")),
  l = p(require("./props")),
  o = require("../common/utils");

function p(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var u = s.default.prefix,
  d = "".concat(u, "-collapse-panel"),
  c = function(r) {
    a(s, r);
    var n = i(s);

    function s() {
      var e;
      return t(this, s), (e = n.apply(this, arguments)).externalClasses = ["".concat(u, "-class"), "".concat(u, "-class-content"), "".concat(u, "-class-header")], e.options = {
        multipleSlots: !0
      }, e.relations = {
        "../collapse/collapse": {
          type: "ancestor",
          linked: function(e) {
            var t = e.properties,
              a = t.value,
              i = t.expandIcon,
              r = t.disabled;
            this.setData({
              ultimateExpandIcon: null == this.properties.expandIcon ? i : this.properties.expandIcon,
              ultimateDisabled: null == this.properties.disabled ? r : this.properties.disabled
            }), this.updateExpanded(a)
          }
        }
      }, e.properties = l.default, e.data = {
        prefix: u,
        expanded: !1,
        classPrefix: d,
        classBasePrefix: u,
        ultimateExpandIcon: !1,
        ultimateDisabled: !1
      }, e.observers = {
        disabled: function(e) {
          this.setData({
            ultimateDisabled: !!e
          })
        }
      }, e.methods = {
        updateExpanded: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          if (this.$parent) {
            var t = this.properties.value,
              a = this.$parent.data.defaultExpandAll,
              i = a ? !this.data.expanded : e.includes(t);
            i !== this.properties.expanded && (this.setData({
              expanded: i
            }), this.updateStyle(i))
          }
        },
        updateStyle: function(e) {
          var t = this;
          return (0, o.getRect)(this, ".".concat(d, "__content")).then((function(e) {
            return e.height
          })).then((function(a) {
            var i = wx.createAnimation({
              duration: 0,
              timingFunction: "ease-in-out"
            });
            e ? i.height(a).top(0).step({
              duration: 300
            }).height("auto").step() : i.height(a).top(1).step({
              duration: 1
            }).height(0).step({
              duration: 300
            }), t.setData({
              animation: i.export()
            })
          }))
        },
        onClick: function() {
          var e = this.data.ultimateDisabled,
            t = this.properties.value;
          e || (this.$parent.data.defaultExpandAll ? this.updateExpanded() : this.$parent.switch(t))
        }
      }, e
    }
    return e(s)
  }(n.SuperComponent),
  h = c = (0, r.__decorate)([(0, n.wxComponent)()], c);
exports.default = h;