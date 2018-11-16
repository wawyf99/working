// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import global from './utils/global'
import skip from './utils/skip';
import userAgent from './utils/userAgent';
import routerRule from './utils/wxshare'
import IScrollView from 'vue-iscroll-view';
import IScroll from 'iscroll';

/*routerRule(router);*/

//import VueAwesomeSwiper from 'vue-awesome-swiper'
import {ToastPlugin, ConfirmPlugin, AlertPlugin, LoadingPlugin, AjaxPlugin } from 'vux'
import { WechatPlugin } from 'vux'

Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)
Vue.use(AlertPlugin)
Vue.use(IScrollView, IScroll)

/*Vue.config.productionTip = false*/

//全局api请求地址类
Vue.use(Vuex);
Vue.use(global);
/*Vue.use(ajax);*/
Vue.use(userAgent);
Vue.use(WechatPlugin);//  微信
Vue.use(AjaxPlugin);
Vue.use(skip);

skip.jumpA2();
userAgent.isWechat();

Vue.prototype.$step = 0;
Vue.prototype.$Wxshare = '';

const store = new Vuex.Store({})

store.registerModule('vux', {
  state: {
    loading: false,
    showBack: true,
    title: '555555555',
    number: ''
  },
  mutations: {
    updateLoading (state, loading) {
      state.loading = loading
    },
    updateShowBack (state, showBack) {
      state.showBack = showBack
    },
    updateTitle (state, title) {
      state.title = title
    },
    updateNumber (state, number){
      let num = ''
      if(number <= 0){
        state.number = num
      }else {
        num = number.toString()
        state.number = num
      }

    }
  }
});


//Vue.use(VueAwesomeSwiper);
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

