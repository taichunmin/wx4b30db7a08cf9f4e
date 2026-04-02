Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/createClass"),
  r = require("../../../@babel/runtime/helpers/classCallCheck"),
  a = require("../../../@babel/runtime/helpers/inherits"),
  i = require("../../../@babel/runtime/helpers/createSuper"),
  s = require("tslib"),
  n = require("../common/src/index"),
  u = l(require("../common/config")),
  o = l(require("./props")),
  c = require("../common/utils");

function l(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var h = u.default.prefix,
  p = "".concat(h, "-tab-bar-item"),
  d = function(n) {
    a(l, n);
    var u = i(l);

    function l() {
      var t;
      return r(this, l), (t = u.apply(this, arguments)).externalClasses = ["".concat(h, "-class")], t.parent = null, t.relations = {
        "../tab-bar/tab-bar": {
          type: "ancestor",
          linked: function(e) {
            var t = e.data,
              r = t.theme,
              a = t.split,
              i = t.shape;
            this.setData({
              theme: r,
              split: a,
              shape: i,
              currentName: this.properties.value ? this.properties.value : e.initName()
            }), e.updateChildren()
          }
        }
      }, t.options = {
        multipleSlots: !0
      }, t.data = {
        prefix: h,
        classPrefix: p,
        isSpread: !1,
        isChecked: !1,
        hasChildren: !1,
        currentName: "",
        split: !0,
        iconOnly: !1,
        theme: "",
        crowded: !1,
        shape: "normal"
      }, t.properties = o.default, t.observers = {
        subTabBar: function(e) {
          this.setData({
            hasChildren: e.length > 0
          })
        },
        icon: function(e) {
          this.setData({
            _icon: (0, c.calcIcon)(e)
          })
        }
      }, t.lifetimes = {
        attached: function() {
          return (0, s.__awaiter)(this, void 0, void 0, e().mark((function t() {
            var r;
            return e().wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, (0, c.getRect)(this, ".".concat(p, "__text"));
                case 2:
                  r = e.sent, this.setData({
                    iconOnly: 0 === r.height
                  });
                case 4:
                case "end":
                  return e.stop()
              }
            }), t, this)
          })))
        }
      }, t.methods = {
        showSpread: function() {
          this.setData({
            isSpread: !0
          })
        },
        toggle: function() {
          var e = this.data,
            t = e.currentName,
            r = e.hasChildren,
            a = e.isSpread;
          r && this.setData({
            isSpread: !a
          }), this.$parent.updateValue(t), this.$parent.changeOtherSpread(t)
        },
        selectChild: function(e) {
          var t = e.target.dataset.value;
          this.$parent.updateValue(t), this.setData({
            isSpread: !1
          })
        },
        checkActive: function(e) {
          var t = this.data,
            r = t.currentName,
            a = t.subTabBar,
            i = (null == a ? void 0 : a.some((function(t) {
              return t.value === e
            }))) || r === e;
          this.setData({
            isChecked: i
          })
        },
        closeSpread: function() {
          this.setData({
            isSpread: !1
          })
        }
      }, t
    }
    return t(l)
  }(n.SuperComponent),
  m = d = (0, s.__decorate)([(0, n.wxComponent)()], d);
exports.default = m;