Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("tslib"),
  t = require("./message.interface"),
  s = require("../common/utils"),
  r = function(r) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.MessageType.info,
      o = r.context,
      i = r.selector,
      c = void 0 === i ? "#t-message" : i,
      a = (0, e.__rest)(r, ["context", "selector"]),
      u = (0, s.getInstance)(o, c);
    if ("boolean" != typeof a.single && (a.single = !0), u) return u.setMessage(a, n), u;
    console.error("未找到组件,请确认 selector && context 是否正确")
  },
  n = {
    info: function(e) {
      return r(e, t.MessageType.info)
    },
    success: function(e) {
      return r(e, t.MessageType.success)
    },
    warning: function(e) {
      return r(e, t.MessageType.warning)
    },
    error: function(e) {
      return r(e, t.MessageType.error)
    },
    hide: function(e) {
      var t = Object.assign({}, e),
        r = t.context,
        n = t.selector,
        o = void 0 === n ? "#t-message" : n,
        i = (0, s.getInstance)(r, o);
      i && i.hide()
    }
  };
exports.default = n;