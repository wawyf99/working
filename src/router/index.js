import Vue from 'vue';
import Router from 'vue-router';
import Main from '../views/Main';
import Show from '../views/Show';
import Crowd from '../views/Crowd';
import Process from '../views/Process';

Vue.use(Router);

const router = new Router({
  hashbang: false,
  mode:'history',
  routes: [
    {
      path: '/',
      name: '群聊邀请',
      component: Main,
    },
    {
      path: '/show',
      name: '邀您加入群聊',
      component: Show,
    },
    {
      path: '/crowd',
      name: '测试',
      component: Crowd,
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
