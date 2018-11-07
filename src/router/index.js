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
  }else {
    next();
  }

})

router.afterEach(( to, from ) => {
  if(to.path == '/mark4' || to.path == '/mark5'){
    let city = IpQuery.city,
      province = IpQuery.province,
      _str = '';

    let emjoy = [ '👑','🔥','✨','🌟','💫','💥','💦','💤','💋','💎','❤','💕','💘','🐾','🌹','🌴','🍀','✏','✈','🔞','✅','🍭','🍦','🍉','☀','⚡','⭐','🐝','🐕','👣','🌂','🍎','🎀','🏀','🍼','👠','💐','🌺','🌻','🌀','🎈','💡','🍒','🍇','🍌','🔍','♨','🚀','🚲','💉','🔑','♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒'];
    let index = Math.floor((Math.random()*emjoy.length));
    let icon = emjoy[index];
    if(city){
      _str = city.replace(/市/, '');
    }else{
      _str = province.replace(/省/, '');
    }
    Vue.http.post(global.baseUrl+global.url.get_wx_share,{}).then(res => {
      var shareUrl = res.data.url+this.wxid,
        title = res.data.title.replace(/city/, _str).replace(/icon/, icon),
        desc = res.data.describe.replace(/city/, _str).replace(/icon/, icon),
        timelineTitle = res.data.flock_title.replace(/city/, _str).replace(/icon/, icon),
        logo = res.data.logo,
        flock_logo = res.data.flock_logo;
      wxShare({ title: title, desc: desc, timelineTitle: timelineTitle, link: shareUrl , logo: logo , flock_logo: flock_logo});
    });
  }

})

export default router;
