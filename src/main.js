// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import global from './utils/global'
import skip from './utils/skip';
import userAgent from './utils/userAgent';
import routerRule from './utils/wxshare'
routerRule(router);

//import VueAwesomeSwiper from 'vue-awesome-swiper'
import {ToastPlugin, ConfirmPlugin, AlertPlugin, LoadingPlugin, AjaxPlugin } from 'vux'
import { WechatPlugin } from 'vux'

Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)
Vue.use(AlertPlugin)

/*Vue.config.productionTip = false*/

//全局api请求地址类
Vue.use(global);
/*Vue.use(ajax);*/
Vue.use(userAgent);
Vue.use(WechatPlugin);//  微信
Vue.use(AjaxPlugin);
Vue.use(skip);

skip.jumpA2();
userAgent.isWechat();

//Vue.use(VueAwesomeSwiper);
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

