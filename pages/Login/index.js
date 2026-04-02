var t, s = (t = require("tdesign-miniprogram/toast/index")) && t.__esModule ? t : {
    default: t
  },
  e = require("../../miniprogram_npm/ts-md5/index"),
  a = require("../../utils/util");
var o = getApp();
Page({
  data: {
    input_style: "border: 1px solid rgba(220,220,220,1);border-radius: 32rpx;",
    imageSrc: "/images/splash_logo.png",
    footer_text: "Copyright © 2023-2031 CopyKEY. All Rights Reserved.",
    navigatorSignUp: {
      url: "/pages/SignUp/index"
    },
    navigatorSetPassword: {
      url: "/pages/SetPassword/index"
    },
    passwordType: {
      type: "password",
      suffix_icon: "browse-off",
      canSeePassword: !1,
      click: "onSeePassword"
    },
    user_account: "",
    user_password: "",
    accountError: "",
    passwordError: ""
  },
  onLoad: function() {},
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {},
  onLogin: function() {
    var t = this;
    if ((0, a.stringIsEmpty)(this.data.user_account)) this.setData({
      accountError: "请输入账号"
    });
    else if ((0, a.isPhoneNumber)(this.data.user_account) || (0, a.isEmail)(this.data.user_account))
      if ((0, a.stringIsEmpty)(this.data.user_password)) this.setData({
        passwordError: "请输入密码"
      });
      else {
        var r = {
          login_type: 1,
          wechat_code: "",
          phone_code: "",
          user_account: this.data.user_account,
          user_password: e.Md5.hashStr(this.data.user_password)
        };
        (0, a.request)("POST", "CopyKEY/Login", r, (function(e) {
          if (null != e) {
            var o = e;
            if (o.success && 0 === o.code && o.data) try {
              wx.setStorageSync("userInfo", o.data), (0, s.default)({
                context: t,
                selector: "#t-toast",
                message: "登录成功"
              }), setTimeout((function() {
                wx.navigateBack({
                  delta: 2
                })
              }), 1e3)
            } catch (t) {} else {
              var r = (0, a.stringIsEmpty)(o.errmsg) ? (0, a.errorMsg)(o.code, "zh-cn") : o.errmsg;
              (0, s.default)({
                context: t,
                selector: "#t-toast",
                message: "登录失败:" + r
              })
            }
          } else(0, s.default)({
            context: t,
            selector: "#t-toast",
            message: "登录失败"
          })
        }), (function(e) {
          (0, s.default)({
            context: t,
            selector: "#t-toast",
            message: "登录失败"
          })
        }), null), o.showLoadingToast(this, "#t-toast")
      }
    else this.setData({
      accountError: "账号不正确"
    })
  },
  onSeePassword: function() {
    var t = this.data.passwordType;
    t.canSeePassword ? (t.type = "password", t.suffix_icon = "browse-off") : (t.type = "text", t.suffix_icon = "browse"), t.canSeePassword = !t.canSeePassword, this.setData({
      passwordType: t
    })
  },
  onAccountInput: function(t) {
    this.data.user_account = t.detail.value, this.setData({
      accountError: ""
    })
  },
  onPasswordInput: function(t) {
    this.data.user_password = t.detail.value, this.setData({
      passwordError: ""
    })
  }
});