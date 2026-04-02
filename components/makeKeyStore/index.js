var t = require("../../utils/util");
Component({
  properties: {
    showDialog: Boolean,
    title: String,
    confirm: {
      type: String,
      value: "确定"
    },
    cancel: {
      type: String,
      value: "取消"
    },
    inputKeyValue: String,
    keyError: String
  },
  data: {
    Total: 0,
    hex_value: []
  },
  methods: {
    closeDialog: function() {
      this.setData({
        showDialog: !1
      })
    },
    onKeyInput: function(e) {
      var a, r = e.detail,
        i = r.value,
        l = r.cursor,
        n = (0, t.string2HexByte)(i);
      a = (0, t.byte2HexString)(n, 6, !0);
      var o = l;
      if (-1 != o) {
        var s = i.slice(0, o),
          u = (0, t.string2HexByte)(s),
          h = u.length - (u[u.length - 1] > 15 ? 1 : 0);
        o = h + (h > 2 ? Math.ceil(h / 2) - 1 : 0)
      }
      var g = (0, t.string2Hex)(a);
      this.data.hex_value = g;
      var c = Math.floor(g.length / 6);
      return this.setData({
        Total: c,
        keyError: ""
      }), {
        value: a,
        cursor: o
      }
    },
    submitData: function() {
      this.data.Total > 0 ? this.triggerEvent("confirm", {
        keyValue: this.data.hex_value,
        Total: this.data.Total
      }) : this.setData({
        keyError: "请输入6字节密码"
      })
    },
    clearData: function() {
      this.setData({
        keyError: "",
        inputKeyValue: ""
      })
    }
  }
});