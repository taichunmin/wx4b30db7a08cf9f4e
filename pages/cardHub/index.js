var a = require("../../utils/util"),
  t = require("../../utils/cardUtil"),
  e = getApp();
Page({
  data: {
    dataRefresh: {
      value: !1
    },
    is_login: !1,
    scroll_height: 100,
    backtop_buttom: 100,
    loadingProps: {
      size: "50rpx"
    },
    navigatorProps: {
      url: "/pages/Login/wxLogin"
    },
    Search: {
      value: ""
    },
    loading_info: "下拉刷新",
    backTopVisible: !1,
    is_loading: !1,
    cardHubs: e.globalData.data.cardHubs,
    pageSize: 0,
    searchValue: ""
  },
  onLoad: function() {},
  onReady: function() {
    var a = e.getSystemInfo();
    this.setData({
      scroll_height: a.pageHeight - a.tabbarHeight + a.bottomSafeHeight,
      backtop_buttom: a.tabbarHeight + 8
    });
    var t = 256 * a.the1rpx;
    this.data.pageSize = Math.ceil(this.data.scroll_height / 2 * 3 / t), this.initDownloadDatas()
  },
  onShow: function() {
    this.initDownloadDatas()
  },
  initDownloadDatas: function() {
    this.data.pageSize <= 0 || this.getUserInfo() && (this.setData({
      cardHubs: e.globalData.data.cardHubs,
      loading_info: e.globalData.data.cardHubs.list.length <= 0 && !0 !== e.globalData.data.cardHubs.init ? "无数据，请先添加数据" : this.data.loading_info
    }), this.data.cardHubs.sync || this.onDownloadDatas(!1))
  },
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {},
  onScroll: function(a) {
    var t = a.detail.scrollTop;
    this.setData({
      backTopVisible: t > 100
    })
  },
  onScrollToLower: function() {
    this.onDownloadDatas(!1)
  },
  onDownRefresh: function(a) {
    a.detail.value && (this.data.searchValue = "", this.setData({
      "Search.value": ""
    }), this.onDownloadDatas(!0))
  },
  onSearchDataChange: function(a) {
    this.data.Search.value = a.detail.value
  },
  onSearchCardHub: function(a) {
    this.DoSearchCardHub(this.data.Search.value)
  },
  onSubmitSearchCardHub: function(a) {
    this.DoSearchCardHub(a.detail.value)
  },
  DoSearchCardHub: function(a) {
    this.data.searchValue = a, this.onDownloadDatas(!0)
  },
  onSelect: function(a) {
    this.data.is_login ? wx.navigateTo({
      url: "/pages/cardHub/cardHubSelect?md5=" + a.target.dataset.md5 + "&uid=" + a.target.dataset.uid + "&address=" + a.target.dataset.address + "&type=" + a.target.dataset.type + "&name=" + a.target.dataset.name + "&ATQA=" + a.target.dataset.atqa + "&sak=" + a.target.dataset.sak + "&freq=" + a.target.dataset.freq + "&typeid=" + a.target.dataset.typeid
    }) : wx.navigateTo({
      url: "/pages/Login/wxLogin"
    })
  },
  onDownloadDatas: function(i) {
    var o = this;
    if (i && (e.globalData.data.cardHubs = {
        list: [],
        Index: 0,
        totalCount: 0,
        sync: !1,
        init: !0
      }, this.setData({
        cardHubs: e.globalData.data.cardHubs,
        is_loading: !1
      })), this.data.is_loading) console.log("正在加载，请耐心等待");
    else {
      var n = this.getUserInfo();
      if (n) {
        var s = {
          wechat_id: n.wechat_id,
          user_account: n.user_account,
          searchValue: this.data.searchValue,
          Index: this.data.cardHubs.Index,
          pageSize: this.data.pageSize
        };
        (0, a.request)("GET", "CopyKEY/GetCardHub", s, (function(i) {
          if (null != i) {
            var n = i;
            if (n.success && 0 === n.code && n.data) {
              if (e.globalData.data.cardHubs.init = !1, n.data.totalCount > 0) {
                var s = [],
                  d = new t.cardUtil;
                n.data.list.forEach((function(t) {
                  var e = d.getCardInfo(t.cardtype, t.info, null),
                    i = {
                      Name: t.name,
                      Type: e.Type,
                      UIDInfo: e.CardInfo,
                      Address: t.address,
                      MD5: t.MD5,
                      info: t.info,
                      cardtype: t.cardtype,
                      uid: (0, a.hex2string)(e.Data.uid, e.Data.size),
                      ATQA: (0, a.hex2string)(e.Data.ATQA, 2, !0),
                      sak: e.Data.sak,
                      freq: e.Data.freq
                    };
                  s.push(i)
                })), s = e.globalData.data.cardHubs.list.concat(s);
                var r = n.data.skipIndex + n.data.takeCount,
                  l = n.data.totalCount;
                e.globalData.data.cardHubs = {
                  list: s,
                  Index: r,
                  totalCount: l,
                  sync: r === l
                }, o.setData({
                  cardHubs: e.globalData.data.cardHubs,
                  loading_info: r < l ? "上拉加载更多" : "已加载全部数据",
                  is_loading: !1
                })
              } else e.globalData.data.cardHubs = {
                list: [],
                Index: 0,
                totalCount: 0,
                init: !1
              }, o.setData({
                cardHubs: e.globalData.data.cardHubs,
                loading_info: "无数据，请先添加数据",
                is_loading: !1
              });
              return
            }
          }
          o.setData({
            loading_info: "加载失败，请重新下拉刷新",
            is_loading: !1
          })
        }), (function(a) {
          o.setData({
            loading_info: "加载失败，请重新下拉刷新",
            is_loading: !1
          })
        }), (function(a) {
          o.setData({
            "dataRefresh.value": !1,
            is_loading: !1
          })
        })), this.setData({
          loading_info: "努力加载中...",
          is_loading: !0
        })
      }
    }
  },
  getUserInfo: function() {
    try {
      var a = wx.getStorageSync("userInfo");
      return wx.setNavigationBarTitle({
        title: a ? a.user_nickname : "卡包"
      }), this.setData({
        is_login: !!a
      }), a
    } catch (a) {}
    return null
  }
});