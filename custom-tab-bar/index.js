Component({
  properties: {},
  data: {
    value: "tab_device",
    list: [],
    urls: ["/pages/device/index", "/pages/cardHub/index", "/pages/my/index"]
  },
  lifetimes: {
    attached: function() {
      this.setData({
        list: getApp().globalData.tab.list
      }), getApp().globalData.tab.instance.push(this)
    }
  },
  methods: {
    switchTap: function(t) {
      var a = t.detail.value,
        e = 0;
      "tab_device" == a ? e = 0 : "tab_cardhub" == a ? e = 1 : "tab_my" == a && (e = 2);
      var s = this.data.urls;
      wx.switchTab({
        url: s[e],
        success: function(t) {
          var e = getCurrentPages(),
            s = e[e.length - 1];
          "function" == typeof s.getTabBar && s.getTabBar().setData({
            value: a
          })
        }
      })
    }
  }
});