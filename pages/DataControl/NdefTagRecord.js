var t = require("../../utils/util"),
  a = getApp();
Page({
  data: {
    id: "",
    type: "",
    index: -1,
    scroll_height: 0,
    popup_scroll_height: 0,
    autosize: {
      maxHeight: 120,
      minHeight: 28
    },
    EditPhone: {
      value: ""
    },
    EditCard: {
      name: "",
      phone: "",
      company: "",
      email: "",
      web: "",
      address: ""
    },
    EditBLE: {
      name: "",
      mac: ""
    },
    EditWIFI: {
      select: {
        show: !1,
        loading: !1,
        list: []
      },
      encry: "-",
      options: [{
        value: "-",
        label: "无"
      }, {
        value: "WEP",
        label: "WEP"
      }, {
        value: "WPA/WPA2",
        label: "WPA/WPA2"
      }],
      SSID: "",
      password: ""
    },
    EditApp: {
      value: ""
    },
    EditLocation: {
      latitude: "",
      longitude: ""
    },
    EditText: {
      value: ""
    },
    EditURL: {
      type: "http://",
      options: [{
        value: "http://",
        label: "http://"
      }, {
        value: "https://",
        label: "https://"
      }, {
        value: "ftp://",
        label: "ftp://"
      }, {
        value: "sftp://",
        label: "sftp://"
      }, {
        value: "file://",
        label: "file://"
      }, {
        value: "rtsp://",
        label: "rtsp://"
      }, {
        value: "telnet://",
        label: "telnet://"
      }, {
        value: "smb://",
        label: "smb://"
      }, {
        value: "nfs://",
        label: "nfs://"
      }, {
        value: "dav://",
        label: "dav://"
      }, {
        value: "btspp://",
        label: "btspp://"
      }, {
        value: "urn:",
        label: "urn:"
      }, {
        value: "N/A",
        label: "无"
      }],
      URL: ""
    },
    EditData: {
      type: "",
      value: ""
    }
  },
  onLoad: function(t) {
    var a = this;
    if (t.id) {
      var e = null,
        i = t.type;
      "1" === i && t.data && t.index && (e = JSON.parse(decodeURIComponent(t.data)), this.data.index = Number(t.index), console.log(e));
      var n = "0" === i ? "添加NFC标签卡记录" : "编辑NFC标签卡记录";
      switch (t.id) {
        case "phone":
          n = "0" === i ? "添加电话号码" : "编辑电话号码", "1" === i && null != e && e.data && e.data.length >= 1 && this.setData({
            "EditPhone.value": e.data[0]
          });
          break;
        case "card":
          n = "0" === i ? "添加名片信息" : "编辑名片信息", "1" === i && null != e && e.data && e.data.length >= 6 && this.setData({
            "EditCard.name": e.data[0],
            "EditCard.phone": e.data[1],
            "EditCard.company": e.data[2],
            "EditCard.email": e.data[3],
            "EditCard.web": e.data[4],
            "EditCard.address": e.data[5]
          });
          break;
        case "BLE":
          n = "0" === i ? "添加蓝牙连接" : "编辑蓝牙连接", "1" === i && null != e && e.data && e.data.length >= 2 && this.setData({
            "EditBLE.name": e.data[0],
            "EditBLE.mac": e.data[1]
          });
          break;
        case "WIFI":
          n = "0" === i ? "配置Wi-Fi网络" : "编辑Wi-Fi网络", "1" === i && null != e && e.data && e.data.length >= 3 && this.setData({
            "EditWIFI.encry": e.data[0],
            "EditWIFI.SSID": e.data[1],
            "EditWIFI.password": e.data[2]
          });
          break;
        case "APP":
          n = "0" === i ? "添加应用程序" : "编辑应用程序", "1" === i && null != e && e.data && e.data.length >= 1 && this.setData({
            "EditApp.value": e.data[0]
          });
          break;
        case "location":
          if (n = "0" === i ? "添加位置信息" : "编辑位置信息", "0" === i) wx.getLocation({
            type: "wgs84",
            success: function(t) {
              a.setData({
                "EditLocation.latitude": t.latitude,
                "EditLocation.longitude": t.longitude
              })
            },
            fail: function(t) {
              wx.showToast({
                title: "获取地理位置失败",
                icon: "none",
                duration: 3e3
              }), a.setData({
                "EditLocation.latitude": "",
                "EditLocation.longitude": ""
              })
            }
          });
          else if ("1" === i && null != e && e.data && e.data.length >= 1) {
            var d = e.data[0].split(",");
            d.length >= 2 && this.setData({
              "EditLocation.latitude": d[0],
              "EditLocation.longitude": d[1]
            })
          }
          break;
        case "TXT":
          n = "0" === i ? "添加文本记录" : "编辑文本记录", "1" === i && null != e && e.data && e.data.length >= 1 && this.setData({
            "EditText.value": e.data[0]
          });
          break;
        case "URL":
          if (n = "0" === i ? "添加URL记录" : "编辑URL记录", "1" === i && null != e && e.data && e.data.length >= 1) {
            var o = "N/A",
              s = e.data[0],
              l = s.indexOf("://");
            if (-1 != l) {
              var h = s.slice(0, l + "://".length),
                u = s.slice(l + "://".length);
              s = u, this.GetProtocolId(h) > 0 && (o = h.toLowerCase())
            } else {
              "urn:" === s.slice(0, 4).toLowerCase() ? (s = s.slice(4), o = "urn:") : o = "N/A"
            }
            this.setData({
              "EditURL.type": o,
              "EditURL.URL": s
            })
          }
          break;
        case "custom":
          n = "0" === i ? "添加自定义记录" : "编辑自定义记录", "1" === i && null != e && e.data && e.data.length >= 2 && this.setData({
            "EditData.type": e.data[0],
            "EditData.value": e.data[1]
          })
      }
      this.setData({
        id: t.id,
        type: t.type
      }), wx.setNavigationBarTitle({
        title: n
      })
    }
    wx.startWifi({
      success: function(t) {
        wx.onGetWifiList((function(t) {
          for (var e = [], i = 0; i < t.wifiList.length; i++) {
            var n = {
              SSID: t.wifiList[i].SSID,
              BSSID: t.wifiList[i].BSSID
            };
            e.push(n)
          }
          a.setData({
            "EditWIFI.select.loading": !1,
            "EditWIFI.select.list": e
          })
        }))
      }
    })
  },
  onReady: function() {
    var t = a.getSystemInfo(),
      e = t.the1rpx;
    this.setData({
      scroll_height: t.pageHeight - t.bottomSafeHeight - 1,
      popup_scroll_height: t.pageHeight - 256 * e - t.bottomSafeHeight - 1
    })
  },
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {
    wx.offGetWifiList(), wx.stopWifi()
  },
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {},
  onAddData: function(a) {
    var e = a.target.dataset,
      i = e.id,
      n = (e.type, {
        id: i,
        icon: "",
        type: "",
        title: "",
        data: [],
        value: []
      });
    switch (i) {
      case "phone":
        if (this.data.EditPhone.value.length <= 0) {
          wx.showToast({
            title: "请输入电话号码",
            icon: "none",
            duration: 3e3
          });
          break
        }
        if (!(0, t.isNumber)(this.data.EditPhone.value)) {
          wx.showToast({
            title: "请输入正确的电话号码",
            icon: "none",
            duration: 3e3
          });
          break
        }
        n.value = this.NdefURI(5, this.data.EditPhone.value), n.title = "电话号码", n.data.push(this.data.EditPhone.value), n.icon = "call-1";
        break;
      case "card":
        if (this.data.EditCard.name.length <= 0) {
          wx.showToast({
            title: "请输入姓名",
            icon: "none",
            duration: 3e3
          });
          break
        }
        if (this.data.EditCard.phone.length <= 0) {
          wx.showToast({
            title: "请输入电话号码",
            icon: "none",
            duration: 3e3
          });
          break
        }
        n.value = this.NdefVcard(this.data.EditCard.name, this.data.EditCard.phone, this.data.EditCard.company, this.data.EditCard.address, this.data.EditCard.email, this.data.EditCard.web), n.title = "名片", n.data.push(this.data.EditCard.name), n.data.push(this.data.EditCard.phone), n.data.push(this.data.EditCard.company), n.data.push(this.data.EditCard.email), n.data.push(this.data.EditCard.web), n.data.push(this.data.EditCard.address), n.icon = "verify";
        break;
      case "BLE":
        if (this.data.EditBLE.name.length > 24) {
          wx.showToast({
            title: "设备名称太长",
            icon: "none",
            duration: 3e3
          });
          break
        }
        if (!(0, t.isMac)(this.data.EditBLE.mac)) {
          wx.showToast({
            title: "请输入正确的Mac地址",
            icon: "none",
            duration: 3e3
          });
          break
        }
        n.value = this.NdefMediaType(this.data.EditBLE.mac, this.data.EditBLE.name), n.title = "蓝牙", n.data.push(this.data.EditBLE.name), n.data.push(this.data.EditBLE.mac), n.icon = "bluetooth";
        break;
      case "WIFI":
        if (this.data.EditWIFI.SSID.length <= 0) {
          wx.showToast({
            title: "请输入SSID",
            icon: "none",
            duration: 3e3
          });
          break
        }
        if (this.data.EditWIFI.password.length <= 0 || this.data.EditWIFI.password.length > 64) {
          wx.showToast({
            title: "请输入密码",
            icon: "none",
            duration: 3e3
          });
          break
        }
        n.value = this.NdefWifi(this.data.EditWIFI.encry, this.data.EditWIFI.SSID, this.data.EditWIFI.password), n.title = "Wi-Fi网络", n.data.push(this.data.EditWIFI.encry), n.data.push(this.data.EditWIFI.SSID), n.data.push(this.data.EditWIFI.password), n.icon = "wifi";
        break;
      case "APP":
        if (this.data.EditApp.value.length <= 0 || !(0, t.isAppName)(this.data.EditApp.value)) {
          wx.showToast({
            title: "请输入程序包名",
            icon: "none",
            duration: 3e3
          });
          break
        }
        n.value = this.NdefApp(this.data.EditApp.value), n.title = "应用程序", n.data.push(this.data.EditApp.value), n.icon = "app";
        break;
      case "location":
        if (!(0, t.isLocation)(this.data.EditLocation.latitude)) {
          wx.showToast({
            title: "请输入纬度值",
            icon: "none",
            duration: 3e3
          });
          break
        }
        if (!(0, t.isLocation)(this.data.EditLocation.longitude)) {
          wx.showToast({
            title: "请输入经度值",
            icon: "none",
            duration: 3e3
          });
          break
        }
        var d = "geo:" + this.data.EditLocation.latitude + "," + this.data.EditLocation.longitude;
        n.value = this.NdefURI(0, d), n.title = "位置", n.data.push(this.data.EditLocation.latitude + "," + this.data.EditLocation.longitude), n.icon = "location";
        break;
      case "TXT":
        if (this.data.EditText.value.length <= 0) {
          wx.showToast({
            title: "请输入文本",
            icon: "none",
            duration: 3e3
          });
          break
        }
        n.value = this.NdefTxt(this.data.EditText.value), n.title = "文本", n.data.push(this.data.EditText.value), n.icon = "textbox";
        break;
      case "URL":
        var o = 0,
          s = this.data.EditURL.type,
          l = this.data.EditURL.URL,
          h = l;
        if (l.length <= 0) {
          wx.showToast({
            title: "请输入网址",
            icon: "none",
            duration: 3e3
          });
          break
        }
        if ("urn:" !== this.data.EditURL.type && "N/A" !== this.data.EditURL.type) {
          if (!(0, t.isURL)(l)) {
            wx.showToast({
              title: "请输入正确的网址",
              icon: "none",
              duration: 3e3
            });
            break
          }
          var u = l.indexOf("://");
          if (-1 != u) {
            s = l.slice(0, u + "://".length);
            var r = l.slice(u + "://".length);
            l = r
          } else h = this.data.EditURL.type + l;
          o = this.GetProtocolId(s)
        } else if ("N/A" === this.data.EditURL.type) {
          o = 0;
          var c = l.indexOf("://");
          if (-1 != c && (s = l.slice(0, c + "://".length), 0 !== (o = this.GetProtocolId(s)))) {
            var p = l.slice(c + "://".length);
            l = p
          }
        } else {
          "urn:" === l.slice(0, 4).toLowerCase() && (l = l.slice(4)), h = this.data.EditURL.type + l, o = 19
        }
        if (4 === o || 3 === o) "www." === l.slice(0, 4).toLowerCase() && (l = l.slice(4), o -= 2);
        n.value = this.NdefURI(o, l), n.title = "URL", n.data.push(h), n.icon = "link";
        break;
      case "custom":
        if (this.data.EditData.type.length <= 0) {
          wx.showToast({
            title: "请输入内容类型",
            icon: "none",
            duration: 3e3
          });
          break
        }
        if (this.data.EditData.value.length <= 0) {
          wx.showToast({
            title: "请输入数据",
            icon: "none",
            duration: 3e3
          });
          break
        }
        var f = unescape(encodeURIComponent(this.data.EditData.value));
        n.value = this.SetNdefData(2, this.data.EditData.type, f), n.title = "数据", n.data.push(this.data.EditData.type), n.data.push(this.data.EditData.value), n.icon = "data"
    }
    if (n.icon.length > 0) {
      n.title += "：" + n.value.length + "字节";
      var E = getCurrentPages();
      if (E.length >= 2)
        for (var g = 0, v = E.length - 2; v >= 0; v--) {
          g++;
          var I = E[v];
          if ("pages/DataControl/setNFCTag" === I.route) {
            "0" === this.data.type ? I.AddRecord(n) : I.UpdateRecord(n, this.data.index), setTimeout((function() {
              wx.navigateBack({
                delta: g
              })
            }), 100);
            break
          }
        }
    }
  },
  onSelectContact: function(t) {
    var a = this,
      e = t.target.dataset.id;
    wx.chooseContact({
      success: function(t) {
        "phone" === e ? a.setData({
          "EditPhone.value": t.phoneNumber
        }) : "card" === e && a.setData({
          "EditCard.name": t.displayName,
          "EditCard.phone": t.phoneNumber
        })
      },
      fail: function(t) {
        wx.showToast({
          title: "获取通讯录失败",
          icon: "none",
          duration: 3e3
        })
      }
    })
  },
  onSelectWifi: function(t) {
    var a = this;
    wx.getWifiList({
      success: function(t) {},
      fail: function(t) {
        wx.showToast({
          title: "获取Wi-Fi列表失败",
          icon: "none",
          duration: 3e3
        }), setTimeout((function() {
          a.setData({
            "EditWIFI.select.show": !1
          })
        }), 1e3)
      }
    }), a.setData({
      "EditWIFI.select.show": !0,
      "EditWIFI.select.loading": !0,
      "EditWIFI.select.list": []
    })
  },
  onSelectWifiItem: function(t) {
    var a = t.target.dataset.id;
    this.setData({
      "EditWIFI.select.show": !1,
      "EditWIFI.SSID": a
    })
  },
  closeSelectWifiDialog: function(t) {
    this.setData({
      "EditWIFI.select.show": !1
    })
  },
  onWIFIEncryChange: function(t) {
    this.setData({
      "EditWIFI.encry": t.detail.value
    })
  },
  onSelectLocation: function(t) {
    var a = this;
    wx.chooseLocation({
      success: function(t) {
        a.setData({
          "EditLocation.latitude": t.latitude,
          "EditLocation.longitude": t.longitude
        })
      },
      fail: function(t) {
        wx.showToast({
          title: "选择地理位置失败",
          icon: "none",
          duration: 3e3
        })
      }
    })
  },
  onInputURLChange: function(t) {
    this.setData({
      "EditURL.type": t.detail.value
    })
  },
  onPhoneInput: function(t) {
    this.data.EditPhone.value = t.detail.value
  },
  onCardNameInput: function(t) {
    this.data.EditCard.name = t.detail.value
  },
  onCardPhoneInput: function(t) {
    this.data.EditCard.phone = t.detail.value
  },
  onCardCompanyInput: function(t) {
    this.data.EditCard.company = t.detail.value
  },
  onCardEmailInput: function(t) {
    this.data.EditCard.email = t.detail.value
  },
  onCardWebInput: function(t) {
    this.data.EditCard.web = t.detail.value
  },
  onCardAddressInput: function(t) {
    this.data.EditCard.address = t.detail.value
  },
  onBLENameInput: function(t) {
    this.data.EditBLE.name = t.detail.value
  },
  onBLEMACInput: function(t) {
    this.data.EditBLE.mac = t.detail.value
  },
  onWIFISSIDInput: function(t) {
    this.data.EditWIFI.SSID = t.detail.value
  },
  onWIFIpasswordInput: function(t) {
    this.data.EditWIFI.password = t.detail.value
  },
  onAppNameInput: function(t) {
    this.data.EditApp.value = t.detail.value
  },
  onLocationLatitudeInput: function(t) {
    this.data.EditLocation.latitude = t.detail.value
  },
  onLocationLongitudeInput: function(t) {
    this.data.EditLocation.longitude = t.detail.value
  },
  onTextDataInput: function(t) {
    this.data.EditText.value = t.detail.value
  },
  onURLInput: function(t) {
    this.data.EditURL.URL = t.detail.value
  },
  onCustomDataTypeInput: function(t) {
    this.data.EditData.type = t.detail.value
  },
  onCustomDataDataInput: function(t) {
    this.data.EditData.value = t.detail.value
  },
  NdefTxt: function(t) {
    var a = unescape(encodeURIComponent(t)),
      e = 31 & "en".length,
      i = String.fromCharCode(e) + "en" + a;
    return this.SetNdefData(1, "T", i)
  },
  NdefURI: function(t, a) {
    var e = unescape(encodeURIComponent(a)),
      i = String.fromCharCode(t) + e;
    return this.SetNdefData(1, "U", i)
  },
  NdefMediaType: function(a, e) {
    var i = "";
    e.length > 0 && (i = unescape(encodeURIComponent(e)));
    for (var n = 8 + (i.length > 0 ? i.length + 2 : 0), d = String.fromCharCode(n) + "\0", o = (0, t.string2Hex)(a), s = 0; s < 6 && s < o.length; s++) d += String.fromCharCode(o[o.length - 1 - s]);
    return i.length > 0 && (d += String.fromCharCode(i.length + 1), d += "\t", d += i), this.SetNdefData(2, "application/vnd.bluetooth.ep.oob", d)
  },
  NdefApp: function(t) {
    return this.SetNdefData(4, "android.com:pkg", t)
  },
  NdefVcard: function(t, a, e, i, n, d) {
    var o = "BEGIN:VCARD\n";
    o += "VERSION:3.0\n", t.length > 0 && (o += "FN:" + t + "\n"), a.length > 0 && (o += "TEL:" + a + "\n"), e.length > 0 && (o += "ORG:" + e + "\n"), i.length > 0 && (o += "ADR:" + i + "\n"), n.length > 0 && (o += "EMAIL:" + n + "\n"), d.length > 0 && (o += "URL:" + d + "\n"), o += "END:VCARD";
    var s = unescape(encodeURIComponent(o));
    return this.SetNdefData(2, "text/vcard", s)
  },
  NdefWifi: function(t, a, e) {
    var i = "J\0",
      n = "";
    n += "&\0E";
    var d = unescape(encodeURIComponent(a));
    n += String.fromCharCode(d.length >> 8 & 255), n += String.fromCharCode(255 & d.length), n += d, n += "\0\0 \0", n += "WPA/WPA2" === t ? "\0\b" : "WEP" === t ? "\0" : "\0", n += "'\0";
    var o = unescape(encodeURIComponent(e));
    n += String.fromCharCode(o.length), n += o;
    var s = (n += " \0ÿÿÿÿÿÿÿÿ\0\0").length;
    return i += String.fromCharCode(s >> 8 & 255), i += String.fromCharCode(255 & s), i += n, this.SetNdefData(2, "application/vnd.wfa.wsc", i)
  },
  SetNdefData: function(t, a, e) {
    var i = e.length + a.length,
      n = 3;
    e.length > 255 ? (t &= 15, i += n = 6) : (t |= 16, i += n);
    var d = new Array(i).fill(0);
    d[0] = t, d[1] = a.length, 16 == (16 & t) ? d[2] = e.length : (d[2] = e.length >> 24 & 255, d[3] = e.length >> 16 & 255, d[4] = e.length >> 8 & 255, d[5] = 255 & e.length);
    for (var o = 0; o < a.length; o++) d[n + o] = a.charCodeAt(o);
    for (var s = 0; s < e.length; s++) d[n + a.length + s] = e.charCodeAt(s);
    return d
  },
  GetProtocolId: function(t) {
    var a = 0;
    switch (t.toLowerCase()) {
      case "http://":
        a = 3;
        break;
      case "https://":
        a = 4;
        break;
      case "ftp://":
        a = 13;
        break;
      case "sftp://":
        a = 10;
        break;
      case "file://":
        a = 29;
        break;
      case "rtsp://":
        a = 18;
        break;
      case "telnet://":
        a = 16;
        break;
      case "smb://":
        a = 11;
        break;
      case "nfs://":
        a = 12;
        break;
      case "dav://":
        a = 14;
        break;
      case "btspp://":
        a = 24
    }
    return a
  }
});