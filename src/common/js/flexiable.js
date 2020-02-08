/**
 * 以下这段代码是用于根据屏幕分辨率计算出合适的根元素的大小
 * 当设备宽度为1920(iPhone6)时，根元素font-size=100px; 依次增大或减小；
 * 限制当为设备宽度小于1024之后，font-size不再继续减小
 */
(function (doc, win) {
    var docEl = win.document.documentElement,
    minWidth = 1200,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    baseWidth = 1440,
    refreshRem = function () {
      var clientWidth = win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth    
      if (!clientWidth) return
      var fz
      var width = clientWidth < minWidth ? minWidth : clientWidth
      fz = 100 * width / baseWidth
      docEl.style.fontSize = fz + 'px'
    }
    if (!doc.addEventListener) return
    win.addEventListener(resizeEvt, refreshRem, false)
    doc.addEventListener('DOMContentLoaded', refreshRem, false)
    refreshRem()
  })(document, window)
  