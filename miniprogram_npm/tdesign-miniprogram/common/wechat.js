Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.getWindowInfo = exports.getObserver = exports.getDeviceInfo = exports.getAppBaseInfo = void 0;
exports.getObserver = function(e, t) {
  return new Promise((function(n) {
    e.createIntersectionObserver(e).relativeToViewport().observe(t, (function(e) {
      n(e)
    }))
  }))
};
exports.getWindowInfo = function() {
  return wx.getWindowInfo && wx.getWindowInfo() || wx.getSystemInfoSync()
};
exports.getAppBaseInfo = function() {
  return wx.getAppBaseInfo && wx.getAppBaseInfo() || wx.getSystemInfoSync()
};
exports.getDeviceInfo = function() {
  return wx.getDeviceInfo && wx.getDeviceInfo() || wx.getSystemInfoSync()
};