Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../../../@babel/runtime/helpers/createClass"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/inherits"),
  r = require("../../../@babel/runtime/helpers/createSuper"),
  a = require("tslib"),
  s = require("../common/src/index"),
  o = d(require("./props")),
  n = d(require("../common/config")),
  c = require("../common/utils"),
  l = require("../common/version");

function d(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var h = n.default.prefix,
  u = "".concat(h, "-image"),
  p = function(a) {
    i(n, a);
    var s = r(n);

    function n() {
      var e;
      return t(this, n), (e = s.apply(this, arguments)).externalClasses = ["".concat(h, "-class"), "".concat(h, "-class-load"), "".concat(h, "-class-image"), "".concat(h, "-class-error")], e.options = {
        multipleSlots: !0
      }, e.properties = o.default, e.data = {
        prefix: h,
        isLoading: !0,
        isFailed: !1,
        innerStyle: "",
        classPrefix: u
      }, e.preSrc = void 0, e.observers = {
        src: function() {
          this.preSrc !== this.properties.src && this.update()
        },
        "width, height": function(e, t) {
          this.calcSize(e, t)
        }
      }, e.methods = {
        onLoaded: function(e) {
          var t = this,
            i = c.appBaseInfo.SDKVersion,
            r = this.properties,
            a = r.mode,
            s = r.tId,
            o = (0, l.compareVersion)(i, "2.10.3") < 0;
          if ("heightFix" === a && o) {
            var n = e.detail,
              d = n.height,
              h = n.width;
            (0, c.getRect)(this, "#".concat(s || "image")).then((function(e) {
              var i = e.height,
                r = (i / d * h).toFixed(2);
              t.setData({
                innerStyle: "height: ".concat((0, c.addUnit)(i), "; width: ").concat(r, "px;")
              })
            }))
          }
          this.setData({
            isLoading: !1,
            isFailed: !1
          }), this.triggerEvent("load", e.detail)
        },
        onLoadError: function(e) {
          this.setData({
            isLoading: !1,
            isFailed: !0
          }), this.triggerEvent("error", e.detail)
        },
        calcSize: function(e, t) {
          var i = "";
          e && (i += "width: ".concat((0, c.addUnit)(e), ";")), t && (i += "height: ".concat((0, c.addUnit)(t), ";")), this.setData({
            innerStyle: i
          })
        },
        update: function() {
          var e = this.properties.src;
          this.preSrc = e, e ? this.setData({
            isLoading: !0,
            isFailed: !1
          }) : this.onLoadError({
            errMsg: "图片链接为空"
          })
        }
      }, e
    }
    return e(n)
  }(s.SuperComponent),
  f = p = (0, a.__decorate)([(0, s.wxComponent)()], p);
exports.default = f;