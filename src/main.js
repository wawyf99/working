// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import global from './utils/global'
import userAgent from './utils/userAgent';
import until from './utils/until';


/*routerRule(router);*/

//import VueAwesomeSwiper from 'vue-awesome-swiper'
import {ToastPlugin, ConfirmPlugin, AlertPlugin, LoadingPlugin, AjaxPlugin } from 'vux'
import { WechatPlugin } from 'vux'

Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)
Vue.use(AlertPlugin)

/*Vue.config.productionTip = false*/

//全局api请求地址类
Vue.use(Vuex);
Vue.use(global);
/*Vue.use(ajax);*/
Vue.use(userAgent);
Vue.use(WechatPlugin);//  微信
Vue.use(AjaxPlugin);
Vue.use(until);

userAgent.isWechat();

const store = new Vuex.Store({})

//Vue.use(VueAwesomeSwiper);
/* eslint-disable no-new */


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

