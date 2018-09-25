// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import global from './utils/global'
import ajax from './utils/ajax';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import {ToastPlugin, ConfirmPlugin, AlertPlugin, LoadingPlugin } from 'vux'

Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)
Vue.use(AlertPlugin)

Vue.config.productionTip = false

//全局api请求地址类
Vue.use(global);
Vue.use(ajax);



Vue.use(VueAwesomeSwiper);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

const wx = Vue.wechat;
Vue.prototype.wxShare = function (title, code) {
  wx.config({
    debug: title.debug, // 开启调试模式,开发时可以开启
    appId: title.appId,   // 必填，公众号的唯一标识   由接口返回
    timestamp: title.timestamp, // 必填，生成签名的时间戳 由接口返回
    nonceStr: title.nonceStr,    // 必填，生成签名的随机串 由接口返回
    signature: title.signature,   // 必填，签名 由接口返回
    jsApiList: title.jsApiList // 此处填你所用到的方法
  })
  wx.ready(() => {
    wx.onMenuShareAppMessage({ // 分享给朋友
      title: '分享朋友测试',       // 分享标题
      desc: '这是分享朋友测试这是分享朋友测试这是分享朋友测试这是分享朋友测试这是分享朋友测试这是分享朋友测试',   // 分享描述
      link: 'http://working.rzzc.ltd',       // 分享链接 默认以当前链接
      imgUrl: 'http://agentapi.sxmj.szdhkj.com.cn/public/images/icon.png',// 分享图标
    });
    //分享到朋友圈
    wx.onMenuShareTimeline({
      title: '分享朋友圈测试',       // 分享标题
      desc: '这是分享朋友圈测试这是分享朋友圈测试这是分享朋友圈测试这是分享朋友圈测试这是分享朋友圈测试',   // 分享描述
      link: 'http://working.rzzc.ltd',       // 分享链接 默认以当前链接
      imgUrl: 'http://agentapi.sxmj.szdhkj.com.cn/public/images/icon.png',// 分享图标
    });

  });
};
