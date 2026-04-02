var e, t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../@babel/runtime/helpers/asyncToGenerator"),
  o = (e = require("tdesign-miniprogram/toast/index")) && e.__esModule ? e : {
    default: e
  },
  i = require("../../utils/util"),
  n = require("../../utils/deviceUtil"),
  s = require("tdesign-miniprogram/common/utils");
var c = getApp();
Page({
  data: {
    devices: {
      select_value: -1,
      visible_selectBLE: !1,
      ble_discovering: !1,
      ble_connecting: !1,
      ble_connected: !1,
      ble_closeconnecting: !1,
      link_title: "设备未连接",
      link_icon: "link-unlink",
      model: "",
      version: "",
      mcuuid: "",
      found: [],
      history_found: [],
      attery: {
        show: !1,
        value: 0,
        icon: "/images/attery_no.svg",
        color: {
          R: 255,
          G: 0,
          B: 0
        }
      },
      disconnect: {
        show: !1,
        list: [{
          content: "取消",
          theme: "danger",
          tId: "cancel"
        }]
      },
      deviceId: "",
      problem: {
        has: !1,
        userLocation: !1,
        usebluetooth: !1,
        bluetoothAdapter: !1,
        bluetoothAdapterMsg: "",
        userLocationMsg: ""
      }
    },
    scroll_height: 0,
    device_controls: [{
      index: "onekeydecode",
      text: "一键解码",
      disabled: !0,
      image: {
        name: "gesture-typing",
        color: "#218DF9"
      }
    }, {
      index: "readcard",
      text: "读卡",
      disabled: !0,
      image: {
        name: "sensors",
        color: "#23AABC"
      }
    }, {
      index: "formatcard",
      text: "格式化卡",
      disabled: !0,
      image: {
        name: "clear",
        color: "red"
      }
    }, {
      index: "simulateTag",
      text: "卡片模拟",
      disabled: !0,
      image: {
        name: "copy",
        color: "#FFBA23"
      }
    }, {
      index: "detectionkeys",
      text: "密流侦测",
      disabled: !0,
      image: {
        name: "remote-wave",
        color: "blue"
      }
    }, {
      index: "NFC_SimulateKey",
      text: "手机/手环NFC钥匙",
      disabled: !0,
      image: {
        name: "watch",
        color: "#33CCFF"
      }
    }, {
      index: "datacontrol",
      text: "更多操作",
      disabled: !0,
      image: {
        name: "app",
        color: "green"
      }
    }]
  },
  onLoad: function() {
    c.globalData.is_debug && wx.setNavigationBarTitle({
      title: "测试版-设备"
    })
  },
  onReady: function() {
    var e = c.getSystemInfo(),
      t = e.the1rpx;
    this.setData({
      scroll_height: e.pageHeight - e.tabbarHeight - 428 * t + e.bottomSafeHeight
    }), this.ShowMiniAppUpdate()
  },
  onShow: function() {
    this.data.devices.ble_discovering || this.data.devices.ble_connected ? this.data.devices.ble_connected && this.GetAtteryValueAsync() : this.LinkBLEDevice({}, !0)
  },
  onHide: function() {},
  onUnload: function() {
    c.globalData.data.bluetooth.closeBluetooth()
  },
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {},
  SwitchTo: function(e) {
    var n = this;
    return a(t().mark((function a() {
      var s;
      return t().wrap((function(t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            "datacontrol" === e.currentTarget.dataset.index ? wx.navigateTo({
              url: "/pages/DataControl/index?deviceId=" + c.globalData.data.devices.deviceId
            }) : !(0, i.stringIsEmpty)(c.globalData.data.devices.deviceId) && c.globalData.data.bluetooth.IsDeviceLink(c.globalData.data.devices.deviceId) ? (s = "", s = "detectionkeys" === e.currentTarget.dataset.index ? "/pages/DataControl/Detection" : "/pages/DataControl/index?control=" + e.currentTarget.dataset.index, wx.navigateTo({
              url: s
            })) : (0, o.default)({
              context: n,
              duration: 3e3,
              selector: "#t-toast",
              message: "请先连接设备"
            });
          case 1:
          case "end":
            return t.stop()
        }
      }), a)
    })))()
  },
  onLinkDevice: (0, s.throttle)((function(e) {
    this.data.devices.ble_discovering || this.data.devices.ble_connected ? this.data.devices.ble_connected ? this.setData({
      "devices.disconnect.show": !0
    }) : c.globalData.data.bluetooth.stopBluetoothDevicesDiscovery(void 0) : this.LinkBLEDevice({}, !0)
  }), 800),
  LinkBLEDevice: function(e, s) {
    var l = this,
      r = new n.deviceUtil;

    function d(e) {
      return u.apply(this, arguments)
    }

    function u() {
      return (u = a(t().mark((function e(a) {
        return t().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              0 === a.ans ? (console.log("获取设备信息"), setTimeout((function() {
                c.globalData.data.bluetooth.cmdDeviceInfoAsync(c.globalData.data.devices.deviceId, v)
              }), 600)) : ((0, o.default)({
                context: l,
                duration: 3e3,
                selector: "#t-toast",
                message: "连接设备失败"
              }), setTimeout((function() {
                c.globalData.data.bluetooth.closeBLEConnection(c.globalData.data.devices.deviceId)
              }), 2e3));
            case 1:
            case "end":
              return e.stop()
          }
        }), e)
      })))).apply(this, arguments)
    }

    function v(e) {
      return b.apply(this, arguments)
    }

    function b() {
      return (b = a(t().mark((function e(a) {
        var i, n;
        return t().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              if (0 != a.ans) {
                e.next = 12;
                break
              }
              return i = r.CanShutDown(a.data.version), (n = [{
                content: "取消",
                theme: "danger",
                tId: "cancel"
              }]).push({
                content: "断开蓝牙连接",
                theme: "primary",
                tId: "disconnect"
              }), i && n.push({
                content: "设备关机/休眠",
                theme: "primary",
                tId: "shutdown"
              }), l.setData({
                "devices.model": r.GetDeviceModeName(a.data.version),
                "devices.version": r.GetDeviceVersion(a.data.version),
                "devices.mcuuid": r.hex2MCUUID(a.data.MCUUID),
                "devices.link_title": "关机/休眠",
                "devices.disconnect.list": n
              }), e.next = 8, l.GetAtteryValueAsync();
            case 8:
              l.ShowControlButtons(a.data.version, !0), g(a.data), e.next = 15;
              break;
            case 12:
              (0, o.default)({
                context: l,
                duration: 5e3,
                selector: "#t-toast",
                message: "获取设备信息失败"
              }), l.setData({
                "devices.link_title": "获取设备信息失败"
              }), setTimeout((function() {
                c.globalData.data.bluetooth.closeBLEConnection(c.globalData.data.devices.deviceId)
              }), 2e3);
            case 15:
            case "end":
              return e.stop()
          }
        }), e)
      })))).apply(this, arguments)
    }

    function g(e) {
      return h.apply(this, arguments)
    }

    function h() {
      return (h = a(t().mark((function e(a) {
        var o, n;
        return t().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return o = {
                type: 0,
                MCUUID: a.MCUUID,
                version: a.version,
                lang: 0,
                CDKEY: a.CDKEY
              }, e.next = 3, (0, i.requestAsync)("GET", "CopyKEY/GetUpdateVersion", o, void 0);
            case 3:
              0 === (n = e.sent).code && 1 === n.data.update ? (l.ShowDeviceUpdate(!0), wx.showModal({
                title: "固件升级",
                content: "发现新固件版本，建议升级",
                confirmText: "立即升级",
                cancelText: "暂不升级",
                success: function(e) {
                  e.confirm ? wx.navigateTo({
                    url: "/pages/my/deviceUpdate"
                  }) : e.cancel
                }
              }), c.globalData.data.devices.in_blacklist = 0) : (l.ShowDeviceUpdate(!1), 0 === n.code && 239 === n.data.update ? (console.log("该设备在黑名单"), c.globalData.data.devices.in_blacklist = 1) : c.globalData.data.devices.in_blacklist = 0);
            case 5:
            case "end":
              return e.stop()
          }
        }), e)
      })))).apply(this, arguments)
    }
    s && l.setData({
      "devices.found": [],
      "devices.history_found": []
    }), c.globalData.data.bluetooth.BLEConnection(e, (function(e) {
      switch (e.errCode) {
        case c.globalData.data.bluetooth.ble_error.adapter_success:
          l.setData({
            "devices.problem.bluetoothAdapter": !1
          }), l.updateProblemTip();
          break;
        case c.globalData.data.bluetooth.ble_error.ble_connecting:
          l.setData({
            "devices.link_title": "连接设备...",
            "devices.ble_connecting": !0
          });
          break;
        case c.globalData.data.bluetooth.ble_error.ble_connect_success:
          l.setData({
            "devices.link_title": "获取设备信息...",
            "devices.ble_connecting": !1
          }), c.globalData.data.devices.deviceId = e.data, c.globalData.data.bluetooth.cmdLinkDeviceAsync(c.globalData.data.devices.deviceId, d);
          break;
        case c.globalData.data.bluetooth.ble_error.ble_connect_error:
          l.setData({
            "devices.link_title": "连接设备失败",
            "devices.ble_connecting": !1
          }), setTimeout((function() {
            l.LinkBLEDevice({}, !0)
          }), 1e3);
          break;
        case c.globalData.data.bluetooth.ble_error.get_userLocation_msg:
          (0, o.default)({
            context: l,
            selector: "#t-toast",
            message: e.errMsg
          }), l.setData({
            "devices.problem.has": !0,
            "devices.problem.userLocation": !0,
            "devices.problem.userLocationMsg": e.errMsg
          });
          break;
        case c.globalData.data.bluetooth.ble_error.get_ble_info_error:
          l.setData({
            "devices.problem.has": !0,
            "devices.problem.usebluetooth": !0
          });
          break;
        case c.globalData.data.bluetooth.ble_error.no_link_ble_device:
          (0, o.default)({
            context: l,
            duration: 5e3,
            selector: "#t-toast",
            message: e.errMsg
          });
          break;
        case c.globalData.data.bluetooth.ble_error.ble_discovery_error:
          if (l.data.devices.problem.userLocation) {
            l.setData({
              "devices.problem.has": !0,
              "devices.problem.userLocation": !0,
              "devices.problem.userLocationMsg": "您微信的位置信息/定位服务未开启，可能会影响蓝牙设备的搜索。建议开启"
            });
            break
          }(0, o.default)({
            context: l,
            duration: 5e3,
            selector: "#t-toast",
            message: "搜索蓝牙设备失败"
          });
          break;
        case c.globalData.data.bluetooth.ble_error.account_no_login:
          (0, o.default)({
            context: l,
            duration: 5e3,
            selector: "#t-toast",
            message: "请先登录后再连接设备"
          }), setTimeout((function() {
            wx.navigateTo({
              url: "/pages/Login/wxLogin"
            })
          }), 1e3);
          break;
        case c.globalData.data.bluetooth.ble_error.select_one_ble:
          var t = l.data.devices.history_found.concat(e.data);
          if (l.setData({
              "devices.history_found": t
            }), l.data.devices.visible_selectBLE) {
            var a = l.data.devices.found.concat(e.data);
            l.setData({
              "devices.found": a
            })
          } else l.setData({
            "devices.visible_selectBLE": !0,
            "devices.found": e.data,
            "devices.select_value": -1
          });
          break;
        case c.globalData.data.bluetooth.ble_error.ble_stop_discovery_success:
          break;
        case c.globalData.data.bluetooth.ble_error.init_ver_error:
        case c.globalData.data.bluetooth.ble_error.adapter_error:
          var i = e.errMsg;
          (0, o.default)({
            context: l,
            duration: 5e3,
            selector: "#t-toast",
            message: i
          }), l.setData({
            "devices.problem.has": !0,
            "devices.problem.bluetoothAdapter": !0,
            "devices.problem.bluetoothAdapterMsg": i
          });
          break;
        default:
          (0, o.default)({
            context: l,
            duration: 5e3,
            selector: "#t-toast",
            message: e.errMsg
          })
      }
    }), (function(e) {
      console.log("bluetoothStatecallback->", e), l.setData({
        "devices.ble_discovering": e.discovering,
        "devices.link_title": e.discovering ? "正在搜索..." : l.data.devices.ble_connected ? "关机/休眠" : "连接设备"
      })
    }), (function(e) {
      if (console.log("connectStatecallback->", e), l.setData({
          "devices.ble_connected": e.connected,
          "devices.link_title": e.connected ? "关机/休眠" : "设备未连接",
          "devices.link_icon": e.connected ? "poweroff" : "link-unlink",
          "devices.attery.show": !1
        }), e.connected || l.ShowDeviceUpdate(!1), !e.connected) {
        l.ShowControlButtons([], !1);
        var t = getCurrentPages();
        if (t.length >= 1) "pages/my/deviceUpdate" === t[t.length - 1].route && (console.log("断开连接，返回连接设备"), wx.switchTab({
          url: "/pages/device/index"
        }));
        l.setData({
          "devices.model": "",
          "devices.version": "",
          "devices.mcuuid": ""
        })
      }(0, o.default)({
        context: l,
        duration: 5e3,
        selector: "#t-toast",
        message: e.connected ? "设备已连接" : "设备断开连接"
      })
    }), null, s)
  },
  ShowControlButtons: function(e, t) {
    var a = new n.deviceUtil,
      o = a.GetDeviceTEID(e);
    this.data.device_controls.forEach((function(e) {
      t ? "simulateTag" === e.index ? e.disabled = !a.SupportSimulateTag(o) : "detectionkeys" === e.index ? e.disabled = !a.SupportDetectionTag(o) : e.disabled = !1 : e.disabled = !0
    })), this.setData({
      device_controls: this.data.device_controls
    })
  },
  ShowDeviceUpdate: function(e) {
    if (c.globalData.data.devices.update = e, "function" == typeof this.getTabBar) {
      var t = e;
      !1 === e && (t = c.globalData.miniapp.update), c.SetTabBarBadge(this.getTabBar(), "tab_my", t)
    }
  },
  ShowMiniAppUpdate: function() {
    c.getMiniAppUpdate(this.getTabBar())
  },
  GetAtteryValueAsync: function() {
    var e = this;
    return a(t().mark((function a() {
      var o, i;
      return t().wrap((function(t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return i = function(e) {
              if (0 === e.ans) {
                o.data.devices.attery.show || o.setData({
                  "devices.attery.show": !0
                });
                var t = e.data;
                if (t != o.data.devices.attery.value) {
                  var a = 0,
                    i = 0,
                    n = 0;
                  t <= 50 ? (a = 255, i = 0 + 255 * t / 50, n = 0 + 255 * t / 50) : (i = 255, a = 255 - 255 * (t - 50) / 50, n = 255 - 255 * (t - 50) / 50);
                  var s = "";
                  s = 100 === t ? "/images/attery_full.svg" : t > 66 && t < 100 ? "/images/attery_high.svg" : t > 33 && t <= 66 ? "/images/attery_medium.svg" : t > 0 && t <= 33 ? "/images/attery_low.svg" : "/images/attery_no.svg", o.setData({
                    "devices.attery.value": t,
                    "devices.attery.icon": s,
                    "devices.attery.color.R": a,
                    "devices.attery.color.G": i,
                    "devices.attery.color.B": n
                  })
                }
              }
              console.log(e)
            }, o = e, t.next = 4, c.globalData.data.bluetooth.cmdGetAtteryValueAsync(c.globalData.data.devices.deviceId, i);
          case 4:
          case "end":
            return t.stop()
        }
      }), a)
    })))()
  },
  onSelectBLEVisibleChange: function(e) {
    this.setData({
      "devices.visible_selectBLE": e.detail.visible
    })
  },
  onSelectBLEChange: function(e) {
    var t = this;
    this.setData({
      "devices.select_value": e.detail.value,
      "devices.visible_selectBLE": !1
    }), this.data.devices.found.forEach((function(a) {
      a.deviceId !== e.detail.value || t.LinkBLEDevice(a, !1)
    }))
  },
  onSelectBLE: function(e) {
    var t = this,
      a = e.target.dataset.deviceid;
    this.data.devices.history_found.forEach((function(e) {
      e.deviceId !== a || t.LinkBLEDevice(e, !1)
    }))
  },
  DoShutDownAsync: function() {
    var e = this;
    return a(t().mark((function a() {
      return t().wrap((function(t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (t.prev = 0, (0, i.stringIsEmpty)(c.globalData.data.devices.deviceId) || !c.globalData.data.bluetooth.IsDeviceLink(c.globalData.data.devices.deviceId)) {
              t.next = 7;
              break
            }
            return wx.showToast({
              title: "正在关机...",
              duration: 5e3,
              mask: !0,
              icon: "loading"
            }), t.next = 5, c.globalData.data.bluetooth.cmdDeviceRestartAsync(c.globalData.data.devices.deviceId, 1, void 0);
          case 5:
            0 === t.sent.ans ? (e.DoDisConnect(), wx.showToast({
              title: "关机成功",
              duration: 2e3,
              icon: "success"
            })) : wx.showToast({
              title: "关机失败",
              duration: 2e3,
              icon: "error"
            });
          case 7:
            t.next = 11;
            break;
          case 9:
            t.prev = 9, t.t0 = t.catch(0);
          case 11:
          case "end":
            return t.stop()
        }
      }), a, null, [
        [0, 9]
      ])
    })))()
  },
  DoDisConnect: function() {
    var e = this;
    if (e.data.devices.ble_connected) {
      e.setData({
        "devices.ble_closeconnecting": !0
      }), c.globalData.data.bluetooth.closeBLEConnection(c.globalData.data.devices.deviceId, (function(t) {
        e.setData({
          "devices.ble_closeconnecting": !1
        })
      }))
    }
  },
  DisconnectDialogAction: function(e) {
    console.log(e);
    var t = e.detail.index;
    1 === t ? this.DoDisConnect() : 2 === t && this.DoShutDownAsync(), this.setData({
      "devices.disconnect.show": !1
    })
  },
  onOpenMiniAppSetting: function(e) {
    var t = this;
    wx.openSetting({
      success: function(e) {
        !0 === e.authSetting["scope.bluetooth"] ? wx.showToast({
          title: "已授权蓝牙使用",
          icon: "success",
          duration: 1e3
        }) : wx.showToast({
          title: "未授权蓝牙使用权限",
          icon: "none",
          duration: 5e3
        }), t.setData({
          "devices.problem.usebluetooth": !e.authSetting["scope.bluetooth"]
        }), t.updateProblemTip()
      },
      fail: function(e) {
        console.log(e)
      }
    })
  },
  onTestUserLocation: function(e) {
    var t = this;
    c.globalData.data.bluetooth.getLocation(!0, (function(e) {
      var a = !1;
      e.msg.length > 0 ? (a = !1, (0, o.default)({
        context: t,
        duration: 5e3,
        selector: "#t-toast",
        message: e.msg
      })) : (a = !0, wx.showToast({
        title: "获取位置信息成功",
        icon: "success",
        duration: 1e3
      })), t.setData({
        "devices.problem.userLocation": !a
      }), t.updateProblemTip()
    }))
  },
  updateProblemTip: function() {
    var e = this.data.devices.problem.userLocation || this.data.devices.problem.bluetoothAdapter || this.data.devices.problem.usebluetooth;
    this.setData({
      "devices.problem.has": e
    })
  }
});