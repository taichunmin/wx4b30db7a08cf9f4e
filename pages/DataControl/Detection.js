var t, a = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../@babel/runtime/helpers/asyncToGenerator"),
  d = require("../../utils/util"),
  c = require("../../utils/cardUtil"),
  r = (t = require("tdesign-miniprogram/toast/index")) && t.__esModule ? t : {
    default: t
  },
  s = require("../../utils/deviceUtil");
var o = getApp();
Page({
  data: {
    showContainerPage: !0,
    QuitDetection: {
      show: !1,
      wait: !1
    },
    readTag: {
      starting: !1,
      stoping: !1
    },
    detect: {
      testGDM: {
        test: !0,
        authz: !1
      },
      useUIDDetectionTag: !1,
      canopen: !1,
      starting: !1,
      stoping: !1,
      info: "",
      count: "",
      info_more: "",
      testkeys: []
    },
    cardhub: {
      cardtype: 0,
      data: [],
      data_info: {
        uid: [],
        size: 0,
        ATQA: [],
        sak: 0,
        num_sectors: 0
      },
      card_type: "",
      card_info: "",
      card_uid: {
        value: "",
        inputvalue: "",
        cursor: 0
      },
      card_atqa: {
        value: "04 00",
        cursor: 0
      },
      card_sak: {
        value: "08",
        cursor: 0
      },
      card_data_text: "",
      card_proID: {
        value: "00 00 00 00 00 00 00 00",
        cursor: 0,
        length: 8
      },
      Sectors: [],
      detection: {}
    },
    input_style: "border-bottom: 0.5px solid rgba(220,220,220,0.4);",
    detect_scroll_height: 0,
    showEditTagDialog: !1,
    showCloseDialog: !1,
    showCloseContent: "是否退出密流侦测？",
    showGotoDecodeDialog: !1,
    showGotoDecodeContent: "",
    showAuthorWriteDialog: !1,
    dataSync: {
      show: !1,
      starting: !1,
      stoping: !1
    },
    btnOnekeyDecode: "",
    onkeyDecodeTimeId: 0,
    _deviceutil: new s.deviceUtil
  },
  onLoad: function(t) {
    if (this.data._deviceutil = new s.deviceUtil, t.data) {
      var a = new c.cardUtil,
        e = JSON.parse(decodeURIComponent(t.data));
      this.data.cardhub.cardtype = e.cardtype, this.data.cardhub.data = e.data, this.data.cardhub.card_type = e.strType, this.data.cardhub.data_info.uid = e.datainfo.uid, this.data.cardhub.data_info.size = e.datainfo.size, this.data.cardhub.data_info.sak = e.datainfo.sak, this.data.cardhub.data_info.ATQA = e.datainfo.ATQA;
      var i = e.data.length / 16,
        n = a.blockToSector(i);
      n <= 0 && (n = 16, e.strType.indexOf("2K") >= 0 ? n = 32 : e.strType.indexOf("4K") >= 0 && (n = 40)), this.data.cardhub.data_info.num_sectors = n;
      var u = (0, d.hex2string)(e.datainfo.uid, e.datainfo.size),
        l = new Array(1);
      l[0] = e.datainfo.sak;
      var h = "ATQA:" + (0, d.hex2string)(e.datainfo.ATQA, 2, !0) + "    SAK:" + (0, d.hex2string)(l, 1),
        g = a.getCardData(this.data.cardhub.cardtype, this.data.cardhub.data, void 0);
      this.setData({
        "cardhub.card_type": e.strType,
        "cardhub.card_info": h,
        "cardhub.card_uid.value": u,
        "cardhub.card_uid.inputvalue": u,
        "cardhub.card_atqa.value": (0, d.hex2string)(e.datainfo.ATQA, 2, !0),
        "cardhub.card_sak.value": (0, d.hex2string)(l, 1),
        "cardhub.card_data_text": g.str_data
      })
    }
    this.data.detect.info = "请放上需要侦测的卡片到设备读卡感应区开启密流侦测", this.setData({
      "detect.info": this.data.detect.info,
      "detect.count": "",
      "detect.info_more": ""
    });
    var _ = o.globalData.data.devices.deviceId;
    if (o.globalData.data.bluetooth.IsDeviceLink(_)) {
      var D = o.globalData.data.bluetooth.GetDeviceInfo(_).version,
        b = this.data._deviceutil.GetDeviceTEID(D),
        v = this.data._deviceutil.GetDeviceDate(D);
      if (!this.data._deviceutil.SupportDetectionTag(b)) return (0, r.default)({
        context: this,
        selector: "#t-toast",
        message: "当前设备不支持密流侦测，请更换更高版本设备。"
      }), void setTimeout((function() {
        wx.switchTab({
          url: "/pages/device/index"
        })
      }), 2e3);
      if (v < 12522) return (0, r.default)({
        context: this,
        selector: "#t-toast",
        message: "请先升级到最新硬件版本"
      }), void setTimeout((function() {
        wx.redirectTo({
          url: "/pages/my/deviceUpdate"
        })
      }), 2e3)
    } else(0, r.default)({
      context: this,
      selector: "#t-toast",
      message: "设备未连接，请先连接设备"
    }), setTimeout((function() {
      wx.switchTab({
        url: "/pages/device/index"
      })
    }), 2e3)
  },
  onReady: function() {
    var t = o.getSystemInfo(),
      a = t.the1rpx,
      e = t.pageHeight - 16;
    this.setData({
      detect_scroll_height: e - 840 * a
    })
  },
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {
    this.data._deviceutil.SetDecoding(o.globalData.data.devices.deviceId, !1)
  },
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {},
  onTestGDMTag: function(t) {
    this.data.detect.testGDM.test = t.detail.value, this.data.detect.testGDM.authz = !t.detail.value
  },
  onUIDDetectionTag: function(t) {
    this.data.detect.useUIDDetectionTag = t.detail.value, this.setData({
      "detect.useUIDDetectionTag": this.data.detect.useUIDDetectionTag,
      "detect.info": t.detail.value ? "请编辑或者读取需要侦测的卡号数据。无卡片操作，侦测结果仅供参考" : "请放上需要侦测的卡片到设备读卡感应区开启密流侦测",
      "detect.count": "",
      "detect.info_more": ""
    }), wx.setNavigationBarTitle({
      title: this.data.detect.useUIDDetectionTag ? "无卡密流侦测" : "密流侦测"
    })
  },
  onDetection: function(t) {
    this.data.detect.starting ? this.setData({
      showCloseDialog: !0
    }) : this.DoDetectionAsync()
  },
  onStopDetection: function(t) {
    var a = t.currentTarget.dataset.id;
    this.data.detect.starting && this.setData({
      showCloseDialog: !0,
      showCloseContent: "stop" === a ? "是否退出密流侦测？" : "已开门无需继续侦测。是否退出？"
    })
  },
  onGetTagInfo: function(t) {
    var a = t.currentTarget.dataset.id;
    "read" === a ? this.ReadMifareCardAsync() : "edit" === a && this.setData({
      showEditTagDialog: !0
    })
  },
  ReadMifareCardAsync: function() {
    var t = this;
    return e(a().mark((function e() {
      var s, i, n, u, l, h, g;
      return a().wrap((function(a) {
        for (;;) switch (a.prev = a.next) {
          case 0:
            if (s = new c.cardUtil, i = o.globalData.data.devices.deviceId, !o.globalData.data.bluetooth.IsDeviceLink(i)) {
              a.next = 16;
              break
            }
            if (!t.data.readTag.starting) {
              a.next = 8;
              break
            }
            t.setData({
              "readTag.stoping": !0
            }), t.data._deviceutil.SetDecoding(o.globalData.data.devices.deviceId, !1), a.next = 14;
            break;
          case 8:
            return t.setData({
              "readTag.starting": !0
            }), a.next = 11, t.data._deviceutil.ReadMifareCardAsync(i);
          case 11:
            n = a.sent, t.setData({
              "readTag.starting": !1,
              "readTag.stoping": !1
            }), 0 === n.ans ? (t.data.cardhub.data_info.uid = n.data.UID, t.data.cardhub.data_info.size = n.data.size, t.data.cardhub.data_info.sak = n.data.SAK, t.data.cardhub.data_info.ATQA = new Array(2), t.data.cardhub.data_info.ATQA[0] = n.data.ATQA >> 8, t.data.cardhub.data_info.ATQA[1] = 255 & n.data.ATQA, t.data.cardhub.data_info.num_sectors = n.data.num_sectors, t.data.cardhub.cardtype = s.card_type.MF, u = (0, d.hex2string)(n.data.UID, n.data.size), (l = new Array(1))[0] = n.data.SAK, h = "ATQA:" + (0, d.hex2string)(t.data.cardhub.data_info.ATQA, 2, !0) + "    SAK:" + (0, d.hex2string)(l, 1), g = s.get_mifare_type(n.data.ATQA, n.data.SAK), t.data.cardhub.data_info.num_sectors <= 0 && (t.data.cardhub.data_info.num_sectors = 16, g.indexOf("2K") >= 0 ? t.data.cardhub.data_info.num_sectors = 32 : g.indexOf("4K") >= 0 && (t.data.cardhub.data_info.num_sectors = 40)), t.setData({
              "cardhub.card_type": g,
              "cardhub.card_info": h,
              "cardhub.card_uid.value": u,
              "cardhub.card_uid.inputvalue": u,
              "cardhub.card_atqa.value": (0, d.hex2string)(t.data.cardhub.data_info.ATQA, 2, !0),
              "cardhub.card_sak.value": (0, d.hex2string)(l, 1)
            }), (0, r.default)({
              context: t,
              selector: "#t-toast",
              message: "读卡成功"
            })) : (0, r.default)({
              context: t,
              selector: "#t-toast",
              message: "读卡失败"
            });
          case 14:
            a.next = 18;
            break;
          case 16:
            (0, r.default)({
              context: t,
              selector: "#t-toast",
              message: "设备未连接，请先连接设备"
            }), setTimeout((function() {
              wx.switchTab({
                url: "/pages/device/index"
              })
            }), 2e3);
          case 18:
          case "end":
            return a.stop()
        }
      }), e)
    })))()
  },
  DoDetectionAsync: function() {
    var t = this;
    return e(a().mark((function s() {
      var i, n, u, l, h;
      return a().wrap((function(s) {
        for (;;) switch (s.prev = s.next) {
          case 0:
            if (l = function() {
                return (l = e(a().mark((function t(e) {
                  var c, s, o, u, l, h, g, _, D, b, v, f, p, y, k, m, x, T, w, A, S, I, C, K, U, M, Q, G, B, q, z, O, H;
                  return a().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        c = "", s = "", o = "", u = !1, t.t0 = e.msg, t.next = t.t0 === i.data._deviceutil.decode_message.start ? 7 : t.t0 === i.data._deviceutil.decode_message.test_reading_MF ? 10 : t.t0 === i.data._deviceutil.decode_message.test_readed_MF ? 13 : t.t0 === i.data._deviceutil.decode_message.test_mf_key ? 20 : t.t0 === i.data._deviceutil.decode_message.test_mf_read ? 24 : t.t0 === i.data._deviceutil.decode_message.dt_readDeviceTag ? 27 : t.t0 === i.data._deviceutil.decode_message.dt_gotoDetect ? 30 : t.t0 === i.data._deviceutil.decode_message.dt_wait ? 35 : t.t0 === i.data._deviceutil.decode_message.dt_neste ? 42 : t.t0 === i.data._deviceutil.decode_message.dt_getNestedKey ? 44 : t.t0 === i.data._deviceutil.decode_message.dt_testKeys ? 49 : t.t0 === i.data._deviceutil.decode_message.dt_putinTag ? 52 : t.t0 === i.data._deviceutil.decode_message.dt_tagChange ? 54 : t.t0 === i.data._deviceutil.decode_message.dt_countKey ? 56 : t.t0 === i.data._deviceutil.decode_message.dt_authKey ? 60 : t.t0 === i.data._deviceutil.decode_message.dt_putinTag ? 62 : t.t0 === i.data._deviceutil.decode_message.dt_getAllKeys ? 64 : t.t0 === i.data._deviceutil.decode_message.end ? 66 : 75;
                        break;
                      case 7:
                        return c = "开始侦测...", i.setData({
                          "detect.starting": !0,
                          "detect.stoping": !1,
                          "cardhub.Sectors": [],
                          "detect.canopen": !1,
                          "detect.testkeys": []
                        }), t.abrupt("break", 77);
                      case 10:
                        return console.log("读取IC数据"), c = "正在读取IC卡...", t.abrupt("break", 77);
                      case 13:
                        return 0 === (l = e.data.data).sector && ((h = new Array(2))[0] = l.mf.ATQA >> 8 & 255, h[1] = 255 & l.mf.ATQA, (g = new Array(1))[0] = l.mf.SAK, _ = n.getMFInfo(l.mf.UID, l.mf.size, h, g), D = "ATQA:" + (0, d.hex2string)(h, 2, !0) + "    SAK:" + (0, d.hex2string)(g, 1), i.setData({
                          "cardhub.card_type": _.Type,
                          "cardhub.card_info": D,
                          "cardhub.card_uid.value": _.CardID
                        })), b = {
                          sector: l.sector,
                          working: !1,
                          workingA: !1,
                          workingB: !1,
                          data: i.data._deviceutil.decode_read_color.no_control,
                          keyA: i.data._deviceutil.decode_key_color.no_control,
                          KeyB: i.data._deviceutil.decode_key_color.no_control
                        }, i.data.cardhub.Sectors.push(b), i.setData({
                          "cardhub.Sectors": i.data.cardhub.Sectors
                        }), c = "正在获取扇区...", t.abrupt("break", 77);
                      case 20:
                        return c = "", (v = e.data.data).sector >= 0 && v.sector < i.data.cardhub.Sectors.length && (0 === v.type ? i.data.cardhub.Sectors[v.sector].keyA = v.control : i.data.cardhub.Sectors[v.sector].KeyB = v.control, v.control === i.data._deviceutil.decode_key_color.get && (0 === v.type ? i.data.cardhub.Sectors[v.sector].workingA = !1 : i.data.cardhub.Sectors[v.sector].workingB = !1), c = "正在验证扇区" + v.sector + " " + (0 === v.type ? "KeyA" : "KeyB") + "...", i.setData({
                          "cardhub.Sectors": i.data.cardhub.Sectors
                        })), t.abrupt("break", 77);
                      case 24:
                        return (f = e.data.data).sector >= 0 && f.sector < i.data.cardhub.Sectors.length && (p = "扇区" + f.sector + "数据...", i.data.cardhub.Sectors[f.sector].data = f.control, i.setData({
                          "cardhub.Sectors": i.data.cardhub.Sectors
                        }), c = "正在读取", c += p), t.abrupt("break", 77);
                      case 27:
                        return y = e.data.data, c = "同步设备数据" + y + "%", t.abrupt("break", 77);
                      case 30:
                        return c = "请到现场用设备侦测区去刷卡...", s = "如果直接可以开门则无需继续侦测", u = !0, i.setData({
                          "detect.canopen": u
                        }), t.abrupt("break", 77);
                      case 35:
                        return c = "请用设备侦测区去刷卡...", k = e.data.data, o = "侦测到 " + k.count + " 条数据", (m = k.times % 9) < 3 ? s = "可把卡片放在读卡感应区以方便侦测。如果影响侦测效果也可拿开，根据提示再放上卡片" : m >= 3 && m < 6 ? s = "侦测过程请勿刷原卡，避免数据滚动导致失效" : m >= 6 && m < 9 ? (k.count <= 0 ? (u = !0, s = "如果直接可以开门则无需继续侦测") : (u = !1, s = "如果未获取到足够条数据，请尝试多刷几次"), i.setData({
                          "detect.canopen": u
                        })) : s = "请用设备侦测区去靠近门禁刷卡区域刷卡", k.needAuthorWrite && (console.log("有写卡操作，等待授权"), i.setData({
                          showAuthorWriteDialog: !0
                        })), t.abrupt("break", 77);
                      case 42:
                        return c = "正在嵌套认证...", t.abrupt("break", 77);
                      case 44:
                        return x = e.data.data, c = "正在嵌套计算扇区" + x.sector + " " + (0 === x.type ? "KeyA" : "KeyB") + "，请保持网络连接...", 1 === x.control && (s = "(" + x.data + "%)"), s += "该过程可能需要1-5分钟，请保持网络连接", t.abrupt("break", 77);
                      case 49:
                        if (T = e.data.data, 0 === e.data.ans) {
                          for (w = {
                              sector: "",
                              keys: ""
                            }, A = T.uid, S = T.block, I = T.type, C = n.blockToSector(S), K = Math.floor(T.keys.length / 6), U = "UID:" + (0, d.hex2string)(A, A.length) + " Sector:" + C + " Type:" + (0 === I ? "A" : "B"), w.sector = U, w.keys = "Key:", M = 0; M < K; M++) Q = T.keys.slice(6 * M, 6 * M + 6), G = "[" + (0, d.hex2string)(Q, Q.length) + "]" + (M + 1 === K ? "\r\n" : ",\r\n"), w.keys += G;
                          i.data.detect.testkeys.push(w), i.setData({
                            "detect.testkeys": i.data.detect.testkeys
                          })
                        }
                        return t.abrupt("break", 77);
                      case 52:
                        return c = "请放上IC卡验证数据...", t.abrupt("break", 77);
                      case 54:
                        return c = "卡片错误，请放上需要侦测的IC卡...", t.abrupt("break", 77);
                      case 56:
                        for (B = e.data.data, q = 0; q < i.data.cardhub.Sectors.length; q++) i.data.cardhub.Sectors[q].working = B.sector === q, i.data.cardhub.Sectors[q].workingA = !1, i.data.cardhub.Sectors[q].workingB = !1, B.sector === q && (0 === B.type ? i.data.cardhub.Sectors[q].workingA = !0 : i.data.cardhub.Sectors[q].workingB = !0, c = "正在计算扇区" + B.sector + " " + (0 === B.type ? "KeyA" : "KeyB") + "，请保持网络连接...", i.data.cardhub.Sectors[B.sector].data = B.control);
                        return i.setData({
                          "cardhub.Sectors": i.data.cardhub.Sectors
                        }), t.abrupt("break", 77);
                      case 60:
                        return c = "请放上IC卡验证密钥...", t.abrupt("break", 77);
                      case 62:
                        return c = "读取数据...", t.abrupt("break", 77);
                      case 64:
                        return c = "已获取所有密钥，读取数据...", t.abrupt("break", 77);
                      case 66:
                        return i.closeDialog(), z = e.data, i.data.cardhub.detection = z.data, z.ans === i.data._deviceutil.decode_message.cancel ? c = "操作已取消" : z.ans === i.data._deviceutil.decode_message.detection_success ? z.data.HF.isGDM ? i.setData({
                          "dataSync.show": !0
                        }) : (c = "侦测成功，显示读取数据", "/pages/DataControl/index", i.backToDecode("/pages/DataControl/index", z.data, !0)) : z.ans === i.data._deviceutil.decode_message.dt_error && (z.errCode === i.data._deviceutil.decode_message.cancel ? i.data.detect.useUIDDetectionTag ? c = "退出侦测" : z.data.HF.isGDM ? i.setData({
                          "dataSync.show": !0
                        }) : (c = "退出侦测，显示读取数据", "/pages/DataControl/index", i.backToDecode("/pages/DataControl/index", z.data, !0)) : z.errCode === i.data._deviceutil.decode_message.dt_noSupportDetectNested || z.errCode === i.data._deviceutil.decode_message.dt_nothirdcard ? (O = function() {
                          var t = 5;
                          i.data.onkeyDecodeTimeId = setInterval((function() {
                            i.setData({
                              btnOnekeyDecode: "一键解码(" + t + "s)"
                            }), t <= 0 && i.DoGotoDecodeDialog(), t--
                          }), 1e3)
                        }, H = "", H = z.errCode === i.data._deviceutil.decode_message.dt_noSupportDetectNested ? "当前设备不支持嵌套侦测，请更换更高版本设备。或尝试一键解码" : "非三代卡，无需进行嵌套侦测。请放置卡片于感应区进行一键解码", i.setData({
                          showGotoDecodeContent: H,
                          btnOnekeyDecode: "一键解码(5s)",
                          showGotoDecodeDialog: !0
                        }), O()) : c = "侦测失败"), c.length > 0 && (0, r.default)({
                          context: i,
                          selector: "#t-toast",
                          duration: 5e3,
                          message: c
                        }), i.setData({
                          "detect.starting": !1,
                          "detect.stoping": !1
                        }), i.data.detect.testGDM.test = !0, i.data.detect.testGDM.authz = !1, t.abrupt("break", 77);
                      case 75:
                        return console.log(e), t.abrupt("break", 77);
                      case 77:
                        c.length > 0 && i.setData({
                          "detect.info": c,
                          "detect.count": o,
                          "detect.info_more": s
                        });
                      case 78:
                      case "end":
                        return t.stop()
                    }
                  }), t)
                })))).apply(this, arguments)
              }, u = function(t) {
                return l.apply(this, arguments)
              }, i = t, 1 !== o.globalData.data.devices.in_blacklist) {
              s.next = 6;
              break
            }
            return wx.showToast({
              title: "您的设备异常，请联系卖家",
              duration: 5e3,
              icon: "none"
            }), s.abrupt("return");
          case 6:
            if (n = new c.cardUtil, h = o.globalData.data.devices.deviceId, !o.globalData.data.bluetooth.IsDeviceLink(h)) {
              s.next = 20;
              break
            }
            if (!t.data.detect.useUIDDetectionTag) {
              s.next = 16;
              break
            }
            if (t.data.cardhub.cardtype !== n.card_type.MF) {
              s.next = 14;
              break
            }
            console.log(t.data.cardhub.data_info), s.next = 16;
            break;
          case 14:
            return (0, r.default)({
              context: t,
              selector: "#t-toast",
              message: "请编辑或者读取需要侦测的卡数据。无卡片操作，侦测结果仅供参考"
            }), s.abrupt("return");
          case 16:
            return s.next = 18, t.data._deviceutil.DetectionTagAsync(h, t.data.cardhub.cardtype, t.data.cardhub.data_info, t.data.cardhub.data, t.data.detect.testGDM, t.data.detect.useUIDDetectionTag, u);
          case 18:
            s.next = 22;
            break;
          case 20:
            (0, r.default)({
              context: t,
              selector: "#t-toast",
              message: "设备未连接，请先连接设备"
            }), setTimeout((function() {
              wx.switchTab({
                url: "/pages/device/index"
              })
            }), 2e3);
          case 22:
          case "end":
            return s.stop()
        }
      }), s)
    })))()
  },
  DoCloseDialog: function() {
    this.data.detect.starting ? (this.setData({
      "detect.stoping": !0
    }), this.data._deviceutil.SetDecoding(o.globalData.data.devices.deviceId, !1)) : this.closeDialog()
  },
  closeDialog: function() {
    this.setData({
      showCloseDialog: !1
    })
  },
  DoGotoDecodeDialog: function() {
    this.closeGotoDecodeDialog(), clearInterval(this.data.onkeyDecodeTimeId);
    this.backToDecode("/pages/DataControl/index?control=onekeydecode", null, !1)
  },
  closeGotoDecodeDialog: function() {
    this.setData({
      showGotoDecodeDialog: !1
    })
  },
  DoAuthorWriteDialog: function(t) {
    this.data.detect.testGDM.test = !1, this.data.detect.testGDM.authz = !0, this.setData({
      showAuthorWriteDialog: !1
    })
  },
  closeAuthorDialog: function() {
    this.data.detect.starting && (this.setData({
      "detect.stoping": !0
    }), this.data._deviceutil.SetDecoding(o.globalData.data.devices.deviceId, !1)), this.setData({
      showAuthorWriteDialog: !1
    })
  },
  DetectionDataSyncAsync: function() {
    var t = this;
    return e(a().mark((function e() {
      var d, c, s;
      return a().wrap((function(a) {
        for (;;) switch (a.prev = a.next) {
          case 0:
            if (c = function(t) {
                var a = "";
                switch (t.msg) {
                  case d.data._deviceutil.decode_message.start:
                    a = "开始同步数据...", d.setData({
                      "dataSync.starting": !0,
                      "dataSync.stoping": !1,
                      "dataSync.show": !1
                    });
                    break;
                  case d.data._deviceutil.decode_message.dt_readDeviceTag:
                    a = "同步设备数据" + t.data.data + "%";
                    break;
                  case d.data._deviceutil.decode_message.test_set_data:
                    a = t.data.data.progress < 100 ? "正在下发数据 " + t.data.data.progress + "%" : "下发数据成功";
                    break;
                  case d.data._deviceutil.decode_message.dt_putinTag:
                    a = "请放上IC卡...";
                    break;
                  case d.data._deviceutil.decode_message.dt_tagChange:
                    a = "卡片错误，请放上需要同步的IC卡...";
                    break;
                  case d.data._deviceutil.decode_message.test_write_tag:
                    a = "正在写卡...";
                    break;
                  case d.data._deviceutil.decode_message.end:
                    var e = t.data;
                    if (console.log(e), e.ans === d.data._deviceutil.decode_message.data_sync_success) {
                      a = "数据同步成功";
                      d.backToDecode("/pages/DataControl/index", e.data, !0)
                    } else if (e.ans === d.data._deviceutil.decode_message.dt_error) {
                      e.errCode === d.data._deviceutil.decode_message.cancel ? a = "退出同步，显示模拟卡数据" : (console.log(e), a = "同步失败，请手动写卡");
                      d.backToDecode("/pages/DataControl/index", e.data, !0)
                    }
                    a.length > 0 && (0, r.default)({
                      context: d,
                      selector: "#t-toast",
                      duration: 5e3,
                      message: a
                    }), d.setData({
                      "dataSync.starting": !1,
                      "dataSync.stoping": !1
                    });
                    break;
                  default:
                    console.log(t)
                }
                a.length > 0 && d.setData({
                  "detect.info": a,
                  "detect.count": "",
                  "detect.info_more": ""
                })
              }, d = t, s = o.globalData.data.devices.deviceId, !o.globalData.data.bluetooth.IsDeviceLink(s)) {
              a.next = 10;
              break
            }
            return t.setData({
              "dataSync.starting": !0
            }), a.next = 7, t.data._deviceutil.DetectionDataSyncAsync(s, t.data.cardhub.detection, c);
          case 7:
            t.setData({
              "dataSync.show": !1,
              "dataSync.starting": !1,
              "dataSync.stoping": !1
            }), a.next = 12;
            break;
          case 10:
            (0, r.default)({
              context: t,
              selector: "#t-toast",
              message: "设备未连接，请先连接设备"
            }), setTimeout((function() {
              wx.switchTab({
                url: "/pages/device/index"
              })
            }), 2e3);
          case 12:
          case "end":
            return a.stop()
        }
      }), e)
    })))()
  },
  DoDataSyncDialog: function() {
    this.DetectionDataSyncAsync()
  },
  closeDataSyncDialog: function() {
    this.setData({
      "dataSync.show": !1,
      "dataSync.starting": !1,
      "dataSync.stoping": !1
    });
    this.backToDecode("/pages/DataControl/index", this.data.cardhub.detection, !0)
  },
  OnCancelDataSync: function() {
    this.data.dataSync.starting && (this.setData({
      "dataSync.stoping": !0
    }), this.data._deviceutil.SetDecoding(o.globalData.data.devices.deviceId, !1))
  },
  EditTagDialog: function() {
    var t = new c.cardUtil;
    this.data.cardhub.card_atqa.value.length <= 0 && (this.data.cardhub.card_atqa.value = "04 00"), this.data.cardhub.card_sak.value.length <= 0 && (this.data.cardhub.card_sak.value = "08");
    var a = (0, d.string2Hex)(this.data.cardhub.card_atqa.value),
      e = new Array(2).fill(0);
    a.length >= 1 && (e[0] = a[0]), a.length >= 2 && (e[1] = a[1]);
    var s = (0, d.string2Hex)(this.data.cardhub.card_sak.value),
      o = (0, d.string2Hex)(this.data.cardhub.card_uid.inputvalue),
      i = 4,
      n = new Array(4).fill(0);
    if (e[0] &= 63, o.length <= 4) {
      i = 4;
      for (var u = 0; u < o.length; u++) n[u] = o[u]
    } else if (o.length <= 7) {
      i = 7, n = new Array(7).fill(0);
      for (var l = 0; l < o.length && l < 7; l++) n[l] = o[l];
      e[0] |= 64
    } else {
      i = 10, n = new Array(10).fill(0);
      for (var h = 0; h < o.length && h < 10; h++) n[h] = o[h];
      e[0] |= 128
    }
    var g = t.get_mifare_type(e[1] << 8 | e[0], s[0]),
      _ = "ATQA:" + (0, d.hex2string)(e, 2, !0) + "    SAK:" + (0, d.hex2string)(s, 1);
    this.data.cardhub.data_info.uid = n, this.data.cardhub.data_info.size = i, this.data.cardhub.data_info.sak = s[0], this.data.cardhub.data_info.ATQA = e, this.data.cardhub.data_info.num_sectors = 18 === this.data.cardhub.data_info.num_sectors ? 18 : 16, g.indexOf("2K") >= 0 ? this.data.cardhub.data_info.num_sectors = 32 : g.indexOf("4K") >= 0 && (this.data.cardhub.data_info.num_sectors = 40), this.data.cardhub.cardtype = t.card_type.MF;
    var D = (0, d.hex2string)(n, i);
    this.setData({
      "cardhub.card_type": g,
      "cardhub.card_info": _,
      "cardhub.card_uid.value": D,
      "cardhub.card_atqa.value": (0, d.hex2string)(e, 2, !0)
    }), this.setData({
      showEditTagDialog: !1
    }), (0, r.default)({
      context: this,
      selector: "#t-toast",
      message: "编辑完成"
    })
  },
  closeEditTagDialog: function() {
    this.setData({
      showEditTagDialog: !1
    })
  },
  backToDecode: function(t, a, e) {
    function d() {
      for (var e = t, d = 0, c = 0, r = null, s = getCurrentPages(), o = s.length - 1; o >= 0; o--) {
        var i = s[o];
        if ("pages/DataControl/index" === i.route) {
          r = i, d = c;
          break
        }
        c++
      }
      if (d > 0 && null != r) null != a ? r.updateReadCardData(a) : r.setPreExecute("onekeydecode"), wx.navigateBack({
        delta: d
      });
      else {
        if (e = t + "?control=onekeydecode", null != a) {
          var n = JSON.stringify(a);
          e = t + "?decodedata=" + n
        }
        wx.redirectTo({
          url: e
        })
      }
    }
    e ? setTimeout((function() {
      d()
    }), 1e3) : setTimeout((function() {
      d()
    }), 100)
  },
  onRefreshUID: function() {
    for (var t = this.data.cardhub.card_uid.inputvalue.length <= 8 ? 4 : 7, a = "", e = 0; e < t; e++) {
      a += ("00" + Math.floor(256 * Math.random()).toString(16)).slice(-2).toUpperCase()
    }
    this.setData({
      "cardhub.card_uid.inputvalue": a
    })
  },
  onUIDInput: function(t) {
    var a = t.detail,
      e = a.value,
      c = a.cursor,
      r = (0, d.string2HexByte)(e),
      s = this.InputChange(e, c, r.length <= 8 ? 4 : r.length <= 14 ? 7 : 10, !1);
    return this.setData({
      "cardhub.card_uid.inputvalue": s.value,
      "cardhub.card_uid.cursor": s.cursor
    }), {
      value: s.value,
      cursor: s.cursor
    }
  },
  onAtqaInput: function(t) {
    var a = t.detail,
      e = a.value,
      d = a.cursor,
      c = this.InputChange(e, d, 2, !0);
    return this.setData({
      "cardhub.card_atqa.value": c.value,
      "cardhub.card_atqa.cursor": c.cursor
    }), {
      value: c.value,
      cursor: c.cursor
    }
  },
  onSakInput: function(t) {
    var a = t.detail,
      e = a.value,
      d = a.cursor,
      c = this.InputChange(e, d, 1, !1);
    return this.setData({
      "cardhub.card_sak.value": c.value,
      "cardhub.card_sak.cursor": c.cursor
    }), {
      value: c.value,
      cursor: c.cursor
    }
  },
  onProIDInput: function(t) {
    var a = t.detail,
      e = a.value,
      d = a.cursor,
      c = this.InputChange(e, d, this.data.cardhub.card_proID.length, !0);
    return this.setData({
      "cardhub.card_proID.value": c.value,
      "cardhub.card_proID.cursor": c.cursor
    }), {
      value: c.value,
      cursor: c.cursor
    }
  },
  InputChange: function(t, a, e, c) {
    var r = (0, d.string2HexByte)(t),
      s = (0, d.byte2HexString)(r, e, c),
      o = a;
    if (-1 != o) {
      var i = t.slice(0, o),
        n = (0, d.string2HexByte)(i),
        u = n.length - (n[n.length - 1] > 15 ? 1 : 0);
      o = c ? u + (u > 2 ? Math.ceil(u / 2) - 1 : 0) : u
    }
    return {
      value: s,
      cursor: o
    }
  },
  onCopyDetectKey: function(t) {
    for (var a = "", e = 0; e < this.data.detect.testkeys.length; e++) {
      var d = this.data.detect.testkeys[e];
      a += d.sector + " " + d.keys + "\r\n"
    }
    wx.setClipboardData({
      data: a,
      success: function(t) {}
    })
  },
  onBeforeBack: function(t) {
    this.data.detect.starting ? this.setData({
      "QuitDetection.show": !0
    }) : wx.navigateBack()
  },
  closeQuitDialog: function(t) {
    this.setData({
      showContainerPage: !0,
      "QuitDetection.show": !1
    })
  },
  quitAndBack: function(t) {
    this.data._deviceutil.SetDecoding(o.globalData.data.devices.deviceId, !1), this.setData({
      "QuitDetection.show": !1
    }), this.data.QuitDetection.wait = !0, o.showLoadingToast(this, "#t-toast")
  }
});