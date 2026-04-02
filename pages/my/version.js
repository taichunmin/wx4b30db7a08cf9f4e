var n = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../@babel/runtime/helpers/asyncToGenerator"),
  a = require("../../utils/util"),
  t = getApp();
Page({
  data: {
    version: {
      list: []
    }
  },
  onLoad: function() {
    this.getVersionList()
  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {},
  getVersionList: function() {
    var i = this;
    return e(n().mark((function e() {
      var o, r, s;
      return n().wrap((function(n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return o = {
              version: t.globalData.miniapp.app_version,
              type: t.globalData.miniapp.update ? 1 : 2,
              lang: "01"
            }, n.next = 3, (0, a.requestAsync)("GET", "CopyKEY/GetMiniAppUpdateVersion", o, void 0);
          case 3:
            if (0 === (r = n.sent).code) {
              for (s = 0; s < r.data.length; s++) r.data[s].version === t.globalData.miniapp.app_version ? (r.data[s].now = !0, r.data[s].new = !1) : r.data[s].version > t.globalData.miniapp.app_version ? (r.data[s].now = !1, r.data[s].new = !0) : (r.data[s].now = !1, r.data[s].new = !1);
              i.setData({
                "version.list": r.data
              })
            }
          case 5:
          case "end":
            return n.stop()
        }
      }), e)
    })))()
  },
  onUpdate: function(n) {
    t.getMiniAppUpdate(null)
  }
});