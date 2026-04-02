var e, s = (e = require("tdesign-miniprogram/toast/index")) && e.__esModule ? e : {
    default: e
  },
  t = require("../../utils/util");
var a = getApp();
Page({
  data: {
    input_style: "border: 1px solid rgba(220,220,220,1);border-radius: 32rpx;",
    user_nickname: "",
    nicknameError: !1,
    phoneError: !1,
    user_phoneNumber: "",
    user_emailNumber: "",
    emailError: !1,
    user_Code: "",
    code_info: {
      info: "发送验证码",
      timer: 0
    },
    verify_code_id: "",
    validity_seconds: 0,
    get_code: !1,
    codeError: !1,
    user_password: "",
    passwordError: "",
    ConfirmpasswordError: "",
    user_confirm_password: "",
    CurUseType: "",
    SwitchUseType: "",
    useAccessType: "",
    inputCode: "",
    accountLength: 64,
    codeLength: 6,
    passwordType: {
      type: "password",
      suffix_icon: "browse-off",
      canSeePassword: !1,
      click: "onSeePassword"
    },
    passwordType_confirm: {
      type: "password",
      suffix_icon: "browse-off",
      canSeePassword: !1,
      click: "onSeePasswordConfirm"
    }
  },
  onLoad: function() {
    this.setAccessType("phone")
  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {},
  onSwitchType: function() {
    "phone" == this.data.useAccessType ? this.setAccessType("email") : this.setAccessType("phone")
  },
  onNickNameInput: function(e) {
    var s = this.data.nicknameError;
    this.data.user_nickname = e.detail.value, s === !(0, t.stringIsEmpty)(e.detail.value) && this.setData({
      nicknameError: !s
    })
  },
  onPhoneInput: function(e) {
    var s = this.data.phoneError;
    this.data.user_phoneNumber = e.detail.value, s === (0, t.isPhoneNumber)(e.detail.value) && this.setData({
      phoneError: !s
    })
  },
  onEmailInput: function(e) {
    var s = this.data.emailError;
    this.data.user_emailNumber = e.detail.value, s === (0, t.isEmail)(e.detail.value) && this.setData({
      emailError: !s
    })
  },
  onCodeInput: function(e) {
    var s = this.data.codeError;
    this.data.user_Code = e.detail.value, s === !(e.detail.value.length < this.data.codeLength) && this.setData({
      codeError: !s
    })
  },
  onPasswordInput: function(e) {
    this.data.user_password = e.detail.value, this.setData({
      passwordError: ""
    })
  },
  onConfirmPasswordInput: function(e) {
    this.data.user_confirm_password = e.detail.value, this.setData({
      ConfirmpasswordError: ""
    })
  },
  getCodeClick: function() {
    var e = this;
    if (!(this.data.get_code && this.data.validity_seconds > 0)) {
      if ("phone" == this.data.useAccessType) {
        if ((0, t.stringIsEmpty)(this.data.user_phoneNumber) || !(0, t.isPhoneNumber)(this.data.user_phoneNumber)) return void this.setData({
          phoneError: !0
        })
      } else if ((0, t.stringIsEmpty)(this.data.user_emailNumber) || !(0, t.isEmail)(this.data.user_emailNumber)) return void this.setData({
        emailError: !0
      });
      var o = {
        type: "phone" == this.data.useAccessType ? 0 : 1,
        info_id: 0,
        sbuid: "000000000000000000000000",
        code_account: "phone" == this.data.useAccessType ? this.data.user_phoneNumber : this.data.user_emailNumber,
        country_code: "86",
        language: a.globalData.eLanguage.zh_CN
      };
      (0, t.request)("POST", "CopyKEY/GetVerifyCode", o, (function(a) {
        if (null != a) {
          var o = a;
          if (o.success && 0 === o.code && o.data) {
            var i = "序号" + o.data.verify_code_id + "(" + o.data.validity_seconds + "s)";
            e.setData({
              get_code: !0,
              verify_code_id: o.data.verify_code_id,
              validity_seconds: o.data.validity_seconds,
              "code_info.info": i
            }), e.data.code_info.timer = setInterval((function() {
              if (e.data.validity_seconds = e.data.validity_seconds - 1, e.data.validity_seconds > 0) {
                var s = "序号" + e.data.verify_code_id + "(" + e.data.validity_seconds + "s)";
                e.setData({
                  "code_info.info": s
                })
              } else clearInterval(e.data.code_info.timer), e.setData({
                validity_seconds: 0,
                "code_info.info": "重新发送验证码"
              })
            }), 1e3), (0, s.default)({
              context: e,
              selector: "#t-toast",
              message: "验证码已经成功发送"
            })
          } else {
            var r = (0, t.stringIsEmpty)(o.errmsg) ? (0, t.errorMsg)(o.code, "zh-cn") : o.errmsg;
            (0, s.default)({
              context: e,
              selector: "#t-toast",
              message: r
            })
          }
        } else(0, s.default)({
          context: e,
          selector: "#t-toast",
          message: "获取验证码失败"
        })
      }), (function(t) {
        (0, s.default)({
          context: e,
          selector: "#t-toast",
          message: "获取验证码失败"
        })
      }), null), a.showLoadingToast(this, "#t-toast")
    }
  },
  onSeePassword: function() {
    var e = this.data.passwordType;
    e.canSeePassword ? (e.type = "password", e.suffix_icon = "browse-off") : (e.type = "text", e.suffix_icon = "browse"), e.canSeePassword = !e.canSeePassword, this.setData({
      passwordType: e
    })
  },
  onSeePasswordConfirm: function() {
    var e = this.data.passwordType_confirm;
    e.canSeePassword ? (e.type = "password", e.suffix_icon = "browse-off") : (e.type = "text", e.suffix_icon = "browse"), e.canSeePassword = !e.canSeePassword, this.setData({
      passwordType_confirm: e
    })
  },
  setAccessType: function(e) {
    "phone" == e ? this.setData({
      useAccessType: "phone",
      CurUseType: "使用手机号注册",
      SwitchUseType: "使用邮箱账号注册",
      inputCode: "短信验证码",
      accountLength: 11,
      codeLength: 4,
      get_code: !1,
      user_Code: "",
      "code_info.info": "发送验证码",
      verify_code_id: "",
      validity_seconds: 0
    }) : this.setData({
      useAccessType: "email",
      CurUseType: "使用邮箱账号注册",
      SwitchUseType: "使用手机号注册",
      inputCode: "邮箱验证码",
      accountLength: 64,
      codeLength: 6,
      get_code: !1,
      user_Code: "",
      "code_info.info": "发送验证码",
      verify_code_id: "",
      validity_seconds: 0
    })
  },
  onSignUp: function() {
    var e = this;
    if ((0, t.stringIsEmpty)(this.data.user_nickname)) this.setData({
      nicknameError: !0
    });
    else {
      if ("phone" == this.data.useAccessType) {
        if ((0, t.stringIsEmpty)(this.data.user_phoneNumber) || !(0, t.isPhoneNumber)(this.data.user_phoneNumber)) return void this.setData({
          phoneError: !0
        })
      } else if ((0, t.stringIsEmpty)(this.data.user_emailNumber) || !(0, t.isEmail)(this.data.user_emailNumber)) return void this.setData({
        emailError: !0
      });
      if (this.data.get_code)
        if (this.data.user_Code.length < this.data.codeLength) this.setData({
          codeError: !0
        });
        else if ((0, t.stringIsEmpty)(this.data.user_password)) this.setData({
        passwordError: "请输入密码"
      });
      else if (this.data.user_confirm_password == this.data.user_password) {
        var o = {
          type: 0,
          verify_code: this.data.user_Code,
          verify_code_id: this.data.verify_code_id,
          country_code: (this.data.useAccessType, "86"),
          user_nickname: this.data.user_nickname,
          user_account: "phone" == this.data.useAccessType ? this.data.user_phoneNumber : this.data.user_emailNumber,
          user_password: this.data.user_password
        };
        (0, t.request)("POST", "CopyKEY/SignUp", o, (function(a) {
          if (null != a) {
            var o = a;
            if (o.success && 0 === o.code && o.data) try {
              wx.setStorageSync("userInfo", o.data), (0, s.default)({
                context: e,
                selector: "#t-toast",
                message: "注册并登录成功"
              }), setTimeout((function() {
                wx.navigateBack({
                  delta: 3
                })
              }), 1e3)
            } catch (e) {} else {
              var i = (0, t.stringIsEmpty)(o.errmsg) ? (0, t.errorMsg)(o.code, "zh-cn") : o.errmsg;
              (0, s.default)({
                context: e,
                selector: "#t-toast",
                message: i
              })
            }
          } else(0, s.default)({
            context: e,
            selector: "#t-toast",
            message: "注册失败"
          })
        }), (function(t) {
          (0, s.default)({
            context: e,
            selector: "#t-toast",
            message: "注册失败"
          })
        }), null), a.showLoadingToast(this, "#t-toast")
      } else this.setData({
        ConfirmpasswordError: "两次输入的密码不一致"
      });
      else(0, s.default)({
        context: this,
        selector: "#t-toast",
        message: "请先获取验证码"
      })
    }
  },
  onGotoLogin: function() {
    wx.navigateBack()
  }
});