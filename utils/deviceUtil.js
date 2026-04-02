Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.deviceUtil = void 0;
var e = require("../@babel/runtime/helpers/toConsumableArray"),
  a = require("../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../@babel/runtime/helpers/asyncToGenerator"),
  s = require("../@babel/runtime/helpers/classCallCheck"),
  n = require("../@babel/runtime/helpers/createClass"),
  r = require("./util"),
  c = require("./cardUtil"),
  o = require("./fileUtil"),
  d = require("./aes_util"),
  i = getApp(),
  u = function() {
    function u() {
      s(this, u), this.NR_TRAILERS_1k = 16, this.NR_TRAILERS_4k = 40, this._RC4_Key = [21, 133, 146, 129, 41, 80, 103, 135], this.device_model = {
        copykey_mini_pro: 24833,
        copykey_mini_plus: 24834,
        copykey_mini_se: 24835,
        copykey_mini_std: 24836
      }, this.decode_control = {
        readonly: 0,
        readonly_fast: 16,
        readonly_auth: 32,
        decode: 1,
        format: 2
      }, this.decode_message = {
        decode_success: 0,
        readonly_success: 1,
        format_success: 2,
        writecard_success: 3,
        simulate_success: 4,
        detection_success: 5,
        other_hf_tag: 6,
        data_sync_success: 7,
        decode_no_has_all_keys: 17,
        no_read_all_data: 18,
        decode_no_has_keys: 19,
        start: 160,
        test_reading_ID: 161,
        test_readed_ID: 417,
        test_reading_ULEV1: 162,
        test_readed_ULEV1: 418,
        test_reading_MF: 163,
        test_readed_MF: 419,
        test_mf_decoding: 164,
        test_mf_key: 165,
        test_mf_read: 166,
        test_mf_format: 167,
        test_set_data: 168,
        test_write_tag: 169,
        test_temp_keylist: 170,
        write_data_err: 176,
        err_writecard: 177,
        err_simulate: 178,
        is_C50: 192,
        is_thirdTag: 193,
        test_mf_C50: 194,
        test_mf_darkside: 195,
        test_mf_nested: 196,
        is_MagicTags: 197,
        test_mf_thrid_nonce: 198,
        test_mf_static_nonce: 199,
        dt_gotoDetect: 208,
        dt_wait: 209,
        dt_putinTag: 210,
        dt_tagChange: 211,
        dt_countKey: 212,
        dt_authKey: 213,
        dt_readDeviceTag: 214,
        dt_neste: 215,
        dt_getNestedKey: 216,
        dt_testKeys: 217,
        dt_getAllKeys: 218,
        dt_noSupportDetectNested: 219,
        dt_nothirdcard: 222,
        dt_error: 223,
        card_read_err: 224,
        card_uid_change: 225,
        set_data_err: 226,
        format_no_mf: 227,
        no_card_read: 228,
        no_all_decode: 229,
        no_mf_card: 230,
        no_ULEV1_card: 231,
        cancel: 238,
        end: 255
      }, this.decode_key_color = {
        no_control: "#C0C0C0",
        decoding: "#0288DD55",
        get: "#00B26A",
        no_found: "#C42828",
        doing: "#005894"
      }, this.decode_read_color = {
        no_control: "#C6C6C6",
        doing: "#005A90",
        get: "#00C260",
        no_read: "#C52020",
        formating: "#005A9022",
        format_succ: "#218DF9",
        format_fail: "#FFBA23"
      }, this.stop_decoding = {
        stop: !1,
        state: 0
      }, this.ByteMirror = [0, 128, 64, 192, 32, 160, 96, 224, 16, 144, 80, 208, 48, 176, 112, 240, 8, 136, 72, 200, 40, 168, 104, 232, 24, 152, 88, 216, 56, 184, 120, 248, 4, 132, 68, 196, 36, 164, 100, 228, 20, 148, 84, 212, 52, 180, 116, 244, 12, 140, 76, 204, 44, 172, 108, 236, 28, 156, 92, 220, 60, 188, 124, 252, 2, 130, 66, 194, 34, 162, 98, 226, 18, 146, 82, 210, 50, 178, 114, 242, 10, 138, 74, 202, 42, 170, 106, 234, 26, 154, 90, 218, 58, 186, 122, 250, 6, 134, 70, 198, 38, 166, 102, 230, 22, 150, 86, 214, 54, 182, 118, 246, 14, 142, 78, 206, 46, 174, 110, 238, 30, 158, 94, 222, 62, 190, 126, 254, 1, 129, 65, 193, 33, 161, 97, 225, 17, 145, 81, 209, 49, 177, 113, 241, 9, 137, 73, 201, 41, 169, 105, 233, 25, 153, 89, 217, 57, 185, 121, 249, 5, 133, 69, 197, 37, 165, 101, 229, 21, 149, 85, 213, 53, 181, 117, 245, 13, 141, 77, 205, 45, 173, 109, 237, 29, 157, 93, 221, 61, 189, 125, 253, 3, 131, 67, 195, 35, 163, 99, 227, 19, 147, 83, 211, 51, 179, 115, 243, 11, 139, 75, 203, 43, 171, 107, 235, 27, 155, 91, 219, 59, 187, 123, 251, 7, 135, 71, 199, 39, 167, 103, 231, 23, 151, 87, 215, 55, 183, 119, 247, 15, 143, 79, 207, 47, 175, 111, 239, 31, 159, 95, 223, 63, 191, 127, 255]
    }
    var l, f, k, y, b, _, p, h, g, x, m, v, A, D, w, T, S, M, U, I, K, F, C, H, B, N, E, G, R, z, P, O, q, Y, L, V, Q, W, J, j, X, Z, $, ee, ae, te, se, ne, re, ce, oe, de, ie;
    return n(u, [{
      key: "mirror",
      value: function(e) {
        return this.ByteMirror[e]
      }
    }, {
      key: "pn53x_wrap_frame",
      value: function(e, a, t) {
        var s = new Array(225).fill(0),
          n = 0,
          r = 0,
          c = 0,
          o = 0,
          d = a,
          i = 0;
        if (0 == d) return {
          pbtFrame: s,
          szFrameBits: i
        };
        if (d < 9) return {
          pbtFrame: s = e,
          szFrameBits: i = a
        };
        i = a + a / 8;
        for (var u = 0;;) {
          for (n = 0, c = 0; c < 8; c++) {
            n |= (r = this.mirror(e[o])) >> c;
            var l = this.mirror(255 & n);
            s[u] = l, n = r << 8 - c, n |= (1 & t[o]) << 7 - c, u++;
            var f = this.mirror(255 & n);
            if (s[u] = f, o++, d < 9) return {
              pbtFrame: s,
              szFrameBits: i
            };
            d -= 8
          }
          u++
        }
      }
    }, {
      key: "pn53x_unwrap_frame",
      value: function(e, a) {
        var t = new Array(225).fill(0),
          s = new Array(225).fill(0),
          n = 0,
          r = 0,
          c = 0,
          o = 0,
          d = 0,
          i = e,
          u = a,
          l = 0;
        if (0 == u) return {
          pbtRx: t,
          pbtRxPar: s,
          szRxBits: l
        };
        if (u < 9) return {
          pbtRx: t = e,
          pbtRxPar: s,
          szRxBits: l = a
        };
        for (l = a - a / 9;;) {
          for (c = 0; c < 8; c++) {
            if (r = (n = this.mirror(i[d])) << c, r |= (n = this.mirror(i[d + 1])) >> 8 - c, t[o] = this.mirror(255 & r), s[o] = n >> 7 - c & 1, o++, d++, u < 9) return {
              pbtRx: t,
              pbtRxPar: s,
              szRxBits: l
            };
            u -= 9
          }
          d++
        }
      }
    }, {
      key: "hex2MCUUID",
      value: function(e) {
        var a = "";
        if (e && e.length >= 12) {
          for (var t = new Array(4), s = new Array(4), n = new Array(4), c = 0; c < 4; c++) t[c] = e[c], s[c] = e[4 + c], n[c] = e[8 + c];
          a = (0, r.hex2string)(t, 4) + "-" + (0, r.hex2string)(s, 4) + "-" + (0, r.hex2string)(n, 4)
        }
        return a
      }
    }, {
      key: "is_has_all_password",
      value: function(e) {
        for (var a = 0; a < e.num_sectors; a++)
          for (var t = 0; t < 2; t++)
            if (null === e.data[a] || null === e.data[a].foundKey || !e.data[a].foundKey[t]) return !1;
        return !0
      }
    }, {
      key: "find_exploit_sector",
      value: function(e) {
        if (this.is_has_all_password(e)) return -1;
        for (var a = 0; a < e.num_sectors; a++)
          for (var t = 0; t < 2; t++)
            if (null != e.data[a] && null != e.data[a].foundKey && e.data[a].foundKey[t]) return a;
        return -2
      }
    }, {
      key: "GetDeviceDate",
      value: function(e) {
        var a = 0;
        return e && e.length >= 6 && (a = 256 * e[5] + e[4]), a
      }
    }, {
      key: "GetDeviceTEID",
      value: function(e) {
        var a = 0;
        return e && e.length >= 6 && (a = 256 * e[0] + e[1]), a
      }
    }, {
      key: "GetDeviceModeName",
      value: function(e) {
        var a = "";
        if (e && e.length >= 6) switch (256 * e[0] + e[1]) {
          case this.device_model.copykey_mini_pro:
            a = "CopyKEY MINI Pro";
            break;
          case this.device_model.copykey_mini_plus:
            a = "CopyKEY MINI Plus";
            break;
          case this.device_model.copykey_mini_se:
            a = "CopyKEY MINI SE";
            break;
          case this.device_model.copykey_mini_std:
            a = "CopyKEY MINI";
            break;
          default:
            a = "Unknown"
        }
        return a
      }
    }, {
      key: "GetVersionString",
      value: function(e) {
        if (e && e.length >= 6) {
          var a = e[2],
            t = e[3],
            s = 256 * e[5] + e[4],
            n = s >> 9 & 127,
            r = s >> 5 & 15,
            c = 31 & s;
          return ("00" + a.toString(16)).slice(-2) + "." + ("00" + t.toString(16)).slice(-2) + "." + ("00" + n.toString(10)).slice(-2) + ("00" + r.toString(10)).slice(-2) + ("00" + c.toString(10)).slice(-2)
        }
        return ""
      }
    }, {
      key: "GetDeviceVersion",
      value: function(e) {
        var a = "";
        e && e.length >= 6 && (a = "PID:" + ("00" + e[0].toString(16)).slice(-2) + ("00" + e[1].toString(16)).slice(-2) + "  " + ("VER:" + this.GetVersionString(e)));
        return a
      }
    }, {
      key: "DeviceUpdateAsync",
      value: (ie = t(a().mark((function e(t, s, n, r) {
        var c, o, d, u, l;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              if (c = {
                  ans: -1
                }, e.prev = 1, !(s && s.length > 0)) {
                e.next = 16;
                break
              }
              return o = i.globalData.data.bluetooth.getDataCheckSum(s), console.log(s.length, o), e.next = 7, i.globalData.data.bluetooth.cmdSetDeviceUpdateDataAsync(t, s.length, o, r);
            case 7:
              if (0 !== (d = e.sent).ans) {
                e.next = 15;
                break
              }
              return e.next = 11, i.globalData.data.bluetooth.cmdSetDataAsync(t, d.data, s, n, r);
            case 11:
              0 === (u = e.sent).ans ? (l = function(e) {
                0 != e.ans && "function" == typeof r && r({
                  ans: 238
                })
              }, "function" == typeof r && r({
                ans: 1,
                progress: 100
              }), i.globalData.data.bluetooth.cmdDeviceRestartAsync(t, 0, l), c.ans = 0) : c.ans = u.ans, e.next = 16;
              break;
            case 15:
              c.ans = d.ans;
            case 16:
              e.next = 21;
              break;
            case 18:
              e.prev = 18, e.t0 = e.catch(1), c.ans = e.t0;
            case 21:
              return e.abrupt("return", c);
            case 22:
            case "end":
              return e.stop()
          }
        }), e, null, [
          [1, 18]
        ])
      }))), function(e, a, t, s) {
        return ie.apply(this, arguments)
      })
    }, {
      key: "SelectMifareCardAsync",
      value: (de = t(a().mark((function e(t, s, n) {
        var r, c, o;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              r = {
                ans: -1,
                data: {}
              }, c = 0;
            case 2:
              if (!(c < 1)) {
                e.next = 17;
                break
              }
              return e.next = 5, i.globalData.data.bluetooth.cmdSelectMifareCardAsync(t, s, n);
            case 5:
              if (0 !== (o = e.sent).ans) {
                e.next = 10;
                break
              }
              return e.abrupt("return", o);
            case 10:
              if (o.ans !== i.globalData.data.bluetooth.ble_ans.err_uid_change) {
                e.next = 12;
                break
              }
              throw this.decode_message.card_uid_change;
            case 12:
              r.ans = o.ans, r.data = o.data;
            case 14:
              c++, e.next = 2;
              break;
            case 17:
              return e.abrupt("return", r);
            case 18:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, a, t) {
        return de.apply(this, arguments)
      })
    }, {
      key: "ReadMifareCardAsync",
      value: (oe = t(a().mark((function e(t, s) {
        var n, r, c;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return n = this, r = {
                ans: -1,
                data: {}
              }, e.prev = 2, n.SetDecoding(t, !0), e.next = 6, n.SelectMifareCardAsync(t, null, void 0);
            case 6:
              if (0 !== (c = e.sent).ans) {
                e.next = 14;
                break
              }
              return e.next = 10, n.TestHideSectorsAsync(t, c.data, void 0);
            case 10:
              if (!(c.data.num_sectors <= 0)) {
                e.next = 13;
                break
              }
              throw console.log("非IC卡"), n.decode_message.no_mf_card;
            case 13:
              r = c;
            case 14:
              e.next = 19;
              break;
            case 16:
              e.prev = 16, e.t0 = e.catch(2), r.ans = e.t0;
            case 19:
              return n.SetDecoded(), e.abrupt("return", r);
            case 21:
            case "end":
              return e.stop()
          }
        }), e, this, [
          [2, 16]
        ])
      }))), function(e, a) {
        return oe.apply(this, arguments)
      })
    }, {
      key: "TestULEV1Async",
      value: (ce = t(a().mark((function t(s, n, r, o) {
        var d, u, l, f, k, y, b, _, p, h, g, x, m, v, A, D, w, T, S, M, U, I, K, F, C, H;
        return a().wrap((function(a) {
          for (;;) switch (a.prev = a.next) {
            case 0:
              return d = this, u = n.data, l = new c.cardUtil, f = {
                ans: -1,
                data: {
                  signature: [],
                  verlength: 0,
                  version: [],
                  num_blocks: 0,
                  data: []
                }
              }, k = {
                data: {
                  type: l.card_type.ULEV1,
                  control: 0,
                  data: u,
                  verlength: 0,
                  version: [],
                  progress: 0
                }
              }, a.next = 7, d.SelectMifareCardAsync(s, u.UID, void 0);
            case 7:
              if (0 !== a.sent.ans) {
                a.next = 109;
                break
              }
              return a.next = 11, d.MifareTransmissionShortAsync(s, 60, 0);
            case 11:
              if (!(0 === (y = a.sent).ans && y.data.length > 32)) {
                a.next = 16;
                break
              }
              f.data.signature = y.data.data.slice(0, 32), a.next = 21;
              break;
            case 16:
              return a.next = 18, d.SelectMifareCardAsync(s, u.UID, void 0);
            case 18:
              if (0 == a.sent.ans) {
                a.next = 21;
                break
              }
              throw d.decode_message.card_read_err;
            case 21:
              return b = [96], a.next = 24, i.globalData.data.bluetooth.cmdTransmissionDataAsync(s, 0, 5, b, null);
            case 24:
              if (0 !== (_ = a.sent).ans) {
                a.next = 72;
                break
              }
              k.data.control = 0, k.data.verlength = _.data.length, k.data.version = _.data.data, d.SendMessage(d.decode_message.test_readed_ULEV1, k, o), p = _.data.length, f.data.verlength = p, f.data.version = _.data.data, h = l.get_ulev1_version(p, f.data.version), g = 0, x = 0;
            case 36:
              if (!(x < l.UL_TYPES_ARRAY.length)) {
                a.next = 43;
                break
              }
              if (!(h & l.UL_TYPES_ARRAY[x])) {
                a.next = 40;
                break
              }
              return g = l.UL_MEMORY_ARRAY[x], a.abrupt("break", 43);
            case 40:
              x++, a.next = 36;
              break;
            case 43:
              if (f.data.num_blocks = g + 1, !r) {
                a.next = 69;
                break
              }
              m = 0, v = 0;
            case 47:
              if (!(v < f.data.num_blocks)) {
                a.next = 69;
                break
              }
              if (!d.IsStop(s)) {
                a.next = 50;
                break
              }
              throw d.decode_message.cancel;
            case 50:
              return a.next = 52, d.MifareTransmissionShortAsync(s, 48, v);
            case 52:
              if (!(0 === (A = a.sent).ans && A.data.length >= 16)) {
                a.next = 58;
                break
              }
              w = A.data.data.slice(0, 4), (D = f.data.data).push.apply(D, e(w)), a.next = 64;
              break;
            case 58:
              return a.next = 60, d.SelectMifareCardAsync(s, u.UID, void 0);
            case 60:
              if (0 == a.sent.ans) {
                a.next = 63;
                break
              }
              throw this.decode_message.card_read_err;
            case 63:
              return a.abrupt("break", 69);
            case 64:
              T = Math.floor(100 * (v + 1) / f.data.num_blocks), m != T && (m = T, k.data.control = 1, k.data.progress = m, d.SendMessage(d.decode_message.test_readed_ULEV1, k, o));
            case 66:
              v++, a.next = 47;
              break;
            case 69:
              f.ans = 0, a.next = 107;
              break;
            case 72:
              return a.next = 74, d.SelectMifareCardAsync(s, u.UID, void 0);
            case 74:
              if (0 == a.sent.ans) {
                a.next = 77;
                break
              }
              throw this.decode_message.card_read_err;
            case 77:
              S = 0, M = 256, U = 0;
            case 80:
              if (!(U < M)) {
                a.next = 106;
                break
              }
              if (!d.IsStop(s)) {
                a.next = 83;
                break
              }
              throw d.decode_message.cancel;
            case 83:
              return a.next = 85, d.MifareTransmissionShortAsync(s, 48, U);
            case 85:
              if (!(0 === (I = a.sent).ans && I.data.length >= 16)) {
                a.next = 93;
                break
              }
              console.log(I.data), S++, F = I.data.data.slice(0, 4), (K = f.data.data).push.apply(K, e(F)), a.next = 99;
              break;
            case 93:
              return a.next = 95, d.SelectMifareCardAsync(s, u.UID, void 0);
            case 95:
              if (0 == a.sent.ans) {
                a.next = 98;
                break
              }
              throw this.decode_message.card_read_err;
            case 98:
              return a.abrupt("break", 106);
            case 99:
              C = 4 * S, k.data.control = 3, k.data.progress = C, d.SendMessage(d.decode_message.test_readed_ULEV1, k, o);
            case 103:
              U++, a.next = 80;
              break;
            case 106:
              S >= 15 && (f.ans = 0, f.data.num_blocks = S, f.data.verlength = 10, (H = new Array(10)).fill(0), H[0] = 0, H[1] = 0, H[2] = 0, H[3] = 0, H[4] = 0, H[5] = 0, H[6] = 0, H[7] = 3, f.data.version = H, console.log(f));
            case 107:
              a.next = 110;
              break;
            case 109:
              throw this.decode_message.card_read_err;
            case 110:
              return a.abrupt("return", f);
            case 111:
            case "end":
              return a.stop()
          }
        }), t, this)
      }))), function(e, a, t, s) {
        return ce.apply(this, arguments)
      })
    }, {
      key: "SetNdefULEV1TagAsync",
      value: (re = t(a().mark((function e(t, s, n, r) {
        var c, o, d, u, l, f, k, y, b;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return c = this, o = {
                ans: -1,
                data: {}
              }, d = s.data, e.next = 5, c.SelectMifareCardAsync(t, d.UID, void 0);
            case 5:
              if (0 !== e.sent.ans) {
                e.next = 32;
                break
              }
              if (u = 0, l = Math.ceil(n.length / 4), !(d.data.num_blocks - 5 >= l)) {
                e.next = 31;
                break
              }(f = new Array(6))[0] = 162, k = 4;
            case 13:
              if (!(k < 4 + l)) {
                e.next = 24;
                break
              }
              for (y = n.slice(4 * (k - 4), 4 * (k - 4) + 4), f[1] = k, b = 0; b < 4; b++) f[2 + b] = y[b];
              return e.next = 19, i.globalData.data.bluetooth.cmdTransmissionDataAsync(t, 0, 5, f, null);
            case 19:
              0 === e.sent.ans && u++;
            case 21:
              k++, e.next = 13;
              break;
            case 24:
              if (u !== l) {
                e.next = 28;
                break
              }
              o.ans = c.decode_message.writecard_success, e.next = 29;
              break;
            case 28:
              throw c.decode_message.err_writecard;
            case 29:
              e.next = 32;
              break;
            case 31:
              throw c.decode_message.err_writecard;
            case 32:
              return e.abrupt("return", o);
            case 33:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, a, t, s) {
        return re.apply(this, arguments)
      })
    }, {
      key: "SetNdefMifareTagAsync",
      value: (ne = t(a().mark((function t(s, n, r, o) {
        var d, u, l, f, k, y, b, _, p, h, g, x, m, v, A, D, w, T, S;
        return a().wrap((function(a) {
          for (;;) switch (a.prev = a.next) {
            case 0:
              return d = this, u = new c.cardUtil, l = {
                ans: -1,
                data: {}
              }, f = n.data, a.next = 6, d.SelectMifareCardAsync(s, f.UID, void 0);
            case 6:
              if (0 !== a.sent.ans) {
                a.next = 62;
                break
              }
              return k = [255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 160, 161, 162, 163, 164, 165], a.next = 11, d.MifareAuthBatchAsync(s, 0, 0, k, !0, o);
            case 11:
              if (0 !== a.sent.ans) {
                a.next = 61;
                break
              }
              return a.next = 15, i.globalData.data.bluetooth.cmdMifareReadBlockAsync(s, 0, null);
            case 15:
              if (0 !== (y = a.sent).ans) {
                a.next = 58;
                break
              }
              for (b = function(e) {}, (_ = []).push.apply(_, e(y.data)), _.push.apply(_, [20, 1, 3, 225, 3, 225, 3, 225, 3, 225, 3, 225, 3, 225, 3, 225]), _.push.apply(_, [3, 225, 3, 225, 3, 225, 3, 225, 3, 225, 3, 225, 3, 225, 3, 225]), _.push.apply(_, [160, 161, 162, 163, 164, 165, 120, 119, 136, 193, 255, 255, 255, 255, 255, 255]), p = new Array(16).fill(0), (h = new Array(16).fill(255))[0] = 211, h[1] = 247, h[2] = 211, h[3] = 247, h[4] = 211, h[5] = 247, h[6] = 127, h[7] = 7, h[8] = 136, h[9] = 64, g = 0, x = f.num_sectors, m = 1; m < x; m++)
                for (v = u.numberOfBlocks(m), A = 0; A < v; A++)
                  if (A + 1 === v) _.push.apply(_, e(h));
                  else if (D = new Array(16).fill(0), g < r.length) {
                for (w = 0; w < 16 && g < r.length; w++) D[w] = r[g++];
                _.push.apply(_, e(D))
              } else _.push.apply(_, e(p));
              return a.next = 40, d.SendHFTagDataAsync(s, n, _, 0, b);
            case 40:
              if (0 !== (T = a.sent).ans) {
                a.next = 55;
                break
              }
              return console.log(n.data.UID, n.data.size), a.next = 45, i.globalData.data.bluetooth.cmdWriteData2TagAsync(s, n.data.UID, n.data.size, T.hash, 0, null);
            case 45:
              if (S = a.sent, console.log("写卡完成", S), 0 !== S.ans) {
                a.next = 52;
                break
              }
              l.ans = d.decode_message.writecard_success, l.data = S.data, a.next = 53;
              break;
            case 52:
              throw d.decode_message.err_writecard;
            case 53:
              a.next = 56;
              break;
            case 55:
              throw d.decode_message.err_writecard;
            case 56:
              a.next = 59;
              break;
            case 58:
              throw d.decode_message.err_writecard;
            case 59:
              a.next = 62;
              break;
            case 61:
              throw d.decode_message.err_writecard;
            case 62:
              return a.abrupt("return", l);
            case 63:
            case "end":
              return a.stop()
          }
        }), t, this)
      }))), function(e, a, t, s) {
        return ne.apply(this, arguments)
      })
    }, {
      key: "TestHideSectorsAsync",
      value: (se = t(a().mark((function e(t, s, n) {
        var r, o, d, u, l, f, k, y, b, _, p, h;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              r = this, o = {
                data: {
                  mf: s,
                  sector: -1
                }
              }, d = new c.cardUtil, u = r.NR_TRAILERS_4k, l = 0, f = 0, k = 0;
            case 7:
              if (!(k < u)) {
                e.next = 38;
                break
              }
              if (!r.IsStop(t)) {
                e.next = 10;
                break
              }
              throw r.decode_message.cancel;
            case 10:
              return y = d.sectorToFirstBlock(k) + d.numberOfBlocks(k) - 1, e.next = 13, i.globalData.data.bluetooth.cmdGetTagNonces(t, y, 0, 0, 0 === k ? 0 : 1, void 0);
            case 13:
              if (0 === e.sent.ans) {
                e.next = 31;
                break
              }
              return e.next = 17, r.SelectMifareCardAsync(t, s.UID, void 0);
            case 17:
              if (0 == e.sent.ans) {
                e.next = 20;
                break
              }
              throw this.decode_message.card_read_err;
            case 20:
              if (!(++f > 3)) {
                e.next = 29;
                break
              }
              return e.next = 24, r.MifareTransmissionShortAsync(t, 96, y);
            case 24:
              if (0 == (b = e.sent).ans && 4 == b.data.length) {
                e.next = 27;
                break
              }
              return e.abrupt("break", 38);
            case 27:
              e.next = 31;
              break;
            case 29:
              return k--, e.abrupt("continue", 35);
            case 31:
              f = 0, l++, o.data.sector = k, r.SendMessage(r.decode_message.test_readed_MF, o, n);
            case 35:
              k++, e.next = 7;
              break;
            case 38:
              if (s.num_sectors = l, l > 0)
                for (s.data = new Array(l), _ = 0; _ < l; _++) p = d.numberOfBlocks(_), h = {
                  sector: _,
                  foundKey: [!1, !1],
                  keys: new Array(2),
                  data: new Array(p)
                }, s.data[_] = h;
              return e.abrupt("return", s);
            case 41:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, a, t) {
        return se.apply(this, arguments)
      })
    }, {
      key: "MifareTransmissionShortAsync",
      value: (te = t(a().mark((function e(t, s, n) {
        var r;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return (r = new Array(2))[0] = s, r[1] = n, e.next = 7, i.globalData.data.bluetooth.cmdTransmissionDataAsync(t, 0, 5, r, null);
            case 7:
              return e.abrupt("return", e.sent);
            case 8:
            case "end":
              return e.stop()
          }
        }), e)
      }))), function(e, a, t) {
        return te.apply(this, arguments)
      })
    }, {
      key: "MifareTransmissionBitAsync",
      value: (ae = t(a().mark((function e(t, s, n) {
        var r, c;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return (r = new Array(1))[0] = s[0], c = n, e.next = 6, i.globalData.data.bluetooth.cmdTransmissionDataAsync(t, c, 4, r, null);
            case 6:
              return e.abrupt("return", e.sent);
            case 7:
            case "end":
              return e.stop()
          }
        }), e)
      }))), function(e, a, t) {
        return ae.apply(this, arguments)
      })
    }, {
      key: "TransmissionDataAsync",
      value: (ee = t(a().mark((function e(t, s, n, r, c, o) {
        var d, u, l, f, k, y, b, _, p, h, g;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              if (d = {
                  ans: -1,
                  data: {
                    data: [],
                    parity: [],
                    sizeBits: 0
                  }
                }, u = this.pn53x_wrap_frame(s, n, r), !((l = u.szFrameBits) > 0)) {
                e.next = 12;
                break
              }
              return k = l / 8 + (0 == (f = l % 8) ? 0 : 1), y = u.pbtFrame.slice(0, k), e.next = 9, i.globalData.data.bluetooth.cmdTransmissionDataAsync(t, f, c, y, null);
            case 9:
              b = e.sent, d.ans = b.ans, 0 === b.ans && (_ = b.data.length, p = b.data.frame, l = 8 * (_ - (0 == (f = 7 & p) ? 0 : 1)) + f, h = this.pn53x_unwrap_frame(b.data.data, l), d.data.sizeBits = h.szRxBits, h.szRxBits > 0 && (g = Math.ceil(h.szRxBits / 8), d.data.data = h.pbtRx.slice(0, g), d.data.parity = h.pbtRxPar.slice(0, g)));
            case 12:
              return e.abrupt("return", d);
            case 13:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, a, t, s, n, r) {
        return ee.apply(this, arguments)
      })
    }, {
      key: "GetMifareHardNestedAsync",
      value: ($ = t(a().mark((function e(t, s, n, r, c, o, d, u, l, f, k) {
        var y, b;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return y = {
                ans: -1,
                data: []
              }, e.next = 3, i.globalData.data.bluetooth.cmdGetMifareHardNestedAsync(t, s, n, r, c, o, d, u, l, f);
            case 3:
              if (0 !== (b = e.sent).ans) {
                e.next = 8;
                break
              }
              return e.next = 7, i.globalData.data.bluetooth.cmdGetDataAsync(t, b.data.taskID, b.data.dataSize, b.data.checkValue, this.stop_decoding, null);
            case 7:
              y = e.sent;
            case 8:
              return e.abrupt("return", y);
            case 9:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, a, t, s, n, r, c, o, d, i, u) {
        return $.apply(this, arguments)
      })
    }, {
      key: "GetMifareDecodeTpyeAsync",
      value: (Z = t(a().mark((function e(t, s, n, c, o, d, u) {
        var l, f, k, y, b, _, p, h, g, x;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              l = -1, f = 0, k = 0, y = 0, b = 0, _ = 0, p = 0;
            case 7:
              if (!(p < 6)) {
                e.next = 15;
                break
              }
              return e.next = 10, i.globalData.data.bluetooth.cmdGetMifareNested1NtAsync(t, s, n, c, o, d, p + 1, u);
            case 10:
              0 === (h = e.sent).ans && (g = (0, r.bytes_to_num)(h.data.nt), x = (0, r.bytes_to_num)(h.data.nt_nested), b !== g ? b = g : k++, _ !== x ? _ = x : y++, f++);
            case 12:
              p++, e.next = 7;
              break;
            case 15:
              if (!(f <= 0)) {
                e.next = 17;
                break
              }
              return e.abrupt("return", -1);
            case 17:
              return l = k < 5 && y < 5 ? 1 : 5 == k && 0 == y ? 2 : 5 == k && 5 == y ? 3 : 4, e.abrupt("return", l);
            case 19:
            case "end":
              return e.stop()
          }
        }), e)
      }))), function(e, a, t, s, n, r, c) {
        return Z.apply(this, arguments)
      })
    }, {
      key: "isThirdTagAsync",
      value: (X = t(a().mark((function e(t, s, n, r, c, o, d, u, l) {
        var f, k, y, b, _, p, h;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return e.next = 2, i.globalData.data.bluetooth.cmdGetMifareHardNestedAsync(t, s, n, r, c, o, 1, 0, d, u, l);
            case 2:
              if (!(0 === (f = e.sent).ans && f.data.dataSize > 0)) {
                e.next = 13;
                break
              }
              return e.next = 6, i.globalData.data.bluetooth.cmdGetDataAsync(t, f.data.taskID, f.data.dataSize, f.data.checkValue, this.stop_decoding, null);
            case 6:
              if (!(0 === (k = e.sent).ans && k.data.length > 0)) {
                e.next = 13;
                break
              }
              for (y = !0, b = Math.floor(k.data.length / 5), _ = 0, p = 0; p < b; p++) h = k.data.slice(5 * p, 5 * p + 5), 0 === p ? _ = h : JSON.stringify(_) != JSON.stringify(h) && (y = !1);
              return e.abrupt("return", y ? 1 : 0);
            case 13:
              return e.abrupt("return", -1);
            case 14:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, a, t, s, n, r, c, o, d) {
        return X.apply(this, arguments)
      })
    }, {
      key: "GetThirdTagEncryptNoncesAsync",
      value: (j = t(a().mark((function e(t, s, n, r, c, o, d, u) {
        var l, f, k;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return l = {
                ans: -1,
                nonce: [],
                parity: 0
              }, e.next = 3, i.globalData.data.bluetooth.cmdGetMifareHardNestedAsync(t, s, n, r, c, o, 1, 0, 0, 1, null);
            case 3:
              if (!(0 === (f = e.sent).ans && f.data.dataSize > 0)) {
                e.next = 9;
                break
              }
              return e.next = 7, i.globalData.data.bluetooth.cmdGetDataAsync(t, f.data.taskID, f.data.dataSize, f.data.checkValue, this.stop_decoding, null);
            case 7:
              0 === (k = e.sent).ans && k.data.length > 0 && (l.ans = 0, l.nonce = k.data.slice(0, 4), l.parity = k.data[4]);
            case 9:
              return e.abrupt("return", l);
            case 10:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, a, t, s, n, r, c, o) {
        return j.apply(this, arguments)
      })
    }, {
      key: "DetectionAuthAsync",
      value: (J = t(a().mark((function e(t, s, n, o, d, u) {
        var l, f, k, y, b, _;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              l = new c.cardUtil, f = this, k = {
                ans: -1,
                data: {}
              }, y = !1;
            case 4:
              if (!f.IsStop(t)) {
                e.next = 7;
                break
              }
              throw f.decode_message.cancel;
            case 7:
              return e.prev = 7, e.next = 10, f.SelectMifareCardAsync(t, s.data.UID, void 0);
            case 10:
              if (0 !== e.sent.ans) {
                e.next = 28;
                break
              }
              return e.next = 14, this.MifareAuthBatchAsync(t, n, o, d, !0, u);
            case 14:
              if (0 !== (b = e.sent).ans) {
                e.next = 24;
                break
              }
              return _ = l.blockToSector(n), s.data.data[_].foundKey[o] = !0, s.data.data[_].keys[o] = b.key, e.next = 21, f.TestKnowKeysAsync(t, s.data, b.key, u);
            case 21:
              y = !0, e.next = 25;
              break;
            case 24:
              y = !1;
            case 25:
              return e.abrupt("break", 46);
            case 28:
              k.ans = 0, f.SendMessage(f.decode_message.dt_authKey, k, u), console.log("请放上需要侦测的IC卡");
            case 31:
              e.next = 42;
              break;
            case 33:
              if (e.prev = 33, e.t0 = e.catch(7), e.t0 !== this.decode_message.card_uid_change) {
                e.next = 41;
                break
              }
              k.ans = 0, f.SendMessage(f.decode_message.dt_tagChange, k, u), console.log("卡片变更，请放上需要侦测的IC卡"), e.next = 42;
              break;
            case 41:
              throw e.t0;
            case 42:
              return e.next = 44, (0, r.sleep)(1e3);
            case 44:
              e.next = 4;
              break;
            case 46:
              return e.next = 48, i.globalData.data.bluetooth.cmdAntennaSwitchAsync(t, 0, null);
            case 48:
              return e.abrupt("return", y);
            case 49:
            case "end":
              return e.stop()
          }
        }), e, this, [
          [7, 33]
        ])
      }))), function(e, a, t, s, n, r) {
        return J.apply(this, arguments)
      })
    }, {
      key: "DetectionReadDeviceTagAsync",
      value: (W = t(a().mark((function e(t, s, n, r) {
        var o, d, i, u, l, f, k, y, b, _, p, h, g, x, m;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              if (o = this, d = 0, i = new c.cardUtil, !s.has) {
                e.next = 8;
                break
              }
              return e.next = 6, o.GetHFTagDataAsync(t, s.data.UID, s.data.size, 2, n, r);
            case 6:
              if (0 === (u = e.sent).ans)
                for (l = u.data.slice(32), f = l.length, k = f / 16, y = i.blockToSector(k), b = s.data.data.length, y = y > b ? b : y, _ = 0; _ < y; _++)
                  if ((p = s.data.data[_]).foundKey[0] || p.foundKey[1])
                    for (h = i.sectorToFirstBlock(_), g = i.numberOfBlocks(_), x = 0; x < g - 1; x++) p.data[x] && p.data[x].length > 0 && (m = l.slice(16 * (h + x), 16 * (h + x) + 16), JSON.stringify(m) != JSON.stringify(p.data[x]) && (p.data[x] = m, d++));
            case 8:
              return s.isGDM = d > 0, e.abrupt("return", d);
            case 10:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, a, t, s) {
        return W.apply(this, arguments)
      })
    }, {
      key: "DefaultTagData",
      value: function(e, a, t) {
        var s = new c.cardUtil,
          n = {
            size: e.size,
            UID: e.uid,
            ATQA: e.ATQA[0] << 8 | e.ATQA[1],
            SAK: e.sak,
            num_sectors: e.num_sectors,
            data: [],
            card_data: [],
            card_hash: []
          };
        n.data = new Array(n.num_sectors);
        for (var r = 0; r < n.num_sectors; r++) {
          var o = s.numberOfBlocks(r),
            d = {
              sector: r,
              foundKey: [!1, !1],
              keys: new Array(2),
              data: new Array(o)
            };
          n.data[r] = d
        }
        a.has = !0, a.data = n, a.type = s.card_type.MF;
        for (var i = {
            data: {
              mf: n,
              sector: -1
            }
          }, u = 0; u < n.num_sectors; u++) i.data.sector = u, this.SendMessage(this.decode_message.test_readed_MF, i, t);
        return !0
      }
    }, {
      key: "DetectionReadTagAsync",
      value: (Q = t(a().mark((function e(t, s, n, o) {
        var d, u, l, f, k, y, b, _;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              d = !1, u = new c.cardUtil, f = {
                ans: -1,
                data: {
                  control: 0,
                  data: {}
                }
              }, (l = this).SendMessage(l.decode_message.test_reading_MF, f, o), k = null, s.has && (k = s.data.UID);
            case 7:
              if (!l.IsStop(t)) {
                e.next = 10;
                break
              }
              throw l.decode_message.cancel;
            case 10:
              return e.prev = 10, e.next = 13, l.SelectMifareCardAsync(t, k, void 0);
            case 13:
              if (0 !== (y = e.sent).ans) {
                e.next = 39;
                break
              }
              if (s.has) {
                e.next = 25;
                break
              }
              return e.next = 18, l.TestHideSectorsAsync(t, y.data, o);
            case 18:
              if (!(y.data.num_sectors <= 0)) {
                e.next = 21;
                break
              }
              throw console.log("非IC卡"), l.decode_message.no_mf_card;
            case 21:
              return e.next = 23, l.SelectMifareCardAsync(t, y.data.UID, void 0);
            case 23:
              if (0 === e.sent.ans)
                for (s.has = !0, s.data = y.data, s.type = u.card_type.MF, s.detection = new Array(s.data.num_sectors), b = 0; b < s.data.num_sectors; b++) s.detection[b] = new Array(2);
            case 25:
              if (!s.has) {
                e.next = 36;
                break
              }
              return e.next = 28, l.DoDecodeingMifareAsync(t, s.data, n ? l.decode_control.readonly_auth : l.decode_control.readonly_fast, [], [], o);
            case 28:
              if ((_ = e.sent) !== this.decode_message.decode_success && _ !== this.decode_message.is_MagicTags) {
                e.next = 34;
                break
              }
              return e.next = 32, l.ReadMifareTagAsync(t, s.data, !!n, o);
            case 32:
              e.next = 35;
              break;
            case 34:
              throw _;
            case 35:
              d = !0;
            case 36:
              return e.abrupt("break", 57);
            case 39:
              f.ans = 0, l.SendMessage(l.decode_message.dt_putinTag, f, o), console.log("请放上需要侦测的IC卡");
            case 42:
              e.next = 53;
              break;
            case 44:
              if (e.prev = 44, e.t0 = e.catch(10), e.t0 !== this.decode_message.card_uid_change) {
                e.next = 52;
                break
              }
              f.ans = 0, l.SendMessage(l.decode_message.dt_tagChange, f, o), console.log("卡片变更，请放上需要侦测的IC卡"), e.next = 53;
              break;
            case 52:
              throw e.t0;
            case 53:
              return e.next = 55, (0, r.sleep)(1e3);
            case 55:
              e.next = 7;
              break;
            case 57:
              return e.next = 59, i.globalData.data.bluetooth.cmdAntennaSwitchAsync(t, 0, null);
            case 59:
              return e.abrupt("return", d);
            case 60:
            case "end":
              return e.stop()
          }
        }), e, this, [
          [10, 44]
        ])
      }))), function(e, a, t, s) {
        return Q.apply(this, arguments)
      })
    }, {
      key: "TestNestedAuthexAsync",
      value: (V = t(a().mark((function e(t, s, n, u, l, f, k) {
        var y, b, _, p, h, g, x, m, v, A, D, w, T, S, M, U, I, K, F, C, H, B, N;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              if (y = new c.cardUtil, b = this, _ = {
                  ans: -1,
                  data: {}
                }, p = (0, r.getUUID)(), h = 0, !((g = b.find_exploit_sector(s.data)) >= 0)) {
                e.next = 134;
                break
              }
              x = y.sectorToFirstBlock(g) + y.numberOfBlocks(g) - 1, m = 0, v = [], s.data.data[g].foundKey[0] ? (m = 0, v = s.data.data[g].keys[0]) : s.data.data[g].foundKey[1] && (m = 1, v = s.data.data[g].keys[1]);
            case 11:
              if (!b.IsStop(t)) {
                e.next = 14;
                break
              }
              throw b.decode_message.cancel;
            case 14:
              return e.prev = 14, e.next = 17, b.SelectMifareCardAsync(t, s.data.UID, void 0);
            case 17:
              if (0 !== e.sent.ans) {
                e.next = 116;
                break
              }
              if (_.ans = 0, b.SendMessage(b.decode_message.dt_neste, _, k), 0 !== s.isThridTag) {
                e.next = 35;
                break
              }
              return e.next = 24, i.globalData.data.bluetooth.cmdGetMifareNestedAsync(t, x, m, v, n, u, 1, null);
            case 24:
              if (4 !== e.sent.ans) {
                e.next = 33;
                break
              }
              return e.next = 28, b.isThirdTagAsync(t, x, m, v, n, u, 1, 6, k);
            case 28:
              if (1 === e.sent) {
                e.next = 31;
                break
              }
              throw b.decode_message.dt_nothirdcard;
            case 31:
              e.next = 34;
              break;
            case 33:
              throw b.decode_message.dt_nothirdcard;
            case 34:
              s.isThridTag = 1;
            case 35:
              if (A = i.globalData.data.bluetooth.GetDeviceInfo(t).version, D = this.GetDeviceTEID(A), b.SupportDetectionNested(D)) {
                e.next = 40;
                break
              }
              throw console.log("不支持嵌套认证"), b.decode_message.dt_noSupportDetectNested;
            case 40:
              return e.next = 42, b.GetThirdTagEncryptNoncesAsync(t, x, m, v, n, u, 0, k);
            case 42:
              if (0 !== (w = e.sent).ans) {
                e.next = 111;
                break
              }
              if (T = y.blockToSector(n), !(s.detection[T] && s.detection[T][u] && s.detection[T][u].has)) {
                e.next = 105;
                break
              }
              return e.next = 48, b.TransmissionDataAsync(t, l, 64, f, 0, k);
            case 48:
              if (0 !== (S = e.sent).ans) {
                e.next = 101;
                break
              }
              return M = {
                taskUuid: p,
                MCUUID: i.globalData.data.bluetooth.GetDeviceInfo(t).MCUUID,
                uid: s.data.UID.slice(s.data.UID.length - 4),
                control: 0,
                start: 0,
                end: 65535,
                nt_enc: s.detection[T][u].nonce,
                nt_parity: s.detection[T][u].parity,
                nr_ar_enc: l,
                nr_ar_parity: (0, r.bits2byte)(f),
                at_enc: S.data.data,
                at_parity: (0, r.bits2byte)(S.data.parity)
              }, _.ans = 0, _.data = {
                control: 0,
                sector: T,
                type: u,
                data: 0
              }, b.SendMessage(b.decode_message.dt_getNestedKey, _, k), e.next = 56, (0, r.requestAsync)("GET", "CopyKEY/MifareDetectionNested", M, void 0, 15e3);
            case 56:
              if (0 !== (U = e.sent).code || 0 !== U.data.nBK) {
                e.next = 97;
                break
              }
            case 58:
              if (!b.IsStop(t)) {
                e.next = 63;
                break
              }
              throw M.control = 255, (0, r.requestAsync)("GET", "CopyKEY/MifareDetectionNested", M), b.decode_message.cancel;
            case 63:
              return e.next = 65, (0, r.sleep)(3e3);
            case 65:
              return M.control = 1, e.next = 68, (0, r.requestAsync)("GET", "CopyKEY/MifareDetectionNested", M, void 0, 15e3);
            case 68:
              if (I = e.sent, console.log(I.data), 0 !== I.code || 0 !== I.data.nBK) {
                e.next = 91;
                break
              }
              if (2 !== I.data.state) {
                e.next = 77;
                break
              }
              _.ans = 0, _.data = {
                control: 1,
                sector: T,
                type: u,
                data: I.data.progress
              }, b.SendMessage(b.decode_message.dt_getNestedKey, _, k), e.next = 91;
              break;
            case 77:
              if (1 !== I.data.state) {
                e.next = 91;
                break
              }
              if (!(I.data.keyCount > 0)) {
                e.next = 91;
                break
              }
              return K = (0, d.Base64Decode)(I.data.data), F = (0, r.string2Hex)(K), C = {
                ans: 0,
                data: {
                  uid: s.data.UID,
                  block: n,
                  type: u,
                  keys: F
                }
              }, b.SendMessage(b.decode_message.dt_testKeys, C, k), console.log("侦测出密钥，请放上卡片验证..", n, u), e.next = 86, b.DetectionAuthAsync(t, s, n, u, F, k);
            case 86:
              return e.sent ? (h = 1, H = new o.fileUtil, console.log("密钥验证成功 保存临时文件"), B = (0, r.json2Bytes)(s.data.data), H.writeCardTempFile(s.data.UID, s.data.size, 0, B)) : (console.log("密钥验证失败"), h = 255), M.control = 255, (0, r.requestAsync)("GET", "CopyKEY/MifareDetectionNested", M), e.abrupt("break", 95);
            case 91:
              return e.next = 93, (0, r.sleep)(3e3);
            case 93:
              e.next = 58;
              break;
            case 95:
              e.next = 99;
              break;
            case 97:
              h = 239, console.log("网络异常");
            case 99:
              e.next = 103;
              break;
            case 101:
              console.log("获取at_enc失败"), h = 255;
            case 103:
              e.next = 109;
              break;
            case 105:
              N = {
                has: 1,
                nonce: w.nonce,
                parity: w.parity
              }, s.detection[T][u] = N, h = 2, console.log("保存嵌套认证获取的at_enc", N);
            case 109:
              e.next = 113;
              break;
            case 111:
              console.log("获取加密随机数失败"), h = 3;
            case 113:
              return e.abrupt("break", 134);
            case 116:
              _.ans = 0, b.SendMessage(b.decode_message.dt_authKey, _, k), console.log("请放上需要侦测的IC卡");
            case 119:
              e.next = 130;
              break;
            case 121:
              if (e.prev = 121, e.t0 = e.catch(14), e.t0 !== this.decode_message.card_uid_change) {
                e.next = 129;
                break
              }
              _.ans = 0, b.SendMessage(b.decode_message.dt_tagChange, _, k), console.log("卡片变更，请放上需要侦测的IC卡"), e.next = 130;
              break;
            case 129:
              throw e.t0;
            case 130:
              return e.next = 132, (0, r.sleep)(1e3);
            case 132:
              e.next = 11;
              break;
            case 134:
              return e.next = 136, i.globalData.data.bluetooth.cmdAntennaSwitchAsync(t, 0, null);
            case 136:
              return e.abrupt("return", h);
            case 137:
            case "end":
              return e.stop()
          }
        }), e, this, [
          [14, 121]
        ])
      }))), function(e, a, t, s, n, r, c) {
        return V.apply(this, arguments)
      })
    }, {
      key: "TestDetectionTagAsync",
      value: (L = t(a().mark((function t(s, n, u, l, f) {
        var k, y, b, _, p, h, g, x, m, v, A, D, w, T, S, M, U, I, K, F, C, H, B, N, E, G, R, z, P, O, q, Y, L, V, Q, W, J, j, X, Z, $;
        return a().wrap((function(a) {
          for (;;) switch (a.prev = a.next) {
            case 0:
              k = this, y = new c.cardUtil, b = {
                ans: -1,
                data: {}
              }, _ = new Array(4).fill(0), p = Array(4).fill(0), h = 0, g = 0, x = -1, m = 2, v = !1, A = 0;
            case 11:
              if (!k.IsStop(s)) {
                a.next = 14;
                break
              }
              throw k.decode_message.cancel;
            case 14:
              return m > 14 && (m = 14), a.next = 17, i.globalData.data.bluetooth.cmdDetectionTagAsync(s, n.data.UID, n.data.size, n.hash, g, m, h, p, null);
            case 17:
              if (0 !== (D = a.sent).ans) {
                a.next = 118;
                break
              }
              if (0 !== g) {
                a.next = 26;
                break
              }
              g = 1, console.log("提示去侦测"), b.ans = 0, k.SendMessage(k.decode_message.dt_gotoDetect, b, f), a.next = 116;
              break;
            case 26:
              w = new Array(n.data.num_sectors), T = 0;
            case 28:
              if (!(T < D.data.count)) {
                a.next = 35;
                break
              }
              if (!k.IsStop(s)) {
                a.next = 31;
                break
              }
              throw k.decode_message.cancel;
            case 31:
              if (D.data.data.length >= 12 * T + 12 && (S = D.data.data.slice(12 * T, 12 * T + 12), M = S[1], U = S[0], I = (128 & U) >> 7, K = (30 & U) >> 1, U &= 97, (F = y.blockToSector(M)) < n.data.num_sectors)) {
                if (C = {
                    type: U,
                    nt_parity: K,
                    block: M,
                    data: S.slice(3, 11),
                    data_parity: S[11],
                    nt: S[2]
                  }, !w[F] || w[F].length <= 0)
                  for (w[F] = new Array(2), H = 0; H < 2; H++) w[F][H] = {
                    data: [],
                    nested: I
                  };
                w[F][96 === U ? 0 : 1].data.push(C)
              }
            case 32:
              T++, a.next = 28;
              break;
            case 35:
              B = 0;
            case 36:
              if (!(B < w.length)) {
                a.next = 111;
                break
              }
              if (!k.IsStop(s)) {
                a.next = 39;
                break
              }
              throw k.decode_message.cancel;
            case 39:
              N = 0;
            case 40:
              if (!(N < 2)) {
                a.next = 108;
                break
              }
              if (!k.IsStop(s)) {
                a.next = 43;
                break
              }
              throw k.decode_message.cancel;
            case 43:
              if (!(w[B] && w[B][N] && w[B][N].data.length > 0)) {
                a.next = 105;
                break
              }
              if (!n.data.data[B].foundKey[N]) {
                a.next = 47;
                break
              }
              return x = 1, a.abrupt("break", 108);
            case 47:
              if (b.ans = 0, b.data = {
                  sector: B,
                  type: N,
                  control: this.decode_key_color.decoding
                }, k.SendMessage(k.decode_message.dt_countKey, b, f), E = y.sectorToFirstBlock(B) + y.numberOfBlocks(B) - 1, G = N, R = [], 0 !== w[B][N].nested) {
                a.next = 73;
                break
              }
              for (z = 0; z < w[B][N].data.length; z++) _[3] = w[B][N].data[z].nt, R.push.apply(R, e(_)), R.push.apply(R, e(w[B][N].data[z].data));
              return P = {
                MCUUID: i.globalData.data.bluetooth.GetDeviceInfo(s).MCUUID,
                uid: n.data.UID.slice(n.data.UID.length - 4),
                count: w[B][N].data.length,
                data: R
              }, a.next = 58, (0, r.requestAsync)("GET", "CopyKEY/MifareDetection", P, void 0, 6e4);
            case 58:
              if (0 !== (O = a.sent).code || 0 !== O.data.nBK) {
                a.next = 71;
                break
              }
              if (!(O.data.keyCount > 0)) {
                a.next = 71;
                break
              }
              if (q = (0, d.Base64Decode)(O.data.data), Y = (0, r.string2Hex)(q), L = {
                  ans: 0,
                  data: {
                    uid: n.data.UID,
                    block: E,
                    type: G,
                    keys: Y
                  }
                }, k.SendMessage(k.decode_message.dt_testKeys, L, f), l) {
                a.next = 71;
                break
              }
              return console.log("侦测出密钥，请放上卡片验证..", E, G), a.next = 69, k.DetectionAuthAsync(s, n, E, G, Y, f);
            case 69:
              a.sent && (x = 1, V = new o.fileUtil, console.log("密钥验证成功 保存临时文件"), Q = (0, r.json2Bytes)(n.data.data), V.writeCardTempFile(n.data.UID, n.data.size, 0, Q));
            case 71:
              a.next = 103;
              break;
            case 73:
              W = 0;
            case 74:
              if (!(W < w[B][N].data.length)) {
                a.next = 102;
                break
              }
              return J = w[B][N].data[W].data, j = w[B][N].data[W].data_parity, X = (0, r.byte2bits)(j), a.next = 80, k.TestNestedAuthexAsync(s, n, E, G, J, X, f);
            case 80:
              if (2 !== (Z = a.sent)) {
                a.next = 88;
                break
              }
              return p = n.detection[B][N].nonce, h = 128 | n.detection[B][N].parity, console.log("填充嵌套认证信息", p, h), a.abrupt("break", 102);
            case 88:
              if (1 !== Z) {
                a.next = 94;
                break
              }
              return console.log("嵌套获取密钥验证成功"), x = 1, a.abrupt("break", 102);
            case 94:
              if (255 !== Z) {
                a.next = 97;
                break
              }
              a.next = 99;
              break;
            case 97:
              return console.log("嵌套获取密钥其他错误", Z), a.abrupt("break", 102);
            case 99:
              W++, a.next = 74;
              break;
            case 102:
              v = !0;
            case 103:
              b.data = {
                sector: -1,
                control: this.decode_key_color.decoding
              }, k.SendMessage(k.decode_message.dt_countKey, b, f);
            case 105:
              N++, a.next = 40;
              break;
            case 108:
              B++, a.next = 36;
              break;
            case 111:
              if (1 !== x) {
                a.next = 113;
                break
              }
              return a.abrupt("break", 137);
            case 113:
              v || m < 14 && (m += 2), g = 0, console.log("重新开始", m);
            case 116:
              a.next = 135;
              break;
            case 118:
              if (2 !== D.ans) {
                a.next = 132;
                break
              }
              if (D.data.writecard, $ = 32768 == (32768 & D.data.writecard), A++, b.ans = 0, b.data = {
                  times: A,
                  count: D.data.count,
                  writecard: D.data.writecard,
                  needAuthorWrite: $ && u.test
                }, k.SendMessage(k.decode_message.dt_wait, b, f), !$ || !u.test) {
                a.next = 127;
                break
              }
              return a.abrupt("return", 2);
            case 127:
              return console.log("等待侦测", D.ans, D.data.count, D.data.writecard), a.next = 130, (0, r.sleep)(2500);
            case 130:
              a.next = 135;
              break;
            case 132:
              return console.log("侦测失败", D.ans), a.next = 135, (0, r.sleep)(1500);
            case 135:
              a.next = 11;
              break;
            case 137:
              return a.abrupt("return", x);
            case 138:
            case "end":
              return a.stop()
          }
        }), t, this)
      }))), function(e, a, t, s, n) {
        return L.apply(this, arguments)
      })
    }, {
      key: "DetectionDataSyncAsync",
      value: (Y = t(a().mark((function e(t, s, n) {
        var c, o, d, u, l;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              c = this, o = {
                ans: -1,
                errCode: 0,
                data: {},
                write: {}
              }, e.prev = 2, o.ans = 0, c.SendMessage(c.decode_message.start, o, n), c.SetDecoding(t, !0);
            case 6:
              if (!c.IsStop(t)) {
                e.next = 9;
                break
              }
              throw c.decode_message.cancel;
            case 9:
              return e.prev = 9, e.next = 12, c.SelectMifareCardAsync(t, s.HF.data.UID, void 0);
            case 12:
              if (0 !== e.sent.ans) {
                e.next = 41;
                break
              }
              return e.next = 16, c.DetectionReadDeviceTagAsync(t, s.HF, this.stop_decoding, n);
            case 16:
              if (!c.IsStop(t)) {
                e.next = 18;
                break
              }
              throw c.decode_message.cancel;
            case 18:
              return d = c.GetHFTagData(s.HF, null, n), e.next = 21, c.SendHFTagDataAsync(t, s.HF, d, 0, n);
            case 21:
              if (0 !== (u = e.sent).ans) {
                e.next = 37;
                break
              }
              return o.ans = 0, c.SendMessage(c.decode_message.test_write_tag, o, n), e.next = 27, i.globalData.data.bluetooth.cmdWriteData2TagAsync(t, s.HF.data.UID, s.HF.data.size, u.hash, 0, null);
            case 27:
              if (0 !== (l = e.sent).ans) {
                e.next = 34;
                break
              }
              o.write = l.data, o.ans = c.decode_message.data_sync_success, o.data = s, e.next = 35;
              break;
            case 34:
              throw c.decode_message.err_writecard;
            case 35:
              e.next = 38;
              break;
            case 37:
              throw c.decode_message.set_data_err;
            case 38:
              return e.abrupt("break", 60);
            case 41:
              o.ans = 0, c.SendMessage(c.decode_message.dt_putinTag, o, n), console.log("请放上需要同步的IC卡");
            case 44:
              e.next = 56;
              break;
            case 46:
              if (e.prev = 46, e.t0 = e.catch(9), console.log(e.t0), e.t0 !== this.decode_message.card_uid_change) {
                e.next = 55;
                break
              }
              o.ans = 0, c.SendMessage(c.decode_message.dt_tagChange, o, n), console.log("卡片变更，请放上需要侦测的IC卡"), e.next = 56;
              break;
            case 55:
              throw e.t0;
            case 56:
              return e.next = 58, (0, r.sleep)(1e3);
            case 58:
              e.next = 6;
              break;
            case 60:
              e.next = 68;
              break;
            case 62:
              e.prev = 62, e.t1 = e.catch(2), o.ans = c.decode_message.dt_error, o.errCode = e.t1, o.data = s, console.log("DetectionDataSyncAsync 中断", e.t1);
            case 68:
              i.globalData.data.bluetooth.cmdAntennaSwitchAsync(t, 0, null), c.SendMessage(c.decode_message.end, o, n), c.SetDecoded();
            case 71:
            case "end":
              return e.stop()
          }
        }), e, this, [
          [2, 62],
          [9, 46]
        ])
      }))), function(e, a, t) {
        return Y.apply(this, arguments)
      })
    }, {
      key: "DetectionTagAsync",
      value: (q = t(a().mark((function e(t, s, n, c, o, d, u) {
        var l, f, k, y, b, _, p, h, g, x, m, v = this;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              l = this, f = {
                ans: -1,
                errCode: 0,
                data: {}
              }, k = {
                HF: {
                  has: !1,
                  type: -1,
                  hash: [],
                  data: {},
                  model: -1,
                  detection: [],
                  isThridTag: 0,
                  isMagicTags: !1,
                  isGDM: !1
                },
                ID: {
                  has: !1,
                  type: -1,
                  data: {}
                }
              }, e.prev = 3, f.ans = 0, l.SendMessage(l.decode_message.start, f, u), l.SetDecoding(t, !0), y = !0, b = !0, _ = !1, p = !1, h = a().mark((function e() {
                var s, c, i, h, g, x, m, A, D;
                return a().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (!l.IsStop(t)) {
                        e.next = 2;
                        break
                      }
                      throw l.decode_message.cancel;
                    case 2:
                      if (!_) {
                        e.next = 10;
                        break
                      }
                      if (!o.test) {
                        e.next = 9;
                        break
                      }
                      return e.next = 6, (0, r.sleep)(1500);
                    case 6:
                      return e.abrupt("return", "continue");
                    case 9:
                      p = o.authz;
                    case 10:
                      if (s = !1, !y && !p) {
                        e.next = 43;
                        break
                      }
                      if (k.HF.has && -1 === l.find_exploit_sector(k.HF.data) && (f.ans = 0, l.SendMessage(l.decode_message.dt_getAllKeys, f, u), console.log("已经全部读取，不需要侦测，去读取数据")), c = !1, b || d) {
                        e.next = 17;
                        break
                      }
                      return e.next = 17, l.DetectionReadDeviceTagAsync(t, k.HF, v.stop_decoding, u);
                    case 17:
                      if (!y) {
                        e.next = 25;
                        break
                      }
                      if (!d) {
                        e.next = 22;
                        break
                      }
                      c = l.DefaultTagData(n, k.HF, u), e.next = 25;
                      break;
                    case 22:
                      return e.next = 24, l.DetectionReadTagAsync(t, k.HF, !b, u);
                    case 24:
                      c = e.sent;
                    case 25:
                      if (p && (c = !0), !c) {
                        e.next = 43;
                        break
                      }
                      if (i = function(e) {}, -2 == (h = l.find_exploit_sector(k.HF.data))) {
                        e.next = 35;
                        break
                      }
                      if (-1 !== h) {
                        e.next = 35;
                        break
                      }
                      return f.ans = l.decode_message.detection_success, f.data = k, console.log("已经全部读取，退出侦测"), e.abrupt("return", "break");
                    case 35:
                      return g = [216, 245, 226, 63, 106, 123], x = l.GetHFTagData(k.HF, g, u), m = o.authz ? 0 : 2, d && (m = 0), e.next = 41, l.SendHFTagDataAsync(t, k.HF, x, m, i);
                    case 41:
                      0 === (A = e.sent).ans ? (console.log("下发数据成功", A.hash), k.HF.hash = A.hash, s = !0) : console.log("下发数据错误");
                    case 43:
                      if (y && !0 !== s) {
                        e.next = 55;
                        break
                      }
                      if (-1 !== l.find_exploit_sector(k.HF.data)) {
                        e.next = 49;
                        break
                      }
                      console.log("已经全部读取，不需要侦测"), e.next = 55;
                      break;
                    case 49:
                      return y = !1, b = !1, e.next = 53, l.TestDetectionTagAsync(t, k.HF, o, d, u);
                    case 53:
                      1 === (D = e.sent) ? y = !0 : 2 === D && (_ = !0);
                    case 55:
                    case "end":
                      return e.stop()
                  }
                }), e)
              }));
            case 12:
              return e.delegateYield(h(), "t0", 14);
            case 14:
              if ("continue" !== (g = e.t0)) {
                e.next = 17;
                break
              }
              return e.abrupt("continue", 12);
            case 17:
              if ("break" !== g) {
                e.next = 19;
                break
              }
              return e.abrupt("break", 21);
            case 19:
              e.next = 12;
              break;
            case 21:
              e.next = 34;
              break;
            case 23:
              if (e.prev = 23, e.t1 = e.catch(3), x = {
                  stop: !1
                }, setTimeout((function() {
                  x.stop = !0
                }), 6e3), d) {
                e.next = 30;
                break
              }
              return e.next = 30, l.DetectionReadDeviceTagAsync(t, k.HF, x, u);
            case 30:
              f.ans = l.decode_message.dt_error, f.errCode = e.t1, f.data = k, console.log("DetectionTagAsync侦测中断", e.t1);
            case 34:
              m = l.GetHFTagData(k.HF, null, u), k.HF.data.card_data = m, i.globalData.data.bluetooth.cmdAntennaSwitchAsync(t, 0, null), l.SendMessage(l.decode_message.end, f, u), l.SetDecoded();
            case 39:
            case "end":
              return e.stop()
          }
        }), e, this, [
          [3, 23]
        ])
      }))), function(e, a, t, s, n, r, c) {
        return q.apply(this, arguments)
      })
    }, {
      key: "SimulateTagAsync",
      value: (O = t(a().mark((function e(t, s, n, r, o, d, u) {
        var l, f, k, y, b, _, p, h, g, x, m, v;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              if (l = this, f = new c.cardUtil, k = {
                  ans: -1,
                  data: {
                    type: s
                  }
                }, e.prev = 3, l.SendMessage(l.decode_message.start, k, u), l.SetDecoding(t, !0), o && !(r && r.length > 0)) {
                e.next = 44;
                break
              }
              if (s !== f.card_type.MF) {
                e.next = 44;
                break
              }
              if (b = !1, _ = [], !o) {
                e.next = 24;
                break
              }
              return p = function(e) {}, y = r, h = {
                type: s,
                data: {
                  UID: n.uid,
                  size: n.size,
                  SAK: n.sak,
                  ATQA: 256 * n.ATQA[0] + n.ATQA[1],
                  num_sectors: 0,
                  data: {
                    num_blocks: 0,
                    version: []
                  }
                }
              }, g = Math.trunc(r.length / 16), x = f.blockToSector(g), h.data.num_sectors = x, e.next = 20, l.SendHFTagDataAsync(t, h, y, d, p);
            case 20:
              0 === (m = e.sent).ans && (b = !0, _ = m.hash), e.next = 25;
              break;
            case 24:
              b = !0;
            case 25:
              if (!b) {
                e.next = 43;
                break
              }
              if (v = -1, !o) {
                e.next = 33;
                break
              }
              return e.next = 30, i.globalData.data.bluetooth.cmdSimulateTagAsync(t, n.uid, n.size, _, null);
            case 30:
              v = e.sent, e.next = 36;
              break;
            case 33:
              return e.next = 35, i.globalData.data.bluetooth.cmdSimulateTagAsync(t, [], 0, [], null);
            case 35:
              v = e.sent;
            case 36:
              if (0 !== v.ans) {
                e.next = 40;
                break
              }
              k.ans = l.decode_message.simulate_success, e.next = 41;
              break;
            case 40:
              throw l.decode_message.err_simulate;
            case 41:
              e.next = 44;
              break;
            case 43:
              throw l.decode_message.set_data_err;
            case 44:
              e.next = 50;
              break;
            case 46:
              e.prev = 46, e.t0 = e.catch(3), k.ans = e.t0, console.log("模拟中断", e.t0);
            case 50:
              return l.SendMessage(l.decode_message.end, k, u), l.SetDecoded(), e.abrupt("return", k);
            case 53:
            case "end":
              return e.stop()
          }
        }), e, this, [
          [3, 46]
        ])
      }))), function(e, a, t, s, n, r, c) {
        return O.apply(this, arguments)
      })
    }, {
      key: "TestSimulateTagAsync",
      value: (P = t(a().mark((function e(t, s, n, o, d) {
        var u, l, f, k, y, b, _, p, h, g, x, m, v, A;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              if (u = this, l = new c.cardUtil, f = {
                  ans: -1,
                  data: {
                    type: s
                  }
                }, e.prev = 3, u.SendMessage(u.decode_message.start, f, d), u.SetDecoding(t, !0), !(o && o.length > 0)) {
                e.next = 50;
                break
              }
              if (s !== l.card_type.MF) {
                e.next = 50;
                break
              }
              return y = function(e) {}, b = [], k = o, _ = {
                type: s,
                data: {
                  UID: n.uid,
                  size: n.size,
                  SAK: n.sak,
                  ATQA: 256 * n.ATQA[0] + n.ATQA[1],
                  num_sectors: 0,
                  data: {
                    num_blocks: 0,
                    version: []
                  }
                }
              }, p = Math.trunc(o.length / 16), h = l.blockToSector(p), _.data.num_sectors = h, e.next = 18, u.SendHFTagDataAsync(t, _, k, 2, y);
            case 18:
              if (0 !== (g = e.sent).ans) {
                e.next = 23;
                break
              }
              b = g.hash, e.next = 24;
              break;
            case 23:
              throw u.decode_message.set_data_err;
            case 24:
              x = Array(4).fill(0), m = 0, v = 0;
            case 27:
              if (!u.IsStop(t)) {
                e.next = 30;
                break
              }
              throw u.decode_message.cancel;
            case 30:
              return e.next = 32, i.globalData.data.bluetooth.cmdDetectionTagAsync(t, n.uid, n.size, b, v, 14, m, x, null);
            case 32:
              if (0 !== (A = e.sent).ans) {
                e.next = 37;
                break
              }
              0 === v ? (v = 1, console.log("提示去刷卡"), f.ans = 0, u.SendMessage(u.decode_message.simulate_success, f, d)) : console.log(detect_data), e.next = 48;
              break;
            case 37:
              if (2 !== A.ans) {
                e.next = 45;
                break
              }
              return f.ans = 0, f.data = {
                count: A.data.count,
                writecard: A.data.writecard
              }, u.SendMessage(u.decode_message.dt_wait, f, d), e.next = 43, (0, r.sleep)(1e3);
            case 43:
              e.next = 48;
              break;
            case 45:
              return console.log("侦测失败", A.ans), e.next = 48, (0, r.sleep)(1500);
            case 48:
              e.next = 27;
              break;
            case 50:
              e.next = 56;
              break;
            case 52:
              e.prev = 52, e.t0 = e.catch(3), f.ans = e.t0, console.log("模拟中断", e.t0);
            case 56:
              return u.SendMessage(u.decode_message.end, f, d), u.SetDecoded(), e.abrupt("return", f);
            case 59:
            case "end":
              return e.stop()
          }
        }), e, this, [
          [3, 52]
        ])
      }))), function(e, a, t, s, n) {
        return P.apply(this, arguments)
      })
    }, {
      key: "CardDataSetAsync",
      value: (z = t(a().mark((function e(t, s, n, o, d, u) {
        var l, f, k, y, b, _, p, h, g, x, m, v, A, D, w, T, S, M;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              if (l = this, f = new c.cardUtil, k = {
                  ans: -1,
                  data: {
                    type: s,
                    T: 0,
                    B: []
                  }
                }, e.prev = 3, l.SendMessage(l.decode_message.start, k, u), l.SetDecoding(t, !0), s !== f.card_type.id) {
                e.next = 13;
                break
              }
              return e.next = 9, i.globalData.data.bluetooth.cmdWriteLHFCardAsync(t, n.freq_ascii, n.type_ascii, n.size, n.uid, null);
            case 9:
              y = e.sent, k.ans = 0 === y.ans ? l.decode_message.writecard_success : l.decode_message.err_writecard, e.next = 61;
              break;
            case 13:
              if (!(o && o.length > 0 || s === f.card_type.Other)) {
                e.next = 60;
                break
              }
              if (b = [], s === f.card_type.MF ? b = o : s === f.card_type.ULEV1 ? b = o.slice(74) : (_ = f.SetEmptyMFTagDataBySectors(n.uid, n.ATQA, n.sak, [], 16), b = _), p = !0, !(d && d.length > 0)) {
                e.next = 38;
                break
              }
              if (h = d, g = (0, r.crc32)(b), x = (0, r.num_to_bytes)(g), JSON.stringify(h) !== JSON.stringify(x)) {
                e.next = 38;
                break
              }
              return e.next = 25, i.globalData.data.bluetooth.cmdWriteData2TagAsync(t, n.uid, n.size, h, 0, null);
            case 25:
              if (0 !== (m = e.sent).ans) {
                e.next = 32;
                break
              }
              p = !1, k.ans = l.decode_message.writecard_success, k.data = m.data, e.next = 38;
              break;
            case 32:
              if (m.ans !== i.globalData.data.bluetooth.ble_ans.err_cardCRC) {
                e.next = 36;
                break
              }
              p = !0, e.next = 38;
              break;
            case 36:
              throw p = !1, l.decode_message.err_writecard;
            case 38:
              if (!p) {
                e.next = 58;
                break
              }
              return v = function(e) {}, A = {
                type: s,
                data: {
                  UID: n.uid,
                  size: n.size,
                  SAK: n.sak,
                  ATQA: 256 * n.ATQA[0] + n.ATQA[1],
                  num_sectors: 0,
                  data: {
                    num_blocks: 0,
                    version: []
                  }
                }
              }, s === f.card_type.MF || s === f.card_type.Other ? (D = Math.trunc(o.length / 16), w = f.blockToSector(D), A.data.num_sectors = w) : (A.data.data.num_blocks = o[70] + 256 * o[71], T = (T = o[19]) > 16 ? 16 : T, A.data.data.version = o.slice(20, 20 + T)), e.next = 44, l.SendHFTagDataAsync(t, A, b, 0, v);
            case 44:
              if (0 !== (S = e.sent).ans) {
                e.next = 57;
                break
              }
              return e.next = 48, i.globalData.data.bluetooth.cmdWriteData2TagAsync(t, n.uid, n.size, S.hash, 0, null);
            case 48:
              if (0 !== (M = e.sent).ans) {
                e.next = 54;
                break
              }
              k.ans = l.decode_message.writecard_success, k.data = M.data, e.next = 55;
              break;
            case 54:
              throw l.decode_message.err_writecard;
            case 55:
              e.next = 58;
              break;
            case 57:
              throw l.decode_message.set_data_err;
            case 58:
              e.next = 61;
              break;
            case 60:
              throw l.decode_message.write_data_err;
            case 61:
              e.next = 67;
              break;
            case 63:
              e.prev = 63, e.t0 = e.catch(3), k.ans = e.t0, console.log("写卡中断", e.t0);
            case 67:
              return l.SendMessage(l.decode_message.end, k, u), l.SetDecoded(), e.abrupt("return", k);
            case 70:
            case "end":
              return e.stop()
          }
        }), e, this, [
          [3, 63]
        ])
      }))), function(e, a, t, s, n, r) {
        return z.apply(this, arguments)
      })
    }, {
      key: "SetNdefTagDataAsync",
      value: (R = t(a().mark((function e(t, s, n) {
        var o, d, u, l, f, k;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              o = this, d = new c.cardUtil, u = {
                HF: {
                  has: !1,
                  type: -1,
                  isMagicTags: !1,
                  data: {}
                }
              }, l = {
                ans: -1,
                data: {
                  control: 0,
                  data: {}
                }
              }, e.prev = 4, o.SendMessage(o.decode_message.start, l, n), o.SetDecoding(t, !0);
            case 7:
              if (!o.IsStop(t)) {
                e.next = 10;
                break
              }
              throw o.decode_message.cancel;
            case 10:
              return e.next = 12, o.SelectMifareCardAsync(t, null, void 0);
            case 12:
              if (0 !== (f = e.sent).ans) {
                e.next = 40;
                break
              }
              return u.HF.has = !0, u.HF.data = f.data, e.next = 18, o.TestHideSectorsAsync(t, f.data, void 0);
            case 18:
              if (!(f.data.num_sectors > 0)) {
                e.next = 25;
                break
              }
              return u.HF.type = d.card_type.MF, e.next = 22, o.SetNdefMifareTagAsync(t, u.HF, s, n);
            case 22:
              l = e.sent, e.next = 37;
              break;
            case 25:
              return e.next = 27, o.TestULEV1Async(t, u.HF, !1, n);
            case 27:
              if (0 !== (k = e.sent).ans) {
                e.next = 36;
                break
              }
              return u.HF.type = d.card_type.ULEV1, u.HF.data.data = k.data, e.next = 33, o.SetNdefULEV1TagAsync(t, u.HF, s, n);
            case 33:
              l = e.sent, e.next = 37;
              break;
            case 36:
              u.HF.type = d.card_type.Other;
            case 37:
              return e.abrupt("break", 45);
            case 40:
              return console.log("请放上卡"), e.next = 43, (0, r.sleep)(1e3);
            case 43:
              e.next = 7;
              break;
            case 45:
              e.next = 51;
              break;
            case 47:
              e.prev = 47, e.t0 = e.catch(4), l.ans = e.t0, console.log("中断", e.t0);
            case 51:
              return i.globalData.data.bluetooth.cmdAntennaSwitchAsync(t, 0, null), o.SendMessage(o.decode_message.end, l, n), o.SetDecoded(), e.abrupt("return", l);
            case 55:
            case "end":
              return e.stop()
          }
        }), e, this, [
          [4, 47]
        ])
      }))), function(e, a, t) {
        return R.apply(this, arguments)
      })
    }, {
      key: "CardDataDecodeAsync",
      value: (G = t(a().mark((function e(t, s, n, d, u) {
        var l, f, k, y, b, _, p, h, g, x, m, v, A, D, w, T, S;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              if (l = this, f = new c.cardUtil, k = {
                  ID: {
                    has: !1,
                    type: -1,
                    data: {}
                  },
                  HF: {
                    has: !1,
                    type: -1,
                    isMagicTags: !1,
                    data: {}
                  }
                }, y = {
                  ans: -1,
                  data: {
                    control: 0,
                    data: {}
                  }
                }, e.prev = 4, l.SendMessage(l.decode_message.start, y, u), l.SetDecoding(t, !0), s == l.decode_control.format) {
                e.next = 13;
                break
              }
              return l.SendMessage(l.decode_message.test_reading_ID, y, u), e.next = 11, i.globalData.data.bluetooth.cmdReadLHFCardAsync(t, null);
            case 11:
              0 === (b = e.sent).ans && (k.ID.has = !0, k.ID.type = f.card_type.id, k.ID.data = b.data, y.data.data = b.data, l.SendMessage(l.decode_message.test_readed_ID, y, u));
            case 13:
              return l.SendMessage(l.decode_message.test_reading_MF, y, u), e.next = 16, l.SelectMifareCardAsync(t, null, void 0);
            case 16:
              if (0 !== (_ = e.sent).ans) {
                e.next = 53;
                break
              }
              return k.HF.has = !0, k.HF.data = _.data, e.next = 22, l.TestHideSectorsAsync(t, k.HF.data, u);
            case 22:
              if (!(k.HF.data.num_sectors > 0)) {
                e.next = 49;
                break
              }
              return k.HF.type = f.card_type.MF, e.next = 26, l.SelectMifareCardAsync(t, _.data.UID, void 0);
            case 26:
              if (0 !== e.sent.ans) {
                e.next = 46;
                break
              }
              return e.next = 30, l.DoDecodeingMifareAsync(t, k.HF.data, s, n, d, u);
            case 30:
              if ((p = e.sent) !== this.decode_message.is_MagicTags) {
                e.next = 35;
                break
              }
              k.HF.isMagicTags = !0, e.next = 44;
              break;
            case 35:
              if (p !== this.decode_message.decode_success) {
                e.next = 40;
                break
              }
              return e.next = 38, l.ReadMifareTagAsync(t, k.HF.data, !1, u);
            case 38:
              e.next = 44;
              break;
            case 40:
              if (p === this.decode_message.card_uid_change || p === this.decode_message.cancel || p === this.decode_message.card_read_err) {
                e.next = 43;
                break
              }
              return e.next = 43, l.ReadMifareTagAsync(t, k.HF.data, !1, void 0);
            case 43:
              throw p;
            case 44:
              e.next = 47;
              break;
            case 46:
              throw this.decode_message.card_read_err;
            case 47:
              e.next = 53;
              break;
            case 49:
              return e.next = 51, l.TestULEV1Async(t, k.HF, !0, u);
            case 51:
              0 === (h = e.sent).ans ? (k.HF.type = f.card_type.ULEV1, k.HF.data.data = h.data) : k.HF.type = f.card_type.Other;
            case 53:
              if (k.ID.has || k.HF.has) {
                e.next = 55;
                break
              }
              throw this.decode_message.no_card_read;
            case 55:
              if (!k.HF.has) {
                e.next = 79;
                break
              }
              if (k.HF.type !== f.card_type.Other) {
                e.next = 60;
                break
              }
              y.ans = l.decode_message.other_hf_tag, e.next = 77;
              break;
            case 60:
              if (g = 1, k.HF.type === f.card_type.MF && (x = l.find_exploit_sector(k.HF.data), g = -1 === x ? 1 : -2 === x ? -1 : 0), m = l.GetHFTagData(k.HF, null, u), s !== l.decode_control.decode) {
                e.next = 75;
                break
              }
              if (1 !== g) {
                e.next = 71;
                break
              }
              return e.next = 67, l.SendHFTagDataAsync(t, k.HF, m, 0, u);
            case 67:
              0 === (v = e.sent).ans ? (y.ans = l.decode_message.decode_success, k.HF.data.card_data = v.data, k.HF.data.card_hash = v.hash) : (y.ans = l.decode_message.set_data_err, k.HF.data.card_data = v.data, k.HF.data.card_hash = v.hash), e.next = 73;
              break;
            case 71:
              y.ans = 0 === g ? l.decode_message.decode_no_has_all_keys : l.decode_message.decode_no_has_keys, k.HF.data.card_data = m;
            case 73:
              e.next = 77;
              break;
            case 75:
              k.HF.data.card_data = m, y.ans = s === l.decode_control.format ? k.HF.type === f.card_type.ULEV1 ? l.decode_message.format_no_mf : l.decode_message.format_success : 1 === g ? l.decode_message.readonly_success : l.decode_message.no_read_all_data;
            case 77:
              e.next = 80;
              break;
            case 79:
              s === l.decode_control.decode ? y.ans = l.decode_message.decode_success : s === l.decode_control.format ? y.ans = l.decode_message.format_no_mf : y.ans = l.decode_message.readonly_success;
            case 80:
              e.next = 87;
              break;
            case 82:
              e.prev = 82, e.t0 = e.catch(4), y.ans = e.t0, console.log("解码中断", e.t0), e.t0 !== this.decode_message.card_uid_change && e.t0 !== this.decode_message.cancel && e.t0 !== this.decode_message.card_read_err && k.HF.has && k.HF.type !== f.card_type.Other && (A = l.GetHFTagData(k.HF, null, u), k.HF.data.card_data = A);
            case 87:
              return s === l.decode_control.decode && k.HF.has && k.HF.type === f.card_type.MF && (D = new o.fileUtil, -1 != (w = l.find_exploit_sector(k.HF.data)) && k.HF.data.tem_key && k.HF.data.tem_key.getall && k.HF.data.tem_key.total > 0 && (T = (0, r.json2Bytes)(k.HF.data.tem_key), D.writeCardTempFile(k.HF.data.UID, k.HF.data.size, 32, T)), -2 != w && (S = (0, r.json2Bytes)(k.HF.data.data), D.writeCardTempFile(k.HF.data.UID, k.HF.data.size, 0, S))), y.data.data = k, l.SendMessage(l.decode_message.end, y, u), l.SetDecoded(), e.next = 93, i.globalData.data.bluetooth.cmdAntennaSwitchAsync(t, 0, null);
            case 93:
            case "end":
              return e.stop()
          }
        }), e, this, [
          [4, 82]
        ])
      }))), function(e, a, t, s, n) {
        return G.apply(this, arguments)
      })
    }, {
      key: "DoDecodeingMifareAsync",
      value: (E = t(a().mark((function e(s, n, d, i, u, l) {
        var f, k, y, b, _, p, h, g, x, m, v, A, D, w, T, S, M, U, I, K, F, C, H, B = this;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              if (f = this, k = -1, e.prev = 2, y = new c.cardUtil, d == f.decode_control.readonly_auth) {
                e.next = 18;
                break
              }
              return e.next = 7, f.TestMagicTagsAsync(s, n, d, l);
            case 7:
              if (1 !== e.sent) {
                e.next = 11;
                break
              }
              return console.log("MagicTags", n), e.abrupt("return", this.decode_message.is_MagicTags);
            case 11:
              return e.next = 13, f.SelectMifareCardAsync(s, n.UID, void 0);
            case 13:
              if (0 == e.sent.ans) {
                e.next = 16;
                break
              }
              throw this.decode_message.card_read_err;
            case 16:
              return e.next = 18, f.TestKnowFileDataAsync(s, n, d, null != i ? i : [], u, l);
            case 18:
              if (f.is_has_all_password(n)) {
                e.next = 123;
                break
              }
              if (b = new o.fileUtil, d !== f.decode_control.decode) {
                e.next = 38;
                break
              }
              if (!((_ = b.readCardTempFile(n.UID, n.size, 32)) && _.length > 0)) {
                e.next = 38;
                break
              }
              if (!((p = (0, r.bytes2Json)(_)) && p.getall && p.keylist && p.keylist.length > 0)) {
                e.next = 38;
                break
              }
              if (h = y.blockToSector(p.trgBlockNo), g = 0 === p.trgKeyType ? 0 : 1, !n.data[h] || n.data[h].foundKey[g]) {
                e.next = 37;
                break
              }
              return x = function() {
                var e = t(a().mark((function e() {
                  var t, r, c, o, d, i, u, k;
                  return a().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (n.tem_key = p, t = y.blockToSector(n.tem_key.trgBlockNo), r = 0 === n.tem_key.trgKeyType ? 0 : 1, !n.data[t] || n.data[t].foundKey[r]) {
                          e.next = 33;
                          break
                        }
                        if (f.UpdateDecodeProgress(t, r, l), !n.tem_key.is_thirdtag) {
                          e.next = 16;
                          break
                        }
                        return e.next = 8, f.TestThirdTagNestedAsync(s, n, n.tem_key.trgBlockNo, r, !0, l);
                      case 8:
                        if (0 !== (c = e.sent).ans) {
                          e.next = 14;
                          break
                        }
                        return n.data[t].foundKey[r] = !0, n.data[t].keys[r] = c.key, e.next = 14, f.TestKnowKeysAsync(s, n, c.key, l);
                      case 14:
                        e.next = 30;
                        break;
                      case 16:
                        if (!((o = f.find_exploit_sector(n)) >= 0)) {
                          e.next = 30;
                          break
                        }
                        return d = y.sectorToFirstBlock(o) + y.numberOfBlocks(o) - 1, i = 0, u = [], n.data[o].foundKey[0] ? (i = 0, u = n.data[o].keys[0]) : n.data[o].foundKey[1] && (i = 1, u = n.data[o].keys[1]), e.next = 24, f.Test4439PlusNestedAsync(s, n, d, i, u, n.tem_key.trgBlockNo, i, !0, l);
                      case 24:
                        if (0 !== (k = e.sent).ans) {
                          e.next = 30;
                          break
                        }
                        return n.data[t].foundKey[i] = !0, n.data[t].keys[i] = k.key, e.next = 30, f.TestKnowKeysAsync(s, n, k.key, l);
                      case 30:
                        f.UpdateDecodeProgress(-1, -1, l), e.next = 34;
                        break;
                      case 33:
                        n.tem_key = {};
                      case 34:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })));
                return function() {
                  return e.apply(this, arguments)
                }
              }(), e.next = 31, new Promise(function() {
                var e = t(a().mark((function e(n) {
                  var c, o;
                  return a().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        o = function() {
                          return (o = t(a().mark((function e(t) {
                            return a().wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                case 0:
                                  n(t);
                                case 1:
                                case "end":
                                  return e.stop()
                              }
                            }), e)
                          })))).apply(this, arguments)
                        }, c = function(e) {
                          return o.apply(this, arguments)
                        }, B.SendMessage(B.decode_message.test_temp_keylist, c, l);
                      case 3:
                        if (!f.IsStop(s)) {
                          e.next = 7;
                          break
                        }
                        return n(!1), e.abrupt("break", 11);
                      case 7:
                        return e.next = 9, (0, r.sleep)(200);
                      case 9:
                        e.next = 3;
                        break;
                      case 11:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })));
                return function(a) {
                  return e.apply(this, arguments)
                }
              }());
            case 31:
              if (!e.sent) {
                e.next = 35;
                break
              }
              return e.next = 35, x();
            case 35:
              e.next = 38;
              break;
            case 37:
              n.tem_key = {};
            case 38:
              return e.next = 40, f.TestReadAllKeyBAsync(s, n, l);
            case 40:
              if (d !== f.decode_control.decode) {
                e.next = 123;
                break
              }
              m = 0;
            case 42:
              if (!(m < 5)) {
                e.next = 123;
                break
              }
              if (!f.IsStop(s)) {
                e.next = 45;
                break
              }
              throw f.decode_message.cancel;
            case 45:
              if (f.is_has_all_password(n)) {
                e.next = 119;
                break
              }
              if (d !== f.decode_control.decode) {
                e.next = 117;
                break
              }
              if (-2 !== (v = f.find_exploit_sector(n))) {
                e.next = 70;
                break
              }
              return console.log("全加密卡"), f.UpdateDecodeProgress(0, 0, l), e.next = 53, f.TestThirdTagNestedAsync(s, n, 0, 0, !1, l);
            case 53:
              if (0 !== (A = e.sent).ans) {
                e.next = 59;
                break
              }
              return n.data[0].foundKey[0] = !0, n.data[0].keys[0] = A.key, e.next = 59, f.TestKnowKeysAsync(s, n, A.key, l);
            case 59:
              if (-2 !== (v = f.find_exploit_sector(n))) {
                e.next = 69;
                break
              }
              return e.next = 63, f.TestDarksideAsync(s, n, l);
            case 63:
              if (0 !== (D = e.sent).ans) {
                e.next = 69;
                break
              }
              return n.data[0].foundKey[0] = !0, n.data[0].keys[0] = D.key, e.next = 69, f.TestKnowKeysAsync(s, n, D.key, l);
            case 69:
              f.UpdateDecodeProgress(-1, -1, l);
            case 70:
              if (!((v = f.find_exploit_sector(n)) >= 0)) {
                e.next = 117;
                break
              }
              w = y.sectorToFirstBlock(v) + y.numberOfBlocks(v) - 1, T = 0, S = [], n.data[v].foundKey[0] ? (T = 0, S = n.data[v].keys[0]) : n.data[v].foundKey[1] && (T = 1, S = n.data[v].keys[1]), M = n.num_sectors, U = 0;
            case 78:
              if (!(U < M)) {
                e.next = 117;
                break
              }
              if (!f.IsStop(s)) {
                e.next = 81;
                break
              }
              throw f.decode_message.cancel;
            case 81:
              I = y.sectorToFirstBlock(U) + y.numberOfBlocks(U) - 1, K = 0;
            case 83:
              if (!(K < 2)) {
                e.next = 114;
                break
              }
              if (!f.IsStop(s)) {
                e.next = 86;
                break
              }
              throw f.decode_message.cancel;
            case 86:
              if (n.data[U].foundKey[K]) {
                e.next = 111;
                break
              }
              if (f.UpdateDecodeProgress(U, K, l), 1 !== K || !n.data[U].foundKey[0]) {
                e.next = 91;
                break
              }
              return e.next = 91, f.TestReadKeyBAsync(s, n, U, n.data[U].keys[0], l);
            case 91:
              if (n.data[U].foundKey[K]) {
                e.next = 109;
                break
              }
              return e.next = 94, f.TestThirdTagNestedAsync(s, n, I, K, !1, l);
            case 94:
              if (0 !== (F = e.sent).ans) {
                e.next = 100;
                break
              }
              return n.data[U].foundKey[K] = !0, n.data[U].keys[K] = F.key, e.next = 100, f.TestKnowKeysAsync(s, n, F.key, l);
            case 100:
              if (n.data[U].foundKey[K]) {
                e.next = 109;
                break
              }
              return e.next = 103, f.TestFastNestedAsync(s, n, w, T, S, I, K, l);
            case 103:
              if (0 !== (C = e.sent).ans) {
                e.next = 109;
                break
              }
              return n.data[U].foundKey[K] = !0, n.data[U].keys[K] = C.key, e.next = 109, f.TestKnowKeysAsync(s, n, C.key, l);
            case 109:
              f.UpdateDecodeProgress(-1, -1, l), n.data[U].foundKey[K] && (H = (0, r.json2Bytes)(n.data), b.writeCardTempFile(n.UID, n.size, 0, H));
            case 111:
              K++, e.next = 83;
              break;
            case 114:
              U++, e.next = 78;
              break;
            case 117:
              e.next = 120;
              break;
            case 119:
              return e.abrupt("break", 123);
            case 120:
              m++, e.next = 42;
              break;
            case 123:
              if (d !== f.decode_control.format) {
                e.next = 126;
                break
              }
              return e.next = 126, f.TestDoFormatAsync(s, n, l);
            case 126:
              k = this.decode_message.decode_success, e.next = 132;
              break;
            case 129:
              e.prev = 129, e.t0 = e.catch(2), k = e.t0;
            case 132:
              return e.abrupt("return", k);
            case 133:
            case "end":
              return e.stop()
          }
        }), e, this, [
          [2, 129]
        ])
      }))), function(e, a, t, s, n, r) {
        return E.apply(this, arguments)
      })
    }, {
      key: "TestDoFormatAsync",
      value: (N = t(a().mark((function e(t, s, n) {
        var r, c, o, d;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              if ((r = this).is_has_all_password(s)) {
                e.next = 3;
                break
              }
              throw r.decode_message.no_all_decode;
            case 3:
              c = s.num_sectors, o = 0;
            case 5:
              if (!(o < c)) {
                e.next = 16;
                break
              }
              if (!r.IsStop(t)) {
                e.next = 8;
                break
              }
              throw r.decode_message.cancel;
            case 8:
              return r.UpdateFormatTag(o, r.decode_read_color.formating, 0, n), e.next = 11, r.AuthFormatMifareTagSectorAsync(t, s.UID, o, s.data[o], n);
            case 11:
              d = e.sent, r.UpdateFormatTag(o, 0 === d.ans ? r.decode_read_color.format_succ : r.decode_read_color.format_fail, 0, n);
            case 13:
              o++, e.next = 5;
              break;
            case 16:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, a, t) {
        return N.apply(this, arguments)
      })
    }, {
      key: "TestDarksideAsync",
      value: (B = t(a().mark((function e(t, s, n) {
        var c, o, u, l, f, k, y, b, _, p, h, g, x, m;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              c = this, o = {
                ans: -1,
                block: 3,
                type: 0,
                key: []
              }, u = {
                state: 0,
                trycount: 0,
                per: 0
              }, l = (0, r.getUUID)(), f = 120, k = 0, y = 1;
            case 7:
              if (!f--) {
                e.next = 77;
                break
              }
              if (!c.IsStop(t)) {
                e.next = 10;
                break
              }
              throw c.decode_message.cancel;
            case 10:
              return u.trycount = 120 - f, u.state = 1, u.per = 0, c.UpdateDarksideDecodeProgress(u, n), e.next = 16, i.globalData.data.bluetooth.cmdMifareDarksideAttackAsync(t, y, null);
            case 16:
              if (0 !== (b = e.sent).ans) {
                e.next = 59;
                break
              }
              return u.state = 2, u.per = 0, c.UpdateDarksideDecodeProgress(u, n), _ = {
                taskUuid: l,
                MCUUID: i.globalData.data.bluetooth.GetDeviceInfo(t).MCUUID,
                uid: s.UID.slice(s.UID.length - 4),
                control: 0,
                data: b.data
              }, e.next = 24, (0, r.requestAsync)("GET", "CopyKEY/MifareDarkside", _, void 0, 3e4);
            case 24:
              if (!(0 === (p = e.sent).code && 0 === p.data.nBK && p.data.sendKeyCount > 0)) {
                e.next = 52;
                break
              }
              if (!((h = p.data.data) && h.length > 0)) {
                e.next = 50;
                break
              }
              return g = (0, d.Base64Decode)(h), x = (0, r.string2Hex)(g), e.next = 32, c.MifareAuthBatchAsync(t, 3, 0, x, !0, n);
            case 32:
              if (0 !== (m = e.sent).ans) {
                e.next = 42;
                break
              }
              return console.log("find key", m.key), o.ans = m.ans, o.key = m.key, _.control = 255, (0, r.requestAsync)("GET", "CopyKEY/MifareDarkside", _), e.abrupt("break", 77);
            case 42:
              if (m.ans !== i.globalData.data.bluetooth.ble_ans.err_readcard) {
                e.next = 50;
                break
              }
              return e.next = 45, c.SelectMifareCardAsync(t, s.UID, void 0);
            case 45:
              if (0 == e.sent.ans) {
                e.next = 50;
                break
              }
              throw _.control = 255, (0, r.requestAsync)("GET", "CopyKEY/MifareDarkside", _), this.decode_message.card_read_err;
            case 50:
              e.next = 55;
              break;
            case 52:
              u.state = 2, u.per = 238, c.UpdateDarksideDecodeProgress(u, n);
            case 55:
              y = 0, k = 0, e.next = 75;
              break;
            case 59:
              if (k++, 254 !== b.data && 253 !== b.data) {
                e.next = 64;
                break
              }
              throw this.decode_message.decode_no_has_keys;
            case 64:
              if (252 !== b.data) {
                e.next = 67;
                break
              }
              if (!(k > 10)) {
                e.next = 67;
                break
              }
              throw this.decode_message.decode_no_has_keys;
            case 67:
              return e.next = 69, c.SelectMifareCardAsync(t, s.UID, void 0);
            case 69:
              if (0 == e.sent.ans) {
                e.next = 72;
                break
              }
              throw this.decode_message.card_read_err;
            case 72:
              u.state = 238, u.per = b.data, c.UpdateDarksideDecodeProgress(u, n);
            case 75:
              e.next = 7;
              break;
            case 77:
              return e.abrupt("return", o);
            case 78:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, a, t) {
        return B.apply(this, arguments)
      })
    }, {
      key: "Test4439PlusNestedAsync",
      value: (H = t(a().mark((function e(s, n, c, o, u, l, f, k, y) {
        var b, _, p, h, g, x, m, v, A, D, w, T, S, M, U;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              if (b = this, _ = {
                  ans: -1,
                  block: l,
                  type: f,
                  key: []
                }, p = {
                  state: 0,
                  total: 0,
                  scan: 0,
                  loadcount: 0
                }, h = {
                  is_thirdtag: !1,
                  trgBlockNo: l,
                  trgKeyType: f,
                  loadcount: 0,
                  total: 0,
                  getall: !1,
                  test_pos: 0,
                  test_count: 0,
                  keylist: []
                }, g = !1, x = 0, m = 0, v = !0, k && n.tem_key.getall && n.tem_key.keylist && n.tem_key.keylist.length > 0 && (h = n.tem_key, g = !0, v = !1, x = h.test_pos, m = h.test_count, p.total = h.total, p.loadcount = h.loadcount, p.state = 2, p.scan = m, b.UpdateAuthKeysProgress(l, f, p, b.decode_message.test_mf_static_nonce, y), m >= h.total && h.getall && (console.log("需要重新获取"), x = 0, m = 0, v = !0)), !v) {
                e.next = 22;
                break
              }
              return A = function() {
                var e = t(a().mark((function e() {
                  var t, c, o, u, k, _, g, x;
                  return a().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        t = 0, c = 0, p.state = 1, p.total = 0, p.loadcount = 0, b.UpdateAuthKeysProgress(l, f, p, b.decode_message.test_mf_static_nonce, y), o = (0, r.getUUID)(), u = {
                          taskUuid: o,
                          MCUUID: i.globalData.data.bluetooth.GetDeviceInfo(s).MCUUID,
                          uid: n.UID.slice(n.UID.length - 4),
                          control: t,
                          block: l,
                          keytype: f,
                          data: S,
                          pos: c
                        };
                      case 8:
                        if (!b.IsStop(s)) {
                          e.next = 11;
                          break
                        }
                        throw b.decode_message.cancel;
                      case 11:
                        return u.control = t, u.pos = c, e.next = 15, (0, r.requestAsync)("GET", "CopyKEY/MifareNested", u, void 0, 3e4);
                      case 15:
                        if (!(0 == (k = e.sent).code && 0 === k.data.nBK && k.data.sendKeyCount > 0)) {
                          e.next = 39;
                          break
                        }
                        if (!((_ = k.data.data) && _.length > 0)) {
                          e.next = 37;
                          break
                        }
                        if (g = (0, d.Base64Decode)(_), x = (0, r.string2Hex)(g), h.keylist.push(x), h.loadcount += k.data.sendKeyCount, h.total = k.data.keyCount, c = h.loadcount, p.total = h.total, p.loadcount = h.loadcount, !(c < h.total)) {
                          e.next = 32;
                          break
                        }
                        h.getall = !1, t = 1, e.next = 37;
                        break;
                      case 32:
                        return h.getall = !0, t = 255, u.control = t, (0, r.requestAsync)("GET", "CopyKEY/MifareNested", u), e.abrupt("break", 46);
                      case 37:
                        e.next = 44;
                        break;
                      case 39:
                        return u.control = 255, (0, r.requestAsync)("GET", "CopyKEY/MifareNested", u), p.state = 255, b.UpdateAuthKeysProgress(l, f, p, b.decode_message.test_mf_static_nonce, y), e.abrupt("break", 46);
                      case 44:
                        e.next = 8;
                        break;
                      case 46:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })));
                return function() {
                  return e.apply(this, arguments)
                }
              }(), e.next = 13, i.globalData.data.bluetooth.cmdGetMifareNested1NtAsync(s, c, o, u, l, f, 2, y);
            case 13:
              if (0 === (D = e.sent).ans) {
                e.next = 16;
                break
              }
              return e.abrupt("return", _);
            case 16:
              for (n.tem_key = h, w = new Array(4), T = 0; T < 4; T++) w[T] = D.data.nt_nested[T] ^ D.data.nt_enc[T];
              S = {
                fixed_nt: D.data.nt,
                nt1: D.data.nt_nested,
                ks1: w,
                nt1_par_enc: D.data.nt_par_enc,
                nt2: D.data.nt_nested,
                ks2: w,
                nt2_par_enc: D.data.nt_par_enc
              }, A(), g = !0;
            case 22:
              if (!g) {
                e.next = 62;
                break
              }
            case 23:
              if (!b.IsStop(s)) {
                e.next = 26;
                break
              }
              throw b.decode_message.cancel;
            case 26:
              if (!(m >= h.total && h.getall)) {
                e.next = 30;
                break
              }
              return console.log("已全部扫描完成"), n.tem_key = {}, e.abrupt("break", 62);
            case 30:
              if (!(x >= h.keylist.length)) {
                e.next = 34;
                break
              }
              return e.next = 33, (0, r.sleep)(500);
            case 33:
              return e.abrupt("continue", 23);
            case 34:
              return M = h.keylist[x], e.next = 37, b.MifareAuthBatchAsync(s, l, f, M, !1, y);
            case 37:
              if (0 !== (U = e.sent).ans) {
                e.next = 46;
                break
              }
              return console.log("find key", U.key), n.tem_key = {}, _.ans = U.ans, _.key = U.key, e.abrupt("break", 62);
            case 46:
              if (U.ans !== i.globalData.data.bluetooth.ble_ans.err_readcard) {
                e.next = 53;
                break
              }
              return console.log("读卡失败"), e.next = 50, b.SelectMifareCardAsync(s, n.UID, void 0);
            case 50:
              if (0 == e.sent.ans) {
                e.next = 53;
                break
              }
              throw this.decode_message.card_read_err;
            case 53:
              m += M.length / 6, x++, p.state = 2, p.scan = m, n.tem_key.test_pos = x, n.tem_key.test_count = m, b.UpdateAuthKeysProgress(l, f, p, b.decode_message.test_mf_static_nonce, y), e.next = 23;
              break;
            case 62:
              return e.abrupt("return", _);
            case 63:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, a, t, s, n, r, c, o, d) {
        return H.apply(this, arguments)
      })
    }, {
      key: "TestThirdTagNestedAsync",
      value: (C = t(a().mark((function e(s, n, o, u, l, f) {
        var k, y, b, _, p, h, g, x, m, v, A, D, w, T, S, M, U, I, K, F, C, H, B, N;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              if (k = this, y = {
                  ans: -1,
                  block: o,
                  type: u,
                  key: []
                }, b = [
                  [163, 150, 239, 164, 226, 79],
                  [163, 22, 103, 168, 206, 193]
                ], _ = {
                  state: 0,
                  total: 0,
                  scan: 0,
                  loadcount: 0
                }, p = {
                  is_thirdtag: !0,
                  trgBlockNo: o,
                  trgKeyType: u,
                  loadcount: 0,
                  total: 0,
                  getall: !1,
                  test_pos: 0,
                  test_count: 0,
                  keylist: []
                }, h = !1, g = 0, x = 0, m = !0, l && n.tem_key.getall && n.tem_key.keylist && n.tem_key.keylist.length > 0 && (p = n.tem_key, h = !0, m = !1, g = p.test_pos, x = p.test_count, _.total = p.total, _.loadcount = p.loadcount, _.state = 2, _.scan = x, k.UpdateAuthKeysProgress(o, u, _, k.decode_message.test_mf_thrid_nonce, f), x >= p.total && p.getall && (console.log("需要重新获取"), g = 0, x = 0, m = !0)), !m) {
                e.next = 50;
                break
              }
              v = !1, A = b[0], D = 0;
            case 14:
              if (!(D < b.length)) {
                e.next = 40;
                break
              }
              return e.next = 17, i.globalData.data.bluetooth.cmdGetMifareThirdTagNoncesAsync(s, o, 0, b[D], null);
            case 17:
              if (0 !== (w = e.sent).ans) {
                e.next = 37;
                break
              }
              T = 0, S = 0, T = (0, r.bytes_to_num)(w.data.nt_enc), M = 0;
            case 23:
              if (!(M < 1)) {
                e.next = 31;
                break
              }
              return e.next = 26, i.globalData.data.bluetooth.cmdGetMifareThirdTagNoncesAsync(s, o, 0, b[D], null);
            case 26:
              0 === (U = e.sent).ans && (I = (0, r.bytes_to_num)(U.data.nt_enc), T !== I ? T = I : S++);
            case 28:
              M++, e.next = 23;
              break;
            case 31:
              if (1 === S) {
                e.next = 34;
                break
              }
              return y.ans = -2, e.abrupt("return", y);
            case 34:
              return A = b[D], v = !0, e.abrupt("break", 40);
            case 37:
              D++, e.next = 14;
              break;
            case 40:
              if (v) {
                e.next = 43;
                break
              }
              return y.ans = -3, e.abrupt("return", y);
            case 43:
              return e.next = 45, i.globalData.data.bluetooth.cmdGetMifareThirdTagNoncesAsync(s, o, 0, A, null);
            case 45:
              return K = e.sent, e.next = 48, i.globalData.data.bluetooth.cmdGetMifareThirdTagNoncesAsync(s, o, 1, A, null);
            case 48:
              F = e.sent, 0 === K.ans && 0 === F.ans && (C = function() {
                var e = t(a().mark((function e() {
                  var t, l, y, b, h, g, x, m, v, A, D, w, T;
                  return a().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        t = 0, l = 0, _.state = 1, _.total = 0, _.loadcount = 0, k.UpdateAuthKeysProgress(o, u, _, k.decode_message.test_mf_thrid_nonce, f), y = new c.cardUtil, b = y.blockToSector(o), h = !1, g = void 0, x = void 0, n.data[b].foundKey[1 == u ? 0 : 1] && (h = !0, g = 1 == u ? H.nt1 : H.nt2, x = n.data[b].keys[1 == u ? 0 : 1], console.log(h, g, x)), m = (0, r.getUUID)(), v = {
                          taskUuid: m,
                          MCUUID: i.globalData.data.bluetooth.GetDeviceInfo(s).MCUUID,
                          uid: n.UID.slice(n.UID.length - 4),
                          control: t,
                          block: o,
                          keytype: u,
                          data: H,
                          pos: l,
                          has_key: h,
                          nt_nested: g,
                          key: x
                        };
                      case 14:
                        if (!k.IsStop(s)) {
                          e.next = 17;
                          break
                        }
                        throw k.decode_message.cancel;
                      case 17:
                        return v.control = t, v.pos = l, e.next = 21, (0, r.requestAsync)("GET", "CopyKEY/MifareStaticNested", v, void 0, 3e4);
                      case 21:
                        if (!(0 == (A = e.sent).code && 0 === A.data.nBK && A.data.sendKeyCount > 0)) {
                          e.next = 45;
                          break
                        }
                        if (!((D = A.data.data) && D.length > 0)) {
                          e.next = 43;
                          break
                        }
                        if (w = (0, d.Base64Decode)(D), T = (0, r.string2Hex)(w), p.keylist.push(T), p.loadcount += A.data.sendKeyCount, p.total = A.data.keyCount, l = p.loadcount, _.total = p.total, _.loadcount = p.loadcount, !(l < p.total)) {
                          e.next = 38;
                          break
                        }
                        p.getall = !1, t = 1, e.next = 43;
                        break;
                      case 38:
                        return p.getall = !0, t = 255, v.control = t, (0, r.requestAsync)("GET", "CopyKEY/MifareStaticNested", v), e.abrupt("break", 52);
                      case 43:
                        e.next = 50;
                        break;
                      case 45:
                        return v.control = 255, (0, r.requestAsync)("GET", "CopyKEY/MifareStaticNested", v), _.state = 255, k.UpdateAuthKeysProgress(o, u, _, k.decode_message.test_mf_thrid_nonce, f), e.abrupt("break", 52);
                      case 50:
                        e.next = 14;
                        break;
                      case 52:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })));
                return function() {
                  return e.apply(this, arguments)
                }
              }(), n.tem_key = p, H = {
                fixed_nt: [],
                nt1: K.data.nt,
                ks1: K.data.nt_enc,
                nt1_par_enc: K.data.nt_par_enc,
                nt2: F.data.nt,
                ks2: F.data.nt_enc,
                nt2_par_enc: F.data.nt_par_enc
              }, C(), h = !0);
            case 50:
              if (!h) {
                e.next = 90;
                break
              }
            case 51:
              if (!k.IsStop(s)) {
                e.next = 54;
                break
              }
              throw k.decode_message.cancel;
            case 54:
              if (!(x >= p.total && p.getall)) {
                e.next = 58;
                break
              }
              return console.log("已全部扫描完成"), n.tem_key = {}, e.abrupt("break", 90);
            case 58:
              if (!(g >= p.keylist.length)) {
                e.next = 62;
                break
              }
              return e.next = 61, (0, r.sleep)(500);
            case 61:
              return e.abrupt("continue", 51);
            case 62:
              return B = p.keylist[g], e.next = 65, k.MifareAuthBatchAsync(s, o, u, B, !1, f);
            case 65:
              if (0 !== (N = e.sent).ans) {
                e.next = 74;
                break
              }
              return console.log("find key", N.key), n.tem_key = {}, y.ans = N.ans, y.key = N.key, e.abrupt("break", 90);
            case 74:
              if (N.ans !== i.globalData.data.bluetooth.ble_ans.err_readcard) {
                e.next = 81;
                break
              }
              return console.log("读卡失败"), e.next = 78, k.SelectMifareCardAsync(s, n.UID, void 0);
            case 78:
              if (0 == e.sent.ans) {
                e.next = 81;
                break
              }
              throw this.decode_message.card_read_err;
            case 81:
              x += B.length / 6, g++, _.state = 2, _.scan = x, n.tem_key.test_pos = g, n.tem_key.test_count = x, k.UpdateAuthKeysProgress(o, u, _, k.decode_message.test_mf_thrid_nonce, f), e.next = 51;
              break;
            case 90:
              return e.abrupt("return", y);
            case 91:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, a, t, s, n, r) {
        return C.apply(this, arguments)
      })
    }, {
      key: "TestFastNestedAsync",
      value: (F = t(a().mark((function e(t, s, n, c, o, u, l, f) {
        var k, y, b, _, p, h, g, x, m, v, A, D, w, T, S, M, U, I, K;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              k = this, y = {
                ans: -1,
                block: u,
                type: l,
                key: []
              }, b = {
                state: 0,
                trycount: 0,
                per: 0
              }, _ = c, p = (0, r.getUUID)(), h = 120, g = 1, x = 0;
            case 8:
              if (!h--) {
                e.next = 124;
                break
              }
              if (!k.IsStop(t)) {
                e.next = 11;
                break
              }
              throw k.decode_message.cancel;
            case 11:
              return b.trycount = 120 - h, b.state = 1, k.UpdateNestedDecodeProgress(u, l, b, f), e.next = 16, i.globalData.data.bluetooth.cmdGetMifareNestedAsync(t, n, _, o, u, l, g, null);
            case 16:
              if (0 !== (m = e.sent).ans && 5 !== m.ans) {
                e.next = 59;
                break
              }
              return v = {
                taskUuid: p,
                MCUUID: i.globalData.data.bluetooth.GetDeviceInfo(t).MCUUID,
                uid: s.UID.slice(s.UID.length - 4),
                control: 0,
                block: u,
                keytype: l,
                data: m.data
              }, b.state = 2, b.per = 0, k.UpdateNestedDecodeProgress(u, l, b, f), e.next = 24, (0, r.requestAsync)("GET", "CopyKEY/MifareNested", v, void 0, 3e4);
            case 24:
              if (!(0 == (A = e.sent).code && 0 === A.data.nBK && A.data.sendKeyCount > 0)) {
                e.next = 52;
                break
              }
              if (!((D = A.data.data) && D.length > 0)) {
                e.next = 50;
                break
              }
              return w = (0, d.Base64Decode)(D), T = (0, r.string2Hex)(w), e.next = 32, k.MifareAuthBatchAsync(t, u, l, T, !0, f);
            case 32:
              if (0 !== (S = e.sent).ans) {
                e.next = 42;
                break
              }
              return console.log("find key", S.key), y.ans = S.ans, y.key = S.key, v.control = 255, (0, r.requestAsync)("GET", "CopyKEY/MifareNested", v), e.abrupt("break", 124);
            case 42:
              if (S.ans !== i.globalData.data.bluetooth.ble_ans.err_readcard) {
                e.next = 50;
                break
              }
              return e.next = 45, k.SelectMifareCardAsync(t, s.UID, void 0);
            case 45:
              if (0 == e.sent.ans) {
                e.next = 50;
                break
              }
              throw v.control = 255, (0, r.requestAsync)("GET", "CopyKEY/MifareNested", v), this.decode_message.card_read_err;
            case 50:
              e.next = 55;
              break;
            case 52:
              b.state = 2, b.per = 238, k.UpdateNestedDecodeProgress(u, l, b, f);
            case 55:
              g = h % 10 == 0 ? 1 : 0, x = 0, e.next = 122;
              break;
            case 59:
              if (4 !== m.ans) {
                e.next = 110;
                break
              }
              return e.next = 62, k.GetMifareDecodeTpyeAsync(t, n, _, o, u, l, f);
            case 62:
              if (1 !== (M = e.sent)) {
                e.next = 67;
                break
              }
              return e.abrupt("return", k.TestHardNestedAsync(t, s, n, _, o, u, l, f));
            case 67:
              if (2 !== M && 3 !== M) {
                e.next = 78;
                break
              }
              return e.next = 70, k.Test4439PlusNestedAsync(t, s, n, _, o, u, l, !1, f);
            case 70:
              if (U = e.sent, console.log(U), 0 !== U.ans) {
                e.next = 76;
                break
              }
              return y.ans = U.ans, y.key = U.key, e.abrupt("break", 124);
            case 76:
              e.next = 108;
              break;
            case 78:
              if (4 !== M) {
                e.next = 82;
                break
              }
              throw k.decode_message.is_thirdTag;
            case 82:
              return e.next = 84, k.isThirdTagAsync(t, n, _, o, u, l, 1, 6, f);
            case 84:
              if (1 !== e.sent) {
                e.next = 107;
                break
              }
              return e.next = 88, k.TestThirdTagNestedAsync(t, s, u, l, !1, f);
            case 88:
              if (0 !== (I = e.sent).ans) {
                e.next = 95;
                break
              }
              return y.ans = I.ans, y.key = I.key, e.abrupt("break", 124);
            case 95:
              return e.next = 97, k.Test4439PlusNestedAsync(t, s, n, _, o, u, l, !1, f);
            case 97:
              if (0 !== (K = e.sent).ans) {
                e.next = 104;
                break
              }
              return y.ans = K.ans, y.key = K.key, e.abrupt("break", 124);
            case 104:
              throw k.decode_message.is_thirdTag;
            case 105:
              e.next = 108;
              break;
            case 107:
              return e.abrupt("return", k.TestHardNestedAsync(t, s, n, _, o, u, l, f));
            case 108:
              e.next = 115;
              break;
            case 110:
              return e.next = 112, k.SelectMifareCardAsync(t, s.UID, void 0);
            case 112:
              if (0 == e.sent.ans) {
                e.next = 115;
                break
              }
              throw this.decode_message.card_read_err;
            case 115:
              if (g = 1, !(++x >= 3)) {
                e.next = 119;
                break
              }
              return e.abrupt("break", 124);
            case 119:
              b.state = 238, b.per = m.ans, k.UpdateNestedDecodeProgress(u, l, b, f);
            case 122:
              e.next = 8;
              break;
            case 124:
              return e.abrupt("return", y);
            case 125:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, a, t, s, n, r, c, o) {
        return F.apply(this, arguments)
      })
    }, {
      key: "TestGetEncryptNoncesAsync",
      value: (K = t(a().mark((function e(t, s, n, r, c, o, d, i, u, l) {
        var f, k, y, b, _, p, h, g;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return f = this, k = [], e.next = 4, f.GetMifareHardNestedAsync(t, c, o, d, i, u, s, n, 0, r, void 0);
            case 4:
              if (!(0 === (y = e.sent).ans && y.data.length > 0)) {
                e.next = 10;
                break
              }
              for (b = Math.floor(y.data.length / 10), _ = 0; _ < b; _++) {
                for (p = new Array(9), g = 0; g < 4; g++) p[g] = y.data[5 * _ + g], p[g + 4] = y.data[5 * _ + 5 + g];
                h = y.data[5 * _ + 4] << 4 | 15 & y.data[5 * _ + 9], p[8] = h, k.push.apply(k, p)
              }
              e.next = 15;
              break;
            case 10:
              return e.next = 12, f.SelectMifareCardAsync(t, null, void 0);
            case 12:
              if (0 == e.sent.ans) {
                e.next = 15;
                break
              }
              throw this.decode_message.card_read_err;
            case 15:
              return e.abrupt("return", k);
            case 16:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, a, t, s, n, r, c, o, d, i) {
        return K.apply(this, arguments)
      })
    }, {
      key: "TestHardNestedAsync",
      value: (I = t(a().mark((function e(t, s, n, c, o, u, l, f) {
        var k, y, b, _, p, h, g, x, m, v, A, D, w, T, S, M, U, I, K, F, C, H, B, N, E, G, R, z, P, O, q, Y, L, V, Q;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              k = {
                ans: -1,
                block: u,
                type: l,
                key: []
              }, y = (0, r.getUUID)(), b = {
                taskUuid: y,
                MCUUID: i.globalData.data.bluetooth.GetDeviceInfo(t).MCUUID,
                uid: s.UID.slice(s.UID.length - 4),
                control: 1,
                trgBlockNo: u,
                trgKeyType: l,
                count: 0,
                nonces: []
              }, _ = {
                state: 0,
                trycount: 0,
                per: 0
              }, h = !1, g = -1, x = !0, (p = this).UpdateHardNestedDecodeProgress(u, l, _, f), e.prev = 9, m = null, v = 0;
            case 12:
              if (!(v < 5)) {
                e.next = 197;
                break
              }
              if (A = [], !p.IsStop(t)) {
                e.next = 16;
                break
              }
              throw p.decode_message.cancel;
            case 16:
              if (!h) {
                e.next = 25;
                break
              }
              return x = !0, b.control = 3, b.nonces = [], b.count = 0, e.next = 23, (0, r.requestAsync)("POST", "CopyKEY/MifareHardNested", b, void 0, 3e4);
            case 23:
              0 === (D = e.sent).code && 0 === D.data.nBK && 2 === (g = D.data.state) && (m = D.data.key);
            case 25:
              if (h && 3 !== g) {
                e.next = 58;
                break
              }
              for (_.state = 1, _.trycount = v + 1, w = new Array(256), T = 0; T < 256; T++) w[T] = !1;
              S = 0, M = 0, U = 0;
            case 33:
              if (!p.IsStop(t)) {
                e.next = 36;
                break
              }
              throw p.decode_message.cancel;
            case 36:
              return e.next = 39, p.TestGetEncryptNoncesAsync(t, 0 === S ? 1 : 0, x ? 1 : 0, 128, n, c, o, u, l, void 0);
            case 39:
              if (I = e.sent, !(S > 0)) {
                e.next = 52;
                break
              }
              for (K = I.length / 576, F = 0; F < K; F++) C = I.slice(9 * F * 64, 9 * F * 64 + 576), A.push(C);
              for (H = 0; H < I.length; H += 9)
                for (B = 0; B < 2; B++) w[I[H + 4 * B]] || (w[I[H + 4 * B]] = !0, M++);
              if (256 !== M) {
                e.next = 49;
                break
              }
              if (!(A.length > U + 8)) {
                e.next = 47;
                break
              }
              return e.abrupt("break", 58);
            case 47:
              e.next = 50;
              break;
            case 49:
              U += K;
            case 50:
              e.next = 53;
              break;
            case 52:
              A.push(I);
            case 53:
              S++, _.per = S, p.UpdateHardNestedDecodeProgress(u, l, _, f), e.next = 33;
              break;
            case 58:
              if (_.state = 2, p.UpdateHardNestedDecodeProgress(u, l, _, f), _.state = 3, 0 !== v) {
                e.next = 75;
                break
              }
              return b.nonces = [], b.count = 0, b.control = 1, e.next = 67, (0, r.requestAsync)("POST", "CopyKEY/MifareHardNested", b, void 0, 3e4);
            case 67:
              if (0 !== (N = e.sent).code || 0 !== N.data.nBK) {
                e.next = 74;
                break
              }
              h = !0, 2 === (g = N.data.state) && (m = N.data.key), e.next = 75;
              break;
            case 74:
              return e.abrupt("break", 197);
            case 75:
              if (3 !== g) {
                e.next = 129;
                break
              }
              E = 0;
            case 77:
              if (!(E < A.length)) {
                e.next = 102;
                break
              }
              if (!p.IsStop(t)) {
                e.next = 80;
                break
              }
              throw p.decode_message.cancel;
            case 80:
              if (3 !== g) {
                e.next = 97;
                break
              }
              return G = A[E], b.nonces = G, b.count = G.length / 9, b.control = 2, e.next = 87, (0, r.requestAsync)("POST", "CopyKEY/MifareHardNested", b, void 0, 3e4);
            case 87:
              if (0 !== (R = e.sent).code || 0 !== R.data.nBK) {
                e.next = 93;
                break
              }
              2 === (g = R.data.state) && (m = R.data.key), e.next = 95;
              break;
            case 93:
              return console.log("提交失败", R), e.abrupt("break", 102);
            case 95:
              _.per = E, p.UpdateHardNestedDecodeProgress(u, l, _, f);
            case 97:
              if (3 == g) {
                e.next = 99;
                break
              }
              return e.abrupt("break", 102);
            case 99:
              E++, e.next = 77;
              break;
            case 102:
              if (3 !== g) {
                e.next = 129;
                break
              }
            case 103:
              if (!p.IsStop(t)) {
                e.next = 106;
                break
              }
              throw p.decode_message.cancel;
            case 106:
              return e.next = 109, p.TestGetEncryptNoncesAsync(t, 0, x ? 1 : 0, 128, n, c, o, u, l, void 0);
            case 109:
              return z = e.sent, b.nonces = z, b.count = z.length / 9, b.control = 2, e.next = 115, (0, r.requestAsync)("POST", "CopyKEY/MifareHardNested", b, void 0, 3e4);
            case 115:
              if (0 !== (P = e.sent).code || 0 !== P.data.nBK) {
                e.next = 121;
                break
              }
              2 === (g = P.data.state) && (m = P.data.key), e.next = 123;
              break;
            case 121:
              return console.log("提交失败", P), e.abrupt("break", 129);
            case 123:
              if (3 == g) {
                e.next = 125;
                break
              }
              return e.abrupt("break", 129);
            case 125:
              _.per++, p.UpdateHardNestedDecodeProgress(u, l, _, f), e.next = 103;
              break;
            case 129:
              if (4 !== g) {
                e.next = 165;
                break
              }
              O = 0, q = 0;
            case 132:
              if (!p.IsStop(t)) {
                e.next = 135;
                break
              }
              throw p.decode_message.cancel;
            case 135:
              return b.control = 3, b.nonces = [], b.count = 0, e.next = 140, (0, r.requestAsync)("POST", "CopyKEY/MifareHardNested", b, void 0, 3e4);
            case 140:
              if (0 !== (Y = e.sent).code || 0 !== Y.data.nBK) {
                e.next = 158;
                break
              }
              if (O = 0, 2 !== (g = Y.data.state)) {
                e.next = 150;
                break
              }
              return m = Y.data.key, console.log("查找到密钥"), e.abrupt("break", 165);
            case 150:
              if (3 !== g) {
                e.next = 153;
                break
              }
              return console.log("继续重新提交"), e.abrupt("break", 165);
            case 153:
              _.state = 4, _.per = ++q, p.UpdateHardNestedDecodeProgress(u, l, _, f), e.next = 159;
              break;
            case 158:
              O++;
            case 159:
              if (!(O > 5)) {
                e.next = 161;
                break
              }
              return e.abrupt("break", 165);
            case 161:
              return e.next = 163, (0, r.sleep)(1e3);
            case 163:
              e.next = 132;
              break;
            case 165:
              if (2 !== g || null === m) {
                e.next = 194;
                break
              }
              return L = (0, d.Base64Decode)(m), V = (0, r.string2Hex)(L), console.log(L), e.next = 171, p.MifareAuthBatchAsync(t, u, l, V, !0, f);
            case 171:
              if (Q = e.sent, console.log(Q), 0 !== Q.ans) {
                e.next = 184;
                break
              }
              return console.log("find key", V), k.ans = Q.ans, k.key = Q.key, b.control = 255, b.nonces = [], b.count = 0, (0, r.requestAsync)("POST", "CopyKEY/MifareHardNested", b, void 0, 3e4), e.abrupt("return", k);
            case 184:
              if (Q.ans !== i.globalData.data.bluetooth.ble_ans.err_readcard) {
                e.next = 194;
                break
              }
              return e.next = 187, p.SelectMifareCardAsync(t, s.UID, void 0);
            case 187:
              if (0 == e.sent.ans) {
                e.next = 194;
                break
              }
              throw b.control = 255, b.nonces = [], b.count = 0, (0, r.requestAsync)("POST", "CopyKEY/MifareHardNested", b, void 0, 3e4), this.decode_message.card_read_err;
            case 194:
              v++, e.next = 12;
              break;
            case 197:
              h && (b.control = 255, b.nonces = [], b.count = 0, (0, r.requestAsync)("POST", "CopyKEY/MifareHardNested", b, void 0, 3e4)), e.next = 204;
              break;
            case 200:
              throw e.prev = 200, e.t0 = e.catch(9), h && (b.control = 255, b.nonces = [], b.count = 0, (0, r.requestAsync)("POST", "CopyKEY/MifareHardNested", b, void 0, 3e4)), e.t0;
            case 204:
              return e.abrupt("return", k);
            case 205:
            case "end":
              return e.stop()
          }
        }), e, this, [
          [9, 200]
        ])
      }))), function(e, a, t, s, n, r, c, o) {
        return I.apply(this, arguments)
      })
    }, {
      key: "TestKnowFileDataAsync",
      value: (U = t(a().mark((function t(s, n, d, u, l, f) {
        var k, y, b, _, p, h, g, x, m, v, A, D, w, T, S, M, U, I, K, F, C, H, B, N, E, G, R, z, P;
        return a().wrap((function(a) {
          for (;;) switch (a.prev = a.next) {
            case 0:
              if (k = this, y = new c.cardUtil, b = new o.fileUtil, _ = [
                  [255, 255, 255, 255, 255, 255],
                  [0, 0, 0, 0, 0, 0],
                  [38, 18, 198, 222, 132, 202],
                  [112, 123, 17, 252, 20, 129],
                  [117, 204, 181, 156, 155, 237],
                  [75, 121, 27, 234, 123, 204],
                  [92, 143, 249, 153, 13, 162],
                  [208, 26, 254, 235, 137, 10],
                  [216, 245, 226, 63, 106, 123],
                  [160, 161, 162, 163, 164, 165],
                  [211, 247, 211, 247, 211, 247]
                ], l && l.length > 0)
                for (p = 0; p < l.length; p++) _ = y.AddKey2Lib(_, l[p]);
              if (d != k.decode_control.readonly_fast && i.globalData.data.keyStore.list && i.globalData.data.keyStore.list.length > 0)
                for (h = 0; h < i.globalData.data.keyStore.list.length; h++) g = i.globalData.data.keyStore.list[h].value, 6 === (x = (0, r.string2Hex)(null != g ? g : [])).length && (_ = y.AddKey2Lib(_, x, -1));
              m = [], u && u.length > 0 && m.push(u), (v = b.readCardTempFile(n.UID, n.size, y.card_type.MF)) && v.length > 0 && m.push(v), A = [], (D = b.readCardTempFile(n.UID, n.size, 0)) && D.length > 0 && (A = (0, r.bytes2Json)(D)), w = n.num_sectors, T = [], S = y.getMFTagDataEncryptKeys(n.UID, n.size, w), T.push(S), M = i.globalData.data.bluetooth.GetDeviceInfo(s).version, U = this.GetDeviceTEID(M), this.SupportCPUKKey(U) && (I = y.getCpukIIIKeys(n.UID, n.size, w), T.push(I)), K = 0;
            case 21:
              if (!(K < w)) {
                a.next = 57;
                break
              }
              if (!k.IsStop(s)) {
                a.next = 24;
                break
              }
              throw k.decode_message.cancel;
            case 24:
              F = y.sectorToFirstBlock(K) + y.numberOfBlocks(K) - 1, C = 0;
            case 26:
              if (!(C < 2)) {
                a.next = 54;
                break
              }
              if (!k.IsStop(s)) {
                a.next = 29;
                break
              }
              throw k.decode_message.cancel;
            case 29:
              if (!(n.data[K] && n.data[K].foundKey && n.data[K].foundKey[C])) {
                a.next = 31;
                break
              }
              return a.abrupt("continue", 51);
            case 31:
              for (B in H = _.concat(), T) T[B].length > 2 * K + C && (H = y.AddKey2Lib(H, T[B][2 * K + C]));
              for (A && A.length > K && A[K] && A[K].keys && A[K].keys[C] && A[K].keys[C].length >= 6 && (H = y.AddKey2Lib(H, A[K].keys[C])), N = 0; N < m.length; N++)
                if (m[N].length >= 16 * F + 16) {
                  for (E = new Array(6), G = 0; G < 6; G++) E[G] = m[N][16 * F + 10 * C + G];
                  H = y.AddKey2Lib(H, E)
                } for (R = [], z = 0; z < H.length; z++) R.push.apply(R, e(H[z]));
              if (!(R.length > 0)) {
                a.next = 51;
                break
              }
              return a.next = 40, k.MifareAuthBatchAsync(s, F, C, R, !0, f);
            case 40:
              if (0 !== (P = a.sent).ans) {
                a.next = 46;
                break
              }
              n.data[K].foundKey[C] = !0, n.data[K].keys[C] = P.key, a.next = 51;
              break;
            case 46:
              return a.next = 48, k.SelectMifareCardAsync(s, n.UID, void 0);
            case 48:
              if (0 == a.sent.ans) {
                a.next = 51;
                break
              }
              throw this.decode_message.card_read_err;
            case 51:
              C++, a.next = 26;
              break;
            case 54:
              K++, a.next = 21;
              break;
            case 57:
            case "end":
              return a.stop()
          }
        }), t, this)
      }))), function(e, a, t, s, n, r) {
        return U.apply(this, arguments)
      })
    }, {
      key: "TestKnowKeysAsync",
      value: (M = t(a().mark((function e(t, s, n, r) {
        var o, d, i, u, l, f, k;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              o = this, d = new c.cardUtil, i = s.num_sectors, u = 0;
            case 4:
              if (!(u < i)) {
                e.next = 33;
                break
              }
              if (!o.IsStop(t)) {
                e.next = 7;
                break
              }
              throw o.decode_message.cancel;
            case 7:
              l = d.sectorToFirstBlock(u) + d.numberOfBlocks(u) - 1, f = 0;
            case 9:
              if (!(f < 2)) {
                e.next = 30;
                break
              }
              if (!o.IsStop(t)) {
                e.next = 12;
                break
              }
              throw o.decode_message.cancel;
            case 12:
              if (!(s.data[u] && s.data[u].foundKey && s.data[u].foundKey[f])) {
                e.next = 14;
                break
              }
              return e.abrupt("continue", 27);
            case 14:
              return e.next = 16, o.MifareAuthBatchAsync(t, l, f, n, !0, r);
            case 16:
              if (0 !== (k = e.sent).ans) {
                e.next = 22;
                break
              }
              s.data[u].foundKey[f] = !0, s.data[u].keys[f] = k.key, e.next = 27;
              break;
            case 22:
              return e.next = 24, o.SelectMifareCardAsync(t, s.UID, void 0);
            case 24:
              if (0 == e.sent.ans) {
                e.next = 27;
                break
              }
              throw this.decode_message.card_read_err;
            case 27:
              f++, e.next = 9;
              break;
            case 30:
              u++, e.next = 4;
              break;
            case 33:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, a, t, s) {
        return M.apply(this, arguments)
      })
    }, {
      key: "TestReadAllKeyBAsync",
      value: (S = t(a().mark((function e(t, s, n) {
        var r, c, o;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              r = this, c = s.num_sectors, o = 0;
            case 3:
              if (!(o < c)) {
                e.next = 12;
                break
              }
              if (!r.IsStop(t)) {
                e.next = 6;
                break
              }
              throw r.decode_message.cancel;
            case 6:
              if (!s.data[o].foundKey[0] || s.data[o].foundKey[1]) {
                e.next = 9;
                break
              }
              return e.next = 9, r.TestReadKeyBAsync(t, s, o, s.data[o].keys[0], n);
            case 9:
              o++, e.next = 3;
              break;
            case 12:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, a, t) {
        return S.apply(this, arguments)
      })
    }, {
      key: "TestReadKeyBAsync",
      value: (T = t(a().mark((function e(t, s, n, r, o) {
        var d, u, l, f, k;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return d = this, u = new c.cardUtil, l = u.sectorToFirstBlock(n) + u.numberOfBlocks(n) - 1, e.next = 5, d.AuthReadMifareTagBlockAsync(t, s.UID, l, 0, r, o);
            case 5:
              if (0 !== (f = e.sent).ans) {
                e.next = 17;
                break
              }
              return k = f.data.slice(10), d.UpdateDecodeKeys(n, 1, d.decode_key_color.doing, null, o), e.next = 11, i.globalData.data.bluetooth.cmdMifareAuthAsync(t, s.UID, l, 1, k, null);
            case 11:
              if (0 !== e.sent.ans) {
                e.next = 17;
                break
              }
              return d.UpdateDecodeKeys(n, 1, d.decode_key_color.get, k, o), s.data[n].foundKey[1] = !0, s.data[n].keys[1] = k, e.abrupt("return", !0);
            case 17:
              return e.abrupt("return", !1);
            case 18:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, a, t, s, n) {
        return T.apply(this, arguments)
      })
    }, {
      key: "TestMagicTagsAsync",
      value: (w = t(a().mark((function e(t, s, n, r) {
        var c, o;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return c = this, e.next = 3, c.MifareCIdentAsync(t, 0);
            case 3:
              if (0 == (o = e.sent)) {
                e.next = 12;
                break
              }
              if (n !== c.decode_control.format) {
                e.next = 8;
                break
              }
              return e.next = 8, c.TestDoFormatMagicTagsAsync(t, o, s, r);
            case 8:
              return e.next = 10, c.ReadMagicTagsAsync(t, o, s, r);
            case 10:
              if (!c.is_has_all_password(s)) {
                e.next = 12;
                break
              }
              return e.abrupt("return", 1);
            case 12:
              return e.abrupt("return", 0);
            case 13:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, a, t, s) {
        return w.apply(this, arguments)
      })
    }, {
      key: "GetHFTagData",
      value: function(a, t, s) {
        var n = [],
          r = new c.cardUtil;
        if (a.type === r.card_type.MF) {
          var o = a.data,
            d = o.num_sectors,
            i = new Array(6).fill(255),
            u = new Array(6).fill(255),
            l = new Array(6).fill(255);
          if (t && t.length >= 6)
            for (var f = 0; f < 6; f++) i[f] = t[f];
          for (var k = 0; k < d; k++) {
            for (var y = 0; y < 6; y++) u[y] = i[y], l[y] = i[y];
            if (o.data[k].foundKey[0])
              for (var b = 0; b < 6; b++) u[b] = o.data[k].keys[0][b];
            if (o.data[k].foundKey[1])
              for (var _ = 0; _ < 6; _++) l[_] = o.data[k].keys[1][_];
            for (var p = 0; p < r.numberOfBlocks(k); p++) {
              var h = [];
              if (o.data[k].data[p] && o.data[k].data[p].length > 0) {
                if (h = o.data[k].data[p], p + 1 === r.numberOfBlocks(k))
                  for (var g = 0; g < 6; g++) h[g] = u[g], h[g + 10] = l[g]
              } else {
                var x = new Array(16).fill(0);
                if (p + 1 === r.numberOfBlocks(k)) {
                  for (var m = 0; m < 6; m++) x[m] = u[m], x[m + 10] = l[m];
                  x[6] = 255, x[7] = 7, x[8] = 128, x[9] = 105
                }
                if (0 === k && 0 === p) {
                  for (var v = 0; v < o.size; v++) x[v] = o.UID[v];
                  4 === o.size ? (x[4] = o.UID[0] ^ o.UID[1] ^ o.UID[2] ^ o.UID[3], x[5] = o.SAK, x[6] = o.ATQA >> 8 & 255, x[7] = 255 & o.ATQA) : (x[o.size] = o.SAK, x[o.size + 1] = o.ATQA >> 8 & 255, x[o.size + 2] = 255 & o.ATQA)
                }
                h = x
              }
              n.push.apply(n, e(h))
            }
          }
        } else a.data && a.data.data && a.data.data.data && n.push.apply(n, e(a.data.data.data));
        return n
      }
    }, {
      key: "SendHFTagDataAsync",
      value: (D = t(a().mark((function t(s, n, o, d, u) {
        var l, f, k, y, b, _, p, h, g, x, m, v, A, D, w;
        return a().wrap((function(a) {
          for (;;) switch (a.prev = a.next) {
            case 0:
              for (k = this, y = new c.cardUtil, b = {
                  ans: -1,
                  data: [],
                  hash: []
                }, _ = n.data, p = new Array(32).fill(0), h = 0; h < _.size; h++) p[h] = _.UID[h];
              if (p[10] = _.size, p[11] = _.ATQA >> 8 & 255, p[12] = 255 & _.ATQA, p[13] = _.SAK, n.type === y.card_type.MF ? p[14] = 1 : n.type === y.card_type.ULEV1 ? p[14] = 2 : p[14] = 0, p[15] = _.num_sectors, n.type === y.card_type.ULEV1 && (p[16] = 255 & _.data.num_blocks, p[17] = _.data.num_blocks >> 8 & 255), p[18] = d, p[19] = 0, g = (0, r.crc32)(o), x = (0, r.num_to_bytes)(g), p[20] = x[0], p[21] = x[1], p[22] = x[2], p[23] = x[3], n.type === y.card_type.ULEV1)
                for (m = 0; m < 8; m++) p[24 + m] = _.data.version[m];
              return v = p.concat(o), A = i.globalData.data.bluetooth.getDataCheckSum(v), a.next = 26, i.globalData.data.bluetooth.cmdSetHFTagDataAsync(s, _.UID, _.size, v.length, A, null);
            case 26:
              if (0 !== (D = a.sent).ans) {
                a.next = 35;
                break
              }
              return w = function(e) {
                if (0 === e.ans) {
                  var a = {
                    data: {
                      progress: e.progress
                    }
                  };
                  k.SendMessage(k.decode_message.test_set_data, a, u)
                }
              }, a.next = 31, i.globalData.data.bluetooth.cmdSetDataAsync(s, D.data, v, k.stop_decoding, w);
            case 31:
              if (0 === a.sent.ans && (b.ans = 0), !k.IsStop(s)) {
                a.next = 35;
                break
              }
              throw k.decode_message.cancel;
            case 35:
              return (l = b.data).push.apply(l, e(o)), (f = b.hash).push.apply(f, e(x)), a.abrupt("return", b);
            case 38:
            case "end":
              return a.stop()
          }
        }), t, this)
      }))), function(e, a, t, s, n) {
        return D.apply(this, arguments)
      })
    }, {
      key: "GetHFTagDataAsync",
      value: (A = t(a().mark((function e(t, s, n, r, c, o) {
        var d, u, l, f, k;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return u = {
                ans: -1,
                data: []
              }, l = {
                data: 0
              }, (d = this).SendMessage(d.decode_message.dt_readDeviceTag, l, o), e.next = 6, i.globalData.data.bluetooth.cmdGetHFTagDataAsync(t, s, n, r, void 0);
            case 6:
              if (0 !== (f = e.sent).ans) {
                e.next = 13;
                break
              }
              return k = function(e) {
                l.data = e.progress, d.SendMessage(d.decode_message.dt_readDeviceTag, l, o)
              }, e.next = 12, i.globalData.data.bluetooth.cmdGetDataAsync(t, f.data.taskID, 4128, f.data.checkValue, c, k);
            case 12:
              u = e.sent;
            case 13:
              return e.abrupt("return", u);
            case 14:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, a, t, s, n, r) {
        return A.apply(this, arguments)
      })
    }, {
      key: "ReadMifareTagAsync",
      value: (v = t(a().mark((function e(t, s, n, r) {
        var o, d, i, u, l, f, k, y;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              o = this, d = new c.cardUtil, i = s.num_sectors, u = 0;
            case 4:
              if (!(u < i)) {
                e.next = 25;
                break
              }
              if (!o.IsStop(t)) {
                e.next = 7;
                break
              }
              throw o.decode_message.cancel;
            case 7:
              return l = d.numberOfBlocks(u), o.UpdateReadTag(u, o.decode_read_color.doing, 0, r), e.next = 11, o.AuthReadMifareTagSectorAsync(t, s.UID, u, s.data[u], r);
            case 11:
              f = e.sent, k = 0, y = 0;
            case 14:
              if (!(y < l)) {
                e.next = 21;
                break
              }
              if (!o.IsStop(t)) {
                e.next = 17;
                break
              }
              throw o.decode_message.cancel;
            case 17:
              f && f[y] && f[y].length > 0 && (n && s.data[u].data[y] && s.data[u].data[y].length > 0 ? y === l - 1 && (s.data[u].data[y] = f[y]) : s.data[u].data[y] = f[y], k++);
            case 18:
              y++, e.next = 14;
              break;
            case 21:
              o.UpdateReadTag(u, k === d.numberOfBlocks(u) ? o.decode_read_color.get : o.decode_read_color.no_read, 0, r);
            case 22:
              u++, e.next = 4;
              break;
            case 25:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, a, t, s) {
        return v.apply(this, arguments)
      })
    }, {
      key: "MifareCIdentAsync",
      value: (m = t(a().mark((function e(t, s) {
        var n, r, c, o, d, u, l, f, k, y;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return n = this, r = 0, e.next = 4, n.MifareTransmissionShortAsync(t, 64, 0);
            case 4:
              if (c = [64], o = [67], d = [32], u = [35], !(s <= 0 || 1 === s || 2 === s)) {
                e.next = 21;
                break
              }
              return e.next = 11, n.MifareTransmissionBitAsync(t, c, 7);
            case 11:
              if (0 !== (l = e.sent).ans || 4 !== l.data.frame || 10 !== l.data.data[0]) {
                e.next = 21;
                break
              }
              if (r = 2, 2 !== s) {
                e.next = 16;
                break
              }
              return e.abrupt("return", r);
            case 16:
              if (!(s <= 0 || 1 === s)) {
                e.next = 21;
                break
              }
              return e.next = 19, i.globalData.data.bluetooth.cmdTransmissionDataAsync(t, 0, 4, o, null);
            case 19:
              0 === (f = e.sent).ans && 4 === f.data.frame && 10 === f.data.data[0] && (r = 1);
            case 21:
              if (!(r <= 0 && s <= 0 || 3 === s || 4 === s)) {
                e.next = 34;
                break
              }
              return e.next = 24, n.MifareTransmissionBitAsync(t, d, 7);
            case 24:
              if (0 !== (k = e.sent).ans || 4 !== k.data.frame || 10 !== k.data.data[0]) {
                e.next = 34;
                break
              }
              if (r = 4, 4 !== s) {
                e.next = 29;
                break
              }
              return e.abrupt("return", r);
            case 29:
              if (!(s <= 0 || 3 === s)) {
                e.next = 34;
                break
              }
              return e.next = 32, i.globalData.data.bluetooth.cmdTransmissionDataAsync(t, 0, 4, u, null);
            case 32:
              0 === (y = e.sent).ans && 4 === y.data.frame && 10 === y.data.data[0] && (r = 3);
            case 34:
              return e.abrupt("return", r);
            case 35:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, a) {
        return m.apply(this, arguments)
      })
    }, {
      key: "TestDoFormatMagicTagsAsync",
      value: (x = t(a().mark((function e(t, s, n, r) {
        var o, d, i, u, l, f, k, y, b;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              o = this, d = !0, i = new c.cardUtil, u = n.num_sectors, l = 0;
            case 5:
              if (!(l < u)) {
                e.next = 38;
                break
              }
              if (!o.IsStop(t)) {
                e.next = 8;
                break
              }
              throw o.decode_message.cancel;
            case 8:
              o.UpdateFormatTag(l, o.decode_read_color.formating, 3 === s && 4 === n.size ? 2 : 1, r), f = 0, k = i.sectorToFirstBlock(l);
            case 11:
              if (!(k < i.sectorToFirstBlock(l) + i.numberOfBlocks(l))) {
                e.next = 32;
                break
              }
              if (!o.IsStop(t)) {
                e.next = 14;
                break
              }
              throw o.decode_message.cancel;
            case 14:
              if (y = !1, 0 !== l || 0 !== k) {
                e.next = 22;
                break
              }
              if (3 !== s || 4 !== n.size) {
                e.next = 20;
                break
              }
              y = !0, e.next = 22;
              break;
            case 20:
              return f++, e.abrupt("continue", 29);
            case 22:
              return b = new Array(16), k < i.sectorToFirstBlock(l) + i.numberOfBlocks(l) - 1 ? (b.fill(0), y && (b[0] = 170, b[1] = 85, b[2] = 195, b[3] = 150, b[4] = 170, b[5] = 8, b[6] = 4)) : (b.fill(255), b[6] = 255, b[7] = 7, b[8] = 128, b[9] = 105), e.next = 26, o.MifareCSetBlockAsync(t, d, s, k, b, r);
            case 26:
              0 === e.sent.ans && f++, d = !1;
            case 29:
              k++, e.next = 11;
              break;
            case 32:
              if (o.UpdateFormatTag(l, f === i.numberOfBlocks(l) ? o.decode_read_color.format_succ : o.decode_read_color.format_fail, 3 === s && 4 === n.size ? 2 : 1, r), !(f < i.numberOfBlocks(l))) {
                e.next = 35;
                break
              }
              return e.abrupt("break", 38);
            case 35:
              l++, e.next = 5;
              break;
            case 38:
              return e.abrupt("return", n);
            case 39:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, a, t, s) {
        return x.apply(this, arguments)
      })
    }, {
      key: "ReadMagicTagsAsync",
      value: (g = t(a().mark((function e(t, s, n, r) {
        var o, d, i, u, l, f, k, y;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              o = this, d = !0, i = new c.cardUtil, u = n.num_sectors, l = 0;
            case 5:
              if (!(l < u)) {
                e.next = 39;
                break
              }
              if (!o.IsStop(t)) {
                e.next = 8;
                break
              }
              throw o.decode_message.cancel;
            case 8:
              o.UpdateReadTag(l, o.decode_read_color.doing, 3 === s && 4 === n.size ? 2 : 1, r), f = 0, k = i.sectorToFirstBlock(l);
            case 11:
              if (!(k < i.sectorToFirstBlock(l) + i.numberOfBlocks(l))) {
                e.next = 27;
                break
              }
              if (!o.IsStop(t)) {
                e.next = 14;
                break
              }
              throw o.decode_message.cancel;
            case 14:
              return e.next = 16, o.MifareCGetBlockAsync(t, d, s, k);
            case 16:
              if (0 !== (y = e.sent).ans) {
                e.next = 22;
                break
              }
              n.data[l].data[f++] = y.data, k === i.sectorToFirstBlock(l) + i.numberOfBlocks(l) - 1 && (n.data[l].keys[0] = y.data.slice(0, 6), n.data[l].keys[1] = y.data.slice(10, 16)), e.next = 23;
              break;
            case 22:
              return e.abrupt("break", 27);
            case 23:
              d = !1;
            case 24:
              k++, e.next = 11;
              break;
            case 27:
              if (o.UpdateReadTag(l, f === i.numberOfBlocks(l) ? o.decode_read_color.get : o.decode_read_color.no_read, 3 === s && 4 === n.size ? 2 : 1, r), f !== i.numberOfBlocks(l)) {
                e.next = 33;
                break
              }
              n.data[l].foundKey[0] = !0, n.data[l].foundKey[1] = !0, e.next = 36;
              break;
            case 33:
              return n.data[l].foundKey[0] = !1, n.data[l].foundKey[1] = !1, e.abrupt("break", 39);
            case 36:
              l++, e.next = 5;
              break;
            case 39:
              return e.abrupt("return", n);
            case 40:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, a, t, s) {
        return g.apply(this, arguments)
      })
    }, {
      key: "MifareCGetBlockAsync",
      value: (h = t(a().mark((function e(t, s, n, r) {
        var c, o, d, i;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              if (c = this, o = {
                  ans: -1,
                  data: []
                }, d = 0, !s) {
                e.next = 7;
                break
              }
              return e.next = 6, c.MifareCIdentAsync(t, n);
            case 6:
              d = e.sent;
            case 7:
              if (s && d !== n) {
                e.next = 12;
                break
              }
              return e.next = 10, c.MifareTransmissionShortAsync(t, 48, r);
            case 10:
              0 === (i = e.sent).ans && (o.ans = 0, o.data = i.data.data.slice(0, 16));
            case 12:
              return e.abrupt("return", o);
            case 13:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, a, t, s) {
        return h.apply(this, arguments)
      })
    }, {
      key: "MifareCSetBlockAsync",
      value: (p = t(a().mark((function e(t, s, n, r, c) {
        var o, d, u, l;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              if (o = this, d = {
                  ans: -1,
                  data: []
                }, u = 0, !s) {
                e.next = 7;
                break
              }
              return e.next = 6, o.MifareCIdentAsync(t, n);
            case 6:
              u = e.sent;
            case 7:
              if (s && u !== n) {
                e.next = 16;
                break
              }
              return e.next = 10, o.MifareTransmissionShortAsync(t, 160, r);
            case 10:
              if (0 !== e.sent.ans) {
                e.next = 16;
                break
              }
              return e.next = 14, i.globalData.data.bluetooth.cmdTransmissionDataAsync(t, 0, 5, c, null);
            case 14:
              l = e.sent, d.ans = l.ans;
            case 16:
              return e.abrupt("return", d);
            case 17:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, a, t, s, n) {
        return p.apply(this, arguments)
      })
    }, {
      key: "MifareAuthAsync",
      value: (_ = t(a().mark((function e(t, s, n, r, o, d) {
        var u, l, f, k, y;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return u = {
                ans: -1,
                data: 0
              }, e.next = 3, this.SelectMifareCardAsync(t, s, void 0);
            case 3:
              if (0 !== (l = e.sent).ans) {
                e.next = 15;
                break
              }
              return f = new c.cardUtil, k = f.blockToSector(n), this.UpdateDecodeKeys(k, r, this.decode_key_color.doing, null, d), e.next = 10, i.globalData.data.bluetooth.cmdMifareAuthAsync(t, s, n, r, o, d);
            case 10:
              y = e.sent, u.ans = y.ans, this.UpdateDecodeKeys(k, r, 0 === y.ans ? this.decode_key_color.get : this.decode_key_color.no_found, o, d), e.next = 17;
              break;
            case 15:
              throw u.ans = l.ans, this.decode_message.card_read_err;
            case 17:
              return e.abrupt("return", u);
            case 18:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, a, t, s, n, r) {
        return _.apply(this, arguments)
      })
    }, {
      key: "AuthFormatMifareTagSectorAsync",
      value: (b = t(a().mark((function e(t, s, n, r, o) {
        var d, u, l, f, k, y, b, _, p, h, g, x, m;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              d = this, u = new c.cardUtil, l = {
                ans: -1,
                data: 0
              }, f = !0, k = 0, y = u.sectorToFirstBlock(n), b = y + u.numberOfBlocks(n) - 1, _ = 0;
            case 8:
              if (!(_ < 2)) {
                e.next = 57;
                break
              }
              if (!d.IsStop(t)) {
                e.next = 11;
                break
              }
              throw d.decode_message.cancel;
            case 11:
              if (!r.foundKey[1 - _]) {
                e.next = 54;
                break
              }
              for (p = new Array(6), h = 0; h < 6; h++) p[h] = r.keys[1 - _][h];
              g = 0;
            case 15:
              if (!(g < u.numberOfBlocks(n))) {
                e.next = 51;
                break
              }
              if (!d.IsStop(t)) {
                e.next = 18;
                break
              }
              throw d.decode_message.cancel;
            case 18:
              if (0 !== n || g !== u.numberOfBlocks(n) - 1) {
                e.next = 20;
                break
              }
              return e.abrupt("continue", 48);
            case 20:
              if (!f) {
                e.next = 25;
                break
              }
              return e.next = 23, d.MifareAuthAsync(t, s, b - g, 1 - _, p, void 0);
            case 23:
              0 === e.sent.ans && (f = !1);
            case 25:
              if (f) {
                e.next = 48;
                break
              }
              return x = new Array(16), g > 0 ? x.fill(0) : (x.fill(255), x[6] = 255, x[7] = 7, x[8] = 128, x[9] = 105), e.next = 30, i.globalData.data.bluetooth.cmdMifareWriteBlockAsync(t, b - g, x, null);
            case 30:
              if (0 !== e.sent.ans) {
                e.next = 46;
                break
              }
              if (0 !== g) {
                e.next = 43;
                break
              }
              p.fill(255), m = 0;
            case 35:
              if (!(m < 2)) {
                e.next = 43;
                break
              }
              return e.next = 38, i.globalData.data.bluetooth.cmdMifareAuthAsync(t, s, b - g, m, p, void 0);
            case 38:
              0 === e.sent.ans ? r.keys[m] = p : f = !0;
            case 40:
              m++, e.next = 35;
              break;
            case 43:
              k++, e.next = 48;
              break;
            case 46:
              console.log("失败", n, g, _), f = !0;
            case 48:
              g++, e.next = 15;
              break;
            case 51:
              if (k !== (0 === n ? u.numberOfBlocks(n) - 1 : u.numberOfBlocks(n))) {
                e.next = 54;
                break
              }
              return l.ans = 0, e.abrupt("break", 57);
            case 54:
              _++, e.next = 8;
              break;
            case 57:
              return l.data = k, e.abrupt("return", l);
            case 59:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, a, t, s, n) {
        return b.apply(this, arguments)
      })
    }, {
      key: "AuthReadMifareTagSectorAsync",
      value: (y = t(a().mark((function e(t, s, n, r, o) {
        var d, u, l, f, k, y, b, _, p, h, g;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              d = this, u = new c.cardUtil, l = !0, f = 0, k = u.sectorToFirstBlock(n), y = u.numberOfBlocks(n), b = new Array(y), _ = 0;
            case 8:
              if (!(_ < 2)) {
                e.next = 37;
                break
              }
              if (!d.IsStop(t)) {
                e.next = 11;
                break
              }
              throw d.decode_message.cancel;
            case 11:
              if (!r.foundKey[1 - _]) {
                e.next = 34;
                break
              }
              p = 0;
            case 13:
              if (!(p < y)) {
                e.next = 32;
                break
              }
              if (!d.IsStop(t)) {
                e.next = 16;
                break
              }
              throw d.decode_message.cancel;
            case 16:
              if (!(b[p] && b[p].length > 0)) {
                e.next = 19;
                break
              }
              return console.log("该块已读取"), e.abrupt("continue", 29);
            case 19:
              if (!l) {
                e.next = 24;
                break
              }
              return e.next = 22, d.MifareAuthAsync(t, s, k + p, 1 - _, r.keys[1 - _], void 0);
            case 22:
              0 === e.sent.ans && (l = !1);
            case 24:
              if (l) {
                e.next = 29;
                break
              }
              return e.next = 27, i.globalData.data.bluetooth.cmdMifareReadBlockAsync(t, k + p, null);
            case 27:
              if (0 === (h = e.sent).ans) {
                if (f++, b[p] = h.data, p === y - 1)
                  for (g = 0; g < 6; g++) b[p][g] = r.foundKey[0] ? r.keys[0][g] : 255, b[p][g + 10] = r.foundKey[1] ? r.keys[1][g] : 255
              } else l = !0;
            case 29:
              p++, e.next = 13;
              break;
            case 32:
              if (f !== y) {
                e.next = 34;
                break
              }
              return e.abrupt("break", 37);
            case 34:
              _++, e.next = 8;
              break;
            case 37:
              return e.abrupt("return", b);
            case 38:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, a, t, s, n) {
        return y.apply(this, arguments)
      })
    }, {
      key: "AuthReadMifareTagBlockAsync",
      value: (k = t(a().mark((function e(t, s, n, r, c, o) {
        var d, u, l;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return d = {
                ans: -1,
                data: []
              }, e.next = 3, this.SelectMifareCardAsync(t, s, void 0);
            case 3:
              if (0 !== (u = e.sent).ans) {
                e.next = 15;
                break
              }
              return e.next = 7, this.MifareAuthAsync(t, s, n, r, c, void 0);
            case 7:
              if (0 !== e.sent.ans) {
                e.next = 13;
                break
              }
              return e.next = 11, i.globalData.data.bluetooth.cmdMifareReadBlockAsync(t, n, null);
            case 11:
              l = e.sent, d = l;
            case 13:
              e.next = 17;
              break;
            case 15:
              throw d.ans = u.ans, this.decode_message.card_read_err;
            case 17:
              return e.abrupt("return", d);
            case 18:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, a, t, s, n, r) {
        return k.apply(this, arguments)
      })
    }, {
      key: "MifareAuthBatchAsync",
      value: (f = t(a().mark((function e(t, s, n, r, o, d) {
        var u, l, f, k, y, b, _, p, h, g;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              u = {
                ans: -1,
                block: s,
                type: n,
                key: []
              }, l = new c.cardUtil, f = l.blockToSector(s), o && this.UpdateDecodeKeys(f, n, this.decode_key_color.doing, null, d), k = Math.floor(r.length / 6), y = Math.floor((k + 28) / 29), b = 0, _ = 0;
            case 8:
              if (!(_ < y)) {
                e.next = 29;
                break
              }
              if (!this.IsStop(t)) {
                e.next = 11;
                break
              }
              throw this.decode_message.cancel;
            case 11:
              return p = k - b > 29 ? 29 : k - b, h = r.slice(6 * b, 6 * b + 6 * p), e.next = 15, i.globalData.data.bluetooth.cmdMifareAuthBatchAsync(t, s, n, h, null);
            case 15:
              if (0 !== (g = e.sent).ans) {
                e.next = 22;
                break
              }
              return u.ans = 0, u.key = g.data.key, e.abrupt("break", 29);
            case 22:
              if (u.ans = g.ans, g.ans !== i.globalData.data.bluetooth.ble_ans.err_readcard) {
                e.next = 25;
                break
              }
              return e.abrupt("break", 29);
            case 25:
              b += p;
            case 26:
              _++, e.next = 8;
              break;
            case 29:
              return (o || 0 === u.ans) && this.UpdateDecodeKeys(f, n, 0 === u.ans ? this.decode_key_color.get : this.decode_key_color.no_found, u.key, d), e.abrupt("return", u);
            case 31:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, a, t, s, n, r) {
        return f.apply(this, arguments)
      })
    }, {
      key: "HasDefaultPasswordAsync",
      value: (l = t(a().mark((function e(t, s, n) {
        var r, c;
        return a().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return r = this, c = [255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 38, 18, 198, 222, 132, 202, 112, 123, 17, 252, 20, 129, 117, 204, 181, 156, 155, 237, 75, 121, 27, 234, 123, 204, 92, 143, 249, 153, 13, 162, 208, 26, 254, 235, 137, 10, 160, 161, 162, 163, 164, 165, 211, 247, 211, 247, 211, 247], e.next = 4, r.TestKnowKeysAsync(t, s, c, n);
            case 4:
            case "end":
              return e.stop()
          }
        }), e, this)
      }))), function(e, a, t) {
        return l.apply(this, arguments)
      })
    }, {
      key: "UpdateDecodeKeys",
      value: function(e, a, t, s, n) {
        var r = {
          data: {
            sector: e,
            type: a,
            control: t,
            key: s
          }
        };
        this.SendMessage(this.decode_message.test_mf_key, r, n)
      }
    }, {
      key: "UpdateReadTag",
      value: function(e, a, t, s) {
        var n = {
          data: {
            sector: e,
            control: a,
            gen: t
          }
        };
        this.SendMessage(this.decode_message.test_mf_read, n, s)
      }
    }, {
      key: "UpdateFormatTag",
      value: function(e, a, t, s) {
        var n = {
          data: {
            sector: e,
            control: a,
            gen: t
          }
        };
        this.SendMessage(this.decode_message.test_mf_format, n, s)
      }
    }, {
      key: "UpdateDecodeProgress",
      value: function(e, a, t) {
        var s = {
          data: {
            sector: e,
            type: a,
            control: this.decode_key_color.decoding
          }
        };
        this.SendMessage(this.decode_message.test_mf_decoding, s, t)
      }
    }, {
      key: "UpdateDarksideDecodeProgress",
      value: function(e, a) {
        var t = {
          data: {
            sector: 0,
            type: 0,
            data: e
          }
        };
        this.SendMessage(this.decode_message.test_mf_darkside, t, a)
      }
    }, {
      key: "UpdateAuthKeysProgress",
      value: function(e, a, t, s, n) {
        var r = {
          data: {
            sector: (new c.cardUtil).blockToSector(e),
            type: a,
            data: t
          }
        };
        this.SendMessage(s, r, n)
      }
    }, {
      key: "UpdateNestedDecodeProgress",
      value: function(e, a, t, s) {
        var n = {
          data: {
            sector: (new c.cardUtil).blockToSector(e),
            type: a,
            data: t
          }
        };
        this.SendMessage(this.decode_message.test_mf_nested, n, s)
      }
    }, {
      key: "UpdateHardNestedDecodeProgress",
      value: function(e, a, t, s) {
        var n = {
          data: {
            sector: (new c.cardUtil).blockToSector(e),
            type: a,
            data: t
          }
        };
        this.SendMessage(this.decode_message.test_mf_C50, n, s)
      }
    }, {
      key: "SendMessage",
      value: function(e, a, t) {
        "function" == typeof t && t({
          msg: e,
          data: a
        })
      }
    }, {
      key: "SetDecoding",
      value: function(e, a) {
        this.stop_decoding.stop = !a, this.stop_decoding.state = a ? 1 : 2, this.stop_decoding.stop && i.globalData.data.bluetooth.StopBLERecvAsync(e)
      }
    }, {
      key: "SetDecoded",
      value: function() {
        this.stop_decoding.stop = !0, this.stop_decoding.state = 0
      }
    }, {
      key: "IsStop",
      value: function(e) {
        return i.globalData.data.bluetooth.BLE.connectedDevices[e] && i.globalData.data.bluetooth.BLE.connectedDevices[e].connectStatus ? this.stop_decoding.stop : (console.log(":蓝牙断开,退出正在运行的程序"), !0)
      }
    }, {
      key: "SupportSimulateTag",
      value: function(e) {
        return e !== this.device_model.copykey_mini_se && e !== this.device_model.copykey_mini_std
      }
    }, {
      key: "SupportDetectionTag",
      value: function(e) {
        return e !== this.device_model.copykey_mini_se && e !== this.device_model.copykey_mini_std
      }
    }, {
      key: "SupportWriteOffsetFreqIDTag",
      value: function(e) {
        return e !== this.device_model.copykey_mini_se && e !== this.device_model.copykey_mini_std
      }
    }, {
      key: "SupportWriteULEV1",
      value: function(e) {
        return e !== this.device_model.copykey_mini_se && e !== this.device_model.copykey_mini_std && e !== this.device_model.copykey_mini_plus
      }
    }, {
      key: "SupportWriteSIDGID",
      value: function(e) {
        return e !== this.device_model.copykey_mini_se && e !== this.device_model.copykey_mini_std && e !== this.device_model.copykey_mini_plus
      }
    }, {
      key: "SupportWrite4KTag",
      value: function(e) {
        return e !== this.device_model.copykey_mini_se && e !== this.device_model.copykey_mini_std && e !== this.device_model.copykey_mini_plus
      }
    }, {
      key: "SupportWrite7BTag",
      value: function(e) {
        return e !== this.device_model.copykey_mini_se && e !== this.device_model.copykey_mini_std && e !== this.device_model.copykey_mini_plus
      }
    }, {
      key: "SupportCPUKKey",
      value: function(e) {
        return e !== this.device_model.copykey_mini_se && e !== this.device_model.copykey_mini_std && e !== this.device_model.copykey_mini_plus
      }
    }, {
      key: "SupportDetectionNested",
      value: function(e) {
        return e !== this.device_model.copykey_mini_se && e !== this.device_model.copykey_mini_std && e !== this.device_model.copykey_mini_plus
      }
    }, {
      key: "CanShutDown",
      value: function(e) {
        return !!(e && e.length >= 6) && 256 * e[0] + e[1] != this.device_model.copykey_mini_se
      }
    }, {
      key: "SupportNFCTag",
      value: function(e) {
        return e == this.device_model.copykey_mini_pro
      }
    }]), u
  }();
exports.deviceUtil = u;