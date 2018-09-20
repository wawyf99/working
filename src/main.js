// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/*import ajax from './utils/ajax';
import global from './utils/global'*/
import VueAwesomeSwiper from 'vue-awesome-swiper'
import {ToastPlugin, ConfirmPlugin, AlertPlugin } from 'vux'


Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)
Vue.use(AlertPlugin)

Vue.config.productionTip = false

//全局api请求地址类
/*Vue.use(global);
Vue.use(ajax);*/

Vue.use(VueAwesomeSwiper);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
