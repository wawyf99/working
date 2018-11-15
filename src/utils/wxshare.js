
// wxShare.js
import Vue from 'vue'
import router from '../router/index'
/*import Global from './global'*/
import { WechatPlugin, AjaxPlugin } from 'vux'
import cookie from "./cookie";

Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)

export default function wxShare ({title, desc, timelineTitle, link, logo, flock_logo, sort, wxid, step } = {}) {

  var _url = window.location.href,
      step = parseInt(step);

  if(_url){
    Vue.http.post(global.wxUrl+global.url.wx_share, {
      url : _url,
      wxid : wxid
    }).then(res => {
      const info = {
        data: res.data,
      };
      cookie.info = info;
      cookie.setCookie('_wx_');

      Vue.wechat.config({
        debug: true,
        appId: res.data.appId,
        timestamp: res.data.timestamp,
        nonceStr: res.data.nonceStr,
        signature: res.data.signature,
        jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline', 'hideAllNonBaseMenuItem', 'showMenuItems']
      })

      let types = sort;
      if(!types){
        types = 1;
      }
      if(types == 1){
        Vue.wechat.hideAllNonBaseMenuItem();
        Vue.wechat.showMenuItems({
          menuList: ["menuItem:share:timeline", "menuItem:share:appMessage"]
        })
      }else if(types == 2){
        Vue.wechat.hideAllNonBaseMenuItem();
        Vue.wechat.showMenuItems({
          menuList: ["menuItem:share:timeline"]
        })
      }else if(types == 3){
        Vue.wechat.hideAllNonBaseMenuItem();
        Vue.wechat.showMenuItems({
          menuList: [ "menuItem:share:appMessage"]
        })
      }

    });
  }


  Vue.wechat.ready(() => {

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
            step = 1;
            router.push({ path: '/mark4', query : {step : step}});
            break;
          case 1:
            step = 2;
            router.push({ path: '/mark4', query : {step : step}});
            break;
          case 2:
            step = 3;
            router.push({ path: '/mark4', query : {step : step}});
            break;
          case 3:
            step = 4;
            router.push({ path: '/mark4', query : {step : step}});
            break;
          case 4:
            step = 5;
            router.push({ path: '/mark4', query : {step : step}});
            break;
          case 5:
            Vue.http.post("/emsTest/scan/Rule_b?id=5",{}).then(res => {
              window.location.href = res.data.url;
            });
            break;
          default:
            step = 1;
            router.push({ path: '/mark4', query : {step : step}});
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
            step = 1;
            router.push({ path: '/mark4', query : {step : step}});
            break;
          case 1:
            step = 2;
            router.push({ path: '/mark4', query : {step : step}});
            break;
          case 2:
            step = 3;
            router.push({ path: '/mark4', query : {step : step}});
            break;
          case 3:
            step = 4;
            router.push({ path: '/mark4', query : {step : step}});
            break;
          case 4:
            step = 5;
            router.push({ path: '/mark4', query : {step : step}});
            break;
          case 5:
            Vue.http.post("/emsTest/scan/Rule_b?id=5",{}).then(res => {
              window.location.href = res.data.url;
            });
            break;
          default:
            step = 1;
            router.push({ path: '/mark4', query : {step : step}});
            break;
        }
      }
    })

    let types = sort;
    if(!types){
      types = 1;
    }
    if(types == 1){
      Vue.wechat.hideAllNonBaseMenuItem();
      Vue.wechat.showMenuItems({
        menuList: ["menuItem:share:timeline", "menuItem:share:appMessage"]
      })
    }else if(types == 2){
      Vue.wechat.hideAllNonBaseMenuItem();
      Vue.wechat.showMenuItems({
        menuList: ["menuItem:share:timeline"]
      })
    }else if(types == 3){
      Vue.wechat.hideAllNonBaseMenuItem();
      Vue.wechat.showMenuItems({
        menuList: [ "menuItem:share:appMessage"]
      })
    }

  })

  Vue.wechat.error((res) => {

  })
}

// 为Vue的原型对象添加该方法，则所有vue实例都能继承该方法
Vue.prototype.$wxShare = wxShare;

