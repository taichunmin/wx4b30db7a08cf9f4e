var e = require("../../utils/fileUtil");
Page({
  data: {
    logs: []
  },
  onLoad: function() {
    var a = (new e.fileUtil).readLogFile(),
      t = new Array;
    a.length > 0 && a.forEach((function(e) {
      if (e) {
        var a = {
          Level: e.Level,
          Date: e.Date,
          Location: e.Location,
          Message: e.Message
        };
        t.push(a)
      }
    })), this.setData({
      logs: t
    })
  }
});