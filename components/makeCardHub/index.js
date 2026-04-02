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
    cardhubName: String,
    cardhubAddress: String,
    cardHubNameError: String,
    cardHubAddressError: String
  },
  data: {
    input_style: "border-bottom: 0.5px solid rgba(220,220,220,1);",
    textarea_style: "height: 156rpx"
  },
  methods: {
    closeDialog: function() {
      this.setData({
        showDialog: !1
      })
    },
    onCardHubNameInput: function(r) {
      this.properties.cardhubName = r.detail.value, this.setData({
        cardHubNameError: ""
      })
    },
    onCardHubAddressInput: function(r) {
      this.properties.cardhubAddress = r.detail.value, this.setData({
        cardHubAddressError: ""
      })
    },
    submitData: function() {
      this.triggerEvent("confirm", {
        cardhubName: this.properties.cardhubName,
        cardhubAddress: this.properties.cardhubAddress
      })
    }
  }
});