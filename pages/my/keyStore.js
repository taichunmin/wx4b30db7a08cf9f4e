var t, a = (t = require("tdesign-miniprogram/toast/index")) && t.__esModule ? t : {
    default: t
  },
  e = require("../../utils/util");
var s = getApp();
Page({
  data: {
    showAddKeyDialog: !1,
    inputKeyValue: "",
    data_scroll_height: 0,
    addFabButton: {
      icon: "add",
      size: "medium",
      theme: "primary"
    },
    keysList: [],
    KeysTotal: s.globalData.data.keyStore.total
  },
  onLoad: function() {},
  onReady: function() {
    var t = s.getSystemInfo().pageHeight;
    this.setData({
      data_scroll_height: t - 42
    })
  },
  onShow: function() {
    this.data.keysList = s.globalData.data.keyStore.list, this.data.KeysTotal = s.globalData.data.keyStore.total;
    for (var t = 0; t < this.data.keysList.length; t++) this.data.keysList[t].click = !1;
    this.setData({
      keysList: this.data.keysList,
      KeysTotal: this.data.KeysTotal
    })
  },
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {},
  addClick: function(t) {
    this.setData({
      showAddKeyDialog: !0,
      inputKeyValue: ""
    })
  },
  onDeleteData: function(t) {
    var e = t.currentTarget.dataset.index;
    s.deleteKeyStore(e), this.setData({
      keysList: this.data.keysList
    }), (0, a.default)({
      context: this,
      selector: "#t-toast",
      message: "删除成功"
    })
  },
  onClickData: function(t) {
    for (var a = t.currentTarget.dataset.index, e = 0; e < this.data.keysList.length; e++) a === this.data.keysList[e].value ? this.data.keysList[e].click = !0 : this.data.keysList[e].click = !1;
    this.setData({
      keysList: this.data.keysList
    })
  },
  submitKey: function(t) {
    var i = "",
      o = t.detail.keyValue,
      n = t.detail.Total;
    if (n <= 0) i = "请输入6字节密码";
    else {
      for (var d = 0, l = 0, r = !1, h = 0; h < n; h++) {
        var y = o.slice(6 * h, 6 * h + 6),
          u = (0, e.hex2string)(y, 6, !0),
          c = s.addKeyStore(u, !1);
        if (2 === c) {
          r = !0;
          break
        }
        1 === c ? d++ : l++
      }
      i = d === n ? "添加成功" : r ? "密码库已满，请先清理数据。成功 " + d + " 组/重复 " + l + " 组" : "添加成功 " + d + " 组/重复 " + l + " 组", d > 0 && s.updateKeyStore(), this.setData({
        keysList: s.globalData.data.keyStore.list
      })
    }(0, a.default)({
      context: this,
      selector: "#t-toast",
      duration: 3e3,
      message: i
    }), this.setData({
      showAddKeyDialog: !1
    })
  }
});