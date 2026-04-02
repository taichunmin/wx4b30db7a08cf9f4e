Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/createClass"),
  s = require("../../../@babel/runtime/helpers/inherits"),
  n = require("../../../@babel/runtime/helpers/createSuper"),
  a = require("tslib"),
  r = require("../common/src/index"),
  o = l(require("../common/config")),
  c = require("./message.interface"),
  u = l(require("./props")),
  h = require("../common/utils");

function l(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var d = o.default.prefix,
  f = "".concat(d, "-message"),
  g = function(a) {
    s(o, a);
    var r = n(o);

    function o() {
      var e;
      return t(this, o), (e = r.apply(this, arguments)).options = {
        multipleSlots: !0
      }, e.properties = Object.assign({}, u.default), e.data = {
        prefix: d,
        classPrefix: f,
        messageList: []
      }, e.index = 0, e.instances = [], e.gap = 12, e.observers = {
        visible: function(e) {
          e ? this.setMessage(this.properties, this.properties.theme) : this.setData({
            messageList: []
          })
        }
      }, e.pageLifetimes = {
        show: function() {
          this.hideAll()
        }
      }, e.lifetimes = {
        ready: function() {
          this.memoInitialData()
        }
      }, e
    }
    return i(o, [{
      key: "memoInitialData",
      value: function() {
        this.initialData = Object.assign(Object.assign({}, this.properties), this.data)
      }
    }, {
      key: "setMessage",
      value: function(e) {
        var t = this,
          i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.MessageType.info,
          s = "".concat(f, "_").concat(this.index);
        e.single && (s = f), this.gap = (0, h.unitConvert)(e.gap || this.gap);
        var n = Object.assign(Object.assign({}, e), {
            theme: i,
            id: s,
            gap: this.gap
          }),
          a = this.instances.findIndex((function(e) {
            return e.id === s
          }));
        if (a < 0) this.addMessage(n);
        else {
          var r = this.instances[a],
            o = this.getOffsetHeight(a);
          r.resetData((function() {
            r.setData(n, r.show.bind(r, o)), r.onHide = function() {
              t.close(s)
            }
          }))
        }
      }
    }, {
      key: "addMessage",
      value: function(t) {
        var i = this,
          s = [].concat(e(this.data.messageList), [{
            id: t.id
          }]);
        this.setData({
          messageList: s
        }, (function() {
          var e = i.getOffsetHeight(),
            s = i.showMessageItem(t, t.id, e);
          i.instances && (i.instances.push(s), i.index += 1)
        }))
      }
    }, {
      key: "getOffsetHeight",
      value: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1,
          t = 0,
          i = e;
        (-1 === i || i > this.instances.length) && (i = this.instances.length);
        for (var s = 0; s < i; s += 1) {
          var n = this.instances[s];
          t += n.data.height + n.data.gap
        }
        return t
      }
    }, {
      key: "showMessageItem",
      value: function(e, t, i) {
        var s = this,
          n = this.selectComponent("#".concat(t));
        if (n) return n.resetData((function() {
          n.setData(e, n.show.bind(n, i)), n.onHide = function() {
            s.close(t)
          }
        })), n;
        console.error("未找到组件,请确认 selector && context 是否正确")
      }
    }, {
      key: "close",
      value: function(e) {
        var t = this;
        setTimeout((function() {
          t.removeMsg(e)
        }), 400), this.removeInstance(e)
      }
    }, {
      key: "hide",
      value: function(e) {
        e || this.hideAll();
        var t = this.instances.find((function(t) {
          return t.id === e
        }));
        t && t.hide()
      }
    }, {
      key: "hideAll",
      value: function() {
        for (; 0 < this.instances.length;) this.instances[0].hide()
      }
    }, {
      key: "removeInstance",
      value: function(e) {
        var t = this.instances.findIndex((function(t) {
          return t.id === e
        }));
        if (!(t < 0)) {
          var i = this.instances[t].data.height;
          this.instances.splice(t, 1);
          for (var s = t; s < this.instances.length; s += 1) {
            var n = this.instances[s];
            n.setData({
              wrapTop: n.data.wrapTop - i - n.data.gap
            })
          }
        }
      }
    }, {
      key: "removeMsg",
      value: function(e) {
        var t = this.data.messageList.findIndex((function(t) {
          return t.id === e
        }));
        t > -1 && (this.data.messageList.splice(t, 1), this.setData({
          messageList: this.data.messageList
        }))
      }
    }, {
      key: "handleClose",
      value: function() {
        this.triggerEvent("close-btn-click")
      }
    }, {
      key: "handleLinkClick",
      value: function() {
        this.triggerEvent("link-click")
      }
    }, {
      key: "handleDurationEnd",
      value: function() {
        this.triggerEvent("duration-end")
      }
    }]), o
  }(r.SuperComponent),
  p = g = (0, a.__decorate)([(0, r.wxComponent)()], g);
exports.default = p;