
// wxShare.js
import Vue from 'vue'
import Global from './global'

// 在组件外使用vux集成的微信jssdk
import { WechatPlugin, AjaxPlugin } from 'vux'

Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)


var _url = window.location.href;
var u = navigator.userAgent;
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
if (isiOS) {
  _url = Global.appEntryUrl;
}

console.log(global.url.wx_share);



export default function wxShare ({title, desc, timelineTitle, link, imgUrl} = {}) {

  Vue.http.get(global.baseUrl+global.url.wx_share, {
    url : _url
  }).then(res => {
    Vue.wechat.config({
      debug: true,
      appId: res.data.appId,
      timestamp: res.data.timestamp,
      nonceStr: res.data.nonceStr,
      signature: res.data.signature,
      jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline']
    })
  });

  Vue.wechat.ready(() => {
    Vue.wechat.onMenuShareAppMessage({
      title: title, // 分享标题
      desc: desc || '默认分享文案', // 分享描述
      link: link || window.location.href, // 分享链接
      imgUrl: imgUrl || '图标地址（必须是有效的Link）' // 分享图标
    })
    Vue.wechat.onMenuShareTimeline({
      title: timelineTitle || desc || '默认分享文案', // 分享标题，由于分享到朋友圈没有desc，所以这里采用的策略是，指定的朋友圈分享标题优先，其次采用发送给朋友的描述，最后采用默认文案。
      link: link || window.location.href, // 分享链接
      imgUrl: imgUrl || '图标地址（必须是有效的Link）' // 分享图标
    })
  })
  Vue.wechat.error((res) => {
  })
}

// 为Vue的原型对象添加该方法，则所有vue实例都能继承该方法
Vue.prototype.$wxShare = wxShare

