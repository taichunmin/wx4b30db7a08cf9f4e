var e = require("./AES.js"),
  t = e.enc.Utf8.parse("15c9193fb10444e298a1c0f8383e9609"),
  n = e.enc.Utf8.parse("edb512399369497faa2663f24c499df2");
module.exports = {
  AesEncrypt: function(r) {
    var c = e.enc.Utf8.parse(r);
    return e.AES.encrypt(c, t, {
      iv: n,
      mode: e.mode.CBC,
      padding: e.pad.Pkcs7
    }).ciphertext.toString().toUpperCase()
  },
  AesDecrypt: function(r) {
    var c = e.enc.Hex.parse(r),
      a = e.enc.Base64.stringify(c);
    return e.AES.decrypt(a, t, {
      iv: n,
      mode: e.mode.CBC,
      padding: e.pad.Pkcs7
    }).toString(e.enc.Utf8).toString()
  },
  Base64Encode: function(t) {
    var n = e.enc.Utf8.parse(t);
    return e.enc.Base64.stringify(n)
  },
  Base64Decode: function(t) {
    return e.enc.Base64.parse(t).toString()
  },
  Base64DecodeUtf8: function(t) {
    return e.enc.Base64.parse(t).toString(e.enc.Utf8)
  },
  AesDecryptECB: function(n) {
    var r = n;
    return e.AES.decrypt(r, t, {
      mode: e.mode.ECB,
      padding: e.pad.Pkcs7
    }).toString(e.enc.Utf8).toString()
  },
  AesEncryptECB: function(n) {
    var r = e.enc.Utf8.parse(n);
    return e.AES.encrypt(r, t, {
      mode: e.mode.ECB,
      padding: e.pad.Pkcs7
    }).toString()
  }
};