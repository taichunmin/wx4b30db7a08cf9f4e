Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var t = require("../common/utils"),
  e = Behavior({
    properties: {
      usingCustomNavbar: {
        type: Boolean,
        value: !1
      },
      customNavbarHeight: {
        type: Number,
        value: 0
      }
    },
    data: {
      distanceTop: 0
    },
    lifetimes: {
      attached: function() {
        this.properties.usingCustomNavbar && this.calculateCustomNavbarDistanceTop()
      }
    },
    methods: {
      calculateCustomNavbarDistanceTop: function() {
        var e = t.systemInfo.statusBarHeight,
          a = wx.getMenuButtonBoundingClientRect(),
          o = a.top + a.bottom - e;
        this.setData({
          distanceTop: Math.max(o, this.properties.customNavbarHeight + e)
        })
      }
    }
  });
exports.default = e;