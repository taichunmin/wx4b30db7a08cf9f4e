var a, t = require("../../@babel/runtime/helpers/toConsumableArray"),
  r = require("../../utils/util"),
  e = require("../../utils/cardUtil"),
  d = (a = require("tdesign-miniprogram/toast/index")) && a.__esModule ? a : {
    default: a
  };
var o = getApp();
Page({
  data: {
    navbar_title: "修改数据",
    add_type: 0,
    goto_back: !1,
    showSaveData: !1,
    showSaveNewData: !1,
    data_scroll_height: 0,
    showContainerPage: !0,
    beSaved: !1,
    EditTag: {
      show: !1,
      select_sector: "16"
    },
    showEditKeyBlockDialog: !1,
    input_style: "border-bottom: 0.5px solid rgba(220,220,220,0.4);color:#000;",
    input_error_sytle: "border-bottom: 0.5px solid rgba(220,0,0,0.8);color:#FF0000;",
    cardhub: {
      cardtype: 0,
      data: [],
      Sectors: [],
      mod_data: [],
      data_info: {
        uid: [],
        size: 0,
        ATQA: [],
        sak: 0,
        proID: [],
        num_sectors: 16
      },
      card_uid: {
        value: "",
        cursor: 0,
        error: !1
      },
      card_atqa: {
        value: "04 00",
        cursor: 0,
        error: !1
      },
      card_sak: {
        value: "08",
        cursor: 0,
        error: !1
      },
      card_data_text: "",
      card_proID: {
        value: "00 00 00 00 00 00 00 00",
        cursor: 0,
        length: 8,
        error: !1
      },
      control_block: {
        sector: "",
        block: 0,
        keyA: {
          value: "FF FF FF FF FF FF",
          cursor: 0,
          error: !1
        },
        Control: {
          value: "FF 07 80 69",
          cursor: 0,
          error: !1
        },
        keyB: {
          value: "FF FF FF FF FF FF",
          cursor: 0,
          error: !1
        }
      }
    },
    saveFabButton: {
      icon: "save",
      theme: "primary",
      size: "small"
    }
  },
  onLoad: function(a) {
    var t = new e.cardUtil,
      r = "修改数据";
    if (a.type && "1" === a.type && a.data) {
      var d = JSON.parse(decodeURIComponent(a.data));
      this.data.cardhub.cardtype = d.cardtype, this.data.cardhub.data = d.data;
      var o = t.getCardDataLine(this.data.cardhub.cardtype, this.data.cardhub.data);
      if (this.data.cardhub.cardtype === t.card_type.MF) {
        var i = t.getCardInfo(t.card_type.MF, o.Data[0].list[0].hex_data, null),
          c = i.Data.size;
        c += 4 === c ? 4 : 3;
        var s = this.data.cardhub.data.slice(c, 16);
        this.data.cardhub.data_info.uid = i.Data.uid, this.data.cardhub.data_info.size = i.Data.size, this.data.cardhub.data_info.ATQA = i.Data.ATQA, this.data.cardhub.data_info.sak = i.Data.sak, this.data.cardhub.data_info.proID = s, this.data.cardhub.data_info.num_sectors = o.Data.length
      }
      this.data.add_type = 1, this.setData({
        "cardhub.Sectors": o.Data
      })
    } else if (a.type && "0" === a.type) {
      r = "新建数据";
      var h = this.CreatNewMFData();
      this.data.cardhub.cardtype = t.card_type.MF, this.data.cardhub.data = h;
      var u = t.getCardDataLine(this.data.cardhub.cardtype, this.data.cardhub.data);
      this.setData({
        "cardhub.Sectors": u.Data,
        "EditTag.show": !0
      }), this.data.add_type = 0
    }
    this.setData({
      navbar_title: r,
      add_type: this.data.add_type
    })
  },
  onReady: function() {
    var a = o.getSystemInfo(),
      t = a.pageHeight - a.headerHeight;
    this.setData({
      data_scroll_height: t - 12
    })
  },
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {},
  getInputValue: function(a) {
    var t = this,
      r = {
        value: "",
        cursor: 0
      },
      e = a.detail,
      d = e.value,
      o = e.cursor,
      i = a.currentTarget.dataset.index,
      c = this.data.cardhub.Sectors;
    return c && c.forEach((function(a) {
      var e = a.list;
      e && e.forEach((function(a) {
        if (a.id === i) {
          var e = t.InputChange(d, a.cursor, o, a.hex_data, a.data.length, !0);
          return a.hex_data = e.value, a.cursor = e.cursor, r.value = e.value, void(r.cursor = e.cursor)
        }
      }))
    })), r
  },
  saveEditData: function(a, t, d) {
    var o = new e.cardUtil,
      i = (0, r.string2Hex)(t),
      c = "",
      s = "",
      h = this.data.cardhub.cardtype === o.card_type.ULEV1 ? 4 : 16;
    i.length < h && (i = i.concat(d.slice(i.length, h)));
    for (var u = i.length > h ? h : i.length, n = 0; n < d.length; n++) {
      var l = d[n],
        b = ("00" + l.toString(16)).slice(-2).toUpperCase(),
        v = b;
      n < u && l != i[n] && (v = "<span style='color: rgb(255, 0, 0);'>" + (b = ("00" + i[n].toString(16)).slice(-2).toUpperCase()) + "</span>"), c += v + (n < h - 1 ? " " : ""), s += b + (n < h - 1 ? " " : "")
    }
    return this.data.cardhub.cardtype === o.card_type.ULEV1 && (c = ("0000" + a.toString()).slice(-4) + "(0x" + ("00" + a.toString(16)).slice(-2).toUpperCase() + ") " + c), {
      Html: c,
      Hex: s
    }
  },
  onClickData: function(a) {
    var t = this,
      d = new e.cardUtil,
      o = a.currentTarget.dataset.index,
      i = this.data.cardhub.Sectors;
    i && (i.forEach((function(a) {
      var e = a.list;
      e && e.forEach((function(e) {
        if (e.id === o)
          if (t.data.cardhub.cardtype === d.card_type.MF && 0 === e.id) {
            var i = (0, r.hex2string)(t.data.cardhub.data_info.uid, t.data.cardhub.data_info.size),
              c = (0, r.hex2string)(t.data.cardhub.data_info.ATQA, 2, !0),
              s = new Array(1);
            s[0] = t.data.cardhub.data_info.sak;
            var h = (0, r.hex2string)(s, 1),
              u = (0, r.hex2string)(t.data.cardhub.data_info.proID, t.data.cardhub.data_info.proID.length, !0);
            t.setData({
              "EditTag.show": !0,
              "cardhub.card_uid.value": i,
              "cardhub.card_atqa.value": c,
              "cardhub.card_sak.value": h,
              "cardhub.card_proID.value": u,
              "EditTag.select_sector": t.data.cardhub.data_info.num_sectors.toString()
            })
          } else if (t.data.cardhub.cardtype === d.card_type.MF && d.trailer_block(e.id)) {
          var n = (0, r.string2Hex)(e.hex_data),
            l = n.slice(0, 6),
            b = n.slice(6, 10),
            v = n.slice(10, 16);
          t.setData({
            showEditKeyBlockDialog: !0,
            "cardhub.control_block.block": e.id,
            "cardhub.control_block.sector": a.name,
            "cardhub.control_block.keyA.value": (0, r.hex2string)(l, 6, !0),
            "cardhub.control_block.Control.value": (0, r.hex2string)(b, 4, !0),
            "cardhub.control_block.keyB.value": (0, r.hex2string)(v, 6, !0)
          })
        } else e.is_edit = !0;
        else if (e.is_edit) {
          var _ = t.saveEditData(e.id, e.hex_data, e.data);
          e.hex_data = _.Hex, e.html_data = _.Html, e.is_edit = !1
        }
      }))
    })), this.setData({
      cardhub: this.data.cardhub
    }))
  },
  onBack: function() {
    0 === this.data.add_type ? this.onSaveNewData() : (this.data.goto_back = !0, this.onSaveData())
  },
  onSaveData: function() {
    var a = this;
    if (0 === this.data.add_type) this.onSaveNewData();
    else if (this.data.beSaved) wx.navigateBack();
    else {
      var t = new e.cardUtil,
        d = this.data.cardhub.cardtype === t.card_type.ULEV1 ? 4 : 16,
        o = this.data.cardhub.Sectors;
      if (o) {
        var i = !1,
          c = [];
        o.forEach((function(t) {
          var e = t.list;
          e && e.forEach((function(t) {
            if (t.is_edit) {
              var e = a.saveEditData(t.id, t.hex_data, t.data);
              t.hex_data = e.Hex, t.html_data = e.Html, t.is_edit = !1
            }
            for (var o = (0, r.string2Hex)(t.hex_data), s = 0; s < d; s++) t.data[s] != o[s] && (i = !0), c.push(o[s])
          }))
        })), this.data.cardhub.cardtype === t.card_type.MF ? this.data.cardhub.mod_data = c : this.data.cardhub.mod_data = this.data.cardhub.data.slice(0, 74).concat(c), i ? this.showSaveDialog() : wx.navigateBack()
      }
    }
  },
  onSaveNewData: function() {
    this.showSaveNewDialog()
  },
  saveAndBack: function() {
    var a = getCurrentPages();
    if (a.length >= 2) {
      var t = a[a.length - 2];
      "pages/DataControl/index" === t.route && (t.data.cardhub.HF.data_hex = this.data.cardhub.mod_data, t.updateCardData())
    }
    this.data.beSaved = !0, wx.navigateBack()
  },
  showSaveDialog: function() {
    this.setData({
      showSaveData: !0
    })
  },
  closeSaveDialog: function() {
    this.setData({
      showSaveData: !1
    }), this.data.goto_back && wx.navigateBack()
  },
  showSaveNewDialog: function() {
    this.setData({
      showSaveNewData: !0
    })
  },
  saveNewAndBack: function() {
    var a = this,
      t = new e.cardUtil,
      d = this.data.cardhub.Sectors;
    if (d) {
      var o = [];
      d.forEach((function(t) {
        var e = t.list;
        e && e.forEach((function(t) {
          if (t.is_edit) {
            var e = a.saveEditData(t.id, t.hex_data, t.data);
            t.hex_data = e.Hex, t.html_data = e.Html, t.is_edit = !1
          }
          for (var d = (0, r.string2Hex)(t.hex_data), i = 0; i < 16; i++) o.push(d[i])
        }))
      })), this.data.cardhub.mod_data = o;
      var i = getCurrentPages();
      if (i.length >= 2) {
        var c = i[i.length - 2];
        if ("pages/DataControl/index" === c.route) {
          for (var s = "", h = 0; h < 16; h++) s += ("00" + o[h].toString(16)).slice(-2).toUpperCase();
          c.setCardData("新建数据", t.card_type.MF, s, o)
        }
      }
    }
    wx.navigateBack()
  },
  closeSaveNewDialog: function() {
    this.setData({
      showSaveNewData: !1
    }), wx.navigateBack()
  },
  onBeforeBack: function(a) {
    0 === this.data.add_type || this.data.goto_back ? wx.navigateBack() : this.onBack()
  },
  EditTagDialog: function() {
    var a = new e.cardUtil,
      o = (0, r.string2Hex)(this.data.cardhub.card_uid.value),
      i = (0, r.string2Hex)(this.data.cardhub.card_atqa.value),
      c = (0, r.string2Hex)(this.data.cardhub.card_sak.value),
      s = (0, r.string2Hex)(this.data.cardhub.card_proID.value);
    if (o.length < 4) this.setData({
      "cardhub.card_uid.error": !0
    });
    else if (2 == i.length)
      if (1 == c.length)
        if (s.length <= 0) this.setData({
          "cardhub.card_proID.error": !0
        });
        else {
          var h = Number(this.data.EditTag.select_sector);
          if (this.data.cardhub.data_info.num_sectors != h) {
            if (this.data.cardhub.data_info.num_sectors < h) {
              var u, n = a.SetEmptyMFTagDataBySectors(this.data.cardhub.data_info.uid, this.data.cardhub.data_info.ATQA, this.data.cardhub.data_info.sak, this.data.cardhub.data_info.proID, h),
                l = n.splice(this.data.cardhub.data.length, n.length - this.data.cardhub.data.length);
              (u = this.data.cardhub.data).push.apply(u, t(l))
            } else {
              var b = a.sectorToFirstBlock(h),
                v = this.data.cardhub.data.splice(0, 16 * b);
              this.data.cardhub.data = v
            }
            this.data.cardhub.data_info.num_sectors = h;
            var _ = a.getCardDataLine(this.data.cardhub.cardtype, this.data.cardhub.data);
            this.setData({
              "cardhub.Sectors": _.Data
            })
          }
          this.ShowMFCardInfo(o, i, c, s), this.setData({
            "EditTag.show": !1
          }), (0, d.default)({
            context: this,
            selector: "#t-toast",
            message: "编辑完成"
          })
        }
    else this.setData({
      "cardhub.card_sak.error": !0
    });
    else this.setData({
      "cardhub.card_atqa.error": !0
    })
  },
  closeEditTagDialog: function() {
    this.setData({
      "EditTag.show": !1
    })
  },
  EditKeyBlockDialog: function() {
    var a = this,
      t = new e.cardUtil,
      o = (0, r.string2Hex)(this.data.cardhub.control_block.keyA.value);
    if (6 == o.length) {
      var i = (0, r.string2Hex)(this.data.cardhub.control_block.Control.value);
      if (4 == i.length) {
        var c = (0, r.string2Hex)(this.data.cardhub.control_block.keyB.value);
        if (6 == c.length) {
          for (var s = new Array(16).fill(255), h = 0; h < 6; h++) s[h] = o[h], s[h + 10] = c[h];
          for (var u = 0; u < 4; u++) s[u + 6] = i[u];
          var n = t.blockToSector(this.data.cardhub.control_block.block),
            l = this.data.cardhub.Sectors;
          if (n < l.length) l[n].list.forEach((function(t) {
            if (t.id === a.data.cardhub.control_block.block) {
              var e = t,
                o = (0, r.hex2string)(s, 16),
                i = a.saveEditData(e.id, o, e.data);
              return e.hex_data = i.Hex, e.html_data = i.Html, a.setData({
                showEditKeyBlockDialog: !1,
                "cardhub.Sectors": l
              }), void(0, d.default)({
                context: a,
                selector: "#t-toast",
                message: "编辑完成"
              })
            }
          }))
        } else this.setData({
          "cardhub.control_block.keyB.error": !0
        })
      } else this.setData({
        "cardhub.control_block.Control.error": !0
      })
    } else this.setData({
      "cardhub.control_block.keyA.error": !0
    })
  },
  closeEditKeyBlockDialog: function(a) {
    this.setData({
      showEditKeyBlockDialog: !1
    })
  },
  FillMFCardInfo: function(a, t, r, d) {
    var o = new e.cardUtil,
      i = 4,
      c = new Array(4).fill(255),
      s = new Array(2).fill(0);
    if (t.length >= 1 && (s[0] = t[0]), t.length >= 2 && (s[1] = t[1]), s[0] &= 63, a.length <= 4) {
      i = 4;
      for (var h = 0; h < a.length; h++) c[h] = a[h]
    } else if (a.length <= 7) {
      i = 7, c = new Array(7).fill(0);
      for (var u = 0; u < a.length && u < 7; u++) c[u] = a[u];
      s[0] |= 64
    } else {
      i = 10, c = new Array(10).fill(0);
      for (var n = 0; n < a.length && n < 10; n++) c[n] = a[n];
      s[0] |= 128
    }
    this.data.cardhub.cardtype = o.card_type.MF, this.data.cardhub.data_info.uid = c, this.data.cardhub.data_info.size = i, this.data.cardhub.data_info.sak = r[0], this.data.cardhub.data_info.ATQA = s, 4 === i && (i = 5);
    var l = new Array(16 - i - 3).fill(0),
      b = d.length;
    b = b > 16 - i - 3 ? 16 - i - 3 : b;
    for (var v = 0; v < b; v++) l[v] = d[v];
    this.data.cardhub.data_info.proID = l
  },
  ShowMFCardInfo: function(a, t, e, d) {
    this.FillMFCardInfo(a, t, e, d);
    for (var o = (0, r.hex2string)(this.data.cardhub.data_info.uid, this.data.cardhub.data_info.size), i = this.data.cardhub.data_info.size, c = new Array(16).fill(0), s = 0; s < i; s++) c[s] = this.data.cardhub.data_info.uid[s];
    4 === i && (c[4] = c[0] ^ c[1] ^ c[2] ^ c[3], i = 5), c[i] = this.data.cardhub.data_info.sak, c[i + 1] = this.data.cardhub.data_info.ATQA[0], c[i + 2] = this.data.cardhub.data_info.ATQA[1];
    for (var h = this.data.cardhub.data_info.proID, u = h.length, n = 0; n < u && n < 16 - i - 3; n++) c[i + 3 + n] = h[n];
    var l = this.data.cardhub.Sectors,
      b = l[0].list[0],
      v = (0, r.hex2string)(c, 16),
      _ = this.saveEditData(b.id, v, b.data);
    b.hex_data = _.Hex, b.html_data = _.Html, this.setData({
      "cardhub.card_uid.value": o,
      "cardhub.card_atqa.value": (0, r.hex2string)(this.data.cardhub.data_info.ATQA, 2, !0),
      "cardhub.Sectors": l
    })
  },
  onRefreshUID: function() {
    for (var a = this.data.cardhub.card_uid.value, t = a.length <= 8 ? 4 : a.length <= 14 ? 7 : 10, r = "", e = 0; e < t; e++) {
      r += ("00" + Math.floor(256 * Math.random()).toString(16)).slice(-2).toUpperCase()
    }
    this.setData({
      "cardhub.card_uid.value": r
    })
  },
  onUIDInput: function(a) {
    var t = a.detail,
      e = t.value,
      d = t.cursor,
      o = (0, r.string2HexByte)(e),
      i = this.UIDInputChange(e, d, o.length <= 8 ? 4 : o.length <= 14 ? 7 : 10, !1);
    return this.setData({
      "cardhub.card_uid.value": i.value,
      "cardhub.card_uid.cursor": i.cursor
    }), i.value.length > 0 && this.data.cardhub.card_uid.error && this.setData({
      "cardhub.card_uid.error": !1
    }), {
      value: i.value,
      cursor: i.cursor
    }
  },
  onAtqaInput: function(a) {
    var t = a.detail,
      r = t.value,
      e = t.cursor,
      d = this.InputChange(r, this.data.cardhub.card_atqa.cursor, e, this.data.cardhub.card_atqa.value, 2, !0);
    return this.setData({
      "cardhub.card_atqa.value": d.value,
      "cardhub.card_atqa.cursor": d.cursor
    }), d.value.length > 0 && this.data.cardhub.card_atqa.error && this.setData({
      "cardhub.card_atqa.error": !1
    }), {
      value: d.value,
      cursor: d.cursor
    }
  },
  onSakInput: function(a) {
    var t = a.detail,
      r = t.value,
      e = t.cursor,
      d = this.InputChange(r, this.data.cardhub.card_sak.cursor, e, this.data.cardhub.card_sak.value, 1, !1);
    return this.setData({
      "cardhub.card_sak.value": d.value,
      "cardhub.card_sak.cursor": d.cursor
    }), d.value.length > 0 && this.data.cardhub.card_sak.error && this.setData({
      "cardhub.card_sak.error": !1
    }), {
      value: d.value,
      cursor: d.cursor
    }
  },
  onProIDInput: function(a) {
    var t = a.detail,
      r = t.value,
      e = t.cursor,
      d = this.InputChange(r, this.data.cardhub.card_proID.cursor, e, this.data.cardhub.card_proID.value, this.data.cardhub.card_proID.length, !0);
    return this.setData({
      "cardhub.card_proID.value": d.value,
      "cardhub.card_proID.cursor": d.cursor
    }), d.value.length > 0 && this.data.cardhub.card_proID.error && this.setData({
      "cardhub.card_proID.error": !1
    }), {
      value: d.value,
      cursor: d.cursor
    }
  },
  onKeyAInput: function(a) {
    var t = a.detail,
      r = t.value,
      e = t.cursor,
      d = this.InputChange(r, this.data.cardhub.control_block.keyA.cursor, e, this.data.cardhub.control_block.keyA.value, 6, !0);
    return this.setData({
      "cardhub.control_block.keyA.value": d.value,
      "cardhub.control_block.keyA.cursor": d.cursor
    }), d.value.length > 0 && this.data.cardhub.control_block.keyA.error && this.setData({
      "cardhub.control_block.keyA.error": !1
    }), {
      value: d.value,
      cursor: d.cursor
    }
  },
  onKeyControlInput: function(a) {
    var t = a.detail,
      r = t.value,
      e = t.cursor,
      d = this.InputChange(r, this.data.cardhub.control_block.Control.cursor, e, this.data.cardhub.control_block.Control.value, 4, !0);
    return this.setData({
      "cardhub.control_block.Control.value": d.value,
      "cardhub.control_block.Control.cursor": d.cursor
    }), d.value.length > 0 && this.data.cardhub.control_block.Control.error && this.setData({
      "cardhub.control_block.Control.error": !1
    }), {
      value: d.value,
      cursor: d.cursor
    }
  },
  onKeyBInput: function(a) {
    var t = a.detail,
      r = t.value,
      e = t.cursor,
      d = this.InputChange(r, this.data.cardhub.control_block.keyB.cursor, e, this.data.cardhub.control_block.keyB.value, 6, !0);
    return this.setData({
      "cardhub.control_block.keyB.value": d.value,
      "cardhub.control_block.keyB.cursor": d.cursor
    }), d.value.length > 0 && this.data.cardhub.control_block.keyB.error && this.setData({
      "cardhub.control_block.keyB.error": !1
    }), {
      value: d.value,
      cursor: d.cursor
    }
  },
  InputChange: function(a, t, e, d, o, i) {
    var c = (0, r.string2HexByte)(a),
      s = (0, r.string2HexByte)(d),
      h = new Array(2 * o).fill(0),
      u = e;
    if (-1 != u) {
      for (var n = a.slice(0, u), l = (0, r.string2HexByte)(n), b = 0; b < l.length && b < h.length; b++) h[b] = l[b];
      if (c.length > s.length)
        for (var v = l.length; v < s.length; v++) h[v] = s[v];
      else
        for (var _ = l.length + s.length - c.length; _ < s.length; _++) h[_] = s[_];
      var g = l.length - (l[l.length - 1] > 15 ? 1 : 0);
      u = i ? g + (g > 2 ? Math.ceil(g / 2) - 1 : 0) : g
    }
    return {
      value: (0, r.byte2HexString)(h, o, i),
      cursor: u
    }
  },
  UIDInputChange: function(a, t, e, d) {
    var o = (0, r.string2HexByte)(a),
      i = (0, r.byte2HexString)(o, e, d),
      c = t;
    if (-1 != c) {
      var s = a.slice(0, c),
        h = (0, r.string2HexByte)(s),
        u = h.length - (h[h.length - 1] > 15 ? 1 : 0);
      c = d ? u + (u > 2 ? Math.ceil(u / 2) - 1 : 0) : u
    }
    return {
      value: i,
      cursor: c
    }
  },
  CreatNewMFData: function() {
    var a = new e.cardUtil;
    this.onRefreshUID();
    var t = (0, r.string2Hex)(this.data.cardhub.card_uid.value),
      d = (0, r.string2Hex)(this.data.cardhub.card_atqa.value),
      o = (0, r.string2Hex)(this.data.cardhub.card_sak.value),
      i = (0, r.string2Hex)(this.data.cardhub.card_proID.value);
    return this.FillMFCardInfo(t, d, o, i), a.SetEmptyMFTagDataBySectors(this.data.cardhub.data_info.uid, this.data.cardhub.data_info.ATQA, this.data.cardhub.data_info.sak, this.data.cardhub.data_info.proID, this.data.cardhub.data_info.num_sectors)
  },
  onSectorNumChange: function(a) {
    var t = a.detail.value;
    this.setData({
      "EditTag.select_sector": t
    })
  }
});