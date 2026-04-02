var a, t = (a = require("tdesign-miniprogram/toast/index")) && a.__esModule ? a : {
    default: a
  },
  e = require("../../utils/util"),
  i = require("../../utils/fileUtil"),
  o = require("../../utils/cardUtil");
var n = getApp();
Page({
  data: {
    is_login: !1,
    use_page: "",
    data_height: 0,
    data_scroll_height: 0,
    data_textarea_height: 0,
    Directory: {
      root_path: "",
      list: [],
      delete: !1,
      delete_path: ""
    },
    tabs: {
      value: "folder"
    },
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
    dataRefresh: {
      value: !1
    },
    loading_info: "下拉刷新",
    backTopVisible: !1,
    is_loading: !1,
    cardHubs: {
      list: [],
      Index: 0,
      totalCount: 0,
      sync: !1,
      init: !0
    },
    pageSize: 0,
    searchValue: "",
    MessageFile: {
      name: "",
      type: "all",
      options: [{
        value: "all",
        label: "所有文件(*.*)"
      }, {
        value: "IC",
        label: "IC卡数据(*.bin;*.txt;*.dump)"
      }, {
        value: "ID",
        label: "ID卡数据(*.id;*.txt)"
      }, {
        value: "ULEV1",
        label: "Ultralight/Ntag卡数据(*.ulev1;*.u;*.txt)"
      }]
    },
    clipboard: {
      value: ""
    }
  },
  onLoad: function(a) {
    a.page && (this.data.use_page = a.page);
    var t = "".concat(wx.env.USER_DATA_PATH, "/CopyKEY");
    this.DoShowFileList(t), this.setData({
      "tabs.folder": "folder"
    })
  },
  onReady: function() {
    var a = n.getSystemInfo(),
      t = a.the1rpx,
      e = a.pageHeight;
    this.setData({
      data_height: e - 96 * t,
      data_scroll_height: e - 36 - 96 * t,
      data_textarea_height: e - 160 * t - 96 * t
    });
    var i = 256 * t;
    this.data.pageSize = Math.ceil(this.data.data_scroll_height / 2 * 3 / i), this.initDownloadTagDatas()
  },
  onShow: function() {
    this.initDownloadTagDatas()
  },
  initDownloadTagDatas: function() {
    this.data.pageSize <= 0 || this.getUserInfo() && (this.setData({
      cardHubs: this.data.cardHubs,
      loading_info: this.data.cardHubs.list.length <= 0 && !0 !== n.globalData.data.cardHubs.init ? "无数据，请先添加数据" : this.data.loading_info
    }), this.data.cardHubs.sync || this.onDownloadTagDatas(!1))
  },
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {},
  DoShowFileList: function(a) {
    var t = a,
      e = new i.fileUtil,
      o = "".concat(wx.env.USER_DATA_PATH),
      n = t;
    "/" === t.charAt(t.length - 1) && (t = t.substring(0, t.length - 1)), t.indexOf(o) >= 0 && (n = t.replace(o, "."));
    var s = 0;
    e.access(t) ? t === o ? (n = "/", s = 0) : (o = t, s = 1) : (n = "/", s = 0);
    var r = e.readdir(o);
    if (r) {
      var l = new Array;
      if (s > 0) {
        var d = o,
          c = o.lastIndexOf("/");
        c > 0 && (d = d.substring(0, c + 1));
        var u = {
          icon: "rollback",
          color: "#0000FF",
          isFile: !1,
          name: "上一级",
          path: d
        };
        l.push(u)
      }
      "/" != o.charAt(o.length - 1) && (o += "/"), r.forEach((function(a) {
        var t = e.stat(o + a, !1);
        if (t) {
          var i = {
              icon: "",
              color: "",
              isFile: !1,
              name: a,
              path: o + a
            },
            n = !0;
          t.isFile() ? (i.color = "#05A1FF", i.icon = "file", i.isFile = !0) : t.isDirectory() ? (i.color = "#F5D472", i.icon = "folder", i.isFile = !1) : n = !1, n && l.push(i)
        }
      })), this.setData({
        "Directory.root_path": n,
        "Directory.list": l
      })
    }
  },
  selectPath: function(a) {
    var t = a.currentTarget.dataset.path;
    a.currentTarget.dataset.file ? this.DoImport(a.currentTarget.dataset.name, t) : this.DoShowFileList(t)
  },
  onDeleteData: function(a) {
    var t = a.currentTarget.dataset.path;
    this.data.Directory.delete_path = t, this.setData({
      "Directory.delete": !0
    })
  },
  DoImport: function(a, n) {
    var s = new o.cardUtil,
      r = new i.fileUtil;
    try {
      if (!r.access(n)) throw "文件不存在";
      a.length > 0 && (a = a.substring(0, a.lastIndexOf(".")));
      var l = n.substring(n.lastIndexOf(".") + 1);
      if ("ID" !== (l = l.toUpperCase()) && "ULEV1" !== l && "U" !== l && "DUMP" !== l && "BIN" !== l && "TXT" !== l) throw "不支持导入该文件";
      var d = r.readFile(n);
      if (!d) throw "打开文件失败";
      var c = Array.prototype.slice.call(new Uint8Array(d));
      if (c.length <= 0) throw "导入数据空";
      var u = "",
        h = 0;
      if ("ID" === l) {
        if (57 != c.length) throw "导入数据格式错误";
        h = s.card_type.id;
        for (var g = 0; g < 57; g++) u += ("00" + c[g].toString(16)).slice(-2).toUpperCase()
      } else if ("ULEV1" === l || "U" === l) {
        if (!s.isRightULEV1TagData(c)) throw "导入的数据长度/格式错误";
        h = s.card_type.ULEV1;
        for (var f = 0; f < 36; f++) u += ("00" + c[f].toString(16)).slice(-2).toUpperCase()
      } else if ("DUMP" === l || "BIN" === l) {
        if (!s.isRightMFTagData(c)) throw "导入的数据长度/格式错误";
        h = s.card_type.MF;
        for (var D = 0; D < 16; D++) u += ("00" + c[D].toString(16)).slice(-2).toUpperCase()
      } else if ("TXT" === l) {
        var p = (0, e.byte2string)(c),
          v = s.GetTxtData(p);
        if (!(v.card_type > 0 && v.card_info.length > 0 && v.card_buffer.length > 0)) throw "导入的数据长度/格式错误";
        h = v.card_type, u = v.card_info, c = v.card_buffer
      }
      this.navigateBackData(a, h, u, c)
    } catch (a) {
      console.log(a), "string" == typeof a && a.length > 0 ? (0, t.default)({
        context: this,
        duration: 5e3,
        selector: "#t-toast",
        message: a
      }) : (0, t.default)({
        context: this,
        duration: 5e3,
        selector: "#t-toast",
        message: "导入异常"
      })
    }
  },
  navigateBackData: function(a, t, e, i) {
    var o = getCurrentPages();
    if (o.length >= 2) {
      var n = o[o.length - 2];
      "pages/DataControl/index" === n.route ? "DataControl" === this.data.use_page ? n.setCardData(a, t, e, i) : "DataDecode" === this.data.use_page && n.doDecodeByFile(t, i) : "pages/DataControl/DataComp" === n.route && n.setCompData(t, i, "Import" === this.data.use_page)
    }
    wx.navigateBack()
  },
  onTabsChange: function(a) {
    this.setData({
      "tabs.folder": a.detail.value
    })
  },
  onOpenMessage: function() {
    this.selectMessageFile()
  },
  selectMessageFile: function() {
    var a = this,
      t = void 0;
    "IC" === a.data.MessageFile.type ? t = ["bin", "txt", "dump"] : "ID" === a.data.MessageFile.type ? t = ["id", "txt"] : "ULEV1" === a.data.MessageFile.type && (t = ["ulev1", "u", "txt"]), wx.chooseMessageFile({
      count: 1,
      type: "file",
      extension: t,
      success: function(t) {
        var e = t.tempFiles;
        e.length > 0 && a.DoImport(e[0].name, e[0].path)
      }
    })
  },
  onMessageFileTypeChange: function(a) {
    this.setData({
      "MessageFile.type": a.detail.value
    })
  },
  onGetClipboardData: function(a) {
    var t = new o.cardUtil,
      e = this;
    wx.getClipboardData({
      success: function(a) {
        e.setData({
          "clipboard.value": a.data
        });
        var i = t.GetTxtData(a.data);
        i.card_type > 0 && i.card_info.length > 0 && i.card_buffer.length > 0 ? e.navigateBackData("", i.card_type, i.card_info, i.card_buffer) : wx.showToast({
          title: "不支持导入该数据",
          duration: 5e3,
          icon: "none"
        })
      }
    })
  },
  getUserInfo: function() {
    try {
      var a = wx.getStorageSync("userInfo");
      return this.setData({
        is_login: !!a
      }), a
    } catch (a) {}
    return null
  },
  onScroll: function(a) {
    var t = a.detail.scrollTop;
    this.setData({
      backTopVisible: t > 100
    })
  },
  onScrollToLower: function() {
    this.onDownloadTagDatas(!1)
  },
  onDownRefresh: function(a) {
    a.detail.value && (this.data.searchValue = "", this.setData({
      "Search.value": ""
    }), this.onDownloadTagDatas(!0))
  },
  onSearchDataChange: function(a) {
    this.setData({
      "Search.value": a.detail.value
    })
  },
  onSearchCardHub: function(a) {
    this.DoSearchCardHub(this.data.Search.value)
  },
  onSubmitSearchCardHub: function(a) {
    this.DoSearchCardHub(a.detail.value)
  },
  DoSearchCardHub: function(a) {
    this.data.searchValue = a, this.onDownloadTagDatas(!0)
  },
  onSelect: function(a) {
    this.data.is_login ? this.onDownloadTagDataItem(a.target.dataset.md5) : wx.navigateTo({
      url: "/pages/Login/wxLogin"
    })
  },
  onDownloadTagDatas: function(a) {
    var t = this;
    if (a && (t.data.cardHubs = {
        list: [],
        Index: 0,
        totalCount: 0,
        sync: !1,
        init: !0
      }, this.setData({
        cardHubs: t.data.cardHubs,
        is_loading: !1
      })), t.data.is_loading) console.log("正在加载，请耐心等待");
    else {
      var i = t.getUserInfo();
      if (i) {
        var n = {
          wechat_id: i.wechat_id,
          user_account: i.user_account,
          searchValue: t.data.searchValue,
          Index: t.data.cardHubs.Index,
          pageSize: t.data.pageSize
        };
        (0, e.request)("GET", "CopyKEY/GetCardHub", n, (function(a) {
          if (null != a) {
            var i = a;
            if (i.success && 0 === i.code && i.data) {
              if (t.data.cardHubs.init = !1, i.data.totalCount > 0) {
                var n = [],
                  s = new o.cardUtil;
                i.data.list.forEach((function(a) {
                  var t = s.getCardInfo(a.cardtype, a.info, null),
                    i = {
                      Name: a.name,
                      Type: t.Type,
                      UIDInfo: t.CardInfo,
                      Address: a.address,
                      MD5: a.MD5,
                      info: a.info,
                      cardtype: a.cardtype,
                      uid: (0, e.hex2string)(t.Data.uid, t.Data.size),
                      ATQA: (0, e.hex2string)(t.Data.ATQA, 2, !0),
                      sak: t.Data.sak,
                      freq: t.Data.freq
                    };
                  n.push(i)
                })), n = t.data.cardHubs.list.concat(n);
                var r = i.data.skipIndex + i.data.takeCount,
                  l = i.data.totalCount;
                t.data.cardHubs = {
                  list: n,
                  Index: r,
                  totalCount: l,
                  sync: r === l
                }, t.setData({
                  cardHubs: t.data.cardHubs,
                  loading_info: r < l ? "上拉加载更多" : "已加载全部数据",
                  is_loading: !1
                })
              } else t.data.cardHubs = {
                list: [],
                Index: 0,
                totalCount: 0,
                init: !1
              }, t.setData({
                cardHubs: t.data.cardHubs,
                loading_info: "无数据，请先添加数据",
                is_loading: !1
              });
              return
            }
          }
          t.setData({
            loading_info: "加载失败，请重新下拉刷新",
            is_loading: !1
          })
        }), (function(a) {
          t.setData({
            loading_info: "加载失败，请重新下拉刷新",
            is_loading: !1
          })
        }), (function(a) {
          t.setData({
            "dataRefresh.value": !1,
            is_loading: !1
          })
        })), t.setData({
          loading_info: "努力加载中...",
          is_loading: !0
        })
      }
    }
  },
  onDownloadTagDataItem: function(a) {
    var t = this;
    var i = wx.getStorageSync("userInfo");
    if (i) {
      var s = {
        wechat_id: i.wechat_id,
        user_account: i.user_account,
        md5: a
      };
      (0, e.request)("GET", "CopyKEY/GetCardHubItem", s, (function(a) {
        if (null != a) {
          var e = a;
          if (e.success && 0 === e.code && e.data) {
            var i = new o.cardUtil,
              n = e.data,
              s = i.data2HexData(n.data);
            t.navigateBackData(n.name, n.cardtype, n.info, s)
          }
        }
      }), (function(a) {}), (function(a) {
        n.hideToast(t, "#t-toast")
      })), n.showLoadingToast(this, "#t-toast")
    }
  },
  closeDirectoryFileDialog: function() {
    this.setData({
      "Directory.delete": !1
    })
  },
  deleteDirectoryFileDialog: function() {
    var a = this;
    (new i.fileUtil).removeSavedFile(a.data.Directory.delete_path, (function(t) {
      for (var e in a.data.Directory.list) {
        if (a.data.Directory.list[e].path === a.data.Directory.delete_path) {
          a.data.Directory.list.splice(e, 1);
          break
        }
      }
      a.data.Directory.delete_path = "", a.setData({
        "Directory.delete": !1,
        "Directory.list": a.data.Directory.list
      })
    }))
  }
});