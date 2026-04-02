var e, t, r, n, o, i, a, c, u, f, s, l, p, y, d, b, h, v, w, _, m, j, g, O, P, S, E, x, T, I, R, k, D = require("../../../../@babel/runtime/helpers/typeof");
! function(e) {
  var t = "object" == ("undefined" == typeof global ? "undefined" : D(global)) ? global : "object" == ("undefined" == typeof self ? "undefined" : D(self)) ? self : "object" == D(this) ? this : {};

  function r(e, r) {
    return e !== t && ("function" == typeof Object.create ? Object.defineProperty(e, "__esModule", {
        value: !0
      }) : e.__esModule = !0),
      function(t, n) {
        return e[t] = r ? r(t, n) : n
      }
  }
  "function" == typeof define && define.amd ? define("tslib", ["exports"], (function(n) {
    e(r(t, r(n)))
  })) : "object" == ("undefined" == typeof module ? "undefined" : D(module)) && "object" == D(module.exports) ? e(r(t, r(module.exports))) : e(r(t))
}((function(A) {
  var C = Object.setPrototypeOf || {
    __proto__: []
  }
  instanceof Array && function(e, t) {
    e.__proto__ = t
  } || function(e, t) {
    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
  };
  e = function(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

    function r() {
      this.constructor = e
    }
    C(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
  }, t = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++)
      for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    return e
  }, r = function(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
      var o = 0;
      for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
    }
    return r
  }, n = function(e, t, r, n) {
    var o, i = arguments.length,
      a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
    if ("object" == ("undefined" == typeof Reflect ? "undefined" : D(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, n);
    else
      for (var c = e.length - 1; c >= 0; c--)(o = e[c]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
    return i > 3 && a && Object.defineProperty(t, r, a), a
  }, o = function(e, t) {
    return function(r, n) {
      t(r, n, e)
    }
  }, i = function(e, t, r, n, o, i) {
    function a(e) {
      if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
      return e
    }
    for (var c, u = n.kind, f = "getter" === u ? "get" : "setter" === u ? "set" : "value", s = !t && e ? n.static ? e : e.prototype : null, l = t || (s ? Object.getOwnPropertyDescriptor(s, n.name) : {}), p = !1, y = r.length - 1; y >= 0; y--) {
      var d = {};
      for (var b in n) d[b] = "access" === b ? {} : n[b];
      for (var b in n.access) d.access[b] = n.access[b];
      d.addInitializer = function(e) {
        if (p) throw new TypeError("Cannot add initializers after decoration has completed");
        i.push(a(e || null))
      };
      var h = (0, r[y])("accessor" === u ? {
        get: l.get,
        set: l.set
      } : l[f], d);
      if ("accessor" === u) {
        if (void 0 === h) continue;
        if (null === h || "object" != D(h)) throw new TypeError("Object expected");
        (c = a(h.get)) && (l.get = c), (c = a(h.set)) && (l.set = c), (c = a(h.init)) && o.unshift(c)
      } else(c = a(h)) && ("field" === u ? o.unshift(c) : l[f] = c)
    }
    s && Object.defineProperty(s, n.name, l), p = !0
  }, a = function(e, t, r) {
    for (var n = arguments.length > 2, o = 0; o < t.length; o++) r = n ? t[o].call(e, r) : t[o].call(e);
    return n ? r : void 0
  }, c = function(e) {
    return "symbol" == D(e) ? e : "".concat(e)
  }, u = function(e, t, r) {
    return "symbol" == D(t) && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
      configurable: !0,
      value: r ? "".concat(r, " ", t) : t
    })
  }, f = function(e, t) {
    if ("object" == ("undefined" == typeof Reflect ? "undefined" : D(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
  }, s = function(e, t, r, n) {
    return new(r || (r = Promise))((function(o, i) {
      function a(e) {
        try {
          u(n.next(e))
        } catch (e) {
          i(e)
        }
      }

      function c(e) {
        try {
          u(n.throw(e))
        } catch (e) {
          i(e)
        }
      }

      function u(e) {
        var t;
        e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
          e(t)
        }))).then(a, c)
      }
      u((n = n.apply(e, t || [])).next())
    }))
  }, l = function(e, t) {
    var r, n, o, i = {
        label: 0,
        sent: function() {
          if (1 & o[0]) throw o[1];
          return o[1]
        },
        trys: [],
        ops: []
      },
      a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
    return a.next = c(0), a.throw = c(1), a.return = c(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
      return this
    }), a;

    function c(c) {
      return function(u) {
        return function(c) {
          if (r) throw new TypeError("Generator is already executing.");
          for (; a && (a = 0, c[0] && (i = 0)), i;) try {
            if (r = 1, n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, c[1])).done) return o;
            switch (n = 0, o && (c = [2 & c[0], o.value]), c[0]) {
              case 0:
              case 1:
                o = c;
                break;
              case 4:
                return i.label++, {
                  value: c[1],
                  done: !1
                };
              case 5:
                i.label++, n = c[1], c = [0];
                continue;
              case 7:
                c = i.ops.pop(), i.trys.pop();
                continue;
              default:
                if (!((o = (o = i.trys).length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                  i = 0;
                  continue
                }
                if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                  i.label = c[1];
                  break
                }
                if (6 === c[0] && i.label < o[1]) {
                  i.label = o[1], o = c;
                  break
                }
                if (o && i.label < o[2]) {
                  i.label = o[2], i.ops.push(c);
                  break
                }
                o[2] && i.ops.pop(), i.trys.pop();
                continue
            }
            c = t.call(e, i)
          } catch (e) {
            c = [6, e], n = 0
          } finally {
            r = o = 0
          }
          if (5 & c[0]) throw c[1];
          return {
            value: c[0] ? c[1] : void 0,
            done: !0
          }
        }([c, u])
      }
    }
  }, p = function(e, t) {
    for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || T(t, e, r)
  }, T = Object.create ? function(e, t, r, n) {
    void 0 === n && (n = r);
    var o = Object.getOwnPropertyDescriptor(t, r);
    o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
      enumerable: !0,
      get: function() {
        return t[r]
      }
    }), Object.defineProperty(e, n, o)
  } : function(e, t, r, n) {
    void 0 === n && (n = r), e[n] = t[r]
  }, y = function(e) {
    var t = "function" == typeof Symbol && Symbol.iterator,
      r = t && e[t],
      n = 0;
    if (r) return r.call(e);
    if (e && "number" == typeof e.length) return {
      next: function() {
        return e && n >= e.length && (e = void 0), {
          value: e && e[n++],
          done: !e
        }
      }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
  }, d = function(e, t) {
    var r = "function" == typeof Symbol && e[Symbol.iterator];
    if (!r) return e;
    var n, o, i = r.call(e),
      a = [];
    try {
      for (;
        (void 0 === t || t-- > 0) && !(n = i.next()).done;) a.push(n.value)
    } catch (e) {
      o = {
        error: e
      }
    } finally {
      try {
        n && !n.done && (r = i.return) && r.call(i)
      } finally {
        if (o) throw o.error
      }
    }
    return a
  }, b = function() {
    for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(d(arguments[t]));
    return e
  }, h = function() {
    for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
    var n = Array(e),
      o = 0;
    for (t = 0; t < r; t++)
      for (var i = arguments[t], a = 0, c = i.length; a < c; a++, o++) n[o] = i[a];
    return n
  }, v = function(e, t, r) {
    if (r || 2 === arguments.length)
      for (var n, o = 0, i = t.length; o < i; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
    return e.concat(n || Array.prototype.slice.call(t))
  }, w = function(e) {
    return this instanceof w ? (this.v = e, this) : new w(e)
  }, _ = function(e, t, r) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var n, o = r.apply(e, t || []),
      i = [];
    return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", (function(e) {
      return function(t) {
        return Promise.resolve(t).then(e, f)
      }
    })), n[Symbol.asyncIterator] = function() {
      return this
    }, n;

    function a(e, t) {
      o[e] && (n[e] = function(t) {
        return new Promise((function(r, n) {
          i.push([e, t, r, n]) > 1 || c(e, t)
        }))
      }, t && (n[e] = t(n[e])))
    }

    function c(e, t) {
      try {
        (r = o[e](t)).value instanceof w ? Promise.resolve(r.value.v).then(u, f) : s(i[0][2], r)
      } catch (e) {
        s(i[0][3], e)
      }
      var r
    }

    function u(e) {
      c("next", e)
    }

    function f(e) {
      c("throw", e)
    }

    function s(e, t) {
      e(t), i.shift(), i.length && c(i[0][0], i[0][1])
    }
  }, m = function(e) {
    var t, r;
    return t = {}, n("next"), n("throw", (function(e) {
      throw e
    })), n("return"), t[Symbol.iterator] = function() {
      return this
    }, t;

    function n(n, o) {
      t[n] = e[n] ? function(t) {
        return (r = !r) ? {
          value: w(e[n](t)),
          done: !1
        } : o ? o(t) : t
      } : o
    }
  }, j = function(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t, r = e[Symbol.asyncIterator];
    return r ? r.call(e) : (e = y(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
      return this
    }, t);

    function n(r) {
      t[r] = e[r] && function(t) {
        return new Promise((function(n, o) {
          ! function(e, t, r, n) {
            Promise.resolve(n).then((function(t) {
              e({
                value: t,
                done: r
              })
            }), t)
          }(n, o, (t = e[r](t)).done, t.value)
        }))
      }
    }
  }, g = function(e, t) {
    return Object.defineProperty ? Object.defineProperty(e, "raw", {
      value: t
    }) : e.raw = t, e
  };
  var F = Object.create ? function(e, t) {
      Object.defineProperty(e, "default", {
        enumerable: !0,
        value: t
      })
    } : function(e, t) {
      e.default = t
    },
    M = function(e) {
      return (M = Object.getOwnPropertyNames || function(e) {
        var t = [];
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
        return t
      })(e)
    };
  O = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
      for (var r = M(e), n = 0; n < r.length; n++) "default" !== r[n] && T(t, e, r[n]);
    return F(t, e), t
  }, P = function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }, S = function(e, t, r, n) {
    if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
    if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
  }, E = function(e, t, r, n, o) {
    if ("m" === n) throw new TypeError("Private method is not writable");
    if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
    if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return "a" === n ? o.call(e, r) : o ? o.value = r : t.set(e, r), r
  }, x = function(e, t) {
    if (null === t || "object" != D(t) && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
    return "function" == typeof e ? t === e : e.has(t)
  }, I = function(e, t, r) {
    if (null != t) {
      if ("object" != D(t) && "function" != typeof t) throw new TypeError("Object expected.");
      var n, o;
      if (r) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        n = t[Symbol.asyncDispose]
      }
      if (void 0 === n) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        n = t[Symbol.dispose], r && (o = n)
      }
      if ("function" != typeof n) throw new TypeError("Object not disposable.");
      o && (n = function() {
        try {
          o.call(this)
        } catch (e) {
          return Promise.reject(e)
        }
      }), e.stack.push({
        value: t,
        dispose: n,
        async: r
      })
    } else r && e.stack.push({
      async: !0
    });
    return t
  };
  var z = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n
  };
  R = function(e) {
    function t(t) {
      e.error = e.hasError ? new z(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
    }
    var r, n = 0;
    return function o() {
      for (; r = e.stack.pop();) try {
        if (!r.async && 1 === n) return n = 0, e.stack.push(r), Promise.resolve().then(o);
        if (r.dispose) {
          var i = r.dispose.call(r.value);
          if (r.async) return n |= 2, Promise.resolve(i).then(o, (function(e) {
            return t(e), o()
          }))
        } else n |= 1
      } catch (e) {
        t(e)
      }
      if (1 === n) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
      if (e.hasError) throw e.error
    }()
  }, k = function(e, t) {
    return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(e, r, n, o, i) {
      return r ? t ? ".jsx" : ".js" : !n || o && i ? n + o + "." + i.toLowerCase() + "js" : e
    })) : e
  }, A("__extends", e), A("__assign", t), A("__rest", r), A("__decorate", n), A("__param", o), A("__esDecorate", i), A("__runInitializers", a), A("__propKey", c), A("__setFunctionName", u), A("__metadata", f), A("__awaiter", s), A("__generator", l), A("__exportStar", p), A("__createBinding", T), A("__values", y), A("__read", d), A("__spread", b), A("__spreadArrays", h), A("__spreadArray", v), A("__await", w), A("__asyncGenerator", _), A("__asyncDelegator", m), A("__asyncValues", j), A("__makeTemplateObject", g), A("__importStar", O), A("__importDefault", P), A("__classPrivateFieldGet", S), A("__classPrivateFieldSet", E), A("__classPrivateFieldIn", x), A("__addDisposableResource", I), A("__disposeResources", R), A("__rewriteRelativeImportExtension", k)
}));