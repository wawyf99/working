/**
 * 设置浏览器宽度
 */
var rem = {
  setWidth: function () {
    var docEl = document.documentElement || document.body;
    var CLIENT_WIDTH = docEl.clientWidth;
    if (!/(Android|iPhone|SymbianOS|Windows Phone|iPad|iPod)/i.test(window.navigator.userAgent) && CLIENT_WIDTH > 750) {
      CLIENT_WIDTH = 750;
    }
    var FONT_SIZE = parseInt(CLIENT_WIDTH / 7.5);
    docEl.style.fontSize = FONT_SIZE + 'px';
    docEl.style.width = CLIENT_WIDTH + 'px';
  }
}

module.exports = rem;
