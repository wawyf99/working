
// wxShare.js
import Vue from 'vue'
import router from '../router/index'
/*import Global from './global'*/

// 在组件外使用vux集成的微信jssdk
import { WechatPlugin, AjaxPlugin } from 'vux'

Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)

export default function wxShare ({title, desc, timelineTitle, link, logo, flock_logo, type } = {}) {

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
        jsApiList: ['checkJsApi', 'onMenuShareAppMessage', 'onMenuShareTimeline', 'hideAllNonBaseMenuItem', 'showMenuItems']
      })
    });
  }

  Vue.wechat.ready(() => {
    let types = type;
    console.log(typeof(type),type);

    Vue.wechat.hideAllNonBaseMenuItem();

    /*if(types == 1){
      alert('11');
      Vue.wechat.showMenuItems({
        menuList: ["menuItem:share:timeline"]
      })
      wx.showMenuItems({
        menuList: [] // 要显示的菜单项，所有menu项见附录3
      });
    }else if(types == 2){
      alert('22');
      Vue.wechat.showMenuItems({
        menuList: ["menuItem:share:timeline", "menuItem:share:appMessage"]
      })
    }else if(types == 3){
      alert('33');
      Vue.wechat.showMenuItems({
        menuList: ["menuItem:share:timeline", "menuItem:share:appMessage"]
      })
    }*/
    Vue.wechat.onMenuShareAppMessage({
      title: title, // 分享标题
      desc: desc || '这里是分享朋友的内容', // 分享描述
      link: link || window.location.href, // 分享链接
      imgUrl: logo || 'https://dwz.cn/T2afCN3o', // 分享图标
      success: function () {
        if(step){
          step = parseInt(step);
        }
        switch (step) {
          case 0:
          case 1:
            step = 2;
            router.push({ path: '/mark5', query : {step : step, wxid: wxid}});
            break;
          case 2:
            step = 3;
            router.push({ path: '/mark5', query : {step : step, wxid: wxid}});
            break;
          case 3:
            step = 4;
            router.push({ path: '/mark5', query : {step : step, wxid: wxid}});
            break;
          case 4:
            step = 5;
            router.push({ path: '/mark5', query : {step : step, wxid: wxid}});
            break;
          case 5:
            step = 6;
            Vue.http.post("/emsTest/index/adv/AinterfaceS",{}).then(res => {
              window.location.href = res.data.url;
            });
            break;
          default:
            step = 1;
            router.push({ path: '/mark5', query : {step : step, wxid: wxid}});
            break;
        }
      },
    })
    Vue.wechat.onMenuShareTimeline({
      title: timelineTitle || '这里是分享朋友圈的内容', // 分享标题，由于分享到朋友圈没有desc，所以这里采用的策略是，指定的朋友圈分享标题优先，其次采用发送给朋友的描述，最后采用默认文案。
      link: link || window.location.href, // 分享链接
      imgUrl: flock_logo || 'https://dwz.cn/bQtHr9Iz', // 分享图标
      success: function () {
        if(step){
          step = parseInt(step);
        }
        switch (step) {
          case 0:
          case 1:
            step = 2;
            router.push({ path: '/mark5', query : {step : step, wxid: wxid}});
            break;
          case 2:
            step = 3;
            router.push({ path: '/mark5', query : {step : step, wxid: wxid}});
            break;
          case 3:
            step = 4;
            router.push({ path: '/mark5', query : {step : step, wxid: wxid}});
            break;
          case 4:
            step = 5;
            router.push({ path: '/mark5', query : {step : step, wxid: wxid}});
            break;
          case 5:
            step = 6;
            window.location.href = 'http://www.baidu.com';
            break;
          default:
            step = 1;
            router.push({ path: '/mark5', query : {step : step, wxid: wxid}});
            break;
        }
      }
    })
  })

  Vue.wechat.error((res) => {

  })
}

// 为Vue的原型对象添加该方法，则所有vue实例都能继承该方法
Vue.prototype.$wxShare = wxShare;

