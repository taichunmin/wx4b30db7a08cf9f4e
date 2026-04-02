Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.wxComponent = exports.toComponent = void 0;
var e = require("../../../../@babel/runtime/helpers/createClass"),
  t = require("../../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../../@babel/runtime/helpers/inherits"),
  i = require("../../../../@babel/runtime/helpers/createSuper"),
  n = require("../../../../@babel/runtime/helpers/defineProperty");
require("../../../../@babel/runtime/helpers/Arrayincludes");
var o = require("../../../../@babel/runtime/helpers/toConsumableArray"),
  a = require("./flatTool"),
  s = require("../validator"),
  l = require("../version"),
  p = ["Created", "Attached", "Ready", "Moved", "Detached", "Error"].map((function(e) {
    return e.toLowerCase()
  })),
  c = ["properties", "data", "observers", "methods", "behaviors"].concat(o(p), ["relations", "externalClasses", "options", "lifetimes", "pageLifeTimes", "definitionFilter"]),
  u = function(e) {
    var t = e.relations,
      r = e.behaviors,
      i = void 0 === r ? [] : r,
      a = e.externalClasses,
      l = void 0 === a ? [] : a;
    e.properties && (Object.keys(e.properties).forEach((function(t) {
      var r = e.properties[t];
      (0, s.isPlainObject)(r) || (r = {
        type: r
      }), e.properties[t] = r
    })), [{
      key: "ariaHidden",
      type: Boolean
    }, {
      key: "ariaRole",
      type: String
    }, {
      key: "ariaLabel",
      type: String
    }, {
      key: "ariaLabelledby",
      type: String
    }, {
      key: "ariaDescribedby",
      type: String
    }, {
      key: "ariaBusy",
      type: Boolean
    }].forEach((function(t) {
      var r = t.key,
        i = t.type;
      e.properties[r] = {
        type: i
      }
    })), e.properties.style = {
      type: String,
      value: ""
    }, e.properties.customStyle = {
      type: String,
      value: ""
    }), e.methods || (e.methods = {}), e.lifetimes || (e.lifetimes = {});
    var u = {};
    if (t) {
      var f = {};
      Object.keys(t).forEach((function(e) {
        var r = t[e],
          i = ["parent", "ancestor"].includes(r.type) ? "parent" : "children",
          n = function(e, t) {
            return Behavior({
              created: function() {
                var r = this;
                Object.defineProperty(this, "$".concat(e), {
                  get: function() {
                    var i = r.getRelationNodes(t) || [];
                    return "parent" === e ? i[0] : i
                  }
                })
              }
            })
          }(i, e);
        f[i] = n
      })), i.push.apply(i, o(Object.keys(f).map((function(e) {
        return f[e]
      }))))
    }
    if (e.behaviors = o(i), e.externalClasses = ["class"].concat(o(l)), Object.getOwnPropertyNames(e).forEach((function(t) {
        var r = Object.getOwnPropertyDescriptor(e, t);
        r && (p.indexOf(t) < 0 && "function" == typeof r.value ? (Object.defineProperty(e.methods, t, r), delete e[t]) : c.indexOf(t) < 0 ? u[t] = r : p.indexOf(t) >= 0 && (e.lifetimes[t] = e[t]))
      })), Object.keys(u).length) {
      var y = e.lifetimes.created,
        d = e.lifetimes.attached,
        h = e.controlledProps,
        v = void 0 === h ? [] : h;
      e.lifetimes.created = function() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        Object.defineProperties(this, u), y && y.apply(this, t)
      }, e.lifetimes.attached = function() {
        for (var e = this, t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
        d && d.apply(this, r), v.forEach((function(t) {
          var r = t.key,
            i = "default".concat(r.replace(/^(\w)/, (function(e, t) {
              return t.toUpperCase()
            }))),
            o = e.properties;
          null == o[r] && (e._selfControlled = !0), null == o[r] && null != o[i] && e.setData(n({}, r, o[i]))
        }))
      }, e.methods._trigger = function(e, t, r) {
        var i = v.find((function(t) {
          return t.event === e
        }));
        if (i) {
          var o = i.key;
          this._selfControlled && this.setData(n({}, o, t[o]))
        }
        this.triggerEvent(e, t, r)
      }
    }
    return e
  };
exports.toComponent = u;
exports.wxComponent = function() {
  return function(n) {
    var o = new(function(n) {
      r(a, n);
      var o = i(a);

      function a() {
        return t(this, a), o.apply(this, arguments)
      }
      return e(a)
    }(n));
    o.options = o.options || {}, (0, l.canUseVirtualHost)() && (o.options.virtualHost = !0);
    var s = u((0, a.toObject)(o));
    Component(s)
  }
};