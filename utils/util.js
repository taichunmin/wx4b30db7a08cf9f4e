Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.uuid2Mac = exports.unsignature = exports.timestamp = exports.stringIsEmpty = exports.string2byte = exports.string2HexByte = exports.string2Hex = exports.string2DecByte = exports.sleep = exports.signature = exports.requestAsync = exports.request = exports.readDownloadFile = exports.rc4 = exports.num_to_bytes = exports.memcmp = exports.json2Bytes = exports.isURL = exports.isPhoneNumber = exports.isNumber = exports.isMac = exports.isLocation = exports.isEmail = exports.isAppName = exports.https_code = exports.hex2string = exports.getUUID = exports.formatTime = exports.errorMsg = exports.downloadFile = exports.crc32 = exports.bytes_to_num = exports.bytes2Json = exports.byte2string = exports.byte2bits = exports.byte2HexString = exports.bits2byte = exports.ab2hex = exports.RC4_Crypt_UnLength = void 0;
var e = require("../@babel/runtime/helpers/toConsumableArray"),
  r = require("../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../@babel/runtime/helpers/typeof"),
  s = require("../miniprogram_npm/ts-md5/index"),
  o = require("./aes_util"),
  a = require("./fileUtil"),
  i = {
    sys_error: -1,
    net_error: -2,
    success: 0,
    analys_err_data: 10,
    file_path_err: 11,
    account_error: 100,
    password_error: 101,
    no_data: 102,
    has_samedata: 103,
    account_has_be_used: 104,
    account_no_signup: 105,
    verify_code_error: 106,
    verify_code_nofound: 107,
    verify_code_timeout: 108,
    verify_code_error_toomany: 109,
    verify_code_error_senderror: 110,
    analysis_error: 200,
    database_error: 201,
    ble_no_signup: 300,
    ble_has_signup: 301,
    httpGet_error: 1e3,
    httpPost_error: 1001,
    jsapi_ticket_regain: 5e4,
    jsapi_ticket_error: 50001,
    jsapi_sinature_error: 50002
  };
