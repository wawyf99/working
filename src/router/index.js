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
      name: '323',
      component: Mark1,
    },
    {
      path: '/mark2',
      name: '3333',
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

  if(to.path == '/'){
    Vue.http.post(global.baseUrl+global.url.domain_skip,{
      type: 'B1'
    }).then(res => {
      window.location.href = res.data+to.query.wxid;
      //window.location.href = 'http://localhost:3000/mark3?wxid='+this.wxid;
    });
  }else if(to.path == '/mark3'){
    Vue.http.post(global.baseUrl+global.url.domain_skip,{
      type: 'C1'
    }).then(res => {
      window.location.href = res.data+to.query.wxid+"&invitor="+to.query.invitor;
      //window.location.href = 'http://localhost:3000/mark3?wxid='+this.wxid;
    });
  }


  next();

})

router.afterEach(( to, from ) => {
  if(to.component == 'Show'){
    //wxShare({ title: to.meta.title, desc: to.meta.shareDesc, link: to.meta.shareLink, logo: to.meta.shareLogo})
  }
})

export default router;
