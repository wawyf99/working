
// wxShare.js
import Vue from 'vue'
import router from '../router/index'
/*import Global from './global'*/

// 在组件外使用vux集成的微信jssdk
import { WechatPlugin, AjaxPlugin } from 'vux'

Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)


/*var u = navigator.userAgent;
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
if (isiOS) {
  _url = global.appEntryUrl;
}
console.log(global.appEntryUrl);*/

//console.log(_url);


export default function wxShare ({title, desc, timelineTitle, link, imgUrl} = {}) {

  var _url = window.location.href,
      step = router.history.current.query.step,
      wxid = router.history.current.query.wxid;

  if(_url && wxid ){
    Vue.http.post(global.wxUrl+global.url.wx_share, {
      url : _url,
      wxid : wxid
    }).then(res => {
      Vue.wechat.config({
        debug: false,
        appId: res.data.appId,
        timestamp: res.data.timestamp,
        nonceStr: res.data.nonceStr,
        signature: res.data.signature,
        jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline']
      })
    });
  }

  Vue.wechat.ready(() => {
    Vue.wechat.onMenuShareAppMessage({
      title: title, // 分享标题
      desc: desc || '这里是分享朋友的内容', // 分享描述
      link: link || window.location.href, // 分享链接
      imgUrl: imgUrl || 'https://dwz.cn/T2afCN3o', // 分享图标
      success: function () {
        let _str = '';
        switch (step) {
          case '':
            _str = 1;
            break;
          case 1:
            _str = 2;
            break;
          case 2:
            _str = 3;
            break;
          case 3:
            _str = 4;
            break;
          case 4:
            _str = 5;
            break;
          case 5:
            _str = 6;
            break;
          case 6:
            _str = 7;
            break;
          case 7:
            _str = 8;
            break;
        }
        router.push({ path: '/show', query : {step : _str, wxid: wxid}});
      },
    })
    Vue.wechat.onMenuShareTimeline({
      title: timelineTitle || desc || '这里是分享朋友圈的内容', // 分享标题，由于分享到朋友圈没有desc，所以这里采用的策略是，指定的朋友圈分享标题优先，其次采用发送给朋友的描述，最后采用默认文案。
      link: link || window.location.href, // 分享链接
      imgUrl: imgUrl || 'https://dwz.cn/bQtHr9Iz', // 分享图标
      success: function () {
        let _str = 1;
        switch (step) {
          case undefined:
            _str = 1;
            break;
          case 1:
            _str = 2;
            break;
          case 2:
            _str = 3;
            break;
          case 3:
            _str = 4;
            break;
          case 4:
            _str = 5;
            break;
          case 5:
            _str = 6;
            break;
          case 6:
            _str = 7;
            break;
          case 7:
            _str = 8;
            break;
        }

        router.push({ path: '/process', query : {step : _str, wxid: wxid}});
      }
    })
  })

  Vue.wechat.error((res) => {

  })
}

// 为Vue的原型对象添加该方法，则所有vue实例都能继承该方法
Vue.prototype.$wxShare = wxShare;

