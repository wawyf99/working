import Vue from 'vue';
import Router from 'vue-router';
import Main from '../views/Main';
import Show from '../views/Show';
import global from '../utils/global'
import wxShare from '../utils/wxshare'

Vue.use(Router);

const router = new Router({
  hashbang: true,
  mode:'hash',
  routes: [
    {
      path: '/',
      name: '群聊邀请',
      component: Main,
      meta: {
        title: '这是主页',
        shareDesc: '这是本站的主页',
        desc: 'homepage, click and see!',
        timelineTitle: '这是首页，欢迎点击关注，blablablablabla~~~',
        imgUrl: 'http://frankzhang.me/wp-content/uploads/2017/08/cropped-favicon-01.png'
      }
    },
    {
      path: '/show',
      name: '邀您加入群聊',
      component: Show,
      meta: {
        title: '这是主页2',
        shareDesc: '这是本站的主页2',
        desc: 'homepage, click and see!',
        timelineTitle: '这是首页，欢迎点击关注，blablablablabla~~~',
        imgUrl: 'http://frankzhang.me/wp-content/uploads/2017/08/cropped-favicon-01.png'
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (!global.appEntryUrl) {
    global.appEntryUrl = window.location.href;
  }
  document.getElementById('titleId').innerHTML = to.name;
  next();
})

router.afterEach(( to, from ) => {
  //wxShare({ title: to.meta.title, desc: to.meta.shareDesc, link: to.meta.shareLink, logo: to.meta.shareLogo})
})

export default router;
