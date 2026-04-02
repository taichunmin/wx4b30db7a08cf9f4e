var t = getApp();
Page({
  data: {
    scroll_height: 0
  },
  onLoad: function() {},
  onReady: function() {
    var o = t.getSystemInfo();
    this.setData({
      scroll_height: o.pageHeight - o.bottomSafeHeight - 1
    })
  },
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {},
  onSelect: function(t) {
    var o = t.target.dataset.id;
    wx.navigateTo({
      url: "/pages/DataControl/NdefTagRecord?id=" + o + "&type=0"
    })
  }
});