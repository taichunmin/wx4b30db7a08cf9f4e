Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../@babel/runtime/helpers/createClass"),
  r = require("../../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../../@babel/runtime/helpers/inherits"),
  s = require("../../../../@babel/runtime/helpers/createSuper"),
  n = require("tslib"),
  o = require("../../common/src/index"),
  c = u(require("../../common/config")),
  a = u(require("./props")),
  h = require("../../common/utils");

function u(t) {
  return t && t.__esModule ? t : {
    default: t
  }
}
var p = c.default.prefix,
  d = "".concat(p, "-draggable"),
  l = function(o) {
    i(u, o);
    var c = s(u);

    function u() {
      var e;
      return r(this, u), (e = c.apply(this, arguments)).properties = a.default, e.externalClasses = ["".concat(p, "-class")], e.data = {
        prefix: p,
        classPrefix: d
      }, e.lifetimes = {
        ready: function() {
          this.computedRect()
        }
      }, e.methods = {
        onTouchStart: function(t) {
          "none" !== this.properties.direction && (this.startX = t.touches[0].clientX + h.systemInfo.windowWidth - this.rect.right, this.startY = t.touches[0].clientY + h.systemInfo.windowHeight - this.rect.bottom, this.triggerEvent("start", {
            startX: this.startX,
            startY: this.startY,
            rect: this.rect,
            e: t
          }))
        },
        onTouchMove: function(t) {
          if ("none" !== this.properties.direction) {
            var e = this.startX - t.touches[0].clientX,
              r = this.startY - t.touches[0].clientY;
            "vertical" === this.properties.direction && (e = h.systemInfo.windowWidth - this.rect.right), "horizontal" === this.properties.direction && (r = h.systemInfo.windowHeight - this.rect.bottom), this.triggerEvent("move", {
              x: e,
              y: r,
              rect: this.rect,
              e: t
            })
          }
        },
        onTouchEnd: function(e) {
          return (0, n.__awaiter)(this, void 0, void 0, t().mark((function r() {
            return t().wrap((function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (t.t0 = "none" !== this.properties.direction, !t.t0) {
                    t.next = 5;
                    break
                  }
                  return t.next = 4, this.computedRect();
                case 4:
                  this.triggerEvent("end", {
                    rect: this.rect,
                    e: e
                  });
                case 5:
                case "end":
                  return t.stop()
              }
            }), r, this)
          })))
        },
        computedRect: function() {
          return (0, n.__awaiter)(this, void 0, void 0, t().mark((function e() {
            return t().wrap((function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return this.rect = {
                    right: 0,
                    bottom: 0,
                    width: 0,
                    height: 0
                  }, t.prev = 1, t.next = 4, (0, h.getRect)(this, ".".concat(this.data.classPrefix));
                case 4:
                  this.rect = t.sent, t.next = 9;
                  break;
                case 7:
                  t.prev = 7, t.t0 = t.catch(1);
                case 9:
                case "end":
                  return t.stop()
              }
            }), e, this, [
              [1, 7]
            ])
          })))
        }
      }, e
    }
    return e(u)
  }(o.SuperComponent),
  f = l = (0, n.__decorate)([(0, o.wxComponent)()], l);
exports.default = f;