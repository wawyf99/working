import Vue from 'vue';
import Router from 'vue-router';
import Mark4 from '../views/Mark4';
import Mark2 from '../views/Mark2';
import Mark1 from '../views/Mark1';
import Mark3 from '../views/Mark3';
import Mark5 from '../views/Mark5';

Vue.use(Router);

const router = new Router({
  hashbang: false,
  mode:'history',
  routes: [
    {
      path: '/',
      name: '',
      component: Mark1,
    },
    {
      path: '/mark2',
      name: '',
      component: Mark2,
    },
    {
      path: '/mark3',
      name: '群聊邀请',
      component: Mark3,
    },
    {
      path: '/mark4',
      name: '邀您加入群聊',
      component: Mark4,
    },
    {
      path: '/mark5',
      name: '邀您加入群聊',
      component: Mark5,
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
