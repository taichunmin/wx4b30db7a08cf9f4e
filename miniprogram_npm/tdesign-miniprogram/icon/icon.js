Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/createClass"),
  r = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/inherits"),
  n = require("../../../@babel/runtime/helpers/createSuper"),
  s = require("tslib"),
  a = require("../common/src/index"),
  o = l(require("../common/config")),
  c = l(require("./props")),
  u = require("../common/utils");

function l(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var f = o.default.prefix,
  d = "".concat(f, "-icon"),
  h = function(a) {
    i(l, a);
    var o = n(l);

    function l() {
      var t;
      return r(this, l), (t = o.apply(this, arguments)).externalClasses = ["".concat(f, "-class")], t.properties = c.default, t.data = {
        componentPrefix: f,
        classPrefix: d,
        isImage: !1,
        iconStyle: void 0
      }, t.observers = {
        "name, color, size, style": function() {
          this.setIconStyle()
        }
      }, t.methods = {
        onTap: function(e) {
          this.triggerEvent("click", e.detail)
        },
        setIconStyle: function() {
          var t = this,
            r = this.data,
            i = r.name,
            n = r.color,
            a = r.size,
            o = r.classPrefix,
            c = -1 !== i.indexOf("/"),
            l = (0, u.addUnit)(a),
            f = n ? {
              color: n
            } : {},
            d = a ? {
              "font-size": l
            } : {},
            h = Object.assign(Object.assign({}, f), d);
          this.setData({
            isImage: c
          }, (function() {
            return (0, s.__awaiter)(t, void 0, void 0, e().mark((function t() {
              var r;
              return e().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!c) {
                      e.next = 8;
                      break
                    }
                    if (r = l, e.t0 = r, e.t0) {
                      e.next = 6;
                      break
                    }
                    return e.next = 6, (0, u.getRect)(this, ".".concat(o)).then((function(e) {
                      r = (0, u.addUnit)(null == e ? void 0 : e.height)
                    })).catch((function() {}));
                  case 6:
                    h.width = r, h.height = r;
                  case 8:
                    this.setData({
                      iconStyle: "".concat((0, u.styles)(h))
                    });
                  case 9:
                  case "end":
                    return e.stop()
                }
              }), t, this)
            })))
          }))
        }
      }, t
    }
    return t(l)
  }(a.SuperComponent),
  p = h = (0, s.__decorate)([(0, a.wxComponent)()], h);
exports.default = p;