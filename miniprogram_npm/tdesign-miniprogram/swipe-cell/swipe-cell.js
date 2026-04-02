Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/createClass"),
  r = require("../../../@babel/runtime/helpers/inherits"),
  n = require("../../../@babel/runtime/helpers/createSuper"),
  s = require("tslib"),
  a = require("../common/src/index"),
  o = h(require("../common/config")),
  c = h(require("./props")),
  u = require("../common/utils"),
  l = require("../common/wechat");

function h(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var p = [],
  f = o.default.prefix,
  d = "".concat(f, "-swipe-cell"),
  v = ".".concat(d),
  m = function(s) {
    r(o, s);
    var a = n(o);

    function o() {
      var e;
      return t(this, o), (e = a.apply(this, arguments)).externalClasses = ["".concat(f, "-class")], e.options = {
        multipleSlots: !0
      }, e.properties = c.default, e.data = {
        prefix: f,
        wrapperStyle: "",
        closed: !0,
        classPrefix: d,
        skipMove: !1
      }, e.observers = {
        "left, right": function() {
          this.setSwipeWidth()
        }
      }, e.lifetimes = {
        attached: function() {
          p.push(this)
        },
        ready: function() {
          this.setSwipeWidth()
        },
        detached: function() {
          var e = this;
          p = p.filter((function(t) {
            return t !== e
          }))
        }
      }, e
    }
    return i(o, [{
      key: "setSwipeWidth",
      value: function() {
        var t = this;
        Promise.all([(0, u.getRect)(this, "".concat(v, "__left")), (0, u.getRect)(this, "".concat(v, "__right"))]).then((function(i) {
          var r = e(i, 2),
            n = r[0],
            s = r[1];
          0 !== n.width || 0 !== s.width || t._hasObserved || (t._hasObserved = !0, (0, l.getObserver)(t, ".".concat(d)).then((function() {
            t.setSwipeWidth()
          }))), t.setData({
            leftWidth: n.width,
            rightWidth: s.width
          })
        }))
      }
    }, {
      key: "skipMove",
      value: function() {
        this.data.skipMove || this.setData({
          skipMove: !0
        })
      }
    }, {
      key: "catchMove",
      value: function() {
        this.data.skipMove && this.setData({
          skipMove: !1
        })
      }
    }, {
      key: "open",
      value: function() {
        this.setData({
          opened: !0
        })
      }
    }, {
      key: "close",
      value: function() {
        this.setData({
          opened: !1
        })
      }
    }, {
      key: "closeOther",
      value: function() {
        var e = this;
        p.filter((function(t) {
          return t !== e
        })).forEach((function(e) {
          return e.close()
        }))
      }
    }, {
      key: "onTap",
      value: function() {
        this.close()
      }
    }, {
      key: "onActionTap",
      value: function(e) {
        var t = e.currentTarget.dataset.action;
        this.triggerEvent("click", t)
      }
    }]), o
  }(a.SuperComponent),
  b = m = (0, s.__decorate)([(0, a.wxComponent)()], m);
exports.default = b;