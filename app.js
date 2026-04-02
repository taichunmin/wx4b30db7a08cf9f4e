var t = require("./@babel/runtime/helpers/typeof"),
  a = require("./@babel/runtime/helpers/objectSpread2"),
  e = require("./utils/bluetooth_util"),
  i = require("./utils/util"),
  o = function(t, a) {
    if (!a && t && t.__esModule) return t;
    if (null === t || "object" != typeof t && "function" != typeof t) return {
      default: t
    };
    var e = l(a);
    if (e && e.has(t)) return e.get(t);
    var i = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var n in t)
      if ("default" !== n && Object.prototype.hasOwnProperty.call(t, n)) {
        var r = o ? Object.getOwnPropertyDescriptor(t, n) : null;
        r && (r.get || r.set) ? Object.defineProperty(i, n, r) : i[n] = t[n]
      } i.default = t, e && e.set(t, i);
    return i
  }(require("tdesign-miniprogram/toast/index")),
  n = require("./utils/fileUtil");

function l(t) {
  if ("function" != typeof WeakMap) return null;
  var a = new WeakMap,
    e = new WeakMap;
  return (l = function(t) {
    return t ? e : a
  })(t)
}
App({
  globalData: {
    miniapp: {
      update: !1,
      app_version: "1.0.0.1.250808"
    },
    is_debug: !1,
    height: 0,
    width: 0,
    eLanguage: {
      zh_CN: 1,
      zh_TW: 2,
      en_US: 3
    },
    tab: {
      list: [{
        value: "tab_device",
        label: "设备",
        icon: "mobile",
        dot: !1
      }, {
        value: "tab_cardhub",
        label: "卡包",
        icon: "folder-open",
        dot: !1
      }, {
        value: "tab_my",
        label: "我的",
        icon: "user",
        dot: !1
      }],
      instance: []
    },
    data: {
      cardHubs: {
        list: [],
        Index: 0,
        totalCount: 0,
        sync: !1,
        init: !0
      },
      keyStore: {
        list: [],
        total: 64,
        localName: "keystore.key"
      },
      bluetooth: new e.bluetoothUtil,
      devices: {
        deviceId: "",
        update: !1,
        in_blacklist: -1
      }
    }
  },
  onShow: function() {
    wx.setKeepScreenOn({
      keepScreenOn: !0
    })
  },
  onLaunch: function() {
    var t = this.getSystemInfo();
    this.globalData.height = t.windowHeight - t.bottomSafeHeight, this.globalData.width = t.windowWidth, this.loadKeyStore();
    var a = new n.fileUtil,
      e = a.readLogFile();
    e && e.length > 100 && (console.log("日志文件数据超过上限", e.length), e.splice(0, e.length - 100), a.writeLogFiles(e))
  },
  getMiniAppUpdate: function(t) {
    var a = this,
      e = wx.getUpdateManager();
    e.onCheckForUpdate((function(i) {
      (null != t && (a.globalData.miniapp.update = i.hasUpdate, a.SetTabBarBadge(t, "tab_my", a.globalData.miniapp.update)), i.hasUpdate) && ((new n.fileUtil).writeInfoLogFile("onCheckForUpdate", "发现新版本"), e.onUpdateReady((function() {
        wx.showModal({
          title: "更新提示",
          content: "发现新版本，是否重启应用？",
          confirmText: "立即重启",
          cancelText: "暂不重启",
          success: function(t) {
            t.confirm ? e.applyUpdate() : t.cancel
          }
        })
      })))
    })), e.onUpdateFailed((function(t) {
      console.error(t), (new n.fileUtil).writeInfoLogFile("onUpdateFailed", "新版本下载失败")
    }))
  },
  getSystemInfo: function() {
    var t = wx.getSystemInfoSync(),
      e = a(a({}, t), {}, {
        bottomSafeHeight: 0,
        isIphoneX: !1,
        isMi: !1,
        isIphone: !1,
        isIpad: !1,
        isIOS: !1,
        isHeightPhone: !1,
        navbarHeight: 0,
        tabbarHeight: 0,
        headerHeight: 0,
        pageWidth: 0,
        pageHeight: 0,
        the1rpx: 0
      }),
      i = e.model,
      o = e.system; - 1 == i.search("iPhone X") && -1 == i.search("iPhone 11") || (e.isIphoneX = !0), -1 != i.search("MI") && (e.isMi = !0), -1 != i.search("iPhone") && (e.isIphone = !0), i.search("iPad") > -1 && (e.isIpad = !0);
    var n = e.screenWidth,
      l = e.screenHeight;
    n = Math.min(n, l), l = Math.max(n, l), Math.abs(l / n - 1.33333) < .01 && (e.isIpad = !0), (e.isIphone || o.indexOf("iOS") > -1) && (e.isIOS = !0), 640 / 375 * e.screenWidth / (1e3 / 667 * e.screenHeight) < .64 && (e.isHeightPhone = !0), e.isIOS || (e.bottomSafeHeight = 0);
    var r = wx.getMenuButtonBoundingClientRect(),
      s = 4 * (r.top - e.statusBarHeight) + r.height;
    e.capsuleInfo = r;
    var h = e.safeArea,
      d = Math.max(e.screenHeight, e.screenWidth),
      c = Math.max(h.height, h.width),
      u = e.statusBarHeight;
    h && c && d && (e.bottomSafeHeight = d - c - u, e.bottomSafeHeight < 0 && (e.bottomSafeHeight = 0)), e.headerHeight = u + s, e.navbarHeight = s, e.pageWidth = e.windowWidth, e.pageHeight = e.windowHeight - e.bottomSafeHeight;
    var g = e.screenHeight - e.safeArea.bottom,
      b = e.pageWidth / 750;
    return e.tabbarHeight = Number(g) + 112 * b, e.the1rpx = b, e
  },
  SetTabBarBadge: function(a, e, i) {
    var o = this;
    "object" === t(a) && (this.globalData.tab.list.forEach((function(t) {
      t.value === e && t.dot != i && (t.dot = i)
    })), this.globalData.tab.instance.forEach((function(t) {
      null != t && "function" == typeof t.setData && t.setData({
        list: o.globalData.tab.list
      })
    })))
  },
  loadKeyStore: function() {
    var t = this.globalData.data.keyStore.localName;
    try {
      var a = wx.getStorageSync(t);
      if (a)
        for (var e = 0; e < a.length; e++) {
          var o = {
            click: !1,
            value: (0, i.hex2string)(a[e], 6, !0)
          };
          this.globalData.data.keyStore.list.push(o)
        }
    } catch (t) {
      console.log("读取密码库", t)
    }
  },
  addKeyStore: function(t) {
    var a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (this.globalData.data.keyStore.list.length >= this.globalData.data.keyStore.total) return 2;
    for (var e = !1, i = 0; i < this.globalData.data.keyStore.list.length; i++)
      if (t === this.globalData.data.keyStore.list[i].value) {
        e = !0;
        break
      } if (!e) {
      var o = {
        click: !1,
        value: t
      };
      return this.globalData.data.keyStore.list.push(o), a && this.updateKeyStore(), 1
    }
    return 0
  },
  deleteKeyStore: function(t) {
    for (var a in this.globalData.data.keyStore.list)
      if (t === this.globalData.data.keyStore.list[a].value) {
        this.globalData.data.keyStore.list.splice(a, 1);
        break
      } this.updateKeyStore()
  },
  updateKeyStore: function() {
    var t = this.globalData.data.keyStore.localName;
    try {
      for (var a = [], e = 0; e < this.globalData.data.keyStore.list.length; e++) {
        var o = this.globalData.data.keyStore.list[e].value,
          n = (0, i.string2Hex)(null != o ? o : []);
        a.push(n)
      }
      wx.setStorageSync(t, a)
    } catch (t) {
      console.log("更新密码库", t)
    }
  },
  addCardDataHub: function() {
    this.globalData.data.cardHubs.totalCount++, this.globalData.data.cardHubs.sync = !1
  },
  modifyCardDataHub: function(t) {
    if (t.MD5)
      for (var a in this.globalData.data.cardHubs.list)
        if (this.globalData.data.cardHubs.list[a].MD5 === t.MD5) {
          this.globalData.data.cardHubs.list[a].Name = t.name, this.globalData.data.cardHubs.list[a].Address = t.address;
          break
        }
  },
  deleteCardDataHub: function(t) {
    if (t.MD5)
      for (var a in this.globalData.data.cardHubs.list)
        if (this.globalData.data.cardHubs.list[a].MD5 === t.MD5) {
          this.globalData.data.cardHubs.list.splice(a, 1), this.globalData.data.cardHubs.Index--, this.globalData.data.cardHubs.totalCount--;
          break
        }
  },
  showLoadingToast: function(t, a, e) {
    (0, o.default)({
      context: t,
      selector: a,
      message: null != e ? e : "loading",
      theme: "loading",
      preventScrollThrough: !0,
      direction: "column",
      duration: -1
    })
  },
  hideToast: function(t, a) {
    (0, o.hideToast)({
      context: t,
      selector: a
    })
  },
  loadConfigInfo: function() {
    try {
      var t = wx.getStorageSync("configInfo");
      if (t) return t
    } catch (t) {
      console.log("读取配置信息", t)
    }
    return {
      autoShowSetCardData: !0
    }
  },
  updateConfigInfo: function(t) {
    try {
      t ? wx.setStorageSync("configInfo", t) : wx.setStorageSync("configInfo", {
        autoShowSetCardData: !0,
        showUpdateInfo: !0
      })
    } catch (t) {
      console.log("更新配置信息", t)
    }
  }
});