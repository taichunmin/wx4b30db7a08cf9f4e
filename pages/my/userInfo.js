Page({
  data: {
    is_login: !1,
    user_account: "",
    user_nickname: ""
  },
  onLoad: function() {},
  onReady: function() {},
  onShow: function() {
    try {
      var n = wx.getStorageSync("userInfo");
      n ? this.setData({
        is_login: !0,
        user_account: n.user_account,
        user_nickname: n.user_nickname
      }) : this.setData({
        is_login: !1,
        user_account: "",
        user_nickname: ""
      })
    } catch (n) {}
  },
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {},
  onUnlogin: function() {
    try {
      wx.removeStorageSync("userInfo"), wx.navigateBack()
    } catch (n) {}
  }
});