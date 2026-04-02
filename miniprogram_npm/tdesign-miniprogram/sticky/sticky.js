Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../@babel/runtime/helpers/createClass"),
  i = require("../../../@babel/runtime/helpers/inherits"),
  o = require("../../../@babel/runtime/helpers/createSuper"),
  n = require("tslib"),
  s = require("../common/src/index"),
  a = u(require("./props")),
  c = u(require("../common/config")),
  l = u(require("../mixins/page-scroll")),
  f = require("../common/utils");

function u(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var h = c.default.prefix,
  p = "".concat(h, "-sticky"),
  d = ".".concat(p),
  m = function(n) {
    i(c, n);
    var s = o(c);

    function c() {
      var r;
      return t(this, c), (r = s.apply(this, arguments)).externalClasses = ["".concat(h, "-class"), "".concat(h, "-class-content")], r.properties = a.default, r.behaviors = [(0, l.default)()], r.observers = {
        "offsetTop, disabled, container": function() {
          this.onScroll()
        }
      }, r.data = {
        prefix: h,
        classPrefix: p,
        containerStyle: "",
        contentStyle: ""
      }, r.methods = {
        onScroll: function(t) {
          var r = this,
            i = (t || {}).scrollTop,
            o = this.properties,
            n = o.container,
            s = o.offsetTop;
          o.disabled ? this.setDataAfterDiff({
            isFixed: !1,
            transform: 0
          }) : (this.scrollTop = i || this.scrollTop, "function" != typeof n ? (0, f.getRect)(this, d).then((function(e) {
            e && (s >= e.top ? (r.setDataAfterDiff({
              isFixed: !0,
              height: e.height
            }), r.transform = 0) : r.setDataAfterDiff({
              isFixed: !1
            }))
          })) : Promise.all([(0, f.getRect)(this, d), this.getContainerRect()]).then((function(t) {
            var i = e(t, 2),
              o = i[0],
              n = i[1];
            o && n && (s + o.height > n.height + n.top ? r.setDataAfterDiff({
              isFixed: !1,
              transform: n.height - o.height
            }) : s >= o.top ? r.setDataAfterDiff({
              isFixed: !0,
              height: o.height,
              transform: 0
            }) : r.setDataAfterDiff({
              isFixed: !1,
              transform: 0
            }))
          })))
        },
        setDataAfterDiff: function(e) {
          var t = this,
            r = this.properties.offsetTop,
            i = this.data,
            o = i.containerStyle,
            n = i.contentStyle,
            s = e.isFixed,
            a = e.height,
            c = e.transform;
          wx.nextTick((function() {
            var e = "",
              i = "";
            if (s && (e += "height:".concat(a, "px;"), i += "position:fixed;top:".concat(r, "px;left:0;right:0;")), c) {
              var l = "translate3d(0, ".concat(c, "px, 0)");
              i += "-webkit-transform:".concat(l, ";transform:").concat(l, ";")
            }
            o === e && n === i || t.setData({
              containerStyle: e,
              contentStyle: i
            }), t.triggerEvent("scroll", {
              scrollTop: t.scrollTop,
              isFixed: s
            })
          }))
        },
        getContainerRect: function() {
          var e = this.properties.container();
          return new Promise((function(t) {
            return e.boundingClientRect(t).exec()
          }))
        }
      }, r
    }
    return r(c, [{
      key: "ready",
      value: function() {
        this.onScroll()
      }
    }]), c
  }(s.SuperComponent),
  x = m = (0, n.__decorate)([(0, s.wxComponent)()], m);
exports.default = x;