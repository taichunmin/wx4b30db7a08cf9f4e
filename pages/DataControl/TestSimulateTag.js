var t, e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../@babel/runtime/helpers/asyncToGenerator"),
  s = (t = require("tdesign-miniprogram/toast/index")) && t.__esModule ? t : {
    default: t
  },
  i = require("../../utils/util"),
  d = require("../../utils/deviceUtil"),
  o = require("../../utils/cardUtil");
var n = getApp();
Page({
  data: {
    cardhub: {
      cardtype: 0,
      data: [],
      data_info: {
        uid: [],
        size: 0,
        ATQA: [],
        sak: 0
      },
      card_type: "",
      card_info: "",
      card_uid: ""
    },
    message: {
      info: "",
      info_more: ""
    },
    test: {
      starting: !1,
      stoping: !1,
      freq: 0,
      has_firewall: !1,
      writesector: []
    },
    simulate_scroll_height: 0,
    showContainerPage: !0,
    showCloseDialog: !1,
    showCloseContent: "是否退出检测模式？",
    _deviceutil: new d.deviceUtil
  },
  onLoad: function(t) {
    if (this.data._deviceutil = new d.deviceUtil, t.data) {
      var e = new o.cardUtil,
        a = JSON.parse(decodeURIComponent(t.data));
      if (e.isRightMFTagData(a.data)) {
        this.data.cardhub.cardtype = a.cardtype, this.data.cardhub.data = a.data, this.data.cardhub.card_type = a.strType, this.data.cardhub.data_info = a.datainfo;
        var s = (0, i.hex2string)(a.datainfo.uid, a.datainfo.size),
          n = new Array(1);
        n[0] = a.datainfo.sak;
        var r = "ATQA:" + (0, i.hex2string)(a.datainfo.ATQA, 2, !0) + "    SAK:" + (0, i.hex2string)(n, 1);
        this.setData({
          "cardhub.card_type": a.strType,
          "cardhub.card_info": r,
          "cardhub.card_uid": s
        }), this.TestSimulateTagAsync()
      } else wx.switchTab({
        url: "/pages/device/index"
      })
    } else wx.switchTab({
      url: "/pages/device/index"
    })
  },
  onReady: function() {
    var t = n.getSystemInfo(),
      e = t.the1rpx,
      a = t.pageHeight - 16;
    this.setData({
      simulate_scroll_height: a - 506 * e
    })
  },
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {
    this.data._deviceutil.SetDecoding(n.globalData.data.devices.deviceId, !1)
  },
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {},
  TestSimulateTagAsync: function() {
    var t = this;
    return a(e().mark((function a() {
      var i, d, o;
      return e().wrap((function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (d = function(t) {
                var e = "",
                  a = "";
                switch (t.msg) {
                  case i.data._deviceutil.decode_message.start:
                    e = "开始模拟...", i.setData({
                      "test.starting": !0,
                      "test.stoping": !1
                    });
                    break;
                  case i.data._deviceutil.decode_message.simulate_success:
                    e = "模拟卡生成成功", a = "请去门禁上刷卡...", (0, s.default)({
                      context: i,
                      selector: "#t-toast",
                      duration: 5e3,
                      message: a
                    });
                    break;
                  case i.data._deviceutil.decode_message.dt_wait:
                    if (i.data.test.freq++, e = "正在检测" + (i.data.test.freq % 2 ? "." : ".."), 0 === t.data.ans)
                      if (t.data.data.writecard > 0) {
                        var d = t.data.data.writecard;
                        if (32768 == (32768 & d)) {
                          var o = 16383 & d;
                          if (!i.data.test.writesector[o]) {
                            var n = {
                              id: o
                            };
                            i.data.test.writesector[o] = n, (0, s.default)({
                              context: i,
                              selector: "#t-toast",
                              duration: 3e3,
                              message: "检测到块" + o + "有写操作"
                            })
                          }
                          i.setData({
                            "test.writesector": i.data.test.writesector
                          })
                        }
                        16384 == (16384 & d) && (i.data.test.has_firewall || (0, s.default)({
                          context: i,
                          selector: "#t-toast",
                          duration: 3e3,
                          message: "检测到有防火墙"
                        }), i.setData({
                          "test.has_firewall": !0
                        }))
                      } else a = "请去门禁上刷卡";
                    break;
                  case i.data._deviceutil.decode_message.end:
                    i.DoClose();
                    var r = t.data;
                    r.ans === i.data._deviceutil.decode_message.cancel ? (e = "操作已取消", (0, s.default)({
                      context: i,
                      selector: "#t-toast",
                      message: e
                    })) : r.ans === i.data._deviceutil.decode_message.err_simulate && (e = "模拟失败", (0, s.default)({
                      context: i,
                      selector: "#t-toast",
                      message: e
                    })), i.setData({
                      "test.starting": !1,
                      "test.stoping": !1
                    }), setTimeout((function() {
                      wx.navigateBack()
                    }), 1e3)
                }
                e.length > 0 && (i.data.message.info = e, i.data.message.info_more = a, i.setData({
                  message: i.data.message
                }))
              }, i = t, o = n.globalData.data.devices.deviceId, !n.globalData.data.bluetooth.IsDeviceLink(o)) {
              e.next = 8;
              break
            }
            return e.next = 6, t.data._deviceutil.TestSimulateTagAsync(o, t.data.cardhub.cardtype, t.data.cardhub.data_info, t.data.cardhub.data, d);
          case 6:
            e.next = 9;
            break;
          case 8:
            wx.switchTab({
              url: "/pages/device/index"
            });
          case 9:
          case "end":
            return e.stop()
        }
      }), a)
    })))()
  },
  onStopTest: function() {
    this.data.test.starting ? this.setData({
      showCloseDialog: !0,
      showCloseContent: "是否退出检测模式？"
    }) : this.data.showContainerPage ? wx.navigateBack() : ((0, s.default)({
      context: this,
      selector: "#t-toast",
      message: "正在退出"
    }), setTimeout((function() {
      wx.navigateBack()
    }), 1e3))
  },
  onBeforeBack: function(t) {
    this.onStopTest()
  },
  DoCloseDialog: function() {
    this.data.test.starting ? (this.setData({
      "test.stoping": !0
    }), this.data._deviceutil.SetDecoding(n.globalData.data.devices.deviceId, !1)) : this.setData({
      showContainerPage: !1
    })
  },
  closeDialog: function() {
    this.setData({
      showContainerPage: !0
    }), this.DoClose()
  },
  DoClose: function() {
    this.setData({
      showCloseDialog: !1
    })
  }
});