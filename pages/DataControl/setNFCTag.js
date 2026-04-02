var t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../@babel/runtime/helpers/toConsumableArray"),
  a = require("../../@babel/runtime/helpers/asyncToGenerator"),
  i = require("../../utils/deviceUtil"),
  s = require("../../utils/cardUtil"),
  r = require("../../utils/util"),
  o = getApp();
Page({
  data: {
    scroll_height: 0,
    records: {
      visible_selectRecord: !1,
      selectItem: -1,
      bytes: 0,
      list: []
    },
    SetCardDataDialog: {
      enable: !0,
      show: !1,
      name: "",
      tip: "",
      writing: !1,
      stoping: !1
    },
    _deviceutil: new i.deviceUtil
  },
  onLoad: function() {
    this.data._deviceutil = new i.deviceUtil
  },
  onReady: function() {
    var t = o.getSystemInfo(),
      e = t.the1rpx;
    this.setData({
      scroll_height: t.pageHeight - 260 * e - t.bottomSafeHeight - 1
    })
  },
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {},
  onSelect: function(t) {
    wx.navigateTo({
      url: "/pages/DataControl/selectNdefRecord"
    })
  },
  onSelectRecordVisibleChange: function(t) {
    this.setData({
      "records.visible_selectRecord": !1
    })
  },
  onSelectRecordControl: function(t) {
    var e = t.target.dataset,
      a = e.id,
      i = e.type;
    if ("view" === i || "copy" === i || "del" === i)
      for (var s = null, r = 0; r < this.data.records.list.length; r++)
        if (r === a) {
          if (s = this.data.records.list[r], "view" === i) {
            var o = JSON.stringify(s);
            wx.navigateTo({
              url: "/pages/DataControl/NdefTagRecord?id=" + s.id + "&type=1&data=" + encodeURIComponent(o) + "&index=" + a
            })
          } else "copy" === i ? this.AddRecord(s) : "del" === i && (this.data.records.bytes -= s.value.length, this.data.records.list.splice(a, 1), this.setData({
            "records.list": this.data.records.list,
            "records.bytes": this.data.records.bytes
          }));
          break
        } this.setData({
      "records.visible_selectRecord": !1
    })
  },
  onSelectRecord: function(t) {
    var e = t.target.dataset.id;
    this.setData({
      "records.visible_selectRecord": !0,
      "records.selectItem": e
    })
  },
  onUpDownItem: function(t) {
    for (var e = t.currentTarget.dataset, a = e.id, i = e.type, s = a, r = null, o = 0; o < this.data.records.list.length; o++)
      if (o === a) {
        r = this.data.records.list[o], "up" === i ? --s < 0 && (s = 0) : ++s >= this.data.records.list.length && (s = this.data.records.list.length - 1), a !== s && (this.data.records.list.splice(a, 1), this.data.records.list.splice(s, 0, r), this.setData({
          "records.list": this.data.records.list
        }));
        break
      }
  },
  AddRecord: function(t) {
    this.data.records.list.push(t), this.data.records.bytes += t.value.length, this.setData({
      "records.bytes": this.data.records.bytes,
      "records.list": this.data.records.list
    })
  },
  UpdateRecord: function(t, e) {
    for (var a = 0, i = 0; i < this.data.records.list.length; i++) i === e && (this.data.records.list[i] = t), a += this.data.records.list[i].value.length;
    this.setData({
      "records.bytes": a,
      "records.list": this.data.records.list
    })
  },
  onWriteCard: function(t) {
    this.data.records.list.length <= 0 ? wx.showToast({
      title: "请先添加记录",
      icon: "none",
      duration: 3e3
    }) : this.setData({
      "SetCardDataDialog.show": !0,
      "SetCardDataDialog.enable": this.data.SetCardDataDialog.enable,
      "SetCardDataDialog.name": "支持NDEF的标签卡",
      "SetCardDataDialog.tip": "NTAG/Ultralight标签卡请保证数据页未被锁定。M1标签卡请保证未被使用或使用前先格式化数据。",
      "SetCardDataDialog.writing": !1
    })
  },
  WriteNdefTagDataAsync: function() {
    var i = this;
    return a(t().mark((function a() {
      var d, n, l, c, h, g, u, D, p;
      return t().wrap((function(t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            for (D = function(t) {
                var e = "";
                new s.cardUtil;
                switch (t.msg) {
                  case d.data._deviceutil.decode_message.start:
                    e = "开始写卡...", d.setData({
                      "SetCardDataDialog.stoping": !1
                    });
                    break;
                  case d.data._deviceutil.decode_message.end:
                    var a = t.data;
                    a.ans === d.data._deviceutil.decode_message.cancel ? (e = "操作已取消", wx.showToast({
                      title: e,
                      icon: "none",
                      duration: 3e3
                    })) : a.ans === d.data._deviceutil.decode_message.writecard_success ? wx.showToast({
                      title: "写卡完成",
                      icon: "success",
                      duration: 3e3
                    }) : a.ans === d.data._deviceutil.decode_message.err_writecard && wx.showToast({
                      title: "写卡失败",
                      icon: "error",
                      duration: 3e3
                    })
                }
              }, d = i, n = [], l = 0; l < i.data.records.list.length; l++)(c = i.data.records.list[l].value)[0] = 63 & c[0], 0 === l && (c[0] = 128 | c[0]), l + 1 === i.data.records.list.length && (c[0] = 64 | c[0]), n.push.apply(n, e(c));
            if ((h = Array(2))[0] = 3, n.length < 255 ? h[1] = n.length : (h[1] = 255, (g = Array(2).fill(0))[0] = n.length >> 8 & 255, g[1] = 255 & n.length, h.push.apply(h, e(g))), (u = []).push.apply(u, h), u.push.apply(u, n), u.push.apply(u, [254]), p = o.globalData.data.devices.deviceId, (0, r.stringIsEmpty)(p) || !o.globalData.data.bluetooth.IsDeviceLink(p)) {
              t.next = 19;
              break
            }
            return d.setData({
              "SetCardDataDialog.writing": !0
            }), t.next = 16, d.data._deviceutil.SetNdefTagDataAsync(p, u, D);
          case 16:
            d.setData({
              "SetCardDataDialog.show": !1,
              "SetCardDataDialog.writing": !1,
              "SetCardDataDialog.stoping": !1
            }), t.next = 20;
            break;
          case 19:
            wx.showToast({
              title: "设备未连接，请先连接设备",
              icon: "none",
              duration: 5e3
            });
          case 20:
          case "end":
            return t.stop()
        }
      }), a)
    })))()
  },
  SetCardDataAndBack: function(t) {
    this.WriteNdefTagDataAsync()
  },
  closeSetCardDataDialog: function() {
    this.data.SetCardDataDialog.writing ? (this.setData({
      "SetCardDataDialog.stoping": !0
    }), this.data._deviceutil.SetDecoding(o.globalData.data.devices.deviceId, !1)) : this.setData({
      "SetCardDataDialog.show": !1,
      "SetCardDataDialog.writing": !1,
      "SetCardDataDialog.stoping": !1
    })
  }
});