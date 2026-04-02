var e, a = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator"),
  s = require("../../utils/util"),
  i = (e = require("tdesign-miniprogram/toast/index")) && e.__esModule ? e : {
    default: e
  },
  d = require("../../utils/deviceUtil"),
  c = require("../../utils/cardUtil");
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
    simulateSteps: {
      list: [{
        id: "0",
        title: "生成UID/CUID中介卡/模拟卡",
        content: "请使用UID/CUID等可重复擦写的复制卡作为中介卡。CUID卡如果已使用建议先格式化后再使用"
      }, {
        id: "1",
        title: "添加门卡",
        content: "在手机/手环上添加该生成的中介卡/设备模拟卡，并设为默认卡"
      }, {
        id: "2",
        title: "写卡",
        content: "把手机/手环放在设备的读写感应区（如果未设置为默认卡，请手动切换到该卡），按写入键写入数据"
      }, {
        id: "3",
        title: "模拟成功",
        content: "尝试使用手机/手环去刷卡"
      }],
      step: 0,
      working: !1,
      useMediumTag: !0,
      makeName: "制作UID/CUID中介卡",
      scrollToView: "0"
    },
    supportSimulateTag: !1,
    _deviceutil: new d.deviceUtil,
    simulate_scroll_height: 0
  },
  onLoad: function(e) {
    if (this.data._deviceutil = new d.deviceUtil, this.setSimulateMode(), e.data) {
      var a = new c.cardUtil,
        t = JSON.parse(decodeURIComponent(e.data));
      if (a.isRightMFTagData(t.data)) {
        this.data.cardhub.cardtype = t.cardtype, this.data.cardhub.data = t.data, this.data.cardhub.card_type = t.strType, this.data.cardhub.data_info = t.datainfo;
        var u = (0, s.hex2string)(t.datainfo.uid, t.datainfo.size),
          r = new Array(1);
        r[0] = t.datainfo.sak;
        var l = "ATQA:" + (0, s.hex2string)(t.datainfo.ATQA, 2, !0) + "    SAK:" + (0, s.hex2string)(r, 1);
        this.setData({
          "cardhub.card_type": t.strType,
          "cardhub.card_info": l,
          "cardhub.card_uid": u
        });
        var o = n.globalData.data.devices.deviceId;
        if (n.globalData.data.bluetooth.IsDeviceLink(o)) {
          var m = n.globalData.data.bluetooth.GetDeviceInfo(o).version,
            g = this.data._deviceutil.GetDeviceTEID(m);
          this.setData({
            supportSimulateTag: this.data._deviceutil.SupportSimulateTag(g)
          })
        } else(0, i.default)({
          context: this,
          selector: "#t-toast",
          message: "设备未连接，请先连接设备"
        }), setTimeout((function() {
          wx.switchTab({
            url: "/pages/device/index"
          })
        }), 2e3)
      } else wx.switchTab({
        url: "/pages/device/index"
      })
    } else wx.switchTab({
      url: "/pages/device/index"
    })
  },
  onReady: function() {
    var e = n.getSystemInfo(),
      a = e.the1rpx,
      t = e.pageHeight - 16;
    this.setData({
      simulate_scroll_height: t - 506 * a
    })
  },
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {},
  setSimulateMode: function() {
    this.data.simulateSteps.list[0].title = this.data.simulateSteps.useMediumTag ? "制作UID/CUID中介卡" : "生成模拟卡", this.data.simulateSteps.list[1].content = "在手机/手环上添加" + (this.data.simulateSteps.useMediumTag ? "制作的UID/CUID中介卡" : "生成的模拟卡") + "，并设为默认卡", this.setData({
      "simulateSteps.list": this.data.simulateSteps.list,
      "simulateSteps.makeName": this.data.simulateSteps.useMediumTag ? "制作UID/CUID中介卡" : "生成模拟卡"
    })
  },
  onUseMediumTag: function(e) {
    this.data.simulateSteps.useMediumTag = !e.detail.value, this.setSimulateMode()
  },
  onMakeSimulateTag: function(e) {
    this.MakeSimulateTagAsync(0)
  },
  onAddNFCTag: function(e) {
    this.MakeSimulateTagAsync(1)
  },
  onSetSimulateTag: function(e) {
    this.MakeSimulateTagAsync(2)
  },
  MakeSimulateTagAsync: function(e) {
    var s = this;
    return t(a().mark((function t() {
      var d, u, r, l, o, m, g, h, p, _, v, f;
      return a().wrap((function(a) {
        for (;;) switch (a.prev = a.next) {
          case 0:
            if (g = function(e) {
                var a = "",
                  t = new c.cardUtil;
                switch (e.msg) {
                  case d.data._deviceutil.decode_message.start:
                    a = "开始写卡...", d.setData({
                      "simulateSteps.working": !0
                    });
                    break;
                  case d.data._deviceutil.decode_message.end:
                    var s = e.data,
                      n = t.getWriteCardData(r, l, s.data, o);
                    s.ans === d.data._deviceutil.decode_message.cancel ? (a = "操作已取消", (0, i.default)({
                      context: d,
                      selector: "#t-toast",
                      message: a
                    })) : s.ans === d.data._deviceutil.decode_message.writecard_success ? (a = n.Total === n.Success ? "写卡成功" : "共" + n.Total + "块数据，成功写入" + n.Success + "块", (0, i.default)({
                      context: d,
                      selector: "#t-toast",
                      duration: 5e3,
                      message: a
                    })) : s.ans === d.data._deviceutil.decode_message.err_writecard && (a = "写卡失败", (0, i.default)({
                      context: d,
                      selector: "#t-toast",
                      message: a
                    })), d.setData({
                      "simulateSteps.working": !1
                    })
                }
              }, m = function(e) {
                var a = "";
                switch (e.msg) {
                  case d.data._deviceutil.decode_message.start:
                    a = "开始模拟...", d.setData({
                      "simulateSteps.working": !0
                    });
                    break;
                  case d.data._deviceutil.decode_message.end:
                    var t = e.data;
                    t.ans === d.data._deviceutil.decode_message.cancel ? (a = "操作已取消", (0, i.default)({
                      context: d,
                      selector: "#t-toast",
                      message: a
                    })) : t.ans === d.data._deviceutil.decode_message.simulate_success ? (a = "模拟成功。请在手机/手环上添加该卡", (0, i.default)({
                      context: d,
                      selector: "#t-toast",
                      duration: 5e3,
                      message: a
                    })) : t.ans === d.data._deviceutil.decode_message.err_simulate && (a = "生成模拟卡失败，请重试", (0, i.default)({
                      context: d,
                      selector: "#t-toast",
                      message: a
                    })), d.setData({
                      "simulateSteps.working": !1
                    })
                }
              }, d = s, u = new c.cardUtil, r = d.data.cardhub.cardtype, l = d.data.cardhub.data, o = !1, h = n.globalData.data.devices.deviceId, !n.globalData.data.bluetooth.IsDeviceLink(h)) {
              a.next = 65;
              break
            }
            if (p = "", 0 !== e) {
              a.next = 27;
              break
            }
            if (_ = u.SetEmptyMFTagData(d.data.cardhub.data), !s.data.simulateSteps.useMediumTag) {
              a.next = 21;
              break
            }
            return l = _, o = !1, a.next = 17, d.data._deviceutil.CardDataSetAsync(h, d.data.cardhub.cardtype, d.data.cardhub.data_info, _, null, g);
          case 17:
            a.sent.ans === d.data._deviceutil.decode_message.writecard_success && d.setData({
              "simulateSteps.step": 1,
              "simulateSteps.scrollToView": "1"
            }), a.next = 25;
            break;
          case 21:
            return a.next = 23, d.data._deviceutil.SimulateTagAsync(h, d.data.cardhub.cardtype, d.data.cardhub.data_info, _, !0, 0, m);
          case 23:
            a.sent.ans === d.data._deviceutil.decode_message.simulate_success && (n.globalData.data.bluetooth.cmdAntennaSwitchAsync(h, 0, null), d.setData({
              "simulateSteps.step": 1,
              "simulateSteps.scrollToView": "1"
            }));
          case 25:
            a.next = 62;
            break;
          case 27:
            if (1 !== e) {
              a.next = 36;
              break
            }
            return d.setData({
              "simulateSteps.step": 2,
              "simulateSteps.scrollToView": "2"
            }), p = "请放上手机/手环并写卡", a.next = 32, d.data._deviceutil.SimulateTagAsync(h, d.data.cardhub.cardtype, [], [], !1, 0, void 0);
          case 32:
            v = a.sent, console.log("关闭模拟卡", v), a.next = 62;
            break;
          case 36:
            return l = d.data.cardhub.data, o = !0, a.prev = 38, console.log(d.data.cardhub.data_info.uid), a.next = 42, d.data._deviceutil.SelectMifareCardAsync(h, d.data.cardhub.data_info.uid, void 0);
          case 42:
            if (f = a.sent, console.log(f), 0 !== f.ans) {
              a.next = 51;
              break
            }
            return a.next = 47, d.data._deviceutil.CardDataSetAsync(h, d.data.cardhub.cardtype, d.data.cardhub.data_info, d.data.cardhub.data, null, g);
          case 47:
            a.sent.ans === d.data._deviceutil.decode_message.writecard_success && d.setData({
              "simulateSteps.step": 3,
              "simulateSteps.scrollToView": "3"
            }), a.next = 52;
            break;
          case 51:
            p = "请放上手机/手环并写卡";
          case 52:
            a.next = 62;
            break;
          case 54:
            if (a.prev = 54, a.t0 = a.catch(38), console.log(a.t0), a.t0 !== d.data._deviceutil.decode_message.card_uid_change) {
              a.next = 61;
              break
            }
            p = "请选择正确的手机/手环并写卡", a.next = 62;
            break;
          case 61:
            throw a.t0;
          case 62:
            p.length > 0 && (0, i.default)({
              context: d,
              selector: "#t-toast",
              message: p
            }), a.next = 67;
            break;
          case 65:
            (0, i.default)({
              context: d,
              selector: "#t-toast",
              message: "设备未连接，请先连接设备"
            }), setTimeout((function() {
              wx.switchTab({
                url: "/pages/device/index"
              })
            }), 2e3);
          case 67:
          case "end":
            return a.stop()
        }
      }), t, null, [
        [38, 54]
      ])
    })))()
  }
});