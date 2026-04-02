Page({
  data: {
    mcuid: ""
  },
  onLoad: function(n) {
    n.mcuid && this.setData({
      mcuid: n.mcuid
    })
  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {}
});