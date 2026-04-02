Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.bluetoothUtil = void 0;
var e = require("../@babel/runtime/helpers/toConsumableArray"),
  t = require("../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../@babel/runtime/helpers/classCallCheck"),
  a = require("../@babel/runtime/helpers/createClass"),
  c = require("../@babel/runtime/helpers/classPrivateFieldLooseKey"),
  s = require("./util"),
  o = require("./fileUtil"),
  i = c("timeout"),
  l = c("notifyTimeout"),
  u = function() {
    function c() {
      n(this, c), this.ble_connect_ency_key = 2768767322, this.protocol_head = 122, this.ble_data_key = [21, 133, 146, 129, 41, 5, 136, 7], this.findTimer = 0, Object.defineProperty(this, i, {
        writable: !0,
        value: 3e4
      }), Object.defineProperty(this, l, {
        writable: !0,
        value: 3e5
      }), this.deviceDiscoveryTimeout = !1, this.BLE = {
        available: !1,
        discovery: !1,
        connecting: !1,
        foundDevices: [],
        connectedDevices: [],
        adapterOpend: !1,
        setBluetoothDeviceFound: !1,
        setBLEConnectionStateChange: !1,
        setBluetoothAdapterStateChange: !1,
        setBLECharacteristicValueChange: !1,
        mTimeOut: {}
      }, this.ble_command = {
        link: 1,
        unlink: 2,
        deviceInfo: 3,
        setEncryKey: 4,
        update: 5,
        restart: 7,
        setCDKEY: 8,
        setPD: 9,
        getSOC: 10,
        antennaSwitch: 11,
        mf_setTagData: 21,
        mf_getTagData: 22,
        mf_selectCard: 48,
        mf_authKey: 49,
        mf_authKeyBatch: 50,
        mf_readBlock: 51,
        mf_writeBlock: 52,
        mf_half: 53,
        mf_wakeUp: 54,
        mf_getTagNonces: 64,
        mf_dataTransmission: 65,
        mf_get_nested_1nt: 69,
        mf_get_nested: 70,
        mf_get_hardnested: 71,
        mf_get_darksideNonces: 72,
        mf_get_thridtagNonces: 73,
        lhf_IDRead: 80,
        lhf_IDWrite: 81,
        mf_detectionTag: 96,
        mf_simulateTag: 97,
        mf_write2Tag: 98,
        set_data: 240,
        get_data: 241
      }, this.ble_error = {
        unkonwn: -1,
        adapter_success: 0,
        ble_connect_success: 1,
        ble_connected: 2,
        ble_stop_discovery_success: 3,
        ble_connecting: 4,
        init_ver_error: 100,
        adapter_error: 101,
        ble_discoverying: 102,
        ble_discovery_error: 103,
        get_services_error: 104,
        get_characteristics_error: 105,
        ble_connect_error: 106,
        ble_disconnect: 107,
        write_error: 108,
        read_timeout: 109,
        select_one_ble: 110,
        no_link_ble_device: 111,
        account_no_login: 112,
        get_ble_info_error: 113,
        get_userLocation_msg: 114,
        ble_data_busy: 115,
        data_recv_completed: 200,
        data_recv_incomplete: 201,
        data_recv_error: 202,
        data_set_error: 224,
        data_get_error: 225,
        data_cancel: 238
      }, this.ble_ans = {
        err_recv: -1,
        err_cmd: -2,
        err_rand_mismatch: -3,
        err_uid_change: -4,
        err_ble_unConnect: -5,
        err_ble_recvtimeout: -6,
        err_ble_send: -7,
        err_ble_disconnect: -8,
        err_ble_data_busy: -9,
        success: 0,
        detecting: 2,
        detect_stop: 3,
        nested_unfixed: 4,
        nested_fixed: 5,
        err_nouid: 224,
        err_cardCRC: 225,
        err_readcard: 226,
        err_overflow: 227,
        err_check: 228,
        err_auth: 229,
        err_writecard: 230,
        err_unknow: 240,
        err_unKNCmd: 241,
        err_noConnect: 242
      }, this.rc4_key = [123, 64, 126, 7, 252, 6, 149, 135, 18, 25, 146, 38, 133, 4, 21, 53, 60, 177, 164, 76, 44, 72, 27, 60, 140, 8, 13, 120, 14, 241, 79, 18]
    }
    var u, d, f, v, _, m, h, b, p, g, k, y, B, L, E, w, C, D, x, A, I, M, S, T, U, W, F, N, O, V, K;
    return a(c, [{
      key: "getWxErrorMessage",
      value: function(e) {
        var t = "";
        switch (e) {
          case 0:
            t = "成功";
            break;
          case -1:
            t = "已连接";
            break;
          case 1e4:
            t = "未初始化蓝牙适配器";
            break;
          case 10001:
            t = "蓝牙未打开或者不可用。您需要手动在手机上打开。打开方法请参考手机使用说明";
            break;
          case 10002:
            t = "没有找到指定设备";
            break;
          case 10003:
            t = "连接失败";
            break;
          case 10004:
            t = "没有找到指定服务";
            break;
          case 10005:
            t = "没有找到指定特征";
            break;
          case 10006:
            t = "当前连接已断开";
            break;
          case 10007:
            t = "当前特征不支持此操作";
            break;
          case 10008:
            t = "系统异常";
            break;
          case 10009:
            t = "系统版本低于 4.3 不支持 BLE";
            break;
          case 10012:
            t = "连接超时";
            break;
          case 10013:
            t = "连接 deviceId 为空或者是格式不正确"
        }
        return t
      }
    }, {
      key: "getErrorMessage",
      value: function(e) {
        var t = "操作失败";
        switch (e) {
          case this.ble_error.adapter_success:
            t = "成功";
            break;
          case this.ble_error.ble_connect_success:
            t = "蓝牙设备连接成功";
            break;
          case this.ble_error.ble_connected:
            t = "蓝牙设备已连接";
            break;
          case this.ble_error.ble_stop_discovery_success:
            t = "停止扫描蓝牙设备";
            break;
          case this.ble_error.ble_connecting:
            t = "正在连接";
            break;
          case this.ble_error.init_ver_error:
            t = "微信版本低，请升级版本后使用";
            break;
          case this.ble_error.ble_discoverying:
            t = "正在搜索蓝牙设备";
            break;
          case this.ble_error.ble_discovery_error:
            t = "搜索蓝牙设备失败";
            break;
          case this.ble_error.get_services_error:
          case this.ble_error.get_characteristics_error:
            t = "获取蓝牙设备配置失败";
            break;
          case this.ble_error.ble_connect_error:
            t = "连接蓝牙设备失败";
            break;
          case this.ble_error.write_error:
            t = "写入失败";
            break;
          case this.ble_error.read_timeout:
            t = "读取超时";
            break;
          case this.ble_error.select_one_ble:
            t = "请选择一个需要连接的蓝牙设备";
            break;
          case this.ble_error.no_link_ble_device:
            t = "没有需要连接的蓝牙设备";
            break;
          case this.ble_error.data_recv_completed:
            t = "数据接收完成";
            break;
          case this.ble_error.data_recv_incomplete:
            t = "数据未接收完成";
            break;
          case this.ble_error.data_recv_error:
            t = "数据接收异常";
            break;
          case this.ble_error.data_set_error:
            t = "数据下发失败";
            break;
          case this.ble_error.data_cancel:
            t = "取消操作";
            break;
          default:
            t += ":" + e
        }
        return t
      }
    }, {
      key: "getDataCheckSum",
      value: function(e) {
        var t = 0;
        if (e && e.length > 0)
          for (var r = 0; r < e.length; r++) t += e[r];
        return t
      }
    }, {
      key: "setDataXor",
      value: function(e) {
        var t = 170;
        if (e && e.length > 0)
          for (var r = 0; r < e.length - 1; r++) t ^= e[r];
        return t
      }
    }, {
      key: "checkDataXor",
      value: function(e, t) {
        var r = 170;
        if (e && e.length > 0 && t > 0) {
          for (var n = e.length > t ? t - 1 : e.length - 1, a = 0; a < n; a++) r ^= e[a];
          if (r === e[n]) return !0
        }
        return !1
      }
    }, {
      key: "Encryption_function",
      value: function(e, t) {
        var r = 0,
          n = new Array(e.length);
        for (r = 0; r < e.length; r++) n[r] = e[r] >> (3 & e[r]) ^ t >> 8 * (3 & e[r]), r % 2 != 0 && (n[r - 1] = 224 & n[r] | 31 & n[r - 1], n[r] = (15 & n[r]) << 4 | (60 & n[r - 1]) >> 2), n[r] = n[r] + e[r] & 255;
        return n
      }
    }, {
      key: "getLocation",
      value: function(e, t) {
        var r = {
          msg: ""
        };

        function n() {
          console.log("获取地理位置"), wx.getLocation({
            type: "wgs84",
            success: function(e) {
              console.log("打开地理位置", e), r.msg = "", a(r), (new o.fileUtil).writeInfoLogFile("getLocation", "打开地理位置成功")
            },
            fail: function(e) {
              console.log("打开地理位置失败", e), r.msg = "您手机的位置信息/定位服务未开启，可能会影响蓝牙设备的搜索。建议开启", a(r), (new o.fileUtil).writeErrorLogFile("getLocation", e.errMsg)
            }
          })
        }

        function a(e) {
          "function" == typeof t && t(r)
        }
        wx.getSetting({
          success: function(t) {
            null != t.authSetting["scope.userLocation"] && 1 != t.authSetting["scope.userLocation"] && (e ? wx.showModal({
              title: "获取地理位置信息",
              content: "搜索蓝牙设备前需要开启您的位置信息/定位服务，如果不开启可能会影响蓝牙设备的搜索。",
              success: function(e) {
                e.confirm ? wx.openSetting({
                  success: function(e) {
                    1 == e.authSetting["scope.userLocation"] ? n() : (r.msg = "您未授权小程序获取位置信息，可能会影响蓝牙设备的搜索。建议开启", a())
                  },
                  fail: function(e) {
                    console.log(e), (new o.fileUtil).writeErrorLogFile("openSetting", e.errMsg)
                  }
                }) : e.cancel && (r.msg = "您已拒绝小程序获取地理位置信息申请。可能会影响蓝牙设备的搜索", a())
              },
              fail: function(e) {
                console.log(e), r.msg = "", a()
              }
            }) : (r.msg = "您未授权小程序获取位置信息，可能会影响蓝牙设备的搜索。建议开启", a())), null == t.authSetting["scope.userLocation"] && (e ? wx.authorize({
              scope: "scope.userLocation",
              success: function(e) {
                n()
              },
              fail: function(e) {
                r.msg = "您已拒绝小程序获取地理位置信息申请。可能会影响蓝牙设备的搜索", a()
              }
            }) : (r.msg = "您未授权小程序获取位置信息，可能会影响蓝牙设备的搜索。建议开启", a())), 1 == t.authSetting["scope.userLocation"] && n()
          },
          fail: function(e) {
            console.log(e), r.msg = "", a(), (new o.fileUtil).writeErrorLogFile("getSetting", e.errMsg)
          }
        })
      }
    }, {
      key: "init",
      value: function(e, t, r, n) {
        var a = this;

        function c(t) {
          "function" == typeof e && e(t)
        }
        wx.getSetting({
          success: function(s) {
            null != s.authSetting["scope.bluetooth"] && 1 != s.authSetting["scope.bluetooth"] && wx.showModal({
              title: "蓝牙使用权限",
              content: "是否开启小程序蓝牙使用权限？",
              success: function(s) {
                s.confirm ? wx.openSetting({
                  success: function(s) {
                    1 == s.authSetting["scope.bluetooth"] ? (wx.showToast({
                      title: "蓝牙授权成功",
                      icon: "success",
                      duration: 1e3
                    }), a.openBluetoothAdapter(e, t, r, n)) : (wx.showToast({
                      title: "未授权蓝牙使用权限",
                      icon: "none",
                      duration: 5e3
                    }), c({
                      errCode: a.ble_error.get_ble_info_error,
                      errMsg: "未授权蓝牙使用权限"
                    }))
                  },
                  fail: function(e) {
                    console.log(e), (new o.fileUtil).writeErrorLogFile("openSetting", e.errMsg)
                  }
                }) : s.cancel && (wx.showToast({
                  title: "已拒绝蓝牙使用申请",
                  icon: "none",
                  duration: 5e3
                }), c({
                  errCode: a.ble_error.get_ble_info_error,
                  errMsg: "已拒绝蓝牙使用申请"
                }))
              },
              fail: function(e) {
                console.log(e)
              }
            }), null == s.authSetting["scope.bluetooth"] && wx.authorize({
              scope: "scope.bluetooth",
              success: function(c) {
                a.openBluetoothAdapter(e, t, r, n)
              },
              fail: function(e) {
                wx.showToast({
                  title: "已拒绝蓝牙使用申请",
                  icon: "none",
                  duration: 5e3
                }), c({
                  errCode: a.ble_error.get_ble_info_error,
                  errMsg: "已拒绝蓝牙使用申请"
                }), (new o.fileUtil).writeWarnLogFile("scope.bluetooth", "已拒绝蓝牙使用申请")
              }
            }), 1 == s.authSetting["scope.bluetooth"] && a.openBluetoothAdapter(e, t, r, n)
          }
        })
      }
    }, {
      key: "openBluetoothAdapter",
      value: function(e, t, r, n) {
        var a = this,
          c = {
            errCode: a.ble_error.unkonwn,
            errMsg: ""
          };
        wx.openBluetoothAdapter ? wx.openBluetoothAdapter({
          mode: "central",
          success: function(s) {
            (new o.fileUtil).writeInfoLogFile("openBluetoothAdapter", "蓝牙适配器打开成功"), console.log("蓝牙适配器打开成功>>"), a.BLE.adapterOpend = !0, a.BLE.setBLEConnectionStateChange && (wx.offBLEConnectionStateChange(), a.BLE.setBLEConnectionStateChange = !1), wx.onBLEConnectionStateChange((function(e) {
              a.BLE.connectedDevices[e.deviceId].connectStatus = e.connected, a.BLE.connectedDevices[e.deviceId].LinkInfo.link = e.connected, console.log("wx.onBLEConnectionStateChange", e), (new o.fileUtil).writeInfoLogFile("onBLEConnectionStateChange", e.deviceId + (e.connected ? "已连接" : "已断开")), a.BLE.setBLEConnectionStateChange = !0, "function" == typeof r && r(e);
              var t = a.BLE.connectedDevices[e.deviceId].data.recv_callback;
              null != t && "function" == typeof t && (console.log("发送蓝牙断开指令"), t({
                errCode: a.ble_error.ble_disconnect,
                deviceId: e.deviceId,
                cmd: -1,
                ans: a.ble_ans.err_ble_disconnect,
                value: []
              }), a.BLE.connectedDevices[e.deviceId].data.recv_callback = null)
            })), a.BLE.setBluetoothAdapterStateChange && (wx.offBluetoothAdapterStateChange(), a.BLE.setBluetoothAdapterStateChange = !1), wx.onBluetoothAdapterStateChange((function(e) {
              a.BLE.setBluetoothAdapterStateChange = !0, a.BLE.discovery = e.discovering, a.BLE.available = e.available, "function" == typeof t && t(e)
            })), a.BLE.setBLECharacteristicValueChange && (wx.offBLECharacteristicValueChange(), a.BLE.setBLECharacteristicValueChange = !1), wx.onBLECharacteristicValueChange((function(e) {
              a.BLE.setBLECharacteristicValueChange = !0;
              var t = e.deviceId;
              if (a.BLE.connectedDevices[t].data && a.BLE.connectedDevices[t].data.recv_callback) {
                var r = Array.prototype.slice.call(new Uint8Array(e.value)),
                  c = [];
                if ((c = a.BLE.connectedDevices[t].data.recv_buffer && a.BLE.connectedDevices[t].data.recv_buffer.length > 0 ? a.BLE.connectedDevices[t].data.recv_buffer.concat(r) : r).length > 0) {
                  var s = a.packAnalysis(t, c);
                  if (s.errCode === a.ble_error.data_recv_incomplete || s.errCode === a.ble_error.data_recv_completed)
                    if (s.errCode === a.ble_error.data_recv_incomplete) a.BLE.connectedDevices[t].data.recv_buffer = c;
                    else if (a.BLE.connectedDevices[t].data.send_buffer.shift(), a.BLE.connectedDevices[t].data.recv_buffer = [], a.BLE.connectedDevices[t].data.state = 0, a.BLE.connectedDevices[t].data.send_buffer.length > 0) a.writeBLECharacteristicValue(t, a.BLE.connectedDevices[t].data.send_buffer[0]);
                  else {
                    var o = a.BLE.connectedDevices[t].data.recv_callback;
                    "function" == typeof o && o({
                      errCode: 0,
                      deviceId: t,
                      cmd: s.cmd,
                      ans: s.ans,
                      value: s.value
                    }), a.BLE.connectedDevices[t].data.recv_callback = null
                  } else console.log("异常数据"), a.BLE.connectedDevices[t].data.recv_buffer = []
                }
              }
              "function" == typeof n && n(e)
            })), wx.getBluetoothAdapterState({
              success: function(t) {
                a.BLE.discovery = t.discovering, a.BLE.available = t.available, "function" == typeof e && (c.errCode = a.ble_error.adapter_success, c.errMsg = "蓝牙适配器打开成功", e(c))
              }
            })
          },
          fail: function(t) {
            if ("function" == typeof e) {
              c.errCode = a.ble_error.adapter_error;
              var r = "";
              "number" == typeof t.errCode && (r = a.getWxErrorMessage(t.errCode)), r = r.length > 0 ? r : t.errMsg, c.errMsg = r, e(c), console.log("蓝牙适配器打开失败>>", t)
            }(new o.fileUtil).writeErrorLogFile("openBluetoothAdapter", t.errMsg)
          }
        }) : "function" == typeof e && (c.errCode = a.ble_error.init_ver_error, c.errMsg = "微信版本低，请升级版本后使用", e(c), (new o.fileUtil).writeErrorLogFile("openBluetoothAdapter", "微信版本低，请升级版本后使用"))
      }
    }, {
      key: "startBluetoothDevicesDiscovery",
      value: function(e, t, r) {
        var n = this,
          a = this,
          c = {
            errCode: a.ble_error.unkonwn,
            errMsg: ""
          };
        if (this.BLE.discovery) return console.log("已开启蓝牙扫描，勿重复开启>>"), void("function" == typeof r && (c.errCode = a.ble_error.ble_discoverying, c.errMsg = "正在搜索中...", r(c)));
        var s, i = null !== (s = e.services) && void 0 !== s ? s : [];
        wx.startBluetoothDevicesDiscovery({
          services: i,
          allowDuplicatesKey: !1,
          success: function(a) {
            n.onBluetoothDeviceFound(e, t, r)
          },
          fail: function(e) {
            "function" == typeof r && (c.errCode = a.ble_error.ble_discovery_error, c.errMsg = "开启搜索错误" + e.errMsg, r(c)), (new o.fileUtil).writeErrorLogFile("startBluetoothDevicesDiscovery", e.errMsg)
          }
        })
      }
    }, {
      key: "onBluetoothDeviceFound",
      value: function(e, t, r) {
        var n = this,
          a = e.deviceId,
          c = e.serviceData;
        n.BLE.setBluetoothDeviceFound && (wx.offBluetoothDeviceFound(), n.BLE.setBluetoothDeviceFound = !1), n.BLE.setBluetoothDeviceFound = !0, n.BLE.foundDevices = [], wx.onBluetoothDeviceFound((function(e) {
          var r = e.devices,
            o = [];
          r.forEach((function(e) {
            n.BLE.foundDevices.hasOwnProperty(e.deviceId) || (n.BLE.foundDevices[e.deviceId] = e, (0, s.stringIsEmpty)(e.deviceId) || (0, s.stringIsEmpty)(a) ? (0, s.stringIsEmpty)(c) ? o.push(e) : null != e.serviceData && null != e.serviceData && e.serviceData.hasOwnProperty(c) && (e.SN = (0, s.ab2hex)(e.serviceData[c]), o.push(e)) : e.deviceId.toLowerCase() === a.toLowerCase() && o.push(e))
          })), o.length > 0 && "function" == typeof t && t(o)
        }))
      }
    }, {
      key: "stopBluetoothDevicesDiscovery",
      value: function(e) {
        var t = this;
        wx.stopBluetoothDevicesDiscovery({
          success: function(r) {
            if ("function" == typeof e) {
              var n = {
                errCode: t.ble_error.ble_stop_discovery_success,
                errMsg: "扫描结束"
              };
              e(n)
            }
            t.findTimer > 0 && (clearTimeout(t.findTimer), t.findTimer = 0), t.BLE.setBluetoothDeviceFound && (wx.offBluetoothDeviceFound(), t.BLE.setBluetoothDeviceFound = !1)
          },
          fail: function(e) {},
          complete: function(e) {
            console.log(e)
          }
        })
      }
    }, {
      key: "createBLEConnection",
      value: function(e, t) {
        var r = wx.getDeviceInfo();
        console.log(r.system);
        var n = r.system.toLowerCase().indexOf("android") > -1,
          a = (r.system.toLowerCase().indexOf("ios"), r.system.toLowerCase().indexOf("harmonyos") > -1),
          c = this,
          s = {
            errCode: c.ble_error.unkonwn,
            errMsg: "",
            data: null
          },
          i = e.deviceId;
        if (!c.BLE.connectedDevices.hasOwnProperty(i)) {
          c.BLE.connectedDevices[i] = {
            mtu: 20,
            connectStatus: !1,
            serviceId: "",
            writeCharacteristicsId: "",
            notifyCharacteristicsId: "",
            readCharacteristicsId: "",
            data: {
              Id: 0,
              state: 0,
              timerId: 0,
              timeout: 0,
              send_buffer: [],
              recv_buffer: [],
              recv_callback: null
            },
            LinkInfo: {
              link: !1,
              Info: {}
            }
          }
        }
        c.BLE.connectedDevices[i].connectStatus ? (s.errCode = c.ble_error.ble_connected, s.errMsg = "当前已连接！", "function" == typeof t && t(s)) : (console.log("连接蓝牙设备中..." + i), s.errCode = c.ble_error.ble_connecting, s.errMsg = "连接蓝牙设备中...", "function" == typeof t && t(s), wx.createBLEConnection({
          deviceId: i,
          timeout: 6e3,
          success: function(r) {
            console.log("连接成功"), c.BLE.connectedDevices[i].connectStatus = !0, c.BLE.connectedDevices[i].mtu = n ? 20 : 185, wx.getBLEMTU && wx.getBLEMTU({
              deviceId: i,
              writeType: "write",
              success: function(e) {
                c.BLE.connectedDevices[i].mtu = e.mtu - 3
              },
              complete: function(e) {
                var t;
                console.log(e), (new o.fileUtil).writeInfoLogFile("getBLEMTU", null !== (t = e.errMsg + " " + e.mtu) && void 0 !== t ? t : "")
              }
            }), c.getBLEDeviceServices(e, (function(e) {
              if (e.errCode === c.ble_error.ble_connect_success) {
                if (s.errCode = c.ble_error.ble_connect_success, s.errMsg = "连接成功", s.data = e.data, (n || a) && (wx.onBLEMTUChange((function(e) {
                    console.log("onBLEMTUChange", e), c.BLE.connectedDevices[e.deviceId].mtu = e.mtu - 3, (new o.fileUtil).writeInfoLogFile("onBLEMTUChange", " Set MTU：" + e.mtu)
                  })), wx.setBLEMTU)) return void wx.setBLEMTU({
                  deviceId: i,
                  mtu: 185,
                  success: function(e) {
                    console.log("setBLEMTU success!", e), n && (c.BLE.connectedDevices[i].mtu = e.mtu - 3)
                  },
                  fail: function(e) {
                    wx.getBLEMTU({
                      deviceId: i,
                      writeType: "write",
                      success: function(e) {
                        console.log("setBLEMTU fail! getBLEMTU again ->", e), c.BLE.connectedDevices[i].mtu < e.mtu - 3 && (c.BLE.connectedDevices[i].mtu = e.mtu - 3)
                      },
                      fail: function(e) {
                        console.log("getBLEMTU fail! 强制设置 ->", e), c.BLE.connectedDevices[i].mtu = 185
                      }
                    })
                  },
                  complete: function(e) {
                    console.log(e), "function" == typeof t && t(s), (new o.fileUtil).writeInfoLogFile("setBLEMTU", e.errMsg)
                  }
                });
                "function" == typeof t && t(s)
              } else console.log("断开连接", e), wx.closeBLEConnection({
                deviceId: i,
                success: function(e) {
                  c.BLE.connectedDevices[i].connectStatus = !1
                }
              })
            }))
          },
          fail: function(e) {
            console.log("连接设备失败" + e), s.errCode = c.ble_error.ble_connect_error, s.errMsg = "连接设备失败", c.BLE.connectedDevices[i].connectStatus = !1, "function" == typeof t && t(s), (new o.fileUtil).writeErrorLogFile("createBLEConnection", e.errMsg)
          },
          complete: function(e) {
            console.log(e)
          }
        }))
      }
    }, {
      key: "getBLEDeviceServices",
      value: function(e, t) {
        var r = this,
          n = e.deviceId,
          a = e.serviceUUID;
        wx.getBLEDeviceServices({
          deviceId: n,
          success: function(c) {
            for (var s = !1, o = 0; o < c.services.length; o++) {
              var i, l = c.services[o];
              (null === (i = l.uuid === a) || void 0 === i || i) && (r.BLE.connectedDevices[n].serviceId = l.uuid, r.getBLEDeviceCharacteristics(e, t), s = !0)
            }
            if (!s) {
              var u = {
                errCode: r.ble_error.get_services_error,
                errMsg: "获取不到Services"
              };
              "function" == typeof t && t(u)
            }
          },
          fail: function(e) {
            var n = {
              errCode: r.ble_error.get_services_error,
              errMsg: "获取Services失败"
            };
            "function" == typeof t && t(n), (new o.fileUtil).writeErrorLogFile("getBLEDeviceServices", e.errMsg)
          }
        })
      }
    }, {
      key: "getBLEDeviceCharacteristics",
      value: function(e, t) {
        var r = this,
          n = e.deviceId,
          a = e.characteristicsWriteUUID,
          c = e.characteristicsNotifyUUID,
          s = {
            errCode: r.ble_error.unkonwn,
            errMsg: "",
            data: null
          };
        wx.getBLEDeviceCharacteristics({
          deviceId: n,
          serviceId: r.BLE.connectedDevices[n].serviceId,
          success: function(e) {
            for (var o, i, l = 0; l < e.characteristics.length; l++) {
              var u, d, f = e.characteristics[l];
              (null === (u = f.uuid === a) || void 0 === u || u) && f.properties.write && (i = f.uuid), (null === (d = f.uuid === c) || void 0 === d || d) && f.properties.notify && (o = f.uuid)
            }
            null != o && null != i ? (r.BLE.connectedDevices[n].notifyCharacteristicsId = o, r.BLE.connectedDevices[n].writeCharacteristicsId = i, r.BLE.connectedDevices[n].readCharacteristicsId = void 0, r.opennotify(n, o), s.errCode = r.ble_error.ble_connect_success, s.errMsg = "", s.data = n, "function" == typeof t && t(s)) : (s.errCode = r.ble_error.get_characteristics_error, s.errMsg = "获取不到合适的Characteristics", "function" == typeof t && t(s))
          },
          fail: function(e) {
            s.errCode = r.ble_error.get_characteristics_error, s.errMsg = "获取Characteristics失败", "function" == typeof t && t(s), (new o.fileUtil).writeErrorLogFile("getBLEDeviceCharacteristics", e.errMsg)
          }
        })
      }
    }, {
      key: "opennotify",
      value: function(e, t) {
        wx.notifyBLECharacteristicValueChange({
          state: !0,
          deviceId: e,
          serviceId: this.BLE.connectedDevices[e].serviceId,
          characteristicId: t,
          success: function(e) {
            console.log("notifyBLECharacteristicValueChange success", e.errMsg)
          }
        })
      }
    }, {
      key: "stopBLEDeviceDiscoveryTask",
      value: function() {
        this.stopBluetoothDevicesDiscovery(), wx.offBluetoothDeviceFound(), this.BLE.setBluetoothDeviceFound = !1
      }
    }, {
      key: "closeBluetoothAdapter",
      value: function(e) {
        var t = this;
        wx.closeBluetoothAdapter({
          success: function(e) {
            console.log(e), wx.offBLEConnectionStateChange(), wx.offBluetoothAdapterStateChange(), wx.offBLECharacteristicValueChange(), t.BLE.setBLEConnectionStateChange = !1, t.BLE.setBluetoothAdapterStateChange = !1, t.BLE.setBLECharacteristicValueChange = !1, t.BLE.adapterOpend = !1
          },
          complete: function(t) {
            var r = {
              errCode: t.errno,
              errMsg: t.errMsg
            };
            "function" == typeof e && e(r)
          }
        })
      }
    }, {
      key: "closeBLEConnection",
      value: function(e, t) {
        e && wx.closeBLEConnection({
          deviceId: e,
          success: function(e) {},
          complete: function(e) {
            console.log(e);
            var r = {
              errCode: e.errno,
              errMsg: e.errMsg
            };
            "function" == typeof t && t(r)
          }
        })
      }
    }, {
      key: "closeBluetooth",
      value: function(e) {
        this.stopBLEDeviceDiscoveryTask(), this.BLE.connectedDevices && this.BLE.connectedDevices.forEach((function(e) {
          var t = e.deviceId;
          t && wx.closeBLEConnection({
            deviceId: t
          })
        })), this.closeBluetoothAdapter(e)
      }
    }, {
      key: "BLEConnection",
      value: function(e, t, r, n, a, c) {
        var o = this,
          i = {
            services: ["00003333-2018-0115-2023-102618001001"],
            deviceId: "",
            serviceData: "0000534E-0000-1000-8000-00805F9B34FB",
            serviceUUID: "00003333-2018-0115-2023-102618001001",
            characteristicsWriteUUID: "00003333-2018-0115-2023-102618000001",
            characteristicsNotifyUUID: "00003333-2018-0115-2023-102618000002"
          };

        function l(c) {
          o.ble_error.adapter_success === c.errCode && o.BLEConnection(e, t, r, n, a, !1), "function" == typeof t && t(c)
        }
        if (c && o.BLE.adapterOpend) {
          o.closeBluetooth((function(c) {
            o.BLEConnection(e, t, r, n, a, !1)
          }))
        } else if (o.BLE.adapterOpend)(0, s.stringIsEmpty)(e.deviceId) ? function(e, t) {
          o.startBluetoothDevicesDiscovery(i, t, e)
        }(t, (function(e) {
          if (console.log("bluetoothDeviceFound->", e), !o.BLE.connecting && "function" == typeof t) {
            var r = {
              errCode: o.ble_error.select_one_ble,
              errMsg: "选择需要连接的设备",
              data: e
            };
            t(r)
          }
        })) : function(e) {
          console.log("连接设备"), i.deviceId = e.deviceId, o.createBLEConnection(i, (function(e) {
            if (e.errCode === o.ble_error.ble_connecting) {
              if (o.BLE.connecting = !0, "function" == typeof t) {
                var r = {
                  errCode: o.ble_error.ble_connecting,
                  errMsg: "正在连接...",
                  data: e.data
                };
                t(r)
              }
            } else if (o.BLE.connecting = !1, e.errCode === o.ble_error.ble_connect_success) {
              if (console.log("连接成功", e), "function" == typeof t) {
                r = {
                  errCode: o.ble_error.ble_connect_success,
                  errMsg: "连接成功",
                  data: e.data
                };
                t(r)
              }
              o.stopBluetoothDevicesDiscovery(t)
            } else if ("function" == typeof t) {
              var n = {
                errCode: o.ble_error.ble_connect_error,
                errMsg: e.errMsg
              };
              t(n)
            }
          }))
        }(e);
        else {
          o.getLocation(!1, (function(e) {
            if (e.msg.length > 0 && "function" == typeof t) {
              var c = {
                errCode: o.ble_error.get_userLocation_msg,
                errMsg: e.msg
              };
              t(c)
            }
            o.init(l, r, n, a)
          }))
        }
      }
    }, {
      key: "packAnalysis",
      value: function(e, t) {
        var r = {
          errCode: this.ble_error.unkonwn,
          cmd: 0,
          ans: -1,
          value: []
        };
        if (t && t.length > 0)
          if (t[0] === this.protocol_head)
            if (t.length > 3) {
              var n = t[1] + 2;
              if (t.length < n) r.errCode = this.ble_error.data_recv_incomplete;
              else if (this.checkDataXor(t, n)) {
                var a = t.slice(2, -1),
                  c = (0, s.RC4_Crypt_UnLength)(a, this.rc4_key);
                if (null != c) {
                  r.cmd = c[1], r.ans = c[2];
                  var o = c.slice(3);
                  r.value = o, r.errCode = this.ble_error.data_recv_completed
                } else r.errCode = this.ble_error.data_recv_error
              } else r.errCode = this.ble_error.data_recv_error
            } else r.errCode = this.ble_error.data_recv_incomplete;
        else r.errCode = this.ble_error.data_recv_error;
        return r
      }
    }, {
      key: "packCommand",
      value: function(e, t, r) {
        var n, a, c = [];
        n = this.BLE.connectedDevices[e].mtu - 5, a = this.protocol_head;
        var o = 0;
        r && (o = r.length);
        var i = Math.ceil(o / n);
        0 === i && (i = 1);
        for (var l = 0, u = 0; u < i; u++) {
          var d = o - l > n ? n : o - l,
            f = new Array(d + 5);
          f[0] = a, f[1] = d + 3;
          var v = this.BLE.connectedDevices[e].data.Id;
          this.BLE.connectedDevices[e].data.Id = v + 1 > 255 ? 0 : v + 1;
          var _ = new Array(d + 2);
          if (_[0] = v, _[1] = t, d > 0)
            for (var m = 0; m < d; m++) _[m + 2] = r[l + m];
          var h = (0, s.RC4_Crypt_UnLength)(_, this.rc4_key);
          if (h)
            for (var b = 0; b < d + 2; b++) f[b + 2] = h[b];
          var p = this.setDataXor(f);
          f[d + 5 - 1] = p;
          var g = new Uint8Array(f).buffer;
          c.push(g), l += d
        }
        return c
      }
    }, {
      key: "sendBLEData",
      value: function(e, t, r, n) {
        this.BLE.connectedDevices[e].data.send_buffer = t, this.BLE.connectedDevices[e].data.recv_buffer = [], this.BLE.connectedDevices[e].data.recv_callback = n, this.BLE.connectedDevices[e].data.send_buffer && this.BLE.connectedDevices[e].data.send_buffer.length > 0 && this.writeBLECharacteristicValue(e, this.BLE.connectedDevices[e].data.send_buffer[0], r)
      }
    }, {
      key: "sendBLEDataWaitAsync",
      value: (K = r(t().mark((function e(r, n) {
        var a, c, o, i, l, u = arguments;
        return t().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              if (a = u.length > 2 && void 0 !== u[2] ? u[2] : 3e4, c = !(u.length > 3 && void 0 !== u[3]) || u[3], o = this, e.prev = 3, !(0, s.stringIsEmpty)(r) && o.BLE.connectedDevices[r].connectStatus) {
                e.next = 6;
                break
              }
              return e.abrupt("return", {
                errCode: o.ble_error.ble_disconnect,
                deviceId: r,
                cmd: -1,
                ans: o.ble_ans.err_ble_disconnect,
                value: []
              });
            case 6:
              if (0 == o.BLE.connectedDevices[r].data.state || 3 == o.BLE.connectedDevices[r].data.state) {
                e.next = 23;
                break
              }
              if (console.log("蓝牙正在占用,等待蓝牙空闲", o.BLE.connectedDevices[r].data.state, o.BLE.connectedDevices[r].data.timeout), !c) {
                e.next = 22;
                break
              }
              i = o.BLE.connectedDevices[r].data.timeout;
            case 10:
              if (0 !== o.BLE.connectedDevices[r].data.state && 3 !== o.BLE.connectedDevices[r].data.state) {
                e.next = 13;
                break
              }
              return e.abrupt("break", 19);
            case 13:
              if (!(i-- <= 0)) {
                e.next = 15;
                break
              }
              return e.abrupt("break", 19);
            case 15:
              return e.next = 17, (0, s.sleep)(1);
            case 17:
              e.next = 10;
              break;
            case 19:
              console.log("蓝牙已可用"), e.next = 23;
              break;
            case 22:
              return e.abrupt("return", {
                errCode: o.ble_error.ble_data_busy,
                deviceId: r,
                cmd: -1,
                ans: o.ble_ans.err_ble_data_busy,
                value: []
              });
            case 23:
              return e.next = 25, new Promise((function(e) {
                o.sendBLEData(r, n, (function(t) {
                  1 === t ? (o.BLE.connectedDevices[r].data.timeout = a, o.BLE.connectedDevices[r].data.timerId = setTimeout((function() {
                    o.BLE.connectedDevices[r].data.state = 3, o.BLE.connectedDevices[r].data.timerId = 0, o.BLE.connectedDevices[r].data.recv_callback = null;
                    var t = {
                      errCode: o.ble_error.read_timeout,
                      deviceId: r,
                      cmd: -1,
                      ans: o.ble_ans.err_ble_recvtimeout,
                      value: []
                    };
                    e(t), console.log("接收超时(ms)", a)
                  }), a)) : e({
                    errCode: o.ble_error.write_error,
                    deviceId: r,
                    cmd: -1,
                    ans: o.ble_ans.err_ble_send,
                    value: []
                  })
                }), (function(t) {
                  clearTimeout(o.BLE.connectedDevices[r].data.timerId), o.BLE.connectedDevices[r].data.timerId = 0, e(t)
                }))
              }));
            case 25:
              return l = e.sent, e.abrupt("return", l);
            case 29:
              return e.prev = 29, e.t0 = e.catch(3), console.log("sendBLEDataWaitAsync", e.t0), e.abrupt("return", {
                errCode: o.ble_error.write_error,
                cmd: -1,
                ans: o.ble_ans.err_ble_send,
                value: []
              });
            case 33:
            case "end":
              return e.stop()
          }
        }), e, this, [
          [3, 29]
        ])
      }))), function(e, t) {
        return K.apply(this, arguments)
      })
    }, {
      key: "writeBLECharacteristicValue",
      value: function(e, t, r) {
        var n = this;
        !(0, s.stringIsEmpty)(e) && n.BLE.connectedDevices[e].connectStatus ? (n.BLE.connectedDevices[e].data.state = 1, wx.writeBLECharacteristicValue({
          deviceId: e,
          serviceId: n.BLE.connectedDevices[e].serviceId,
          characteristicId: n.BLE.connectedDevices[e].writeCharacteristicsId,
          value: t,
          success: function(t) {
            n.BLE.connectedDevices[e].data.state = 2, "function" == typeof r && r(1)
          },
          fail: function(e) {
            "function" == typeof r && r(0), console.log("writeBLECharacteristicValue fail", e)
          },
          complete: function(e) {}
        })) : "function" == typeof n.BLE.connectedDevices[e].data.recv_callback && n.BLE.connectedDevices[e].data.recv_callback({
          errCode: n.ble_error.ble_disconnect,
          deviceId: e,
          cmd: -1,
          ans: n.ble_ans.err_ble_disconnect,
          value: []
        })
      }
    }, {
      key: "StopBLERecvAsync",
      value: (V = r(t().mark((function e(r) {
        var n, a;
        return t().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              if (n = this, !(0, s.stringIsEmpty)(r) && n.BLE.connectedDevices[r].connectStatus) {
                e.next = 3;
                break
              }
              return e.abrupt("return");
            case 3:
              if (0 == n.BLE.connectedDevices[r].data.state || 3 == n.BLE.connectedDevices[r].data.state) {
                e.next = 16;
                break
              }
              a = 300;
            case 5:
              if (0 !== n.BLE.connectedDevices[r].data.state && 3 !== n.BLE.connectedDevices[r].data.state) {
                e.next = 8;
                break
              }
              return e.abrupt("break", 16);
            case 8:
              if (!(a-- <= 0)) {
                e.next = 12;
                break
              }
              return "function" == typeof n.BLE.connectedDevices[r].data.recv_callback && (n.BLE.connectedDevices[r].data.state = 3, n.BLE.connectedDevices[r].data.recv_callback({
                errCode: n.ble_error.read_timeout,
                deviceId: r,
                cmd: -1,
                ans: n.ble_ans.err_ble_recvtimeout,
                value: []
              })), console.log("等待超时"), e.abrupt("break", 16);
            case 12:
              return e.next = 14, (0, s.sleep)(1);
            case 14:
              e.next = 5;
              break;
            case 16:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e) {
        return V.apply(this, arguments)
      })
    }, {
      key: "IsDeviceLink",
      value: function(e) {
        return !!(this.BLE.connectedDevices[e] && this.BLE.connectedDevices[e].connectStatus && this.BLE.connectedDevices[e].LinkInfo) && this.BLE.connectedDevices[e].LinkInfo.link
      }
    }, {
      key: "GetDeviceInfo",
      value: function(e) {
        return this.BLE.connectedDevices[e] && this.BLE.connectedDevices[e].connectStatus && this.BLE.connectedDevices[e].LinkInfo ? this.BLE.connectedDevices[e].LinkInfo.Info : ""
      }
    }, {
      key: "recvCallback",
      value: function(e, t, r, n) {
        var a = {
          ans: -1,
          data: {}
        };
        try {
          if (null == e || 0 !== e.errCode) throw e.errCode;
          if (e.cmd !== t) throw this.ble_ans.err_cmd;
          switch (a.ans = e.ans, e.cmd) {
            case this.ble_command.link:
              if (0 === e.ans) {
                for (var c = new Array(4), i = new Array(4), l = 0; l < 4; l++) c[l] = e.value[l], i[l] = e.value[4 + l];
                var u = {
                  ency_rand: c,
                  dev_rand: i
                };
                a.data = u
              }
              break;
            case this.ble_command.unlink:
              break;
            case this.ble_command.deviceInfo:
              if (0 === e.ans) {
                var d = {
                  MCUUID: e.value.slice(0, 12),
                  version: e.value.slice(12, 20),
                  lang: e.value[20],
                  CDKEY: e.value.slice(21, 25),
                  ChipSN: e.value.slice(25, 29)
                };
                a.data = d
              }
              break;
            case this.ble_command.getSOC:
              0 === e.ans && (a.data = e.value[0]);
              break;
            case this.ble_command.update:
              0 === e.ans && (a.data = this.ble_command.update);
              break;
            case this.ble_command.restart:
            case this.ble_command.antennaSwitch:
            case this.ble_command.mf_half:
              break;
            case this.ble_command.mf_dataTransmission:
              if (0 === e.ans) {
                var f = {
                  frame: e.value[0],
                  length: e.value[1],
                  data: e.value.slice(2)
                };
                a.data = f
              }
              break;
            case this.ble_command.mf_getTagNonces:
              0 === e.ans && (a.data = e.value);
              break;
            case this.ble_command.mf_selectCard:
              if (0 === e.ans) {
                var v = e.value[10] > 10 || e.value[10] < 4 ? 10 : e.value[10],
                  _ = {
                    size: v,
                    UID: e.value.slice(0, v),
                    ATQA: 256 * e.value[11] + e.value[12],
                    SAK: e.value[13],
                    num_sectors: 0,
                    data: [],
                    card_data: [],
                    card_hash: [],
                    tem_key: {}
                  };
                a.data = _
              }
              break;
            case this.ble_command.lhf_IDRead:
              if (0 === e.ans) {
                var m = {
                  freq: e.value.slice(0, 12),
                  type: e.value.slice(12, 24),
                  size: e.value[24],
                  UID: e.value.slice(25),
                  data: e.value
                };
                a.data = m
              }
              break;
            case this.ble_command.lhf_IDWrite:
            case this.ble_command.mf_authKey:
              break;
            case this.ble_command.mf_authKeyBatch:
              if (0 === e.ans) {
                var h = {
                  block: e.value[0],
                  type: e.value[1],
                  key: e.value.slice(2)
                };
                a.data = h
              }
              break;
            case this.ble_command.mf_readBlock:
              0 === e.ans && (a.data = e.value);
              break;
            case this.ble_command.mf_writeBlock:
              break;
            case this.ble_command.mf_get_darksideNonces:
              if (0 === e.ans) {
                var b = {
                  nt: e.value.slice(1, 5),
                  par_list: e.value.slice(5, 13),
                  ks_list: e.value.slice(13, 21),
                  nr: e.value.slice(21, 25),
                  ar: e.value.slice(25, 29)
                };
                a.data = b
              } else a.data = e.value[0];
              break;
            case this.ble_command.mf_get_nested_1nt:
              if (0 === e.ans) {
                var p = {
                  nt: e.value.slice(0, 4),
                  nt_nested: e.value.slice(4, 8),
                  nt_enc: e.value.slice(8, 12),
                  nt_par_enc: e.value[12]
                };
                a.data = p
              }
              break;
            case this.ble_command.mf_get_nested:
              if (0 === e.ans || e.ans === this.ble_ans.nested_fixed) {
                var g = {
                  fixed_nt: e.value.slice(0, 4),
                  nt1: e.value.slice(4, 8),
                  ks1: e.value.slice(8, 12),
                  nt2: e.value.slice(12, 16),
                  ks2: e.value.slice(16, 20)
                };
                a.data = g
              }
              break;
            case this.ble_command.mf_get_thridtagNonces:
              if (0 === e.ans) {
                var k = {
                  uid: e.value.slice(0, 4),
                  nt: e.value.slice(4, 8),
                  nt_enc: e.value.slice(8, 12),
                  nt_par_enc: e.value[12]
                };
                a.data = k
              }
              break;
            case this.ble_command.mf_get_hardnested:
              if (0 === e.ans) {
                var y = e.value.slice(0, 4),
                  B = e.value.slice(4, 8),
                  L = {
                    taskID: this.ble_command.mf_get_hardnested,
                    dataSize: (0, s.bytes_to_num)(y),
                    checkValue: (0, s.bytes_to_num)(B)
                  };
                a.data = L
              }
              break;
            case this.ble_command.mf_setTagData:
              0 === e.ans && (a.data = this.ble_command.mf_setTagData);
              break;
            case this.ble_command.mf_getTagData:
              if (0 === e.ans) {
                var E = e.value.slice(0, 4),
                  w = e.value.slice(4, 8),
                  C = {
                    taskID: this.ble_command.mf_getTagData,
                    dataSize: (0, s.bytes_to_num)(E),
                    checkValue: (0, s.bytes_to_num)(w)
                  };
                a.data = C
              }
              break;
            case this.ble_command.mf_detectionTag:
              if (0 === e.ans || 2 === e.ans) {
                var D = {
                  count: e.value[0],
                  writecard: e.value[2] << 8 | e.value[1],
                  data: e.value.slice(3)
                };
                a.data = D
              }
              break;
            case this.ble_command.mf_simulateTag:
              break;
            case this.ble_command.mf_write2Tag:
              if (0 === e.ans) {
                var x = {
                  T: e.value[0],
                  B: e.value.slice(1)
                };
                a.data = x
              }
              break;
            case this.ble_command.set_data:
              break;
            case this.ble_command.get_data:
              if (0 === e.ans) {
                var A = {
                  offset: e.value.slice(0, 4),
                  dataLength: e.value[4],
                  data: e.value.slice(5)
                };
                a.data = A
              }
          }
        } catch (t) {
          var I = new o.fileUtil;
          e.errCode === this.ble_error.ble_disconnect ? (a.ans = this.ble_ans.err_ble_disconnect, I.writeErrorLogFile("recvCallback", "断开连接")) : e.errCode === this.ble_error.read_timeout ? (a.ans = this.ble_ans.err_ble_recvtimeout, I.writeErrorLogFile("recvCallback", "读取超时")) : (t == this.ble_ans.err_cmd ? I.writeErrorLogFile("recvCallback", "指令错误") : I.writeErrorLogFile("recvCallback", "消息错误" + t), a.ans = this.ble_ans.err_recv), a.data = e, "function" == typeof n && n(a)
        }
        return "function" == typeof r && r(a), a
      }
    }, {
      key: "cmdLinkDeviceAsync",
      value: (O = r(t().mark((function e(r, n, a) {
        var c, s, i, l, u, d, f, v, _, m, h, b, p;
        return t().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              for (c = this, s = "", i = {
                  ans: -1,
                  data: {}
                }, l = new Array(4), u = 0; u < 4; u++) l[u] = Math.floor(255 * Math.random());
              return d = c.packCommand(r, c.ble_command.link, l), e.next = 8, c.sendBLEDataWaitAsync(r, d);
            case 8:
              if (f = e.sent, 0 !== (v = c.recvCallback(f, c.ble_command.link, void 0, a)).ans) {
                e.next = 27;
                break
              }
              if (_ = c.Encryption_function(l, c.ble_connect_ency_key), JSON.stringify(_) != JSON.stringify(v.data.ency_rand)) {
                e.next = 22;
                break
              }
              return m = c.Encryption_function(v.data.dev_rand, c.ble_connect_ency_key), h = c.packCommand(r, c.ble_command.link, m), e.next = 17, c.sendBLEDataWaitAsync(r, h);
            case 17:
              b = e.sent, 0 === (p = c.recvCallback(b, c.ble_command.link, void 0, a)).ans && (s = "连接设备成功", console.log("握手成功"), c.BLE.connectedDevices[r].LinkInfo.link = !0, i = p), e.next = 25;
              break;
            case 22:
              s = "获取错误的随机数", console.log("获取错误的随机数"), i.ans = c.ble_ans.err_rand_mismatch;
            case 25:
              e.next = 30;
              break;
            case 27:
              s = "获取随机数失败", console.log("获取随机数失败"), i = v;
            case 30:
              return "function" == typeof n && n(i), (new o.fileUtil).writeErrorLogFile("cmdLinkDeviceAsync", s), e.abrupt("return", i);
            case 34:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, t, r) {
        return O.apply(this, arguments)
      })
    }, {
      key: "cmdUnLinkDeviceAsync",
      value: (N = r(t().mark((function e(r, n, a) {
        var c, s, o, i;
        return t().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return s = (c = this).packCommand(r, c.ble_command.unlink, null), e.next = 4, c.sendBLEDataWaitAsync(r, s);
            case 4:
              return o = e.sent, 0 === (i = c.recvCallback(o, c.ble_command.unlink, n, a)).ans && (c.BLE.connectedDevices[r].LinkInfo.link = !1), e.abrupt("return", i);
            case 8:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, t, r) {
        return N.apply(this, arguments)
      })
    }, {
      key: "cmdDeviceInfoAsync",
      value: (F = r(t().mark((function e(r, n, a) {
        var c, s, o, i;
        return t().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return s = (c = this).packCommand(r, c.ble_command.deviceInfo, null), e.next = 4, c.sendBLEDataWaitAsync(r, s);
            case 4:
              return o = e.sent, console.log(o), 0 === (i = c.recvCallback(o, c.ble_command.deviceInfo, n, a)).ans && (c.BLE.connectedDevices[r].LinkInfo.Info = i.data, console.log("获取设备信息", i.data)), e.abrupt("return", i);
            case 9:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, t, r) {
        return F.apply(this, arguments)
      })
    }, {
      key: "cmdGetAtteryValueAsync",
      value: (W = r(t().mark((function e(r, n, a) {
        var c, s, o;
        return t().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return s = (c = this).packCommand(r, c.ble_command.getSOC, null), e.next = 4, c.sendBLEDataWaitAsync(r, s, 1e3, !1);
            case 4:
              return o = e.sent, e.abrupt("return", c.recvCallback(o, c.ble_command.getSOC, n, a));
            case 6:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, t, r) {
        return W.apply(this, arguments)
      })
    }, {
      key: "cmdDeviceRestartAsync",
      value: (U = r(t().mark((function e(r, n, a, c) {
        var s, o, i, l;
        return t().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return s = this, (o = new Array(1))[0] = n, i = s.packCommand(r, s.ble_command.restart, o), e.next = 6, s.sendBLEDataWaitAsync(r, i);
            case 6:
              return l = e.sent, e.abrupt("return", s.recvCallback(l, s.ble_command.restart, a, c));
            case 8:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, t, r, n) {
        return U.apply(this, arguments)
      })
    }, {
      key: "cmdAntennaSwitchAsync",
      value: (T = r(t().mark((function e(r, n, a, c) {
        var s, o, i, l;
        return t().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return s = this, (o = new Array(1))[0] = n, i = s.packCommand(r, s.ble_command.antennaSwitch, o), e.next = 6, s.sendBLEDataWaitAsync(r, i, 1e3, !1);
            case 6:
              return l = e.sent, e.abrupt("return", s.recvCallback(l, s.ble_command.antennaSwitch, a, c));
            case 8:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, t, r, n) {
        return T.apply(this, arguments)
      })
    }, {
      key: "cmdSetDeviceUpdateDataAsync",
      value: (S = r(t().mark((function e(r, n, a, c, o) {
        var i, l, u, d, f, v, _;
        return t().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              for (i = this, l = new Array(8).fill(0), u = (0, s.num_to_bytes)(n), d = (0, s.num_to_bytes)(a), f = 0; f < 4; f++) l[f] = u[f], l[4 + f] = d[f];
              return console.log(l), v = i.packCommand(r, i.ble_command.update, l), e.next = 9, i.sendBLEDataWaitAsync(r, v);
            case 9:
              return _ = e.sent, e.abrupt("return", i.recvCallback(_, i.ble_command.update, c, o));
            case 11:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, t, r, n, a) {
        return S.apply(this, arguments)
      })
    }, {
      key: "cmdMifareClassicHaltAsync",
      value: (M = r(t().mark((function e(r, n, a) {
        var c, s, o;
        return t().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return s = (c = this).packCommand(r, c.ble_command.mf_half, null), e.next = 4, c.sendBLEDataWaitAsync(r, s);
            case 4:
              return o = e.sent, e.abrupt("return", c.recvCallback(o, c.ble_command.mf_half, n, a));
            case 6:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, t, r) {
        return M.apply(this, arguments)
      })
    }, {
      key: "cmdGetTagNonces",
      value: (I = r(t().mark((function e(r, n, a, c, s, o, i) {
        var l, u, d, f;
        return t().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return l = this, (u = new Array(5))[0] = n, u[1] = a, u[2] = c << 8, u[3] = 255 & c, u[4] = s, d = l.packCommand(r, l.ble_command.mf_getTagNonces, u), e.next = 10, l.sendBLEDataWaitAsync(r, d);
            case 10:
              return f = e.sent, e.abrupt("return", l.recvCallback(f, l.ble_command.mf_getTagNonces, o, i));
            case 12:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, t, r, n, a, c, s) {
        return I.apply(this, arguments)
      })
    }, {
      key: "cmdTransmissionDataAsync",
      value: (A = r(t().mark((function e(r, n, a, c, s, o) {
        var i, l, u, d, f;
        return t().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return i = this, (l = new Array(3))[0] = n, l[1] = a, l[2] = c.length, u = l.concat(c), d = i.packCommand(r, i.ble_command.mf_dataTransmission, u), e.next = 9, i.sendBLEDataWaitAsync(r, d);
            case 9:
              return f = e.sent, e.abrupt("return", i.recvCallback(f, i.ble_command.mf_dataTransmission, s, o));
            case 11:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, t, r, n, a, c) {
        return A.apply(this, arguments)
      })
    }, {
      key: "cmdSelectMifareCardAsync",
      value: (x = r(t().mark((function e(r, n, a, c) {
        var s, o, i, l;
        return t().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return o = (s = this).packCommand(r, s.ble_command.mf_selectCard, null), e.next = 4, s.sendBLEDataWaitAsync(r, o);
            case 4:
              return i = e.sent, l = s.recvCallback(i, s.ble_command.mf_selectCard, a, c), null != n && 0 === l.ans && JSON.stringify(n) != JSON.stringify(l.data.UID) && (console.log("卡片变更"), l.ans = s.ble_ans.err_uid_change), e.abrupt("return", l);
            case 8:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, t, r, n) {
        return x.apply(this, arguments)
      })
    }, {
      key: "cmdReadLHFCardAsync",
      value: (D = r(t().mark((function e(r, n, a) {
        var c, s, o, i;
        return t().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return c = this, s = new Array(12).fill(0), o = c.packCommand(r, c.ble_command.lhf_IDRead, s), e.next = 5, c.sendBLEDataWaitAsync(r, o);
            case 5:
              return i = e.sent, e.abrupt("return", c.recvCallback(i, c.ble_command.lhf_IDRead, n, a));
            case 7:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, t, r) {
        return D.apply(this, arguments)
      })
    }, {
      key: "cmdWriteLHFCardAsync",
      value: (C = r(t().mark((function e(r, n, a, c, s, o, i) {
        var l, u, d, f, v, _;
        return t().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              for (l = this, u = new Array(57).fill(0), d = 0; d < 12; d++) u[d] = n[d], u[12 + d] = a[d];
              for (u[24] = c, f = 0; f < 32; f++) u[25 + f] = s[f];
              return v = l.packCommand(r, l.ble_command.lhf_IDWrite, u), e.next = 8, l.sendBLEDataWaitAsync(r, v);
            case 8:
              return _ = e.sent, e.abrupt("return", l.recvCallback(_, l.ble_command.lhf_IDWrite, o, i));
            case 10:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, t, r, n, a, c, s) {
        return C.apply(this, arguments)
      })
    }, {
      key: "cmdMifareAuthAsync",
      value: (w = r(t().mark((function e(r, n, a, c, s, o, i) {
        var l, u, d, f, v, _;
        return t().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return l = this, u = new Array(6), d = n.slice(n.length - 4), u[0] = d[0], u[1] = d[1], u[2] = d[2], u[3] = d[3], u[4] = a, u[5] = c, f = u.concat(s), v = l.packCommand(r, l.ble_command.mf_authKey, f), e.next = 13, l.sendBLEDataWaitAsync(r, v);
            case 13:
              return _ = e.sent, e.abrupt("return", l.recvCallback(_, l.ble_command.mf_authKey, o, i));
            case 15:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, t, r, n, a, c, s) {
        return w.apply(this, arguments)
      })
    }, {
      key: "cmdMifareAuthBatchAsync",
      value: (E = r(t().mark((function e(r, n, a, c, s, o) {
        var i, l, u, d, f;
        return t().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return i = this, (l = new Array(3))[0] = n, l[1] = a, l[2] = c.length / 6, u = l.concat(c), d = i.packCommand(r, i.ble_command.mf_authKeyBatch, u), e.next = 9, i.sendBLEDataWaitAsync(r, d);
            case 9:
              return f = e.sent, e.abrupt("return", i.recvCallback(f, i.ble_command.mf_authKeyBatch, s, o));
            case 11:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, t, r, n, a, c) {
        return E.apply(this, arguments)
      })
    }, {
      key: "cmdMifareReadBlockAsync",
      value: (L = r(t().mark((function e(r, n, a, c) {
        var s, o, i, l;
        return t().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return s = this, (o = new Array(1))[0] = n, i = s.packCommand(r, s.ble_command.mf_readBlock, o), e.next = 6, s.sendBLEDataWaitAsync(r, i);
            case 6:
              return l = e.sent, e.abrupt("return", s.recvCallback(l, s.ble_command.mf_readBlock, a, c));
            case 8:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, t, r, n) {
        return L.apply(this, arguments)
      })
    }, {
      key: "cmdMifareWriteBlockAsync",
      value: (B = r(t().mark((function e(r, n, a, c, s) {
        var o, i, l, u, d;
        return t().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return o = this, (i = new Array(1))[0] = n, l = i.concat(a), u = o.packCommand(r, o.ble_command.mf_writeBlock, l), e.next = 7, o.sendBLEDataWaitAsync(r, u);
            case 7:
              return d = e.sent, e.abrupt("return", o.recvCallback(d, o.ble_command.mf_writeBlock, c, s));
            case 9:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, t, r, n, a) {
        return B.apply(this, arguments)
      })
    }, {
      key: "cmdMifareDarksideAttackAsync",
      value: (y = r(t().mark((function e(r, n, a, c) {
        var s, o, i, l;
        return t().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return s = this, (o = new Array(1))[0] = n, i = s.packCommand(r, s.ble_command.mf_get_darksideNonces, o), e.next = 6, s.sendBLEDataWaitAsync(r, i, 12e4);
            case 6:
              return l = e.sent, e.abrupt("return", s.recvCallback(l, s.ble_command.mf_get_darksideNonces, a, c));
            case 8:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, t, r, n) {
        return y.apply(this, arguments)
      })
    }, {
      key: "cmdGetMifareThirdTagNoncesAsync",
      value: (k = r(t().mark((function e(r, n, a, c, s, o) {
        var i, l, u, d, f;
        return t().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              for (i = this, (l = new Array(8))[0] = n, l[1] = a, u = 0; u < 6; u++) l[2 + u] = c[u];
              return d = i.packCommand(r, i.ble_command.mf_get_thridtagNonces, l), e.next = 8, i.sendBLEDataWaitAsync(r, d);
            case 8:
              return f = e.sent, e.abrupt("return", i.recvCallback(f, i.ble_command.mf_get_thridtagNonces, s, o));
            case 10:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, t, r, n, a, c) {
        return k.apply(this, arguments)
      })
    }, {
      key: "cmdGetMifareNested1NtAsync",
      value: (g = r(t().mark((function e(r, n, a, c, s, o, i, l, u) {
        var d, f, v, _, m;
        return t().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              for (d = this, (f = new Array(11))[0] = n, f[1] = a, v = 0; v < 6; v++) f[2 + v] = c[v];
              return f[8] = s, f[9] = o, f[10] = i, _ = d.packCommand(r, d.ble_command.mf_get_nested_1nt, f), e.next = 11, d.sendBLEDataWaitAsync(r, _);
            case 11:
              return m = e.sent, e.abrupt("return", d.recvCallback(m, d.ble_command.mf_get_nested_1nt, l, u));
            case 13:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, t, r, n, a, c, s, o, i) {
        return g.apply(this, arguments)
      })
    }, {
      key: "cmdGetMifareNestedAsync",
      value: (p = r(t().mark((function e(r, n, a, c, s, o, i, l, u) {
        var d, f, v, _, m;
        return t().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              for (d = this, (f = new Array(11))[0] = n, f[1] = a, v = 0; v < 6; v++) f[2 + v] = c[v];
              return f[8] = s, f[9] = o, f[10] = i, _ = d.packCommand(r, d.ble_command.mf_get_nested, f), e.next = 11, d.sendBLEDataWaitAsync(r, _);
            case 11:
              return m = e.sent, e.abrupt("return", d.recvCallback(m, d.ble_command.mf_get_nested, l, u));
            case 13:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, t, r, n, a, c, s, o, i) {
        return p.apply(this, arguments)
      })
    }, {
      key: "cmdGetMifareHardNestedAsync",
      value: (b = r(t().mark((function e(r, n, a, c, s, o, i, l, u, d, f, v) {
        var _, m, h, b, p;
        return t().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              for (_ = this, (m = new Array(14))[0] = n, m[1] = a, h = 0; h < 6; h++) m[2 + h] = c[h];
              return m[8] = s, m[9] = o, m[10] = i, m[11] = l, m[12] = u, m[13] = d, b = _.packCommand(r, _.ble_command.mf_get_hardnested, m), e.next = 14, _.sendBLEDataWaitAsync(r, b);
            case 14:
              return p = e.sent, e.abrupt("return", _.recvCallback(p, _.ble_command.mf_get_hardnested, f, v));
            case 16:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, t, r, n, a, c, s, o, i, l, u, d) {
        return b.apply(this, arguments)
      })
    }, {
      key: "cmdSetHFTagDataAsync",
      value: (h = r(t().mark((function e(r, n, a, c, o, i, l) {
        var u, d, f, v, _, m, h, b;
        return t().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              for (u = this, d = new Array(19).fill(0), f = 0; f < a; f++) d[f] = n[f];
              for (d[10] = a, v = (0, s.num_to_bytes)(c), _ = (0, s.num_to_bytes)(o), m = 0; m < 4; m++) d[11 + m] = v[m], d[15 + m] = _[m];
              return h = u.packCommand(r, u.ble_command.mf_setTagData, d), e.next = 10, u.sendBLEDataWaitAsync(r, h);
            case 10:
              return b = e.sent, e.abrupt("return", u.recvCallback(b, u.ble_command.mf_setTagData, i, l));
            case 12:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, t, r, n, a, c, s) {
        return h.apply(this, arguments)
      })
    }, {
      key: "cmdGetHFTagDataAsync",
      value: (m = r(t().mark((function e(r, n, a, c, s, o) {
        var i, l, u, d, f;
        return t().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              for (i = this, l = new Array(12).fill(0), u = 0; u < a; u++) l[u] = n[u];
              return l[10] = a, l[11] = c, d = i.packCommand(r, i.ble_command.mf_getTagData, l), e.next = 8, i.sendBLEDataWaitAsync(r, d);
            case 8:
              return f = e.sent, e.abrupt("return", i.recvCallback(f, i.ble_command.mf_getTagData, s, o));
            case 10:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, t, r, n, a, c) {
        return m.apply(this, arguments)
      })
    }, {
      key: "cmdWriteData2TagAsync",
      value: (_ = r(t().mark((function e(r, n, a, c, s, o, i) {
        var l, u, d, f, v, _;
        return t().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              for (l = this, u = new Array(16).fill(0), d = 0; d < a; d++) u[d] = n[d];
              for (u[10] = a, f = 0; f < 4; f++) u[11 + f] = c[f];
              return u[15] = s, v = l.packCommand(r, l.ble_command.mf_write2Tag, u), e.next = 9, l.sendBLEDataWaitAsync(r, v);
            case 9:
              return _ = e.sent, e.abrupt("return", l.recvCallback(_, l.ble_command.mf_write2Tag, o, i));
            case 11:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, t, r, n, a, c, s) {
        return _.apply(this, arguments)
      })
    }, {
      key: "cmdDetectionTagAsync",
      value: (v = r(t().mark((function e(r, n, a, c, s, o, i, l, u, d) {
        var f, v, _, m, h, b, p;
        return t().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              for (f = this, (v = new Array(22).fill(0))[0] = s, _ = 0; _ < a; _++) v[_ + 1] = n[_];
              for (v[11] = a, m = 0; m < 4; m++) v[12 + m] = c[m];
              if (v[16] = o, v[17] = i, l.length >= 4)
                for (h = 0; h < 4; h++) v[18 + h] = l[h];
              return b = f.packCommand(r, f.ble_command.mf_detectionTag, v), e.next = 12, f.sendBLEDataWaitAsync(r, b);
            case 12:
              return p = e.sent, e.abrupt("return", f.recvCallback(p, f.ble_command.mf_detectionTag, u, d));
            case 14:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, t, r, n, a, c, s, o, i, l) {
        return v.apply(this, arguments)
      })
    }, {
      key: "cmdSimulateTagAsync",
      value: (f = r(t().mark((function e(r, n, a, c, s, o) {
        var i, l, u, d, f, v;
        return t().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              for (i = this, l = new Array(15).fill(0), u = 0; u < a; u++) l[u] = n[u];
              for (l[10] = a, d = 0; d < 4; d++) l[11 + d] = c[d];
              return f = i.packCommand(r, i.ble_command.mf_simulateTag, l), e.next = 8, i.sendBLEDataWaitAsync(r, f);
            case 8:
              return v = e.sent, e.abrupt("return", i.recvCallback(v, i.ble_command.mf_simulateTag, s, o));
            case 10:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, t, r, n, a, c) {
        return f.apply(this, arguments)
      })
    }, {
      key: "cmdSetDataAsync",
      value: (d = r(t().mark((function e(r, n, a, c, o, i) {
        var l, u, d, f, v, _, m, h, b, p, g, k, y, B, L;
        return t().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              if (l = this, u = {
                  ans: -1
                }, !((d = a.length) > 0)) {
                e.next = 39;
                break
              }
              f = Math.floor((d + 127) / 128), v = 0, _ = 0;
            case 7:
              if (!(_ < f)) {
                e.next = 38;
                break
              }
              if (!c.stop) {
                e.next = 12;
                break
              }
              return console.log("终止下载"), u.ans = l.ble_error.data_cancel, e.abrupt("break", 38);
            case 12:
              return m = d - v > 128 ? 128 : d - v, h = a.slice(v, v + m), b = new Array(6), p = (0, s.num_to_bytes)(v), b[0] = n, b[1] = p[0], b[2] = p[1], b[3] = p[2], b[4] = p[3], b[5] = m, g = b.concat(h), console.log(l.ble_command.set_data, g), k = l.packCommand(r, l.ble_command.set_data, g), e.next = 27, l.sendBLEDataWaitAsync(r, k);
            case 27:
              if (y = e.sent, 0 == (B = l.recvCallback(y, l.ble_command.set_data, void 0, i)).ans) {
                e.next = 33;
                break
              }
              return u.ans = l.ble_error.data_set_error, console.log("下发失败", B), e.abrupt("break", 38);
            case 33:
              v += m, "function" == typeof o && (L = Math.floor(100 * v / d), o({
                ans: 0,
                progress: L
              }));
            case 35:
              _++, e.next = 7;
              break;
            case 38:
              v >= d && (u.ans = 0);
            case 39:
              return e.abrupt("return", u);
            case 40:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, t, r, n, a, c) {
        return d.apply(this, arguments)
      })
    }, {
      key: "cmdGetDataAsync",
      value: (u = r(t().mark((function r(n, a, c, o, i, l, u) {
        var d, f, v, _, m, h, b, p, g, k, y, B, L;
        return t().wrap((function(t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              if (d = this, f = {
                  ans: -1,
                  data: []
                }, !((v = c) > 0)) {
                t.next = 40;
                break
              }
              _ = 0, m = 0, h = [];
            case 7:
              if (!d.BLE.connectedDevices[n].connectStatus) {
                t.next = 40;
                break
              }
              if (!i.stop) {
                t.next = 12;
                break
              }
              return console.log("终止读取"), f.ans = d.ble_error.data_cancel, t.abrupt("break", 40);
            case 12:
              return b = v - _ > 128 ? 128 : v - _, p = new Array(6), g = (0, s.num_to_bytes)(_), p[0] = a, p[1] = g[0], p[2] = g[1], p[3] = g[2], p[4] = g[3], p[5] = b, k = d.packCommand(n, d.ble_command.get_data, p), t.next = 24, d.sendBLEDataWaitAsync(n, k);
            case 24:
              if (y = t.sent, 0 == (B = d.recvCallback(y, d.ble_command.get_data, void 0, u)).ans) {
                t.next = 30;
                break
              }
              return console.log("读取失败", B), f.ans = d.ble_error.data_get_error, t.abrupt("break", 40);
            case 30:
              if (m += d.getDataCheckSum(B.data.data), _ += B.data.dataLength, h.push.apply(h, e(B.data.data)), "function" == typeof l && (L = Math.floor(100 * _ / v), l({
                  ans: 0,
                  progress: L
                })), !(_ >= v)) {
                t.next = 38;
                break
              }
              return f.data = h, o === m ? f.ans = 0 : (f.ans = 2, console.log("读取完成,校验失败")), t.abrupt("break", 40);
            case 38:
              t.next = 7;
              break;
            case 40:
              return t.abrupt("return", f);
            case 41:
            case "end":
              return t.stop()
          }
        }), r, this)
      }))), function(e, t, r, n, a, c, s) {
        return u.apply(this, arguments)
      })
    }]), c
  }();
exports.bluetoothUtil = u;