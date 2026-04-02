Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.cardUtil = void 0;
var r = require("../@babel/runtime/helpers/toConsumableArray"),
  e = require("../@babel/runtime/helpers/classCallCheck"),
  t = require("../@babel/runtime/helpers/createClass"),
  a = require("./util"),
  i = require("./aes_util"),
  s = (require("./AES.js"), function() {
    function s() {
      e(this, s), this.card_type = {
        MF: 1,
        id: 2,
        ULEV1: 3,
        Other: 4
      }, this.UL_TYPES_ARRAY = [0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576, 4194304, 8388608, 16777216, 33554432, 67108864, 134217728, 270532608, 538968064, 1075838976, 2147483648, 2097153, 2097154], this.UL_MEMORY_ARRAY = [15, 15, 47, 19, 40, 41, 41, 19, 40, 44, 134, 230, 15, 255, 37, 37, 15, 233, 233, 233, 233, 15, 44, 230, 19, 10, 44, 44, 15, 15, 230, 19, 15, 47]
    }
    return t(s, [{
      key: "isPrime",
      value: function(r) {
        var e = 0;
        if (r < 2) return 0;
        for (e = 2; e < r; e++)
          if (r % e == 0) return 0;
        return 1
      }
    }, {
      key: "Encyrpt",
      value: function(r, e, t) {
        var a = new Array(e),
          i = 0,
          s = 0,
          n = 0;
        for (i = 0; i < e; i++) 1 == this.isPrime(i) ? (s = r[i] >> 4 & 7, n = (7 & r[i]) << 4, a[i] = 136 & r[i] | s | n, a[i] ^= t[i % 10]) : i % 2 == 0 ? (s = (1 & r[i]) << 1 | (4 & r[i]) << 1 | (16 & r[i]) << 1 | (64 & r[i]) << 1, n = (2 & r[i]) >> 1 | (8 & r[i]) >> 1 | (32 & r[i]) >> 1 | (128 & r[i]) >> 1, a[i] = s | n, a[i] ^= t[i % 10]) : (s = (1 & r[i]) << 4 | (4 & r[i]) << 3 | (16 & r[i]) << 2 | (64 & r[i]) << 1, n = (2 & r[i]) >> 1 | (8 & r[i]) >> 2 | (32 & r[i]) >> 3 | (128 & r[i]) >> 4, a[i] = s | n, a[i] ^= t[i % 10]);
        for (i = 1; i < e; i++) a[i] ^= a[i - 1];
        return a
      }
    }, {
      key: "blockToSector",
      value: function(r) {
        return Math.trunc(r > 128 ? 32 + (r - 128) / 16 : r / 4)
      }
    }, {
      key: "sectorToFirstBlock",
      value: function(r) {
        return r <= 32 ? 4 * r : 128 + 16 * (r - 32)
      }
    }, {
      key: "numberOfBlocks",
      value: function(r) {
        return r < 32 ? 4 : 16
      }
    }, {
      key: "trailer_block",
      value: function(r) {
        return r < 128 ? (r + 1) % 4 == 0 : (r + 1) % 16 == 0
      }
    }, {
      key: "data2HexData",
      value: function(r) {
        var e = [];
        if ("string" == typeof r) {
          var t = (0, i.Base64Decode)(r);
          (0, a.stringIsEmpty)(t) || (e = (0, a.string2Hex)(t))
        }
        return e
      }
    }, {
      key: "isRightMFTagData",
      value: function(r) {
        var e = r.length;
        if (e > 64 && e % 16 == 0) {
          var t = Math.trunc(e / 16);
          return this.trailer_block(t - 1)
        }
        return !1
      }
    }, {
      key: "isRightULEV1TagData",
      value: function(r) {
        if (r.length > 74 && (r.length - 74) % 4 == 0) {
          var e = new Array(4);
          e[0] = r[70], e[1] = r[71], e[2] = r[72], e[3] = r[73];
          var t = e[0] | e[1] << 8 | e[2] << 16 | e[3] << 24;
          return (r.length - 74) / 4 === t || r.length - 74 == 4096
        }
        return !1
      }
    }, {
      key: "isMFTagDataEmpty",
      value: function(r) {
        var e = r.concat();
        if (e.length > 0 && this.isRightMFTagData(e)) {
          var t = new Array(16).fill(0),
            a = new Array(16).fill(255);
          a[6] = 255, a[7] = 7, a[8] = 128, a[9] = 105;
          for (var i = e.length / 16, s = 1; s < i; s++) {
            var n = e.slice(16 * s, 16 * s + 16),
              l = t;
            if (this.trailer_block(s) && (l = a), JSON.stringify(n) != JSON.stringify(l)) return !1
          }
        }
        return !0
      }
    }, {
      key: "GetIDType",
      value: function(r) {
        var e = "";
        return -1 !== r.indexOf("NSC") ? e = "NSC" : -1 !== r.indexOf("ID") && -1 === r.indexOf("HID") ? e = "ID" : -1 !== r.indexOf("HID") ? e = "HID" : -1 !== r.indexOf("SID64") ? e = "SID64" : -1 !== r.indexOf("SID5O") ? e = "SID5O" : -1 !== r.indexOf("SID40") ? e = "SID40" : -1 !== r.indexOf("SID32") ? e = "SID32" : -1 !== r.indexOf("GID64") ? e = "GID64" : -1 !== r.indexOf("GID5O") ? e = "GID5O" : -1 !== r.indexOf("GID40") ? e = "GID40" : -1 !== r.indexOf("GID32") && (e = "GID32"), e
      }
    }, {
      key: "GetIDFreq",
      value: function(r) {
        var e = "";
        return -1 !== r.indexOf("13.56MHz") ? e = "13.56MHz" : -1 !== r.indexOf("125KHz") ? e = "125KHz" : -1 !== r.indexOf("175KHz") ? e = "175KHz" : -1 !== r.indexOf("250KHz") ? e = "250KHz" : -1 !== r.indexOf("300KHz") ? e = "300KHz" : -1 !== r.indexOf("375KHz") ? e = "375KHz" : -1 !== r.indexOf("500KHz") && (e = "500KHz"), e
      }
    }, {
      key: "GetTxtData",
      value: function(e) {
        for (var t = -1, i = "", s = [], n = [], l = 0, o = e.replace(/\r/g, "\n");;) {
          var f = o.indexOf("\n", l),
            c = f;
          f < 0 && (c = o.length);
          var h = o.substring(l, c);
          if ((0, a.stringIsEmpty)(h) || n.push(h), (l = c + 1) >= o.length) break
        }
        var v = !1;
        if (3 === n.length) {
          var g = new Array(57).fill(0),
            y = n[0],
            u = n[1],
            p = n[2],
            d = this.GetIDType(y),
            b = this.GetIDFreq(u),
            m = (0, a.string2Hex)(p);
          if (!(0, a.stringIsEmpty)(d) && !(0, a.stringIsEmpty)(b) && m.length > 0) {
            for (var _ = (0, a.string2byte)(d), A = (0, a.string2byte)(b), T = 0; T < A.length; T++) g[T] = A[T];
            for (var k = 0; k < _.length; k++) g[k + 12] = _[k];
            g[24] = m.length;
            for (var N = 0; N < m.length; N++) g[N + 25] = m[N];
            t = this.card_type.id, s = g, i = (0, a.hex2string)(g, 57), i += "_" + (0, a.hex2string)(m, m.length) + "_" + b + "_" + d, v = !0
          }
        }
        if (!v) {
          for (var I = !1, D = [], F = 0; F < n.length; F++) {
            var U = (0, a.string2Hex)(n[F]);
            16 === U.length && D.push.apply(D, r(U))
          }
          if (D.length > 0 && this.isRightMFTagData(D) && (t = this.card_type.MF, s = D, i = (0, a.hex2string)(D, 16), I = !0), !I && n.length > 5) {
            var x = (0, a.string2Hex)(n[0]),
              C = (0, a.string2Hex)(n[1]),
              E = (0, a.string2Hex)(n[2]),
              M = (0, a.string2Hex)(n[3]),
              S = (0, a.string2Hex)(n[4]);
            if (4 === x.length && 3 === E.length && 32 === M.length) {
              x[0], x[1];
              for (var R = x[2] | x[3] << 8, H = [], L = 5; L < n.length; L++) {
                var G = (0, a.string2Hex)(n[L]);
                4 === G.length && H.push.apply(H, r(G))
              }
              if (H.length === 4 * R) {
                var O = new Array(74);
                O.fill(0);
                for (var w = C.slice(C.length - 4), K = 0; K < 4; K++) O[K] = w[K];
                O[4] = E[0], O[5] = E[1], O[6] = E[2];
                for (var z = 0; z < C.length; z++) O[7 + z] = C[z];
                O[18] = C.length, O[19] = S[0];
                var B = O[19];
                B = B > 16 ? 16 : B;
                for (var V = 0; V < B; V++) O[20 + V] = S[V + 1];
                var q = M.length;
                q = q > 32 ? 32 : q;
                for (var P = 0; P < q; P++) O[36 + P] = M[P];
                O[68] = x[0], O[69] = x[1], O[70] = x[2], O[71] = x[3], t = this.card_type.ULEV1, s = O.concat(H), i = (0, a.hex2string)(O, 36)
              }
            }
          }
        }
        return {
          card_type: t,
          card_info: i,
          card_buffer: s
        }
      }
    }, {
      key: "SetEmptyMFTagDataBySectors",
      value: function(e, t, a, i, s) {
        var n = [],
          l = new Array(16).fill(0),
          o = new Array(16).fill(255);
        o[6] = 255, o[7] = 7, o[8] = 128, o[9] = 105;
        for (var f = e.length, c = new Array(16).fill(0), h = 0; h < f; h++) c[h] = e[h];
        4 === f && (c[4] = c[0] ^ c[1] ^ c[2] ^ c[3], f = 5), c[f] = a, c[f + 1] = t[0], c[f + 2] = t[1];
        for (var v = i.length, g = 0; g < v && g < 16 - f - 3; g++) c[f + 3 + g] = i[g];
        for (var y = 0; y < s; y++)
          for (var u = this.numberOfBlocks(y), p = 0; p < u; p++) p + 1 === u ? n.push.apply(n, r(o)) : 0 === y && 0 === p ? n.push.apply(n, r(c)) : n.push.apply(n, r(l));
        return n
      }
    }, {
      key: "SetEmptyMFTagData",
      value: function(e) {
        var t = [],
          a = e.concat();
        if (a.length > 0 && this.isRightMFTagData(a)) {
          var i = new Array(16).fill(0),
            s = new Array(16).fill(255);
          s[6] = 255, s[7] = 7, s[8] = 128, s[9] = 105, t = a.slice(0, 16);
          for (var n = a.length / 16, l = 1; l < n; l++) {
            var o, f = i;
            this.trailer_block(l) && (f = s), (o = t).push.apply(o, r(f))
          }
        }
        return t
      }
    }, {
      key: "GetMFTagDataKeys",
      value: function(r) {
        var e = [],
          t = r.concat();
        if (t.length > 0 && this.isRightMFTagData(t))
          for (var a = t.length / 16, i = 0; i < a; i++) {
            if (this.trailer_block(i))
              for (var s = 0; s < 2; s++) {
                for (var n = new Array(6), l = 0 === s ? 0 : 10, o = 0; o < 6; o++) n[o] = t[16 * i + o + l];
                this.AddKey2Lib(e, n, -1)
              }
          }
        return e
      }
    }, {
      key: "MFTagDataEncrypt",
      value: function(r) {
        var e = r.concat();
        if (e.length > 0 && this.isRightMFTagData(e)) {
          var t = new Array(21, 133, 146, 129, 41, 5),
            a = new Array(6);
          a[0] = e[0], a[1] = e[1], a[2] = e[2], a[3] = e[3], a[4] = e[4];
          for (var i = e.length / 16, s = 0; s < i; s++) {
            if (this.trailer_block(s)) {
              a[5] = this.blockToSector(s);
              for (var n = 0; n < 2; n++) {
                for (var l = 0; l < 6; l++) a[l] ^= 96 + n;
                for (var o = this.Encyrpt(a, 6, t), f = !0, c = 0 === n ? 0 : 10, h = 0; h < 6; h++) {
                  var v = e[16 * s + h + c];
                  if (0 != v && 255 != v) {
                    f = !1;
                    break
                  }
                }
                if (f)
                  for (var g = 0; g < 6; g++) e[16 * s + g + c] = o[g]
              }
            }
          }
          return e
        }
        return null
      }
    }, {
      key: "getMFTagDataEncryptKeys",
      value: function(r, e, t) {
        var a = [],
          i = new Array(21, 133, 146, 129, 41, 5),
          s = new Array(6);
        r.length >= 4 && e >= 4 && (s[0] = r[0], s[1] = r[1], s[2] = r[2], s[3] = r[3]), r.length >= 7 && e > 4 ? s[4] = r[4] : s[4] = r[0] ^ r[1] ^ r[2] ^ r[3];
        for (var n = 0; n < t; n++) {
          s[5] = n;
          for (var l = 0; l < 2; l++) {
            for (var o = 0; o < 6; o++) s[o] ^= 96 + l;
            var f = this.Encyrpt(s, 6, i);
            a.push(f)
          }
        }
        return a
      }
    }, {
      key: "getIDCardInfo",
      value: function(r, e, t, i) {
        var s, n, l, o = {
            uid: [],
            size: 0,
            type: "",
            freq: "",
            type_ascii: [],
            freq_ascii: []
          },
          f = (0, a.hex2string)(t, i);
        s = (0, a.byte2string)(r), n = "UID:" + f + "  FREQ:" + (0, a.byte2string)(e);
        for (var c = 0, h = i, v = 0; v < h && !(v >= 3); v++) c |= t[h - v - 1] << 8 * v;
        return l = f + " (" + ("0000000000" + c.toString()).slice(-10) + ")", o.uid = t, o.size = i, o.type = s, o.freq = (0, a.byte2string)(e), o.type_ascii = r, o.freq_ascii = e, {
          Type: s,
          CardInfo: n,
          CardID: l,
          Data: o
        }
      }
    }, {
      key: "getULEV1Info",
      value: function(r, e, t, i, s, n) {
        var l, o, f, c = {
            uid: [],
            size: 0,
            ATQA: [],
            sak: 0
          },
          h = this.get_ulev1_version(s, n);
        l = this.get_ulev1_type(h), e = e <= 0 || e > 10 ? 10 : e;
        var v = (0, a.hex2string)(r, e);
        return o = "UID:" + v + "  ATQA:" + (0, a.hex2string)(t, 2, !0) + "  SAK:" + (0, a.hex2string)(i, 1), f = v, c.uid = r, c.size = e, c.ATQA = t, c.sak = i[0], {
          Type: l,
          CardInfo: o,
          CardID: f,
          Data: c
        }
      }
    }, {
      key: "getMFInfo",
      value: function(r, e, t, i) {
        var s, n, l, o = {
          uid: [],
          size: 0,
          ATQA: [],
          sak: 0
        };
        s = this.get_mifare_type(t[1] << 8 | t[0], i[0]);
        var f = (0, a.hex2string)(r, e);
        return n = "UID:" + f + "  ATQA:" + (0, a.hex2string)(t, 2, !0) + "  SAK:" + (0, a.hex2string)(i, 1), l = f, o.uid = r, o.size = e, o.ATQA = t, o.sak = i[0], {
          Type: s,
          CardInfo: n,
          CardID: l,
          Data: o
        }
      }
    }, {
      key: "getCardInfo",
      value: function(r, e, t) {
        var i = "",
          s = "",
          n = "",
          l = {
            uid: [],
            size: 0,
            ATQA: [],
            sak: 0,
            type: "",
            freq: "",
            type_ascii: [],
            freq_ascii: []
          },
          o = (0, a.string2Hex)(e);
        if (r === this.card_type.id) {
          for (var f = new Array(12), c = new Array(12), h = new Array(32), v = 0; v < 12; v++) f[v] = o[v];
          for (var g = 0; g < 12; g++) c[g] = o[12 + g];
          var y = o[24];
          y = y <= 0 || y > 32 ? 32 : y;
          for (var u = 0; u < y; u++) h[u] = o[25 + u];
          for (var p = (0, a.hex2string)(h, y), d = 0, b = y, m = 0; m < b && !(m >= 3); m++) d |= h[b - m - 1] << 8 * m;
          i = (0, a.byte2string)(c), s = "UID:" + p + "  FREQ:" + (0, a.byte2string)(f), n = p + " (" + ("0000000000" + d.toString()).slice(-10) + ")", l.uid = h, l.size = y, l.type = i, l.freq = (0, a.byte2string)(f), l.type_ascii = c, l.freq_ascii = f
        } else if (r === this.card_type.ULEV1) {
          for (var _ = new Array(2), A = new Array(10), T = new Array(1), k = 0, N = new Array(16), I = 0; I < 2; I++) _[I] = o[4 + I];
          T[0] = o[6];
          for (var D = 0; D < 10; D++) A[D] = o[7 + D];
          var F = o[18];
          k = (k = o[19]) > 16 ? 16 : k;
          for (var U = 0; U < k; U++) N[U] = o[20 + U];
          var x = this.get_ulev1_version(k, N);
          i = this.get_ulev1_type(x), F = F <= 0 || F > 10 ? 10 : F;
          var C = (0, a.hex2string)(A, F);
          s = "UID:" + C + "  ATQA:" + (0, a.hex2string)(_, 2, !0) + "  SAK:" + (0, a.hex2string)(T, 1), n = C, l.uid = A, l.size = F, l.ATQA = _, l.sak = T[0]
        } else if (r === this.card_type.MF) {
          if (null != t)
            for (var E = 0; E < 16; E++) o[E] = t[E];
          var M = new Array(2),
            S = new Array(1),
            R = this.get_mifare_uid_size(o),
            H = R <= 0 || R > 10 ? 10 : R;
          if (4 == R) {
            for (var L = 0; L < 2; L++) M[L] = o[R + 2 + L];
            S[0] = o[R + 1]
          } else {
            for (var G = 0; G < 2; G++) M[G] = o[R + 1 + G];
            S[0] = o[R]
          }
          i = this.get_mifare_type(M[1] << 8 | M[0], S[0]);
          var O = (0, a.hex2string)(o, H);
          s = "UID:" + O + "  ATQA:" + (0, a.hex2string)(M, 2, !0) + "  SAK:" + (0, a.hex2string)(S, 1), n = O, l.uid = o.slice(0, H), l.size = H, l.ATQA = M, l.sak = S[0]
        }
        return {
          Type: i,
          CardInfo: s,
          CardID: n,
          Data: l
        }
      }
    }, {
      key: "getCardDataComp",
      value: function(r, e, t) {
        var i = "",
          s = "",
          n = [],
          l = 0;
        if (r === this.card_type.id);
        else {
          var o = null != e ? e : [],
            f = null != t ? t : [];
          if (r === this.card_type.ULEV1) {
            var c = 0;
            if (this.isRightULEV1TagData(o)) {
              var h = new Array(4);
              h[0] = o[70], h[1] = o[71], h[2] = o[72], h[3] = o[73], c = h[0] | h[1] << 8 | h[2] << 16 | h[3] << 24;
              for (var v = new Array(10), g = 0; g < 10; g++) v[g] = o[7 + g];
              var y = o[18];
              y = y <= 0 || y > 10 ? 10 : y, i = "UID:" + (0, a.hex2string)(v, y)
            }
            var u = 0;
            if (this.isRightULEV1TagData(f)) {
              var p = new Array(4);
              p[0] = f[70], p[1] = f[71], p[2] = f[72], p[3] = f[73], u = p[0] | p[1] << 8 | p[2] << 16 | p[3] << 24;
              for (var d = new Array(10), b = 0; b < 10; b++) d[b] = f[7 + b];
              var m = f[18];
              m = m <= 0 || m > 10 ? 10 : m, s = "UID:" + (0, a.hex2string)(d, m)
            }
            for (var _ = {
                name: "",
                list: []
              }, A = c > u ? c : u, T = 0; T < A; T++) {
              for (var k = {
                  id: 0,
                  html_data: "",
                  html_cmpdata: "",
                  block: ""
                }, N = "", I = "<div style='color: #0052d9;'>", D = 0; D < 4; D++) {
                var F = -1,
                  U = -1,
                  x = !0;
                c > T && (F = o[74 + 4 * T + D]), u > T && (U = f[74 + 4 * T + D]), F >= 0 && U >= 0 && F != U && (x = !1);
                var C = "";
                c > T ? (C = ("00" + F.toString(16)).slice(-2).toUpperCase(), x || (C = "<span style='color: rgb(255, 0, 0);'>" + C + "</span>")) : C = "-", N += C + (D < 3 ? " " : "");
                var E = "";
                u > T ? (E = ("00" + U.toString(16)).slice(-2).toUpperCase(), x || (E = "<span style='color: rgb(255, 0, 0);'>" + E + "</span>")) : E = "-", I += E + (D < 3 ? " " : ""), x || l++
              }
              I += "</div>", k.id = T, k.html_data = N, k.html_cmpdata = I, k.block = T + "块", _.list.push(k)
            }
            n.push(_)
          } else {
            var M = 0;
            if (this.isRightMFTagData(o)) {
              var S = o.length / 16;
              M = this.blockToSector(S);
              var R = this.get_mifare_uid_size(o),
                H = R <= 0 || R > 10 ? 10 : R;
              i = "UID:" + (0, a.hex2string)(o, H)
            }
            var L = 0;
            if (this.isRightMFTagData(f)) {
              var G = f.length / 16;
              L = this.blockToSector(G);
              var O = this.get_mifare_uid_size(f),
                w = O <= 0 || O > 10 ? 10 : O;
              s = "UID:" + (0, a.hex2string)(f, w)
            }
            for (var K = M > L ? M : L, z = 0; z < K; z++) {
              for (var B = {
                  name: z + "扇区",
                  list: []
                }, V = this.numberOfBlocks(z), q = 0; q < V; q++) {
                for (var P = {
                    id: 0,
                    html_data: "",
                    html_cmpdata: "",
                    block: ""
                  }, Q = "", W = "<div style='color: #0052d9;'>", J = this.sectorToFirstBlock(z), Y = 0; Y < 16; Y++) {
                  var j = -1,
                    X = -1,
                    Z = !0;
                  M > z && (j = o[16 * (J + q) + Y]), L > z && (X = f[16 * (J + q) + Y]), j >= 0 && X >= 0 && j != X && (Z = !1);
                  var $ = "";
                  M > z ? ($ = ("00" + j.toString(16)).slice(-2).toUpperCase(), Z || ($ = "<span style='color: rgb(255, 0, 0);'>" + $ + "</span>")) : $ = "-", Q += $ + (Y < 15 ? " " : "");
                  var rr = "";
                  L > z ? (rr = ("00" + X.toString(16)).slice(-2).toUpperCase(), Z || (rr = "<span style='color: rgb(255, 0, 0);'>" + rr + "</span>")) : rr = "-", W += rr + (Y < 15 ? " " : ""), Z || l++
                }
                W += "</div>", P.id = J + q, P.html_data = Q, P.html_cmpdata = W, P.block = q + "区块", B.list.push(P)
              }
              n.push(B)
            }
          }
        }
        return {
          UID: i,
          CMP_UID: s,
          Data: n,
          Result: l
        }
      }
    }, {
      key: "getCardDataLine",
      value: function(r, e) {
        var t = "",
          i = [],
          s = e;
        if (r === this.card_type.id) {
          for (var n = new Array(12), l = new Array(12), o = new Array(32), f = 0; f < 12; f++) n[f] = s[f];
          for (var c = 0; c < 12; c++) l[c] = s[12 + c];
          var h = s[24];
          h = h <= 0 || h > 32 ? 32 : h;
          for (var v = 0; v < h; v++) o[v] = s[25 + v];
          var g = {
            name: "",
            list: []
          };
          t = (0, a.hex2string)(o, h);
          var y = (0, a.byte2string)(l) + "\r\n" + (0, a.byte2string)(n) + "\r\n" + t,
            u = {
              id: 0,
              is_edit: !1,
              data: [],
              hex_data: y,
              cursor: 0,
              html_data: y
            };
          g.list.push(u), i.push(g)
        } else if (r === this.card_type.ULEV1) {
          if (this.isRightULEV1TagData(s)) {
            for (var p = {
                name: "",
                list: []
              }, d = new Array(2), b = new Array(10), m = new Array(1), _ = 0; _ < 2; _++) d[_] = s[4 + _];
            m[0] = s[6];
            for (var A = 0; A < 10; A++) b[A] = s[7 + A];
            var T = s[18];
            t = (0, a.hex2string)(b, T);
            var k = new Array(4);
            k[0] = s[70], k[1] = s[71], k[2] = s[72], k[3] = s[73];
            for (var N = k[0] | k[1] << 8 | k[2] << 16 | k[3] << 24, I = 0; I < N; I++) {
              for (var D = {
                  id: 0,
                  is_edit: !1,
                  data: [],
                  hex_data: "",
                  html_data: ""
                }, F = "", U = 0; U < 4; U++) {
                var x = s[74 + 4 * I + U];
                F += ("00" + x.toString(16)).slice(-2).toUpperCase() + (U < 3 ? " " : ""), D.data.push(x)
              }
              D.id = I, D.hex_data = F, D.html_data = ("0000" + I.toString()).slice(-4) + "(0x" + ("00" + I.toString(16)).slice(-2).toUpperCase() + ") " + F, p.list.push(D)
            }
            i.push(p)
          }
        } else if (this.isRightMFTagData(s)) {
          var C = s.length / 16,
            E = this.blockToSector(C),
            M = this.get_mifare_uid_size(s),
            S = M <= 0 || M > 10 ? 10 : M;
          t = (0, a.hex2string)(s, S);
          for (var R = 0; R < E; R++) {
            for (var H = {
                name: R + "扇区",
                list: []
              }, L = this.numberOfBlocks(R), G = 0; G < L; G++) {
              0 === R && 0 === G && 4 === M && (s[4] = s[0] ^ s[1] ^ s[2] ^ s[3]);
              for (var O = {
                  id: 0,
                  is_edit: !1,
                  data: [],
                  hex_data: "",
                  html_data: ""
                }, w = "", K = this.sectorToFirstBlock(R), z = 0; z < 16; z++) {
                var B = s[16 * (K + G) + z];
                w += ("00" + B.toString(16)).slice(-2).toUpperCase() + (z < 15 ? " " : ""), O.data.push(B)
              }
              O.id = K + G, O.hex_data = w, O.html_data = w, H.list.push(O)
            }
            i.push(H)
          }
        }
        return {
          UID: t,
          Data: i
        }
      }
    }, {
      key: "getCardData",
      value: function(r, e, t) {
        var a = 0,
          i = "<div class='html-data-text'><code>";
        if (r === this.card_type.id);
        else {
          var s = e;
          if (s.length > 0)
            if (r === this.card_type.ULEV1)
              if (this.isRightULEV1TagData(s)) {
                var n = new Array(4);
                n[0] = s[70], n[1] = s[71], n[2] = s[72], n[3] = s[73];
                for (var l = n[0] | n[1] << 8 | n[2] << 16 | n[3] << 24, o = void 0 === t ? -1 : t.length, f = void 0 === t ? -1 : Math.trunc((o - 74) / 4), c = 0; c < l; c++) {
                  var h = !1;
                  c < f && (h = !0), i += ("0000" + c.toString()).slice(-4) + "(0x" + ("00" + c.toString(16)).slice(-2).toUpperCase() + ") ";
                  for (var v = "", g = 0; g < 4; g++)
                    if (s.length > 74 + 4 * c + g) {
                      var y = !0,
                        u = s[74 + 4 * c + g];
                      if (h) y = t[74 + 4 * c + g] == u;
                      var p = ("00" + u.toString(16)).slice(-2).toUpperCase() + (g < 3 ? " " : "");
                      y || (p = "<span style='color: rgb(255, 0, 0);'>" + p + "</span>"), v += p
                    } i += v + "<br/>", a++
                }
              } else i += "<span style='color: rgb(255, 0, 0);'>数据长度/格式错误</span>", console.log("数据长度/格式错误");
          else if (r === this.card_type.MF)
            if (this.isRightMFTagData(s)) {
              4 === this.get_mifare_uid_size(s) && (s[4] = s[0] ^ s[1] ^ s[2] ^ s[3]);
              for (var d = -1, b = void 0 === t ? -1 : t.length, m = void 0 === t ? -1 : Math.trunc(b / 16), _ = s.length, A = Math.trunc(_ / 16), T = 0; T < A; T++) {
                var k = !1;
                T < m && (k = !0);
                var N = this.blockToSector(T);
                N != d && (i += (T > 0 ? "<br/>" : "") + "<B>" + (d = N) + "扇区</B>", i += "<br/>");
                for (var I = this.trailer_block(T), D = "", F = !0, U = 0; U < 16; U++) {
                  var x = !0,
                    C = s[16 * T + U];
                  if (0 != C && (F = !1), k) x = t[16 * T + U] == C;
                  var E = ("00" + C.toString(16)).slice(-2).toUpperCase();
                  x || (E = I && U >= 6 && U <= 9 ? "<span style='color: rgb(255, 120, 120);'>" + E + "</span>" : "<span style='color: rgb(255, 0, 0);'>" + E + "</span>"), I && (6 === U ? E = "<i style='color: #32CD32;'>" + E : 9 === U && (E += "</i>")), D += E + (U < 15 ? " " : "")
                }
                F && (D = "<span style='color: rgb(120, 120, 120,0.9);'>" + D + "</span>"), i += D + "<br/>", a++
              }
            } else i += "<span style='color: rgb(255, 0, 0);'>数据长度/格式错误</span>", console.log("数据长度/格式错误")
        }
        return {
          str_data: i += "</code></div><br/>",
          Block: a
        }
      }
    }, {
      key: "getReadCardKeys",
      value: function(r, e) {
        var t = 0,
          a = 0,
          i = "<div class='html-data-text'><code>";
        if (r === this.card_type.id);
        else if (r === this.card_type.ULEV1);
        else if (r === this.card_type.MF)
          for (var s = e.data.num_sectors, n = 0; n < s; n++) {
            var l = [];
            n < e.data.data.length && (l = e.data.data[n]), i += (n > 0 ? "<br/>" : "") + "<B>" + n + "扇区</B>", i += "<br/>";
            for (var o = "", f = 0; f < 2; f++) {
              if (o = "密码" + (0 === f ? "A" : "B") + ":", l.keys && l.keys[f] && l.keys[f].length >= 6) {
                for (var c = 0; c < 6; c++) {
                  o += ("00" + l.keys[f][c].toString(16)).slice(-2).toUpperCase() + (c < 15 ? " " : "")
                }
                o = "<span style='color: rgb(0, 240, 0);'>" + o + "</span>", t++
              } else o = "<span style='color: rgb(240, 0, 0);'>" + (o += "未知") + "</span>";
              i += o + "<br/>", a++
            }
          }
        return {
          str_data: i += "</code></div><br/>",
          Total: a,
          Success: t
        }
      }
    }, {
      key: "getReadCardData",
      value: function(r, e, t) {
        var a = 0,
          i = 0,
          s = "<div class='html-data-text'><code>";
        if (r === this.card_type.id);
        else {
          var n = e;
          if (n.length > 0)
            if (r === this.card_type.ULEV1)
              if (this.isRightULEV1TagData(n)) {
                var l = new Array(4);
                l[0] = n[70], l[1] = n[71], l[2] = n[72], l[3] = n[73];
                for (var o = l[0] | l[1] << 8 | l[2] << 16 | l[3] << 24, f = 0; f < o; f++) {
                  for (var c = ("0000" + f.toString()).slice(-4) + "(0x" + ("00" + f.toString(16)).slice(-2).toUpperCase() + ") ", h = 0; h < 4; h++) {
                    if (n.length > 74 + 4 * f + h) c += ("00" + n[74 + 4 * f + h].toString(16)).slice(-2).toUpperCase() + (h < 3 ? " " : "")
                  }
                  s += (c = "<span style='color: rgb(0, 240, 0);'>" + c + "</span>") + "<br/>", i++, a++
                }
              } else a = 0, s += "<span style='color: rgb(255, 0, 0);'>数据未获取完整。请重新获取</span>";
          else if (r === this.card_type.MF)
            if (this.isRightMFTagData(n)) {
              4 === this.get_mifare_uid_size(n) && (n[4] = n[0] ^ n[1] ^ n[2] ^ n[3]);
              for (var v = n.length, g = Math.trunc(v / 16), y = this.blockToSector(g), u = 0; u < y; u++) {
                var p = [];
                u < t.data.data.length && (p = t.data.data[u]), s += (u > 0 ? "<br/>" : "") + "<B>" + u + "扇区</B>", s += "<br/>";
                for (var d = this.numberOfBlocks(u), b = 0; b < d; b++) {
                  var m = this.sectorToFirstBlock(u) + b,
                    _ = this.trailer_block(m),
                    A = "",
                    T = !1;
                  p.data && p.data[b] && p.data[b].length > 0 && (T = !0);
                  for (var k = !0, N = 0; N < 16; N++) {
                    var I = ("00" + n[16 * m + N].toString(16)).slice(-2).toUpperCase();
                    _ && (p.foundKey[0] || (0 === N ? I = "<i style='color: rgb(120, 0, 0);'>" + I : 5 === N && (I += "</i>"), k = !1), 6 === N ? I = T ? "<i style='color: #32CD32;'>" + I : "<i style='color: rgb(120, 0, 0);'>" + I : 9 === N && (I += "</i>"), p.foundKey[1] || (10 === N ? I = "<i style='color: rgb(120, 0, 0);'>" + I : 15 === N && (I += "</i>"), k = !1)), A += I + (N < 15 ? " " : "")
                  }
                  s += (A = T ? t.isMagicTags ? "<span style='color: rgb(40, 40, 40);'>" + A + "</span>" : "<span style='color: rgb(0, 240, 0);'>" + A + "</span>" : "<span style='color:  rgb(240, 0, 0);'>" + A + "</span>") + "<br/>", T && k && a++, i++
                }
              }
            } else a = 0, s += "<span style='color: rgb(255, 0, 0);'>数据未获取完整。请重新获取</span>"
        }
        return {
          str_data: s += "</code></div><br/>",
          Total: i,
          Success: a
        }
      }
    }, {
      key: "getWriteCardData",
      value: function(r, e, t) {
        var a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          i = 0,
          s = 0,
          n = "<div class='html-data-text'><code>";
        if (r === this.card_type.id);
        else if (r === this.card_type.Other) s = 0, i = 0;
        else {
          var l = e;
          if (l.length > 0)
            if (r === this.card_type.ULEV1) {
              if (l.length > 74) {
                var o = new Array(4);
                o[0] = l[70], o[1] = l[71], o[2] = l[72], o[3] = l[73];
                for (var f = o[0] | o[1] << 8 | o[2] << 16 | o[3] << 24, c = 0; c < f; c++) {
                  var h = !1,
                    v = "",
                    g = Math.floor(c / 8),
                    y = c % 8;
                  if (g < t.B.length) {
                    var u = t.B[g],
                      p = u >> 7 - y & 1;
                    1 === p && (h = !0)
                  }
                  v += h ? "✓" : "•", v += ("0000" + c.toString()).slice(-4) + "(0x" + ("00" + c.toString(16)).slice(-2).toUpperCase() + ") ";
                  for (var d = 0; d < 4; d++)
                    if (l.length > 74 + 4 * c + d) {
                      var b = l[74 + 4 * c + d];
                      v += ("00" + b.toString(16)).slice(-2).toUpperCase() + (d < 3 ? " " : "")
                    } n += (v = h ? "<span style='color: rgb(0, 240, 0);'>" + v + "</span>" : "<span style='color:  rgb(240, 0, 0);'>" + v + "</span>") + "<br/>", i++, h && s++
                }
              }
            } else if (r === this.card_type.MF) {
            var m = this.get_mifare_uid_size(l);
            4 === m && (l[4] = l[0] ^ l[1] ^ l[2] ^ l[3]);
            for (var _ = "扇区", A = l.length, T = Math.trunc(A / 16), k = this.blockToSector(T), N = 0; N < k; N++) {
              n += (N > 0 ? "<br/>" : "") + "<B>" + N + _ + "</B>", n += "<br/>";
              for (var I = this.numberOfBlocks(N), D = 0; D < I; D++)
                if (!a || 0 !== N || 0 !== D) {
                  var F = this.sectorToFirstBlock(N) + D,
                    U = this.trailer_block(F),
                    x = "",
                    C = !1,
                    E = Math.floor(F / 8),
                    M = F % 8;
                  if (E < t.B.length) {
                    var S = t.B[E],
                      R = S >> 7 - M & 1;
                    1 === R && (C = !0)
                  }
                  x += C ? "✓" : "•";
                  for (var H = 0; H < 16; H++) {
                    var L = l[16 * F + H],
                      G = ("00" + L.toString(16)).slice(-2).toUpperCase();
                    U && (6 === H ? G = C ? "<i style='color: #32CD32;'>" + G : "<i style='color: rgb(120, 0, 0);'>" + G : 9 === H && (G += "</i>")), x += G + (H < 15 ? " " : "")
                  }
                  n += (x = C ? "<span style='color: rgb(0, 240, 0);'>" + x + "</span>" : "<span style='color:  rgb(240, 0, 0);'>" + x + "</span>") + "<br/>", i++, C && s++
                }
            }
          }
        }
        return {
          str_data: n += "</code></div><br/>",
          Total: i,
          Success: s
        }
      }
    }, {
      key: "get_ulev1_version",
      value: function(r, e) {
        var t = 0;
        switch (r) {
          case 10:
            if (0 == (0, a.memcmp)(e, [0, 4, 3, 1, 1, 0, 11], 7)) {
              t = 4;
              break
            }
            if (0 == (0, a.memcmp)(e, [0, 4, 3, 1, 2, 0, 11], 7)) {
              t = 33554432;
              break
            }
            if (0 == (0, a.memcmp)(e, [0, 4, 3, 2, 1, 0, 11], 7)) {
              t = 4;
              break
            }
            if (0 == (0, a.memcmp)(e, [0, 4, 3, 1, 1, 0, 14], 7)) {
              t = 8;
              break
            }
            if (0 == (0, a.memcmp)(e, [0, 4, 3, 2, 1, 0, 14], 7)) {
              t = 8;
              break
            }
            if (0 == (0, a.memcmp)(e, [0, 52, 33, 1, 1, 0, 14], 7)) {
              t = 8;
              break
            }
            if (0 == (0, a.memcmp)(e, [0, 4, 4, 1, 1, 0, 11], 7)) {
              t = 64;
              break
            }
            if (0 == (0, a.memcmp)(e, [0, 4, 4, 1, 2, 0, 11], 7)) {
              t = 2147483648;
              break
            }
            if (0 == (0, a.memcmp)(e, [0, 4, 4, 1, 1, 0, 14], 7)) {
              t = 128;
              break
            }
            if (0 == (0, a.memcmp)(e, [0, 4, 4, 2, 1, 0, 15], 7)) {
              t = 256;
              break
            }
            if (0 == (0, a.memcmp)(e, [0, 83, 4, 2, 1, 0, 15], 7)) {
              t = 256;
              break
            }
            if (0 == (0, a.memcmp)(e, [0, 4, 4, 2, 1, 1, 15], 7)) {
              t = 134217728;
              break
            }
            if (0 == (0, a.memcmp)(e, [0, 4, 4, 2, 1, 0, 17], 7)) {
              t = 512;
              break
            }
            if (0 == (0, a.memcmp)(e, [0, 4, 4, 2, 1, 0, 19], 7)) {
              t = 1024;
              break
            }
            if (0 == (0, a.memcmp)(e, [0, 4, 4, 4, 1, 0, 15], 7)) {
              t = 4194304;
              break
            }
            if (0 == (0, a.memcmp)(e, [0, 4, 4, 4, 1, 0, 19], 7)) {
              t = 8388608;
              break
            }
            if (0 == (0, a.memcmp)(e, [0, 4, 4, 2, 3, 0, 15], 7)) {
              t = 67108864;
              break
            }
            if (0 == (0, a.memcmp)(e, [0, 4, 4, 5, 2, 1, 19], 7)) {
              t = 65536;
              break
            }
            if (0 == (0, a.memcmp)(e, [0, 4, 4, 5, 2, 1, 21], 7)) {
              t = 131072;
              break
            }
            if (0 == (0, a.memcmp)(e, [0, 4, 4, 5, 2, 2, 19], 7)) {
              t = 262144;
              break
            }
            if (0 == (0, a.memcmp)(e, [0, 4, 4, 5, 2, 2, 21], 7)) {
              t = 524288;
              break
            }
            if (4 == e[2]) {
              t = 16;
              break
            }
            3 == e[2] && (t = 16777216);
            break;
          case 1:
            t = 2;
            break;
          case 0:
            t = 1;
            break;
          case -1:
            t = 35;
            break;
          default:
            t = 0
        }
        return t
      }
    }, {
      key: "get_ulev1_copytag",
      value: function(r) {
        return 0 != (1 & r) ? "MIFARE Ultralight (MF0ICU1)" : 0 != (2 & r) ? "MIFARE Ultralight C (MF0ULC)" : 0 != (33554432 & r) ? "MIFARE Ultralight Nano 40bytes (MF0UNH00)" : 0 != (4 & r) ? "UL11" : 0 != (8 & r) ? "MIFARE Ultralight EV1 128bytes (MF0UL2101)" : 0 != (16777216 & r) ? "MIFARE Ultralight EV1 UNKNOWN" : 0 != (16 & r) ? "NTAG UNKNOWN" : 0 != (32 & r) ? "NTAG 203 144bytes (NT2H0301F0DT)" : 0 != (2147483648 & r) ? "NTAG 210u (micro) 48bytes (NT2L1001G0DU)" : 0 != (64 & r) ? "NTAG 210 48bytes (NT2L1011G0DU)" : 0 != (128 & r) ? "NTAG 212 128bytes (NT2L1211G0DU)" : 0 != (256 & r) ? "N213" : 0 != (4194304 & r) ? "NTAG 213F 144bytes (NT2H1311F0DTL)" : 0 != (134217728 & r) ? "NTAG 213C 144bytes (NT2H1311C1DTL)" : 0 != (67108864 & r) ? "NTAG 213TT 144bytes (NT2H1311TTDU)" : 0 != (512 & r) ? "N215" : 0 != (1024 & r) ? "N216" : 0 != (8388608 & r) ? "NTAG 216F 888bytes (NT2H1611F0DTL)" : 0 != (65536 & r) ? "NTAG I2C 888bytes (NT3H1101FHK)" : 0 != (131072 & r) ? "NTAG I2C 1904bytes (NT3H1201FHK)" : 0 != (262144 & r) ? "NTAG I2C plus 888bytes (NT3H2111FHK)" : 0 != (524288 & r) ? "NTAG I2C plus 1912bytes (NT3H2211FHK)" : 0 != (2048 & r) ? "INFINEON my-d (SLE 66RxxS)" : 0 != (4096 & r) ? "INFINEON my-d NFC (SLE 66RxxP)" : 0 != (8192 & r) ? "INFINEON my-d move (SLE 66R01P)" : 0 != (16384 & r) ? "INFINEON my-d move NFC (SLE 66R01P)" : 0 != (32768 & r) ? "INFINEON my-d move lean (SLE 66R01L)" : 0 != (1048576 & r) ? "FUDAN Ultralight Compatible (or other compatible)" : "Unknown"
      }
    }, {
      key: "get_ulev1_type",
      value: function(r) {
        return 0 != (1 & r) ? "MIFARE Ultralight (MF0ICU1)" : 0 != (2 & r) ? "MIFARE Ultralight C (MF0ULC)" : 0 != (33554432 & r) ? "MIFARE Ultralight Nano 40bytes (MF0UNH00)" : 0 != (4 & r) ? "MIFARE Ultralight EV1 48bytes (MF0UL1101)" : 0 != (8 & r) ? "MIFARE Ultralight EV1 128bytes (MF0UL2101)" : 0 != (16777216 & r) ? "MIFARE Ultralight EV1 UNKNOWN" : 0 != (16 & r) ? "NTAG UNKNOWN" : 0 != (32 & r) ? "NTAG 203 144bytes (NT2H0301F0DT)" : 0 != (2147483648 & r) ? "NTAG 210u (micro) 48bytes (NT2L1001G0DU)" : 0 != (64 & r) ? "NTAG 210 48bytes (NT2L1011G0DU)" : 0 != (128 & r) ? "NTAG 212 128bytes (NT2L1211G0DU)" : 0 != (256 & r) ? "NTAG 213 144bytes (NT2H1311G0DU)" : 0 != (4194304 & r) ? "NTAG 213F 144bytes (NT2H1311F0DTL)" : 0 != (134217728 & r) ? "NTAG 213C 144bytes (NT2H1311C1DTL)" : 0 != (67108864 & r) ? "NTAG 213TT 144bytes (NT2H1311TTDU)" : 0 != (512 & r) ? "NTAG 215 504bytes (NT2H1511G0DU)" : 0 != (1024 & r) ? "NTAG 216 888bytes (NT2H1611G0DU)" : 0 != (8388608 & r) ? "NTAG 216F 888bytes (NT2H1611F0DTL)" : 0 != (65536 & r) ? "NTAG I2C 888bytes (NT3H1101FHK)" : 0 != (131072 & r) ? "NTAG I2C 1904bytes (NT3H1201FHK)" : 0 != (262144 & r) ? "NTAG I2C plus 888bytes (NT3H2111FHK)" : 0 != (524288 & r) ? "NTAG I2C plus 1912bytes (NT3H2211FHK)" : 0 != (2048 & r) ? "INFINEON my-d (SLE 66RxxS)" : 0 != (4096 & r) ? "INFINEON my-d NFC (SLE 66RxxP)" : 0 != (8192 & r) ? "INFINEON my-d move (SLE 66R01P)" : 0 != (16384 & r) ? "INFINEON my-d move NFC (SLE 66R01P)" : 0 != (32768 & r) ? "INFINEON my-d move lean (SLE 66R01L)" : 0 != (1048576 & r) ? "FUDAN Ultralight Compatible (or other compatible)" : "Unknown"
      }
    }, {
      key: "get_mifare_uid_size",
      value: function(r) {
        for (var e = Array(2), t = 0; t < 2; t++) e[t] = r[6 + t];
        var a = 16 * e[1] + e[0],
          i = this.get_mifare_uid_size_by_atqa(a),
          s = !1;
        if ((4 == i || 0 == i) && r[4] == (r[0] ^ r[1] ^ r[2] ^ r[3])) return 4;
        4 == i && (s = !0);
        for (var n = Array(2), l = 0; l < 2; l++) n[l] = r[8 + l];
        if (a = 16 * n[1] + n[0], 7 == (i = this.get_mifare_uid_size_by_atqa(a))) return 7;
        for (var o = Array(2), f = 0; f < 2; f++) o[f] = r[11 + f];
        return a = 16 * o[1] + o[0], 10 == (i = this.get_mifare_uid_size_by_atqa(a)) ? 10 : s ? 4 : 10
      }
    }, {
      key: "get_mifare_uid_size_by_atqa",
      value: function(r) {
        return 0 != (31 & r) && 0 == (192 & r) ? 4 : 0 != (31 & r) && 64 == (192 & r) ? 7 : 0 != (31 & r) && 128 == (192 & r) ? 10 : 0
      }
    }, {
      key: "get_mifare_type",
      value: function(r, e) {
        var t, a, i;
        return t = 1 & e, e >> 2 & 1, a = e >> 4 & 1, i = e >> 5 & 1, e >> 6 & 1, e >> 7 & 1, 1 == (e >> 1 & 1) ? "RFU" : 1 == (e >> 3 & 1) ? 1 == a ? 1 == t ? "MIFARE Classic 2K" : 1 == i ? "SmartMX with MIFARE Classic 4K" : 64 == (192 & r) ? "MIFARE Classic 4K CL2" : "MIFARE Classic 4K" : 1 == t ? "MIFARE Mini" : 1 == i ? "SmartMX with MIFARE Classic 1K" : 64 == (192 & r) ? "MIFARE Classic 1K CL2" : 3 == r ? "SM7" : "MIFARE Classic 1K" : 1 == a ? 1 == t ? "MIFARE Plus 4K in SL2" : "MIFARE Plus 2K in SL2" : 1 == t ? "TagNPlay" : 1 == i ? 8 == (31 & r) ? "CPU" : "Other 14443-4" : "MIFARE UltraLight/NTAG"
      }
    }, {
      key: "cpukModel",
      value: function(r, e, t) {
        var a = new Array(6),
          i = new Array(8);
        r[0] <= 85 ? (i[3] = 67, i[6] = 165) : r[0] <= 170 ? (i[3] = 123, i[6] = 194) : (i[3] = 45, i[6] = 182), i[0] = e, i[1] = t, i[2] = r[0], i[3] += r[3], i[3] &= 255, i[4] = r[1], i[5] = r[2], i[6] += r[0], i[6] &= 255, i[7] = r[3], i[2] ^= 52, i[4] ^= 210;
        for (var s = 5; s > 0; s--) {
          var n = 128 & i[2];
          i[2] = i[2] << 1 & 255;
          var l = 128 & i[3];
          i[3] = i[3] << 1 & 255, n >>= 7, i[3] = i[3] | n, n = 128 & i[4], i[4] = i[4] << 1 & 255, l >>= 7, i[4] = i[4] | l, n >>= 7, i[2] = i[2] | n
        }
        i[5] = i[5] >> 4 | i[5] << 4 & 255;
        var o = i[5];
        i[5] = 15 & i[7] | 240 & o, i[7] = 240 & i[7] | 15 & o;
        for (var f = 3; f > 0; f--) {
          var c = 1 & i[5];
          i[5] = i[5] >> 1;
          var h = 1 & i[6];
          i[6] = i[6] >> 1, c = c << 7 & 255, i[6] = i[6] | c, c = 1 & i[7], i[7] = i[7] >> 1, h = h << 7 & 255, i[7] |= h, c = c << 7 & 255, i[5] |= c
        }
        for (i[5] ^= 22, i[7] ^= 104, o = i[5], i[5] = 15 & i[3] | 240 & o, i[3] = 240 & i[3] | 15 & o, i[4] = 255 & (i[4] >> 4 | i[4] << 4), o = i[4], i[4] = 15 & i[6] | 240 & o, i[6] = 240 & i[6] | 15 & o, i[2] = 167 & i[2], i[7] = 76 | i[7], i[7]--, o = 0; o < 6; o++) a[o] = i[o + 2];
        return a
      }
    }, {
      key: "getCpukIIIBase",
      value: function(r) {
        return this.cpukModel(r, 97, 7)
      }
    }, {
      key: "getCpukIIIKeys",
      value: function(r, e, t) {
        for (var a = [], i = this.getCpukIIIBase(r), s = 0; s < t; s++)
          for (var n = 0; n < 2; n++) {
            for (var l = new Array(6), o = 0; o < 6; o++) l[o] = i[o];
            l[5] += s, l[5] &= 255, a.push(l)
          }
        return a
      }
    }, {
      key: "AddKey2Lib",
      value: function(r, e) {
        for (var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, a = !1, i = 0; i < r.length; i++)
          if (JSON.stringify(e) === JSON.stringify(r[i])) {
            a = !0;
            break
          } return a || (0 === t ? r.unshift(e) : r.push(e)), r
      }
    }]), s
  }());
exports.cardUtil = s;