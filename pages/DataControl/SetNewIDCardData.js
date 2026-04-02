var t, e = require("../../utils/util"),
  a = require("../../utils/cardUtil"),
  i = (t = require("tdesign-miniprogram/toast/index")) && t.__esModule ? t : {
    default: t
  };
getApp();
Page({
  data: {
    input_style: "border-bottom: 0.5px solid rgba(220,220,220,0.4);color:#000;",
    input_error_sytle: "border-bottom: 0.5px solid rgba(220,0,0,0.8);color:#FF0000;",
    showEditTagDialog: !1,
    modelVisible: !1,
    modelText: "",
    modelValue: ["ID", "125KHz"],
    models: [{
      label: "ID",
      value: "ID"
    }],
    freq_list: [{
      label: "125KHz",
      value: "125KHz"
    }, {
      label: "175KHz",
      value: "175KHz"
    }, {
      label: "250KHz",
      value: "250KHz"
    }, {
      label: "300KHz",
      value: "300KHz"
    }, {
      label: "375KHz",
      value: "375KHz"
    }, {
      label: "500KHz",
      value: "500KHz"
    }],
    Bits: {
      value: "HEX",
      options: [{
        value: "HEX",
        label: "十六进数据"
      }, {
        value: "6H_8D",
        label: "十进制8位"
      }, {
        value: "8H_10D",
        label: "十进制10位"
      }]
    },
    card_uid: {
      select_uid: [],
      UID: "UID",
      value: "",
      cursor: 0,
      error: !1,
      placeholder: "FFFFFFFFFF",
      maxlength: 10
    }
  },
  onLoad: function() {
    this.setData({
      modelValue: ["ID", "125KHz"],
      modelText: ["ID", "125KHz"].join(" ")
    })
  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {},
  onModelPicker: function() {
    this.setData({
      modelVisible: !0
    })
  },
  onColumnChange: function(t) {},
  onPickerChange: function(t) {
    var e = t.detail,
      a = e.value,
      i = e.label;
    this.setData({
      modelVisible: !1,
      modelValue: a,
      modelText: i.join(" ")
    })
  },
  onPickerCancel: function(t) {
    this.setData({
      modelVisible: !1
    })
  },
  onUIDSelect: function(t) {
    this.setData({
      showEditTagDialog: !0
    })
  },
  EditTagDialog: function(t) {
    var a = [],
      l = "",
      r = this.data.card_uid.value;
    if (this.data.card_uid.select_uid = new Array(5).fill(0), "HEX" === this.data.Bits.value) {
      for (var o = ("0000000000" + r).slice(-10), s = 0, d = (a = (0, e.string2Hex)(o)).length - 1, n = 0; d >= 0 && n < 3; d--, n++) s += a[d] << 8 * n;
      l = ("0000000000" + (s >>>= 0).toString(10)).slice(-10)
    } else {
      var u = ("0000000000" + Number(r).toString(16)).slice(-10);
      a = (0, e.string2Hex)(u), l = ("0000000000" + r).slice(-10)
    }
    if (a.length <= 0) this.setData({
      "card_uid.error": !0
    });
    else {
      for (var c = 0; c < a.length; c++) this.data.card_uid.select_uid[c] = a[c];
      var h = (0, e.hex2string)(this.data.card_uid.select_uid, this.data.card_uid.select_uid.length);
      h += "(" + l + ")", this.setData({
        showEditTagDialog: !1,
        UIDText: h
      }), (0, i.default)({
        context: this,
        selector: "#t-toast",
        message: "编辑完成"
      })
    }
  },
  closeEditTagDialog: function() {
    this.setData({
      showEditTagDialog: !1
    })
  },
  onRefreshUID: function() {
    var t = this.data.card_uid.maxlength;
    "HEX" === this.data.Bits.value && (t = 5);
    for (var e = "", a = 0; a < t; a++) {
      "HEX" === this.data.Bits.value ? e += ("00" + Math.floor(256 * Math.random()).toString(16)).slice(-2).toUpperCase() : e += Math.floor(10 * Math.random()).toString()
    }
    this.setData({
      "card_uid.value": e
    })
  },
  onInputBitsChange: function(t) {
    var e = "UID",
      a = "",
      i = 10;
    "HEX" === t.detail.value ? (e = "UID", a = "FFFFFFFFFF", i = 10) : "6H_8D" === t.detail.value ? (e = "卡号", a = "00000000", i = 8) : "8H_10D" === t.detail.value && (e = "卡号", a = "0000000000", i = 10), this.setData({
      "Bits.value": t.detail.value,
      "card_uid.UID": e,
      "card_uid.placeholder": a,
      "card_uid.maxlength": i,
      "card_uid.value": ""
    })
  },
  onUIDInput: function(t) {
    var e = t.detail,
      a = e.value,
      i = e.cursor,
      l = this.InputChange(a, i, this.data.card_uid.maxlength, !1);
    return this.setData({
      "card_uid.value": l.value,
      "card_uid.cursor": l.cursor
    }), l.value.length > 0 && this.data.card_uid.error && this.setData({
      "card_uid.error": !1
    }), {
      value: l.value,
      cursor: l.cursor
    }
  },
  InputChange: function(t, a, i, l) {
    var r = "",
      o = 0;
    if ("HEX" === this.data.Bits.value) {
      var s = (0, e.string2HexByte)(t);
      r = (0, e.byte2HexString)(s, i, l), o = a
    } else {
      for (var d = (0, e.string2DecByte)(t), n = 0; n < d.length; n++) r += d[n].toString();
      o = a
    }
    if (-1 != o) {
      var u = [],
        c = t.slice(0, o),
        h = (u = "HEX" === this.data.Bits.value ? (0, e.string2HexByte)(c) : (0, e.string2DecByte)(c)).length - (u[u.length - 1] > 15 ? 1 : 0);
      o = l ? h + (h > 2 ? Math.ceil(h / 2) - 1 : 0) : h
    }
    return {
      value: r,
      cursor: o
    }
  },
  onAddIDData: function(t) {
    var l = new a.cardUtil;
    if (this.data.modelValue.length <= 0)(0, i.default)({
      context: this,
      selector: "#t-toast",
      message: "请选择型号/频率"
    });
    else if (this.data.card_uid.select_uid.length <= 0)(0, i.default)({
      context: this,
      selector: "#t-toast",
      message: "请输入UID"
    });
    else {
      console.log(this.data.modelValue[0], this.data.modelValue[1]);
      var r = (0, e.string2byte)(this.data.modelValue[0]),
        o = (0, e.string2byte)(this.data.modelValue[1]);
      console.log(r, o);
      for (var s = new Array(57).fill(0), d = 0; d < o.length && d < 12; d++) s[d] = o[d];
      for (var n = 0; n < r.length && n < 12; n++) s[12 + n] = r[n];
      s[24] = this.data.card_uid.select_uid.length;
      for (var u = 0; u < this.data.card_uid.select_uid.length && u < 32; u++) s[25 + u] = this.data.card_uid.select_uid[u];
      var c = getCurrentPages();
      if (c.length >= 2) {
        var h = c[c.length - 2];
        if ("pages/DataControl/index" === h.route) {
          for (var g = "", v = 0; v < 57; v++) g += ("00" + s[v].toString(16)).slice(-2).toUpperCase();
          h.setCardData("新建数据", l.card_type.id, g, s)
        }
      }
      wx.navigateBack()
    }
  }
});