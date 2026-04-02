Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var t = require("../../../@babel/runtime/helpers/createClass"),
  e = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/inherits"),
  n = require("../../../@babel/runtime/helpers/createSuper"),
  a = require("tslib"),
  r = require("../common/src/index"),
  s = u(require("../common/config")),
  o = u(require("./props"));

function u(t) {
  return t && t.__esModule ? t : {
    default: t
  }
}
var l = s.default.prefix,
  c = "".concat(l, "-picker-item"),
  d = function(t, e, i) {
    return Math.min(Math.max(t, e), i)
  },
  f = function(t, e) {
    var i = t;
    return i = Math.abs(i / e) / .005 * (i < 0 ? -1 : 1)
  },
  h = function(a) {
    i(s, a);
    var r = n(s);

    function s() {
      var t;
      return e(this, s), (t = r.apply(this, arguments)).relations = {
        "../picker/picker": {
          type: "parent",
          linked: function(t) {
            if ("keys" in t.data) {
              var e = t.data.keys;
              if (null === e || JSON.stringify(this.data.pickerKeys) === JSON.stringify(e)) return;
              this.setData({
                pickerKeys: e
              })
            }
          }
        }
      }, t.options = {
        multipleSlots: !0
      }, t.externalClasses = ["".concat(l, "-class")], t.properties = o.default, t.observers = {
        "options, pickerKeys": function() {
          this.update()
        }
      }, t.data = {
        prefix: l,
        classPrefix: c,
        offset: 0,
        duration: 0,
        value: "",
        curIndex: 0,
        columnIndex: 0,
        pickerKeys: {
          value: "value",
          label: "label"
        },
        formatOptions: o.default.options.value
      }, t.lifetimes = {
        created: function() {
          this.StartY = 0, this.StartOffset = 0, this.startTime = 0
        }
      }, t.methods = {
        onClickItem: function(t) {
          var e = t.currentTarget.dataset.index,
            i = this.data.pickItemHeight,
            n = d(e, 0, this.getCount() - 1);
          n !== this._selectedIndex && this.setData({
            offset: -n * i,
            curIndex: n,
            duration: 200
          }), this.updateSelected(n, !0)
        },
        onTouchStart: function(t) {
          this.StartY = t.touches[0].clientY, this.StartOffset = this.data.offset, this.startTime = Date.now(), this.setData({
            duration: 0
          })
        },
        onTouchMove: function(t) {
          var e = this.StartY,
            i = this.StartOffset,
            n = this.data.pickItemHeight,
            a = t.touches[0].clientY - e,
            r = d(i + a, -this.getCount() * n, 0);
          this.setData({
            offset: r
          })
        },
        onTouchEnd: function(t) {
          var e = this.data,
            i = e.offset,
            n = e.pickItemHeight,
            a = this.startTime;
          if (i !== this.StartOffset) {
            var r = 0,
              s = t.changedTouches[0].clientY - this.StartY,
              o = Date.now() - a;
            o < 300 && Math.abs(s) > 15 && (r = f(s, o));
            var u = d(i + r, -this.getCount() * n, 0),
              l = d(Math.round(-u / n), 0, this.getCount() - 1);
            this.setData({
              offset: -l * n,
              duration: 1e3,
              curIndex: l
            }), l !== this._selectedIndex && this.updateSelected(l, !0)
          }
        },
        formatOption: function(t, e, i) {
          return "function" != typeof i ? t : t.map((function(t) {
            return i(t, e)
          }))
        },
        updateSelected: function(t, e) {
          var i, n, a, r = this.data,
            s = r.columnIndex,
            o = r.pickerKeys,
            u = r.formatOptions;
          this._selectedIndex = t, this._selectedValue = null === (i = u[t]) || void 0 === i ? void 0 : i[null == o ? void 0 : o.value], this._selectedLabel = null === (n = u[t]) || void 0 === n ? void 0 : n[null == o ? void 0 : o.label], e && (null === (a = this.$parent) || void 0 === a || a.triggerColumnChange({
            index: t,
            column: s
          }))
        },
        update: function() {
          var t = this,
            e = this.data,
            i = e.options,
            n = e.value,
            a = e.pickerKeys,
            r = e.pickItemHeight,
            s = e.format,
            o = e.columnIndex,
            u = this.formatOption(i, o, s),
            l = u.findIndex((function(t) {
              return t[null == a ? void 0 : a.value] === n
            })),
            c = l > 0 ? l : 0;
          this.setData({
            formatOptions: u,
            offset: -c * r,
            curIndex: c
          }, (function() {
            t.updateSelected(c, !1)
          }))
        },
        getCount: function() {
          var t, e;
          return null === (e = null === (t = this.data) || void 0 === t ? void 0 : t.options) || void 0 === e ? void 0 : e.length
        }
      }, t
    }
    return t(s)
  }(r.SuperComponent),
  p = h = (0, a.__decorate)([(0, r.wxComponent)()], h);
exports.default = p;