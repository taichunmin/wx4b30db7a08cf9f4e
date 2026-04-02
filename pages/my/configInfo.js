var a, e = require("../../utils/fileUtil"),
  o = (a = require("tdesign-miniprogram/toast/index")) && a.__esModule ? a : {
    default: a
  };
var t = getApp();
Page({
  data: {
    autoShowSetCardData: !1,
    ShowClearCacheDialog: !1
  },
  onLoad: function() {
    var a = t.loadConfigInfo();
    this.setData({
      autoShowSetCardData: a.autoShowSetCardData
    })
  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {},
  onAutoShowChange: function(a) {
    var e = t.loadConfigInfo();
    e.autoShowSetCardData = a.detail.value, t.updateConfigInfo(e), this.setData({
      autoShowSetCardData: a.detail.value
    })
  },
  onClearCache: function(a) {
    this.setData({
      ShowClearCacheDialog: !0
    })
  },
  onOperationLog: function(a) {
    wx.navigateTo({
      url: "/pages/logs/logs"
    })
  },
  ClearCacheDialog: function(a) {
    this.deleteAllFile(), this.setData({
      ShowClearCacheDialog: !1
    }), (0, o.default)({
      context: this,
      selector: "#t-toast",
      message: "数据已清除"
    })
  },
  CloseClearCacheDialog: function(a) {
    this.setData({
      ShowClearCacheDialog: !1
    })
  },
  deleteAllFile: function() {
    var a = new e.fileUtil,
      o = "".concat(wx.env.USER_DATA_PATH),
      t = o + "/CopyKEY";
    a.access(t) && a.rmdir(t, !0);
    var n = o + "/Temp";
    a.access(n) && a.rmdir(n, !0);
    var i = o + "/Logs";
    a.access(i) && a.rmdir(i, !0)
  }
});