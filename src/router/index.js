import Vue from 'vue';
import Router from 'vue-router';
import Main from '../views/Main';
import Show from '../views/Show';
import Process from '../views/Process';
import wxShare from '../utils/wxshare';

Vue.use(Router);

const router = new Router({
  hashbang: false,
  mode:'history',
  routes: [
    {
      path: '/',
      name: '群聊邀请',
      component: Main,
      meta: {
        title: '这里是首页分享',
        shareDesc: '首页分享测试首页分享测试首页分享测试首页分享测试',
        timelineTitle: '首页分享朋友圈的内容描述首页分享朋友圈的内容描述首页分享朋友圈的内容描述',
        imgUrl: ''
      }
    },
    {
      path: '/show',
      name: '邀您加入群聊',
      component: Show,
    },
    {
      path: '/process',
      name: '邀您加入群聊',
      component: Process,
    },
  ]
});

router.beforeEach((to, from, next) => {
  document.getElementById('titleId').innerHTML = to.name;
  next();
})

router.afterEach(( to, from ) => {
  if(to.component == 'Show'){
    //wxShare({ title: to.meta.title, desc: to.meta.shareDesc, link: to.meta.shareLink, logo: to.meta.shareLogo})
  }
})

export default router;
