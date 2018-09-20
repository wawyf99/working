import Vue from 'vue';
import Router from 'vue-router';
import Main from '../views/Main';
import Show from '../views/Show';

Vue.use(Router);

const router = new Router({
  hashbang: true,
  mode:'history',
  routes: [
    {
      path: '/',
      name: '群聊邀请',
      component: Main
    },
    {
      path: '/show',
      name: '邀您加入群聊',
      component: Show
    }
  ]
});

router.beforeEach((to, from, next) => {
  document.getElementById('titleId').innerHTML = to.name;
  next();
})

export default router;
