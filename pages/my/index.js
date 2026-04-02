var e, n = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator"),
  a = (e = require("tdesign-miniprogram/toast/index")) && e.__esModule ? e : {
    default: e
  };
var o = getApp();
Page({
  data: {
    imageSrc: "/images/splash_logo.png",
    is_login: !1,
    devices: {
      update: !1
    },
    miniapp: {
      update: !1,
      app_version: o.globalData.miniapp.app_version
    },
    user_account: "",
    user_nickname: "",
    scroll_height: 100
  },
  onLoad: function() {
    o.globalData.is_debug && wx.setNavigationBarTitle({
      title: "测试版-我的"
    })
  },
  onReady: function() {
    var e = o.getSystemInfo();
    this.setData({
      scroll_height: e.pageHeight - e.tabbarHeight - 320 * e.the1rpx + e.bottomSafeHeight
    })
  },
  onShow: function() {
    this.setData({
      "devices.update": o.globalData.data.devices.update,
      "miniapp.update": o.globalData.miniapp.update
    });
    try {
      var e = wx.getStorageSync("userInfo");
      e ? this.setData({
        is_login: !0,
        user_account: e.user_account,
        user_nickname: e.user_nickname
      }) : this.setData({
        is_login: !1,
        user_account: "",
        user_nickname: ""
      })
    } catch (e) {}
  },
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {},
  onLogin: function() {
    wx.navigateTo({
      url: "/pages/Login/wxLogin"
    })
  },
  onUserInfo: function(e) {
    this.data.is_login ? wx.navigateTo({
      url: "/pages/my/userInfo"
    }) : this.onLogin()
  },
  onConfigInfo: function(e) {
    wx.navigateTo({
      url: "/pages/my/configInfo"
    })
  },
  onDevicesInfo: function(e) {
    wx.navigateTo({
      url: "/pages/my/devicesInfo"
    })
  },
  onLocalDataInfo: function(e) {
    wx.navigateTo({
      url: "/pages/my/localDataInfo"
    })
  },
  onKeyStore: function(e) {
    var n = this;
    this.data.is_login ? wx.navigateTo({
      url: "/pages/my/keyStore"
    }) : ((0, a.default)({
      context: this,
      selector: "#t-toast",
      message: "请先登录"
    }), setTimeout((function() {
      n.onLogin()
    }), 1e3))
  },
  onDevicesUpdate: function(e) {
    var n = this;
    n.data.is_login ? wx.navigateTo({
      url: "/pages/my/deviceUpdate"
    }) : ((0, a.default)({
      context: n,
      selector: "#t-toast",
      message: "请先登录"
    }), setTimeout((function() {
      n.onLogin()
    }), 1e3))
  },
  onVersion: function(e) {
    return t(n().mark((function e() {
      return n().wrap((function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            o.globalData.is_debug || wx.navigateTo({
              url: "/pages/my/version"
            });
          case 1:
          case "end":
            return e.stop()
        }
      }), e)
    })))()
  }
});