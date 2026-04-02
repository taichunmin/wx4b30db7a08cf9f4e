var e = function(e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return {
      default: e
    };
    var a = s(t);
    if (a && a.has(e)) return a.get(e);
    var o = {},
      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var i in e)
      if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
        var n = r ? Object.getOwnPropertyDescriptor(e, i) : null;
        n && (n.get || n.set) ? Object.defineProperty(o, i, n) : o[i] = e[i]
      } o.default = e, a && a.set(e, o);
    return o
  }(require("tdesign-miniprogram/toast/index")),
  t = require("../../utils/util");

function s(e) {
  if ("function" != typeof WeakMap) return null;
  var t = new WeakMap,
    a = new WeakMap;
  return (s = function(e) {
    return e ? a : t
  })(e)
}
var a = getApp();
Page({
  data: {
    input_style: "border: 1px solid rgba(220,220,220,1);border-radius: 32rpx;",
    phoneError: !1,
    user_phoneNumber: "",
    user_emailNumber: "",
    emailError: !1,
    CurUseType: "",
    SwitchUseType: "",
    useAccessType: "",
    inputCode: "",
    accountLength: 64,
    codeLength: 6,
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
    step: 0,
    nextBtnText: "下一步",
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
    var t = this.data.codeError;
    this.data.user_Code = e.detail.value, t === !(e.detail.value.length < this.data.codeLength) && this.setData({
      codeError: !t
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
    var s = this;
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
        info_id: 1,
        sbuid: "000000000000000000000000",
        code_account: "phone" == this.data.useAccessType ? this.data.user_phoneNumber : this.data.user_emailNumber,
        country_code: "86",
        language: a.globalData.eLanguage.zh_CN
      };
      (0, t.request)("POST", "CopyKEY/GetVerifyCode", o, (function(a) {
        if (null != a) {
          var o = a;
          if (o.success && 0 === o.code && o.data) {
            var r = "序号" + o.data.verify_code_id + "(" + o.data.validity_seconds + "s)";
            s.setData({
              get_code: !0,
              verify_code_id: o.data.verify_code_id,
              validity_seconds: o.data.validity_seconds,
              "code_info.info": r
            }), s.data.code_info.timer = setInterval((function() {
              if (s.data.validity_seconds = s.data.validity_seconds - 1, s.data.validity_seconds > 0) {
                var e = "序号" + s.data.verify_code_id + "(" + s.data.validity_seconds + "s)";
                s.setData({
                  "code_info.info": e
                })
              } else clearInterval(s.data.code_info.timer), s.setData({
                validity_seconds: 0,
                "code_info.info": "重新发送验证码"
              })
            }), 1e3), (0, e.default)({
              context: s,
              selector: "#t-toast",
              message: "验证码已经成功发送"
            })
          } else {
            var i = (0, t.stringIsEmpty)(o.errmsg) ? (0, t.errorMsg)(o.code, "zh-cn") : o.errmsg;
            (0, e.default)({
              context: s,
              selector: "#t-toast",
              message: i
            })
          }
        } else(0, e.default)({
          context: s,
          selector: "#t-toast",
          message: "获取验证码失败"
        })
      }), (function(t) {
        (0, e.default)({
          context: s,
          selector: "#t-toast",
          message: "获取验证码失败"
        })
      }), null), a.showLoadingToast(this, "#t-toast")
    }
  },
  onNext: function() {
    var s = this,
      o = 2;
    if (0 == this.data.step) {
      if ("phone" == this.data.useAccessType) {
        if ((0, t.stringIsEmpty)(this.data.user_phoneNumber) || !(0, t.isPhoneNumber)(this.data.user_phoneNumber)) return void this.setData({
          phoneError: !0
        })
      } else if ((0, t.stringIsEmpty)(this.data.user_emailNumber) || !(0, t.isEmail)(this.data.user_emailNumber)) return void this.setData({
        emailError: !0
      });
      if (!this.data.get_code) return void(0, e.default)({
        context: this,
        selector: "#t-toast",
        message: "请先获取验证码"
      });
      if (this.data.user_Code.length < this.data.codeLength) return void this.setData({
        codeError: !0
      });
      o = 2
    } else {
      if ((0, t.stringIsEmpty)(this.data.user_password)) return void this.setData({
        passwordError: "请输入密码"
      });
      if (this.data.user_confirm_password != this.data.user_password) return void this.setData({
        ConfirmpasswordError: "两次输入的密码不一致"
      });
      o = 1
    }
    var r = {
      type: o,
      verify_code: this.data.user_Code,
      verify_code_id: this.data.verify_code_id,
      country_code: (this.data.useAccessType, "86"),
      user_nickname: "",
      user_account: "phone" == this.data.useAccessType ? this.data.user_phoneNumber : this.data.user_emailNumber,
      user_password: this.data.user_password
    };
    (0, t.request)("POST", "CopyKEY/SignUp", r, (function(a) {
      if (null != a) {
        var o = a;
        if (o.success && 0 === o.code && o.data) try {
          0 == s.data.step ? ((0, e.hideToast)({
            context: s,
            selector: "#t-toast"
          }), s.setData({
            step: 1,
            nextBtnText: "完成"
          })) : ((0, e.default)({
            context: s,
            selector: "#t-toast",
            message: "密码修改成功，请重新登录"
          }), setTimeout((function() {
            wx.navigateBack()
          }), 1e3))
        } catch (e) {} else {
          var r = (0, t.stringIsEmpty)(o.errmsg) ? (0, t.errorMsg)(o.code, "zh-cn") : o.errmsg;
          (0, e.default)({
            context: s,
            selector: "#t-toast",
            message: r
          })
        }
      } else(0, e.default)({
        context: s,
        selector: "#t-toast",
        message: "失败"
      })
    }), (function(t) {
      (0, e.default)({
        context: s,
        selector: "#t-toast",
        message: "失败"
      })
    }), null), a.showLoadingToast(this, "#t-toast")
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
      CurUseType: "找回手机账号密码",
      SwitchUseType: "找回邮箱账号密码",
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
      CurUseType: "找回邮箱账号密码",
      SwitchUseType: "找回手机账号密码",
      inputCode: "邮箱验证码",
      accountLength: 64,
      codeLength: 6,
      get_code: !1,
      user_Code: "",
      "code_info.info": "发送验证码",
      verify_code_id: "",
      validity_seconds: 0
    })
  }
});