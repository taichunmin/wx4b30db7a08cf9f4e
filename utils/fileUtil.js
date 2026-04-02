Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.fileUtil = void 0;
var e = require("../@babel/runtime/helpers/classCallCheck"),
  r = require("../@babel/runtime/helpers/createClass"),
  t = require("./util"),
  i = require("./aes_util"),
  n = null,
  l = function() {
    function l() {
      e(this, l), n = wx.getFileSystemManager()
    }
    return r(l, [{
      key: "access",
      value: function(e) {
        null === n && (n = wx.getFileSystemManager());
        try {
          return n.accessSync(e), !0
        } catch (e) {
          return !1
        }
      }
    }, {
      key: "mkdir",
      value: function(e) {
        null === n && (n = wx.getFileSystemManager());
        try {
          return n.mkdirSync(e, !0), !0
        } catch (e) {
          return !1
        }
      }
    }, {
      key: "rmdir",
      value: function(e, r) {
        null === n && (n = wx.getFileSystemManager());
        try {
          n.rmdirSync(e, r)
        } catch (e) {
          console.error(e)
        }
      }
    }, {
      key: "readdir",
      value: function(e) {
        null === n && (n = wx.getFileSystemManager());
        try {
          return n.readdirSync(e)
        } catch (e) {}
        return null
      }
    }, {
      key: "stat",
      value: function(e, r) {
        null === n && (n = wx.getFileSystemManager());
        try {
          return n.statSync(e, r)
        } catch (e) {}
        return null
      }
    }, {
      key: "write",
      value: function(e, r) {
        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "hex",
          i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "a+";
        null === n && (n = wx.getFileSystemManager());
        try {
          var l = n.openSync({
            filePath: e,
            flag: i
          });
          n.writeSync({
            fd: l,
            data: r,
            encoding: t
          });
          return !0
        } catch (e) {
          return console.log(e), !1
        }
      }
    }, {
      key: "writeFile",
      value: function(e, r) {
        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "hex";
        null === n && (n = wx.getFileSystemManager());
        try {
          n.writeFileSync(e, r.buffer, t);
          return !0
        } catch (e) {
          return !1
        }
      }
    }, {
      key: "readFile",
      value: function(e, r) {
        null === n && (n = wx.getFileSystemManager());
        try {
          return n.readFileSync(e, r)
        } catch (e) {
          console.error(e)
        }
        return null
      }
    }, {
      key: "removeSavedFile",
      value: function(e, r, t, i) {
        null === n && (n = wx.getFileSystemManager()), n.unlink({
          filePath: e,
          success: function(e) {
            "function" == typeof r && r(e)
          },
          fail: function(e) {
            "function" == typeof t && t(e)
          },
          complete: function(e) {
            "function" == typeof i && i(e)
          }
        })
      }
    }, {
      key: "writeCardTempFile",
      value: function(e, r, i, n) {
        var l = (0, t.hex2string)(e, r);
        if (1 === i) l += ".dump";
        else if (3 === i) l += ".ulev1";
        else if (0 === i) l += ".ict";
        else if (16 === i) l += ".key";
        else {
          if (32 !== i) return !1;
          l += ".tkey"
        }
        return this.writeTempFile(l, n)
      }
    }, {
      key: "writeTempFile",
      value: function(e, r) {
        var t = "".concat(wx.env.USER_DATA_PATH, "/Temp");
        if (this.access(t) || this.mkdir(t), this.access(t)) {
          var i = t + "/" + e,
            n = new Uint8Array(r);
          if (this.writeFile(i, n, "hex")) return !0
        }
        return !1
      }
    }, {
      key: "writeDebugLogFile",
      value: function(e, r) {
        return this.writeLogFile("Debug", e, r)
      }
    }, {
      key: "writeInfoLogFile",
      value: function(e, r) {
        return this.writeLogFile("Info", e, r)
      }
    }, {
      key: "writeWarnLogFile",
      value: function(e, r) {
        return this.writeLogFile("Warn", e, r)
      }
    }, {
      key: "writeErrorLogFile",
      value: function(e, r) {
        return this.writeLogFile("Error", e, r)
      }
    }, {
      key: "writeLogFiles",
      value: function(e) {
        if (e && e.length > 0) {
          var r = "";
          return e.forEach((function(e) {
            var t = (0, i.Base64Encode)(JSON.stringify(e));
            r += t + "\r\n"
          })), console.log(r), this.writeLogInFile(r, "w+")
        }
        return !1
      }
    }, {
      key: "writeLogFile",
      value: function(e, r, n) {
        var l = {
            Date: (0, t.formatTime)(new Date),
            Level: e,
            Location: r,
            Message: n
          },
          a = (0, i.Base64Encode)(JSON.stringify(l)) + "\r\n";
        return this.writeLogInFile(a, "a+")
      }
    }, {
      key: "writeLogInFile",
      value: function(e) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "a+",
          i = "".concat(wx.env.USER_DATA_PATH, "/Logs");
        if (this.access(i) || this.mkdir(i), this.access(i)) {
          var n = i + "/log.l",
            l = "hex",
            a = (0, t.string2byte)(e),
            u = new Uint8Array(a);
          if (this.write(n, u.buffer, l, 0, r)) return !0
        }
        return !1
      }
    }, {
      key: "readLogFile",
      value: function() {
        var e = "".concat(wx.env.USER_DATA_PATH, "/Logs");
        if (this.access(e)) {
          var r = e + "/log.l";
          if (this.access(r)) {
            var n = this.readFile(r);
            if (n) {
              var l = new Uint8Array(n),
                a = (0, t.byte2string)(l),
                u = new Array;
              return a.split("\r\n").forEach((function(e) {
                if (e && e.length > 0) {
                  var r = (0, i.Base64DecodeUtf8)(e),
                    t = JSON.parse(r);
                  u.push(t)
                }
              })), u
            }
          }
        }
        return []
      }
    }, {
      key: "readCardTempFile",
      value: function(e, r, i) {
        var n = (0, t.hex2string)(e, r);
        if (1 === i) n += ".dump";
        else if (3 === i) n += ".ulev1";
        else if (0 === i) n += ".ict";
        else if (16 === i) n += ".key";
        else {
          if (32 !== i) return [];
          n += ".tkey"
        }
        return this.readTempFile(n)
      }
    }, {
      key: "readTempFile",
      value: function(e) {
        var r = "".concat(wx.env.USER_DATA_PATH, "/Temp");
        if (this.access(r)) {
          var t = r + "/" + e;
          if (this.access(t)) {
            var i = this.readFile(t, "");
            if (i) return Array.prototype.slice.call(new Uint8Array(i))
          }
        }
        return []
      }
    }, {
      key: "removeCardTempFile",
      value: function(e, r, i) {
        var n = (0, t.hex2string)(e, r);
        if (1 === i) n += ".dump";
        else if (3 === i) n += ".ulev1";
        else if (0 === i) n += ".ict";
        else if (16 === i) n += ".key";
        else {
          if (32 !== i) return !1;
          n += ".tkey"
        }
        return this.removeTempFile(n)
      }
    }, {
      key: "removeTempFile",
      value: function(e) {
        var r = "".concat(wx.env.USER_DATA_PATH, "/Temp");
        if (this.access(r)) {
          var t = r + "/" + e;
          return this.access(t) && this.removeSavedFile(t), !0
        }
        return !1
      }
    }]), l
  }();
exports.fileUtil = l;