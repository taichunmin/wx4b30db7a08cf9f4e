var e, t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../@babel/runtime/helpers/asyncToGenerator"),
  r = require("../../@babel/runtime/helpers/typeof"),
  s = (e = require("tdesign-miniprogram/toast/index")) && e.__esModule ? e : {
    default: e
  },
  n = require("../../utils/util"),
  o = require("../../utils/cardUtil"),
  i = require("../../utils/deviceUtil");
var c = getApp();
Page({
  data: {
    is_login: !1,
    devices: {
      model: "设备未连接",
      version: "",
      mcuuid: "",
      attery: 0
    },
    progress: {
      show: !0,
      percentage: 0,
      perceninfo: "",
      status: ""
    },
    update: {
      show: !1,
      new_version: "",
      release_date: "",
      update_info: "",
      download: !1,
      new: {},
      temp: {
        filePath: "",
        dataLength: 0
      }
    },
    Cancel: {
      retrieve: !1,
      can_cancel: !1,
      do: function() {}
    },
    progress_timer: {
      ID: 0,
      time: 0
    },
    data_scroll_height: 0,
    data_scroll_width: 0,
    data_tip_scroll_height: 0
  },
  onLoad: function() {},
  onReady: function() {
    var e = c.getSystemInfo(),
      t = e.the1rpx,
      a = e.pageHeight - 96 * t;
    this.setData({
      data_scroll_height: a - 520 * t,
      data_scroll_width: 702,
      data_tip_scroll_height: a - 630 * t
    })
  },
  onShow: function() {
    if (!this.data.is_login) try {
      wx.getStorageSync("userInfo") ? (this.getDeviceUpdateInfo(), this.data.is_login = !0) : (this.GotoLogin(), this.data.is_login = !1)
    } catch (e) {}
  },
  onHide: function() {},
  onUnload: function() {
    this.closeTimer(), this.cancelFunction()
  },
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {},
  onDownload: function(e) {
    this.downloadUpdate()
  },
  onRetrieve: function(e) {
    this.RetrieveFunction()
  },
  GotoLogin: function() {
    (0, s.default)({
      context: this,
      selector: "#t-toast",
      message: "请先登录"
    }), setTimeout((function() {
      wx.navigateTo({
        url: "/pages/Login/wxLogin"
      })
    }), 1e3)
  },
  onCancel: function(e) {
    this.cancelFunction()
  },
  RetrieveFunction: function() {
    this.data.update.temp.dataLength > 0 && !(0, n.stringIsEmpty)(this.data.update.temp.filePath) ? this.downloadUpdate() : this.getDeviceUpdateInfo()
  },
  cancelFunction: function() {
    "function" == typeof this.data.Cancel.do && this.data.Cancel.do()
  },
  autoProgress: function(e, t) {
    var a = this,
      r = this;
    e > 0 && (r.data.progress_timer.time = 0, r.setData({
      "progress.percentage": 0,
      "progress.status": "",
      "progress.perceninfo": t
    }), r.data.progress_timer.ID = setInterval((function() {
      r.data.progress_timer.time++, r.setData({
        "progress.percentage": Math.floor(100 * r.data.progress_timer.time / e)
      }), r.data.progress_timer.time >= e && a.closeTimer()
    }), 1e3))
  },
  closeTimer: function() {
    this.data.progress_timer.ID > 0 && clearInterval(this.data.progress_timer.ID), this.data.progress_timer.ID = 0
  },
  setCancelTimeout: function(e, t) {
    try {
      if (0 === t) {
        var a = e;
        "object" === r(a) && (this.data.Cancel.do = function() {
          a.abort()
        })
      }
      this.setData({
        "Cancel.can_cancel": 0 === t,
        "Cancel.retrieve": !1
      })
    } catch (e) {
      console.log(e)
    }
  },
  UpdateDeviceAsync: function(e, r) {
    var s = this;
    return a(t().mark((function a() {
      var n, o, d, p, u, l;
      return t().wrap((function(t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return p = function(e) {
              0 === e.ans ? n.data.progress.perceninfo != e.progress && n.setData({
                "progress.percentage": e.progress
              }) : 1 === e.ans ? n.setData({
                "progress.percentage": 100,
                "progress.status": "success",
                "progress.perceninfo": "固件更新完成，等待重启...",
                "update.download": !1,
                "Cancel.retrieve": !1,
                "Cancel.can_cancel": !1
              }) : 238 === e.ans && n.setData({
                "progress.percentage": 100,
                "progress.status": "success",
                "progress.perceninfo": "重启失败，请按动开关手动重启..."
              })
            }, n = s, o = {
              stop: !1
            }, d = new i.deviceUtil, n.data.Cancel.do = function() {
              o.stop = !0
            }, n.setData({
              "progress.percentage": 0,
              "progress.status": "",
              "progress.perceninfo": "更新固件，请勿断开与蓝牙设备的连接...",
              "Cancel.retrieve": !1,
              "Cancel.can_cancel": !0
            }), {
              data: r,
              stop: o,
              callback: p
            }, t.next = 9, d.DeviceUpdateAsync(e, r, o, p);
          case 9:
            0 === (u = t.sent).ans ? (n.data.update.temp.dataLength = 0, n.data.update.temp.filePath = "", n.setData({
              "progress.percentage": 100,
              "progress.status": "success",
              "progress.perceninfo": "重启中，启动过程指示灯会持续闪烁..."
            })) : (l = c.globalData.data.bluetooth.getErrorMessage(u.ans), s.setData({
              "progress.percentage": 100,
              "progress.status": "error",
              "progress.perceninfo": l,
              "Cancel.retrieve": !0,
              "Cancel.can_cancel": !1
            }), n.data.Cancel.do = function() {});
          case 11:
          case "end":
            return t.stop()
        }
      }), a)
    })))()
  },
  downloadUpdate: function() {
    var e = this;
    return a(t().mark((function s() {
      var i, d, p, u, l, g, f, h, v, m, D;
      return t().wrap((function(s) {
        for (;;) switch (s.prev = s.next) {
          case 0:
            if (i = e, d = new o.cardUtil, p = c.globalData.data.devices.deviceId, !c.globalData.data.bluetooth.IsDeviceLink(p)) {
              s.next = 28;
              break
            }
            if (!i.data.update.new || 1 !== i.data.update.new.update) {
              s.next = 24;
              break
            }
            if (u = function() {
                var e = a(t().mark((function e(a, r) {
                  var s, o;
                  return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (0 !== (s = (0, n.readDownloadFile)(r)).code) {
                          e.next = 6;
                          break
                        }
                        return o = d.data2HexData(s.data.data), e.next = 5, i.UpdateDeviceAsync(a, o);
                      case 5:
                        return e.abrupt("return", !0);
                      case 6:
                        return e.abrupt("return", !1);
                      case 7:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })));
                return function(t, a) {
                  return e.apply(this, arguments)
                }
              }(), l = function() {
                var e = a(t().mark((function e(a) {
                  return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (0 !== a.code) {
                          e.next = 9;
                          break
                        }
                        return i.data.update.temp.dataLength = a.data.dataLength, i.data.update.temp.filePath = a.data.filePath, e.next = 5, u(p, a.data.filePath);
                      case 5:
                        !1 === e.sent && (i.setData({
                          "progress.percentage": 100,
                          "progress.status": "error",
                          "progress.perceninfo": "程序路径异常，请重启小程序或者微信",
                          "Cancel.retrieve": !0,
                          "Cancel.can_cancel": !1
                        }), i.data.Cancel.do = function() {}, i.data.update.temp.dataLength = 0, i.data.update.temp.filePath = ""), e.next = 11;
                        break;
                      case 9:
                        i.setData({
                          "progress.percentage": 100,
                          "progress.status": "error",
                          "progress.perceninfo": "固件程序下载异常",
                          "Cancel.retrieve": !0,
                          "Cancel.can_cancel": !1
                        }), i.data.Cancel.do = function() {};
                      case 11:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })));
                return function(t) {
                  return e.apply(this, arguments)
                }
              }(), g = function(e) {
                var t = e.errmsg;
                t = "downloadfile:fail abort" === e.errmsg.toLowerCase() ? "已取消" : "downloadfile:fail timeout" === e.errmsg.toLowerCase() ? "连接超时，请检查网络" : "downloadfile:fail " === e.errmsg.toLowerCase() ? "服务器异常，请重新尝试" : "获取固件程序失败！" + e.errmsg, i.setData({
                  "progress.percentage": 100,
                  "progress.status": "error",
                  "progress.perceninfo": t,
                  "Cancel.retrieve": !0,
                  "Cancel.can_cancel": !1
                }), i.data.Cancel.do = function() {}
              }, f = function(e) {
                i.closeTimer()
              }, h = function(e) {
                "number" == typeof e.progress && i.setData({
                  "progress.percentage": e.progress
                })
              }, !(i.data.update.temp.dataLength > 0) || (0, n.stringIsEmpty)(i.data.update.temp.filePath)) {
              s.next = 16;
              break
            }
            return s.next = 13, u(p, i.data.update.temp.filePath);
          case 13:
            if (!0 !== s.sent) {
              s.next = 16;
              break
            }
            return s.abrupt("return");
          case 16:
            v = c.globalData.data.bluetooth.GetDeviceInfo(p), m = {
              type: 1,
              MCUUID: v.MCUUID,
              version: i.data.update.new.version,
              lang: v.lang,
              CDKEY: v.CDKEY
            }, D = (0, n.downloadFile)("CopyKEY/GetUpdateVersion", m, l, g, f, h), "object" === r(D) && (i.data.Cancel.do = function() {
              D.abort()
            }), i.setData({
              "update.show": !1,
              "progress.show": !0,
              "Cancel.can_cancel": !0,
              "Cancel.retrieve": !1
            }), i.autoProgress(60, "获取固件程序..."), s.next = 28;
            break;
          case 24:
            console.log("需要重新获取更新"), i.data.update.temp.dataLength = 0, i.data.update.temp.filePath = "", i.RetrieveFunction();
          case 28:
          case "end":
            return s.stop()
        }
      }), s)
    })))()
  },
  getDeviceUpdateInfo: function() {
    var e = this;
    return a(t().mark((function a() {
      var r, d, p, u, l, g, f, h, v;
      return t().wrap((function(t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (r = e, d = new i.deviceUtil, p = new o.cardUtil, u = c.globalData.data.devices.deviceId, !c.globalData.data.bluetooth.IsDeviceLink(u)) {
              t.next = 17;
              break
            }
            return l = c.globalData.data.bluetooth.GetDeviceInfo(u), e.setData({
              "devices.model": d.GetDeviceModeName(l.version),
              "devices.version": d.GetDeviceVersion(l.version),
              "devices.mcuuid": d.hex2MCUUID(l.MCUUID)
            }), g = {
              type: 0,
              MCUUID: l.MCUUID,
              version: l.version,
              lang: l.lang,
              CDKEY: l.CDKEY
            }, r.GetAtteryValue(), r.autoProgress(60, "正在检查更新..."), t.next = 12, (0, n.requestAsync)("GET", "CopyKEY/GetUpdateVersion", g, r.setCancelTimeout);
          case 12:
            f = t.sent, r.closeTimer(), 0 === f.code ? (c.globalData.data.devices.in_blacklist = 0, 1 === f.data.update ? (h = p.data2HexData(f.data.version), e.setData({
              "progress.percentage": 100,
              "progress.status": "success",
              "progress.perceninfo": "有新版本",
              "progress.show": !1,
              "update.show": !0,
              "update.new": f.data,
              "update.new_version": d.GetVersionString(h),
              "update.release_date": f.data.date,
              "update.update_info": f.data.info,
              "update.download": !0,
              "Cancel.retrieve": !1,
              "Cancel.can_cancel": !1
            }), (0, s.default)({
              context: e,
              selector: "#t-toast",
              message: "发现新版本"
            })) : 239 === f.data.update ? (c.globalData.data.devices.in_blacklist = 1, (0, s.default)({
              context: e,
              selector: "#t-toast",
              message: "您的设备异常，请联系卖家"
            }), e.setData({
              "progress.percentage": 100,
              "progress.status": "error",
              "progress.perceninfo": "您的设备异常，请联系卖家"
            })) : 0 === f.data.update ? ((0, s.default)({
              context: e,
              selector: "#t-toast",
              message: "已是最新版本"
            }), e.setData({
              "progress.percentage": 100,
              "progress.status": "success",
              "progress.perceninfo": "已是最新版本"
            })) : ((0, s.default)({
              context: e,
              selector: "#t-toast",
              message: "版本异常（" + f.data.update + "）"
            }), e.setData({
              "progress.percentage": 100,
              "progress.status": "error",
              "progress.perceninfo": "版本异常（" + f.data.update + "），请联系管理员"
            }))) : (v = f.errmsg, v = "request:fail abort" === f.errmsg.toLowerCase() ? "已取消" : "request:fail timeout" === f.errmsg.toLowerCase() ? "连接超时，请检查网络" : "request:fail " === f.errmsg.toLowerCase() ? "服务器异常，请重新尝试" : "获取升级信息失败！" + f.errmsg, e.setData({
              "progress.percentage": 100,
              "progress.status": "error",
              "progress.perceninfo": v,
              "Cancel.retrieve": !0,
              "Cancel.can_cancel": !1
            }), r.data.Cancel.do = function() {}), t.next = 19;
            break;
          case 17:
            (0, s.default)({
              context: e,
              selector: "#t-toast",
              message: "设备未连接，请先连接设备"
            }), setTimeout((function() {
              wx.switchTab({
                url: "/pages/device/index"
              })
            }), 2e3);
          case 19:
          case "end":
            return t.stop()
        }
      }), a)
    })))()
  },
  GetAtteryValue: function() {
    var e = this;
    c.globalData.data.bluetooth.cmdGetAtteryValueAsync(c.globalData.data.devices.deviceId, (function(t) {
      if (0 === t.ans) {
        var a = t.data;
        a != e.data.devices.attery && e.setData({
          "devices.attery": a
        })
      }
    }))
  }
});