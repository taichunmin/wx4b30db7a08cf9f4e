var e, t = (e = require("tdesign-miniprogram/toast/index")) && e.__esModule ? e : {
    default: e
  },
  o = require("../../utils/util");
var a = getApp();
Page({
  data: {
    imageSrc: "/images/splash_logo.png",
    read_agree: !1,
    navigatorPrivacyPolicy: {
      url: "/pages/my/PrivacyPolicy"
    },
    navigatorUserAgreement: {
      url: "/pages/my/UserAgreement"
    }
  },
  onLoad: function() {},
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {},
  onReadAgree: function(e) {
    this.setData({
      read_agree: e.detail.checked
    })
  },
  onAccountLogin: function() {
    this.data.read_agree ? wx.navigateTo({
      url: "/pages/Login/index"
    }) : (0, t.default)({
      context: this,
      selector: "#t-toast",
      message: "请阅读并勾选《用户协议》《隐私政策》"
    })
  },
  onWechatReadAgree: function() {
    this.data.read_agree || (0, t.default)({
      context: this,
      selector: "#t-toast",
      message: "请阅读并勾选《用户协议》《隐私政策》"
    })
  },
  onWechatLogin: function(e) {
    var a = this,
      s = e.detail.code;
    (0, o.stringIsEmpty)(s) || (this.data.read_agree ? wx.login({
      success: function(e) {
        e.code ? a.onLogin(e.code, s) : (console.log("获取微信登录信息错误！" + e.errMsg), (0, t.default)({
          context: a,
          duration: 5e3,
          selector: "#t-toast",
          message: "获取微信登录信息错误！"
        }))
      },
      fail: function(e) {
        (0, t.default)({
          context: a,
          duration: 5e3,
          selector: "#t-toast",
          message: "网络错误！"
        })
      }
    }) : (0, t.default)({
      context: this,
      selector: "#t-toast",
      message: "请阅读并勾选《用户协议》《隐私政策》"
    }))
  },
  onLogin: function(e, s) {
    var n = {
      login_type: 0,
      wechat_code: e,
      phone_code: s,
      user_account: "",
      user_password: ""
    };
    (0, o.request)("POST", "CopyKEY/Login", n, (function(e) {
      if (null != e) {
        var a = e;
        if (console.log(a), a.success && 0 === a.code && a.data) try {
          wx.setStorageSync("userInfo", a.data), (0, t.default)({
            context: this,
            selector: "#t-toast",
            message: "登录成功"
          }), setTimeout((function() {
            wx.navigateBack({
              delta: 1
            })
          }), 1e3)
        } catch (e) {} else {
          var s = (0, o.stringIsEmpty)(a.errmsg) ? (0, o.errorMsg)(a.code, "zh-cn") : a.errmsg;
          (0, t.default)({
            context: this,
            selector: "#t-toast",
            message: "登录失败:" + s
          })
        }
      } else(0, t.default)({
        context: this,
        selector: "#t-toast",
        message: "登录失败"
      })
    }), (function(e) {
      (0, t.default)({
        context: this,
        selector: "#t-toast",
        message: "登录失败"
      })
    }), null), a.showLoadingToast(this, "#t-toast")
  }
});