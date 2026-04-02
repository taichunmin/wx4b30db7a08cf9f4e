Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var t = require("../../../@babel/runtime/helpers/slicedToArray"),
  e = Behavior({
    methods: {
      resetTouchStatus: function() {
        this.direction = "", this.deltaX = 0, this.deltaY = 0, this.offsetX = 0, this.offsetY = 0
      },
      touchStart: function(e) {
        this.resetTouchStatus();
        var s = t(e.touches, 1)[0];
        this.startX = s.clientX, this.startY = s.clientY
      },
      touchMove: function(e) {
        var s = t(e.touches, 1)[0];
        this.deltaX = s.clientX - this.startX, this.deltaY = s.clientY - this.startY, this.offsetX = Math.abs(this.deltaX), this.offsetY = Math.abs(this.deltaY), this.direction = function(t, e) {
          return t > e && t > 10 ? "horizontal" : e > t && e > 10 ? "vertical" : ""
        }(this.offsetX, this.offsetY)
      }
    }
  });
exports.default = e;