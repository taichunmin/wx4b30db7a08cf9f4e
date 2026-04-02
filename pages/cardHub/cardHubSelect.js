var a, t = (a = require("tdesign-miniprogram/toast/index")) && a.__esModule ? a : {
    default: a
  },
  e = require("../../utils/cardUtil"),
  d = require("../../utils/util");
var r = getApp();
Page({
  data: {
    scroll_height: 0,
    showEditDialog: !1,
    showDeleteConfirm: !1,
    input_style: "border-bottom: 1px solid rgba(220,220,220,1);",
    textarea_style: "height: 156rpx",
    editFabButton: {
      icon: "/images/icon_edit.png",
      size: "small",
      theme: "primary"
    },
    dnloadFabButton: {
      icon: "download-1",
      theme: "primary",
      size: "small"
    },
    delFabButton: {
      icon: "/images/icon_delete.png",
      size: "small",
      theme: "danger"
    },
    cardhub: {
      MD5: "",
      PorM: "",
      address: "",
      cardtype: 0,
      city: "",
      info: "",
      name: "",
      street: "",
      town: "",
      data: [],
      card_type: "",
      card_info: {
        uid: "",
        info: ""
      },
      data_hex: [],
      data_text: ""
    },
    cardhubName: "",
    cardhubAddress: "",
    cardHubNameError: "",
    cardHubAddressError: "",
    visible_cardhubCtrl: !1,
    loading: !1,
    cardMd5: ""
  },
  onLoad: function(a) {
    if (a.md5) {
      var t = Number(a.typeid),
        e = this.setCardInfo(t, a.uid, a.ATQA, a.sak, a.freq);
      this.setData({
        "cardhub.name": a.name,
        "cardhub.card_type": a.type,
        "cardhub.cardtype": t,
        "cardhub.card_info": e,
        "cardhub.address": a.address
      }), this.data.cardMd5 = a.md5
    }
  },
  onReady: function() {
    this.data.cardMd5 && this.onDownloadData(this.data.cardMd5)
  },
  onResize: function(a) {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {},
  onDownloadData: function(a) {
    var t = this;
    var r = wx.getStorageSync("userInfo");
    if (r) {
      var s = {
        wechat_id: r.wechat_id,
        user_account: r.user_account,
        md5: a
      };
      this.setData({
        loading: !0
      }), (0, d.request)("GET", "CopyKEY/GetCardHubItem", s, (function(a) {
        if (null != a) {
          var r = a;
          if (r.success && 0 === r.code && r.data) {
            var s = new e.cardUtil,
              i = r.data,
              o = s.data2HexData(i.data);
            i.data_hex = o;
            var n = s.getCardInfo(i.cardtype, i.info, i.data_hex),
              c = s.getCardData(i.cardtype, i.data_hex, void 0);
            i.card_type = n.Type;
            var u = (0, d.hex2string)(n.Data.uid, n.Data.size),
              h = (0, d.hex2string)(n.Data.ATQA, 2, !0),
              l = t.setCardInfo(i.cardtype, u, h, n.Data.sak, n.Data.freq);
            i.card_info = l, i.data_text = c.str_data, t.setData({
              cardhub: i
            }), t.setScrollViewHeight()
          }
        }
      }), (function(a) {}), (function(a) {
        t.setData({
          loading: !1
        })
      }))
    }
  },
  setCardInfo: function(a, t, r, s, i) {
    var o = {
      uid: "",
      info: ""
    };
    if (a == (new e.cardUtil).card_type.id) {
      for (var n = (0, d.string2Hex)(t), c = 0, u = n.length, h = 0; h < u && !(h >= 3); h++) c |= n[u - h - 1] << 8 * h;
      o.uid = t + " (" + ("0000000000" + c.toString()).slice(-10) + ")", o.info = "频率 : " + i
    } else o.uid = t, o.info = "ATQA : " + r + "     SAK : " + ("00" + s).slice(-2);
    return o
  },
  setScrollViewHeight: function() {
    var a = this,
      t = r.getSystemInfo(),
      e = wx.createSelectorQuery();
    e.select("#cardhubInfo").boundingClientRect(), e.exec((function(e) {
      a.setData({
        scroll_height: t.pageHeight - e[0].height - 42
      })
    }))
  },
  onControlCardHub: function(a) {
    this.setData({
      visible_cardhubCtrl: !0
    })
  },
  onCardhubCtrlVisibleChange: function(a) {
    this.setData({
      visible_cardhubCtrl: a.detail.visible
    })
  },
  onCardhubCtrlSelect: function(a) {
    var t = a.currentTarget.dataset.index;
    "1" == t ? this.editClick(a) : "2" == t ? this.deleteClick(a) : "3" == t && this.downloadClick(a), this.setData({
      visible_cardhubCtrl: !1
    })
  },
  editClick: function(a) {
    this.showEditDialog()
  },
  downloadClick: function(a) {
    var t = {
        name: this.data.cardhub.name,
        info: this.data.cardhub.info,
        cardtype: this.data.cardhub.cardtype,
        data: this.data.cardhub.data_hex
      },
      e = JSON.stringify(t);
    wx.redirectTo({
      url: "/pages/DataControl/index?data=" + encodeURIComponent(e)
    })
  },
  deleteClick: function(a) {
    this.showDeleteDialog()
  },
  submitData: function(a) {
    if (this.data.cardhubName = a.detail.cardhubName, this.data.cardhubAddress = a.detail.cardhubAddress, (0, d.stringIsEmpty)(this.data.cardhubName)) this.setData({
      cardHubNameError: "请输入卡包名称"
    });
    else if ((0, d.stringIsEmpty)(this.data.cardhubAddress)) this.setData({
      cardHubAddressError: "请输入详细地址"
    });
    else if (this.data.cardhubName !== this.data.cardhub.name || this.data.cardhubAddress !== this.data.cardhub.address) {
      var e = this,
        s = wx.getStorageSync("userInfo");
      if (s) {
        var i = {
          wechat_id: s.wechat_id,
          user_account: s.user_account,
          type: "2",
          md5: this.data.cardhub.MD5,
          name: this.data.cardhubName,
          address: this.data.cardhubAddress,
          cardtype: this.data.cardhub.cardtype,
          data: ""
        };
        (0, d.request)("POST", "CopyKEY/SetCardHubItem", i, (function(a) {
          if (null != a) {
            var s = a;
            if (s.success && 0 === s.code) e.setData({
              "cardhub.name": e.data.cardhubName,
              "cardhub.address": e.data.cardhubAddress
            }), (0, t.default)({
              context: e,
              selector: "#t-toast",
              message: "修改成功"
            }), e.closeEditDialog(), r.modifyCardDataHub(e.data.cardhub);
            else {
              var i = (0, d.stringIsEmpty)(s.errmsg) ? (0, d.errorMsg)(s.code, "zh-cn") : s.errmsg;
              (0, t.default)({
                context: this,
                selector: "#t-toast",
                message: "修改失败:" + i
              })
            }
          }
        }), (function(a) {
          (0, t.default)({
            context: e,
            selector: "#t-toast",
            message: "修改失败"
          })
        }), (function(a) {})), r.showLoadingToast(this, "#t-toast")
      }
    } else(0, t.default)({
      context: this,
      selector: "#t-toast",
      message: "无修改数据"
    })
  },
  deleteData: function() {
    var a = this;
    var e = wx.getStorageSync("userInfo");
    if (e) {
      var s = {
        wechat_id: e.wechat_id,
        user_account: e.user_account,
        type: "3",
        md5: this.data.cardhub.MD5,
        name: "",
        address: "",
        data: ""
      };
      (0, d.request)("POST", "CopyKEY/SetCardHubItem", s, (function(e) {
        if (null != e) {
          var s = e;
          if (s.success && 0 === s.code) a.setData({
            "cardhub.name": a.data.cardhubName,
            "cardhub.address": a.data.cardhubAddress
          }), (0, t.default)({
            context: a,
            selector: "#t-toast",
            message: "删除成功"
          }), a.closeDeleteDialog(), r.deleteCardDataHub(a.data.cardhub), setTimeout((function() {
            wx.navigateBack({
              delta: 1
            })
          }), 1e3);
          else {
            var i = (0, d.stringIsEmpty)(s.errmsg) ? (0, d.errorMsg)(s.code, "zh-cn") : s.errmsg;
            (0, t.default)({
              context: a,
              selector: "#t-toast",
              message: "删除失败:" + i
            })
          }
        }
      }), (function(e) {
        (0, t.default)({
          context: a,
          selector: "#t-toast",
          message: "删除失败"
        })
      }), (function(a) {})), r.showLoadingToast(this, "#t-toast")
    }
  },
  showEditDialog: function() {
    this.setData({
      showEditDialog: !0,
      cardhubName: this.data.cardhub.name,
      cardhubAddress: this.data.cardhub.address,
      cardHubNameError: "",
      cardHubAddressError: ""
    })
  },
  closeEditDialog: function() {
    this.setData({
      showEditDialog: !1
    })
  },
  showDeleteDialog: function() {
    this.setData({
      showDeleteConfirm: !0
    })
  },
  closeDeleteDialog: function() {
    this.setData({
      showDeleteConfirm: !1
    })
  }
});