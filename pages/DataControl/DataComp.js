var t = d(require("tdesign-miniprogram/message/index")),
  a = d(require("tdesign-miniprogram/toast/index")),
  e = require("../../utils/cardUtil");

function d(t) {
  return t && t.__esModule ? t : {
    default: t
  }
}
var o = getApp();
Page({
  data: {
    data_path: "",
    cmp_data_path: "",
    data_scroll_height: 0,
    cardhub: {
      cardtype: 0,
      data: [],
      cmp_cardtype: 0,
      cmp_data: [],
      Sectors: []
    }
  },
  onLoad: function(t) {
    if (t.data) {
      var a = JSON.parse(decodeURIComponent(t.data));
      this.setCompData(a.cardtype, a.data, !0)
    }
  },
  setCompData: function(a, d, o) {
    var r = !1;
    a !== (new e.cardUtil).card_type.id ? (o ? (this.data.cardhub.cmp_cardtype <= 0 || a === this.data.cardhub.cmp_cardtype) && (this.data.cardhub.cardtype = a, this.data.cardhub.data = d, r = !0) : (this.data.cardhub.cardtype <= 0 || a === this.data.cardhub.cardtype) && (this.data.cardhub.cmp_cardtype = a, this.data.cardhub.cmp_data = d, r = !0), r ? this.updateCompData() : t.default.warning({
      context: this,
      offset: [2, 2],
      duration: 4e3,
      content: "数据类型不匹配"
    })) : t.default.warning({
      context: this,
      offset: [2, 2],
      duration: 5e3,
      content: "不是有效IC/NTAG数据，请先获取数据"
    })
  },
  updateCompData: function() {
    var t = (new e.cardUtil).getCardDataComp(this.data.cardhub.cardtype, this.data.cardhub.data, this.data.cardhub.cmp_data);
    this.data.cardhub.data.length > 0 && this.data.cardhub.cmp_data.length > 0 && (0 === t.Result ? (0, a.default)({
      context: this,
      duration: 3e3,
      theme: "success",
      selector: "#t-toast",
      message: "对比的数据相同"
    }) : (0, a.default)({
      context: this,
      duration: 5e3,
      selector: "#t-toast",
      message: "对比的数据存在" + t.Result + "处差异"
    })), this.setData({
      "cardhub.Sectors": t.Data,
      data_path: t.UID,
      cmp_data_path: t.CMP_UID
    })
  },
  onReady: function() {
    var t = o.getSystemInfo(),
      a = t.the1rpx,
      e = t.pageHeight - 96 * a;
    this.setData({
      data_scroll_height: e - 40
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
      url: "/pages/DataControl/DataImport?page=Import"
    })
  },
  onSelectCmp: function(t) {
    wx.navigateTo({
      url: "/pages/DataControl/DataImport?page=ImportComp"
    })
  }
});