exports.https_code = i;
exports.getUUID = function() {
  var e = new Array(8),
    r = new Date;
  return e[0] = 255 & r.getFullYear(), e[1] = r.getMonth() + 1, e[2] = r.getDate(), e[3] = r.getHours(), e[4] = r.getMinutes(), e[5] = r.getSeconds(), e[6] = 255 & r.getMilliseconds(), e[7] = Math.floor(255 * Math.random()), e
};
exports.formatTime = function(e) {
  var r = e.getFullYear(),
    t = e.getMonth() + 1,
    n = e.getDate(),
    s = e.getHours(),
    o = e.getMinutes(),
    a = e.getSeconds(),
    i = e.getMilliseconds();
  return [r, t, n].map(l).join("/") + " " + [s, o, a, i].map(l).join(":")
};
exports.isAppName = function(e) {
  return /^([a-z][a-zA-Z0-9_\.]+)$/.test(e)
};
exports.isLocation = function(e) {
  return /^\d{1,8}\.\d{1,18}$/.test(e)
};
exports.isMac = function(e) {
  return /^([0-9A-Fa-f]{2}:){5}[0-9A-Fa-f]{2}$/.test(e)
};
exports.isURL = function(e) {
  return /^((http|https|ftp|sftp|file|rtsp|telnet|smb|nfs|dav|btspp):\/\/)?((([a-zA-Z0-9-.]+\.[A-Za-z]{2,})(\/[a-zA-Z0-9-_.]+)*)|(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))(:[0-9]+)?\/?(\?[\S]+)?$/.test(e)
};
exports.isNumber = function(e) {
  return /^[\d\*#\x2B\x2C\x3B]*$/.test(e)
};
exports.isPhoneNumber = function(e) {
  var r = /^[1][3,4,5,7,8,9][0-9]{9}$/.test(e);
  return r
};
exports.isEmail = function(e) {
  var r = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(e);
  return r
};
var u = function() {
  var e = (new Date).getTime();
  return e
};
exports.timestamp = u;
exports.byte2bits = function(e) {
  for (var r = new Array(8), t = 0; t < 8; t++) r[7 - t] = e >> t & 1;
  return r
};
exports.bits2byte = function(e) {
  for (var r = 0, t = 0; t < e.length; t++) r |= e[t] << e.length - t - 1;
  return r
};
var c = function(e) {
  var r = JSON.stringify(e),
    t = u(),
    n = (0, o.AesEncryptECB)(r);
  return {
    data: n,
    time_stamp: t,
    signature: s.Md5.hashStr(n + t.toString())
  }
};
exports.signature = c;
var p = function(e, r, t) {
  var n = e + t;
  return s.Md5.hashStr(n).toUpperCase() === r.toUpperCase() ? (0, o.AesDecryptECB)(e) : ""
};
exports.unsignature = p;
exports.stringIsEmpty = function(e) {
  return null === n(e) || "" === e || void 0 === e || e.length <= 0
};
exports.errorMsg = function(e, r) {
  var t = "";
  switch (e) {
    case 100:
    case 101:
      t = "账号/密码错误";
      break;
    case 102:
      t = "数据不存在";
      break;
    case 103:
      t = "数据已存在";
      break;
    case 104:
      t = "该账号已被使用";
      break;
    case 105:
      t = "该账号未注册";
      break;
    case 106:
      t = "验证码错误";
      break;
    case 107:
      t = "验证码不存在";
      break;
    case 108:
    case 109:
      t = "验证码过期";
      break;
    case 110:
      t = "验证码发送错误";
      break;
    case 200:
      t = "数据解析错误";
      break;
    case 201:
      t = "数据异常";
      break;
    case 202:
      t = "数据格式错误";
      break;
    default:
      t = e.toString()
  }
  return t
};
exports.string2DecByte = function(e) {
  for (var r = new Array, t = e.length, n = 0; n < t; n++) {
    var s = e.charAt(n),
      o = e.charCodeAt(n),
      a = 0;
    s >= "0" && s <= "9" ? (a = o - 48, r.push(a)) : n + 1 === t && " " === s && r.push(o)
  }
  return r
};
exports.string2HexByte = function(e) {
  for (var r = new Array, t = e.length, n = 0; n < t; n++) {
    var s = e.charAt(n),
      o = e.charCodeAt(n),
      a = 0;
    (s >= "0" && s <= "9" || s >= "a" && s <= "f" || s >= "A" && s <= "F") && (s >= "0" && s <= "9" ? a = o - 48 : s >= "a" && s <= "f" ? a = o - 97 + 10 : s >= "A" && s <= "F" && (a = o - 65 + 10), r.push(a))
  }
  return r
};
exports.string2Hex = function(e) {
  for (var r = new Array, t = 0, n = 0, s = e.length, o = 0; o < s; o++) {
    var a = e.charAt(o),
      i = e.charCodeAt(o),
      u = 0;
    a >= "0" && a <= "9" || a >= "a" && a <= "f" || a >= "A" && a <= "F" ? (a >= "0" && a <= "9" ? u = i - 48 : a >= "a" && a <= "f" ? u = i - 97 + 10 : a >= "A" && a <= "F" && (u = i - 65 + 10), t = 16 * t + u, (++n >= 2 || o + 1 >= s) && (r.push(t), n = 0, t = 0)) : n > 0 && (r.push(t), n = 0, t = 0)
  }
  return r
};
exports.byte2string = function(e) {
  for (var r = "", t = 0; t < e.length && 0 !== e[t]; t++) r += String.fromCharCode(e[t]);
  return r
};
exports.string2byte = function(e) {
  for (var r = [], t = 0; t < e.length; t++) {
    var n = e[t].charCodeAt(0);
    r.push(n)
  }
  return r
};
exports.hex2string = function(e, r) {
  for (var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n = "", s = r > e.length ? e.length : r, o = 0; o < s; o++) {
    var a = ("00" + e[o].toString(16)).slice(-2);
    n += (o > 0 && t ? " " : "") + a
  }
  return n.toUpperCase()
};
exports.byte2HexString = function(e, r) {
  var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    n = "",
    s = e.length,
    o = r > 0 ? r : 1;
  o *= 2;
  for (var a = Math.ceil(s / o), i = 0; i < a; i++) {
    for (var u = !0, c = 0; c < o; c++)
      if (i * o + c < s) {
        e[i * o + c] > 15 ? n += " " : n += (t && c > 0 && c % 2 == 0 ? " " : "") + e[i * o + c].toString(16)
      } else u = !1;
    u && a > 1 && (n += "\n")
  }
  return (n = n.trim()).toUpperCase()
};
exports.num_to_bytes = function(e) {
  for (var r = new Array(4), t = 0; t < 4; t++) r[t] = 255 & e, e >>= 8;
  return r
};
exports.bytes_to_num = function(e) {
  for (var r = 0, t = e.length, n = 0; n < t; n++) r = r << 8 | e[t - n - 1];
  return r
};
exports.json2Bytes = function(e) {
  for (var r = JSON.stringify(e), t = new Uint8Array(r.length), n = 0; n < r.length; n++) t[n] = r.charCodeAt(n);
  return t
};
exports.bytes2Json = function(e) {
  for (var r = "", t = 0; t < e.length; t++) r += String.fromCharCode(e[t]);
  return JSON.parse(r)
};
exports.memcmp = function(e, r, t) {
  if (null != e && null != r) {
    var n = Math.min(t, r.length);
    if (e.length < n) return -1;
    for (var s = 0; s < n; s++)
      if (e[s] != r[s]) return -1;
    return 0
  }
  return -1
};
var l = function(e) {
  var r = e.toString();
  return r[1] ? r : "0" + r
};
exports.readDownloadFile = function(e, r) {
  var t = {
      code: i.sys_error,
      success: !1,
      errmsg: "数据异常",
      data: {
        filePath: "",
        dataLength: 0
      }
    },
    n = new a.fileUtil,
    s = e,
    o = null;
  if (n.access(s) && (o = n.readFile(s, "utf8"))) {
    var u = JSON.parse(o);
    if (u && u.data && u.signature && u.time_stamp) {
      var c = p(u.data, u.signature, u.time_stamp);
      c.length > 0 ? t = JSON.parse(c) : (t.code = i.analys_err_data, t.success = !1, t.errmsg = "解析数据空")
    } else t.code = i.analys_err_data, t.success = !1, t.errmsg = "解析数据异常"
  } else t.code = i.file_path_err, t.success = !1, t.errmsg = "下载文件异常";
  return t
};
exports.downloadFile = function(e, r, t, n, s, o) {
  var u = {
      code: i.sys_error,
      success: !1,
      errmsg: "数据异常",
      data: {
        filePath: "",
        dataLength: 0
      }
    },
    p = c(r),
    l = p.data;
  l = (l = l.replace(/\+/g, "%2B")).replace(/\=/g, "%3D");
  var f = wx.downloadFile({
    url: "https://copykey.hyctec.cn/" + e + "?data=" + l + "&time_stamp=" + p.time_stamp + "&signature=" + p.signature,
    header: {
      "Content-Type": "application/json"
    },
    success: function(r) {
      200 === r.statusCode ? (u.code = 0, u.success = !0, u.errmsg = "下载成功", u.data.dataLength = r.dataLength, u.data.filePath = r.tempFilePath) : (u.code = i.analys_err_data, u.success = !1, u.errmsg = "下载数据失败" + r.statusCode, (new a.fileUtil).writeErrorLogFile("request", e + " 下载数据失败：" + r.statusCode));
      "function" == typeof t && t(u)
    },
    fail: function(r) {
      u.code = i.net_error, u.success = !1, u.errmsg = r.errMsg, "function" == typeof n && n(u), (new a.fileUtil).writeErrorLogFile("request", e + " 下载异常：" + r.errMsg)
    },
    complete: function(e) {
      "function" == typeof s && s(e)
    }
  });
  if ("function" == typeof o) {
    f.onProgressUpdate((function(e) {
      o(e)
    }))
  }
  return f
};
var f = function() {
  var e = t(r().mark((function e(t, n, s, o, a) {
    var u, c;
    return r().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          return e.prev = 0, u = null, e.next = 4, new Promise((function(e) {
            u = g(t, n, s, (function(r) {
              e(r)
            }), (function(r) {
              e(r)
            }), void 0, a), "function" == typeof o && o(u, 0)
          }));
        case 4:
          return c = e.sent, "function" == typeof o && o(u, 1), e.abrupt("return", c);
        case 9:
          e.prev = 9, e.t0 = e.catch(0), console.log(e.t0);
        case 12:
          return "function" == typeof o && o(void 0, -1), e.abrupt("return", {
            code: i.sys_error,
            success: !1,
            errmsg: "数据异常"
          });
        case 14:
        case "end":
          return e.stop()
      }
    }), e, null, [
      [0, 9]
    ])
  })));
  return function(r, t, n, s, o) {
    return e.apply(this, arguments)
  }
}();
exports.requestAsync = f;
var g = function(e, r, t, n, s, o, u) {
  var l = {
      code: i.sys_error,
      success: !1,
      errmsg: "数据异常"
    },
    f = c(t);
  return wx.request({
    url: "https://copykey.hyctec.cn/" + r,
    data: f,
    header: {
      "content-type": "GET" === e ? "application/json" : "application/x-www-form-urlencoded"
    },
    method: e,
    timeout: u && u > 0 ? u : 6e4,
    success: function(e) {
      if (200 === e.statusCode && e.data && e.data.data && e.data.signature && e.data.time_stamp) {
        var t = p(e.data.data, e.data.signature, e.data.time_stamp);
        if (t.length > 0) {
          var s = JSON.parse(t);
          l = s
        } else l.code = i.analys_err_data, l.success = !1, l.errmsg = "解析数据空"
      } else {
        l.code = i.analys_err_data, l.success = !1, l.errmsg = "解析数据异常" + e.statusCode, (new a.fileUtil).writeErrorLogFile("request", r + " 解析数据异常：" + e.statusCode)
      }
      "function" == typeof n && n(l)
    },
    fail: function(e) {
      l.code = i.net_error, l.success = !1, l.errmsg = e.errMsg, console.log(e), "function" == typeof s && s(l), (new a.fileUtil).writeErrorLogFile("request", r + " 访问异常：" + e.errMsg)
    },
    complete: function(e) {
      "function" == typeof o && o(e)
    }
  })
};
exports.request = g;
var d = function(e, r) {
  if (r.length <= 0 || e.length <= 0) return null;
  var t = new Array(256),
    n = new Array(256),
    s = 0,
    o = 0;
  for (s = 0; s < 256; s++) t[s] = s, n[s] = r[s % r.length];
  for (s = o = 0; s < 256; s++) {
    o = (o + t[s] + n[s]) % 256;
    var a = t[s];
    t[s] = t[o], t[o] = a
  }
  s = o = 0;
  for (var i = new Array(e.length), u = 0; u < e.length; u++) {
    o = (o + t[s = (s + 1) % 256]) % 256;
    var c = t[s];
    t[s] = t[o], t[o] = c;
    var p = e[u] ^ t[(t[s] + t[o]) % 256];
    i[u] = p
  }
  return i
};
exports.rc4 = d;
exports.RC4_Crypt_UnLength = function(r, t) {
  if (t.length <= 0 || r.length <= 0) return null;
  for (var n = [], s = r.length, o = 0; !(o >= s);) {
    var a = o + 64 > s ? s - o : 64,
      i = r.slice(o, o + a),
      u = d(i, t);
    if (null === u) break;
    n.push.apply(n, e(u)), o += a
  }
  return n
};
exports.crc32 = function(e) {
  for (var r = [0, 79764919, 159529838, 222504665, 319059676, 398814059, 445009330, 507990021, 638119352, 583659535, 797628118, 726387553, 890018660, 835552979, 1015980042, 944750013, 1276238704, 1221641927, 1167319070, 1095957929, 1595256236, 1540665371, 1452775106, 1381403509, 1780037320, 1859660671, 1671105958, 1733955601, 2031960084, 2111593891, 1889500026, 1952343757, 2552477408, 2632100695, 2443283854, 2506133561, 2334638140, 2414271883, 2191915858, 2254759653, 3190512472, 3135915759, 3081330742, 3009969537, 2905550212, 2850959411, 2762807018, 2691435357, 3560074640, 3505614887, 3719321342, 3648080713, 3342211916, 3287746299, 3467911202, 3396681109, 4063920168, 4143685023, 4223187782, 4286162673, 3779000052, 3858754371, 3904687514, 3967668269, 881225847, 809987520, 1023691545, 969234094, 662832811, 591600412, 771767749, 717299826, 311336399, 374308984, 453813921, 533576470, 25881363, 88864420, 134795389, 214552010, 2023205639, 2086057648, 1897238633, 1976864222, 1804852699, 1867694188, 1645340341, 1724971778, 1587496639, 1516133128, 1461550545, 1406951526, 1302016099, 1230646740, 1142491917, 1087903418, 2896545431, 2825181984, 2770861561, 2716262478, 3215044683, 3143675388, 3055782693, 3001194130, 2326604591, 2389456536, 2200899649, 2280525302, 2578013683, 2640855108, 2418763421, 2498394922, 3769900519, 3832873040, 3912640137, 3992402750, 4088425275, 4151408268, 4197601365, 4277358050, 3334271071, 3263032808, 3476998961, 3422541446, 3585640067, 3514407732, 3694837229, 3640369242, 1762451694, 1842216281, 1619975040, 1682949687, 2047383090, 2127137669, 1938468188, 2001449195, 1325665622, 1271206113, 1183200824, 1111960463, 1543535498, 1489069629, 1434599652, 1363369299, 622672798, 568075817, 748617968, 677256519, 907627842, 853037301, 1067152940, 995781531, 51762726, 131386257, 177728840, 240578815, 269590778, 349224269, 429104020, 491947555, 4046411278, 4126034873, 4172115296, 4234965207, 3794477266, 3874110821, 3953728444, 4016571915, 3609705398, 3555108353, 3735388376, 3664026991, 3290680682, 3236090077, 3449943556, 3378572211, 3174993278, 3120533705, 3032266256, 2961025959, 2923101090, 2868635157, 2813903052, 2742672763, 2604032198, 2683796849, 2461293480, 2524268063, 2284983834, 2364738477, 2175806836, 2238787779, 1569362073, 1498123566, 1409854455, 1355396672, 1317987909, 1246755826, 1192025387, 1137557660, 2072149281, 2135122070, 1912620623, 1992383480, 1753615357, 1816598090, 1627664531, 1707420964, 295390185, 358241886, 404320391, 483945776, 43990325, 106832002, 186451547, 266083308, 932423249, 861060070, 1041341759, 986742920, 613929101, 542559546, 756411363, 701822548, 3316196985, 3244833742, 3425377559, 3370778784, 3601682597, 3530312978, 3744426955, 3689838204, 3819031489, 3881883254, 3928223919, 4007849240, 4037393693, 4100235434, 4180117107, 4259748804, 2310601993, 2373574846, 2151335527, 2231098320, 2596047829, 2659030626, 2470359227, 2550115596, 2947551409, 2876312838, 2788305887, 2733848168, 3165939309, 3094707162, 3040238851, 2985771188], t = 4294967295, n = 0; n < e.length; n++) t = t << 8 ^ r[255 & (t >> 24 ^ e[n])], t &= 4294967295;
  return t
};
exports.ab2hex = function(e) {
  return Array.prototype.map.call(new Uint8Array(e), (function(e) {
    return ("00" + e.toString(16)).slice(-2)
  })).join("")
};
exports.uuid2Mac = function(e) {
  if (e) {
    var r = e.slice(3, 9),
      t = Array.prototype.map.call(new Uint8Array(r), (function(e) {
        return ("00" + e.toString(16)).slice(-2)
      })).join(":");
    return t = t.toUpperCase()
  }
  return ""
};
exports.sleep = function(e) {
  return new Promise((function(r) {
    setTimeout(r, e)
  }))
};