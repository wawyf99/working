import Vue from 'vue';
import Router from 'vue-router';
import Mark4 from '../views/Mark4';
import Mark2 from '../views/Mark2';
import Mark1 from '../views/Mark1';
import Mark3 from '../views/Mark3';
import Count from '../components/count';
import Mark5 from '../views/Mark5';
import wxShare from '../utils/wxshare';
import userAgent from '../utils/userAgent';
import cookie from "../utils/cookie";

import store from '../vuex/store';

Vue.use(Router);

const router = new Router({
  hashbang: false,
  mode:'history',
  routes: [
    {
      path: '/',
      name: '',
      component: Mark2,
    },
    {
      path: '/count',
      name: '',
      component: Count,
    },
    {
      path: '/mark1',
      name: '',
      component: Mark1,
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

  if(!userAgent.isWechat()){
     window.location.href = "https://xw.qq.com/";
  }else {

    if (to.path == '/mark4' && store.state.step != 0) {
      window.location.href = "https://xw.qq.com/";
    }

    document.getElementById('titleId').innerHTML = to.name;

    let _JumpUrl = 'http://a3.xinhuanet.com/c?sid=574&impid=8ce74a5e7b8f407f92c9458ffe8f1e0a&cam=789&adgid=789&crid=3553&uid=55efaac86d6942048aecdb4d2b7824cf&d=xinhuanetv2&url=http%3A%2F%2Ftj.xinhuanet.com%2F&ref=&i=1966948576&tm=1535527310&sig=56a0e773a2ec6f81c34959f1e90754ae&click=';

    console.log(to.path);

    if (to.path == '/mark1') {
      Vue.http.post(global.baseUrl + global.url.domain_skip, {
        type: 'A2'
      }).then(res => {
        let _str = _JumpUrl + res.data;
        window.location.href = _str;
      });
    } else if (to.path == '/mark2') {
      Vue.http.post(global.baseUrl + global.url.domain_skip, {
        type: 'B1'
      }).then(res => {
        let _str = _JumpUrl + res.data;
        window.location.href = _str;
      });
    }else if(to.path == '/mark3'){
      next();
    }else if(to.path == '/mark4') {
      //获取微信分享相关配置

      let _step = store.state.step;

      if (_step == 0) {

        Vue.http.post(global.baseUrl + global.url.get_wx_share, {}).then(res => {
          //储存到Vuex
          let _arr = res.data.data;
          store.state.Wxshare = res.data.data;
          let city = IpQuery.city,
            province = IpQuery.province,
            _str = '';

          let emjoy = ['👑', '🔥', '✨', '🌟', '💫', '💥', '💦', '💤', '💋', '💎', '❤', '💕', '💘', '🐾', '🌹', '🌴', '🍀', '✏', '✈', '🔞', '✅', '🍭', '🍦', '🍉', '☀', '⚡', '⭐', '🐝', '🐕', '👣', '🌂', '🍎', '🎀', '🏀', '🍼', '👠', '💐', '🌺', '🌻', '🌀', '🎈', '💡', '🍒', '🍇', '🍌', '🔍', '♨', '🚀', '🚲', '💉', '🔑', '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒'];
          let index = Math.floor((Math.random() * emjoy.length));
          let icon = emjoy[index];
          let index1 = Math.floor((Math.random() * emjoy.length));
          let icon1 = emjoy[index1];
          if (city) {
            _str = city.replace(/市/, '');
          } else {
            _str = province.replace(/省/, '');
          }

          var shareUrl = _arr[0].url,
            title = _arr[0].title.replace(/city/, _str).replace(/icon/, icon).replace(/icon/, icon1),
            desc = _arr[0].describe.replace(/city/, _str).replace(/icon/, icon).replace(/icon/, icon1),
            timelineTitle = _arr[0].flock_title.replace(/city/, _str).replace(/icon/, icon).replace(/icon/, icon1),
            logo = _arr[0].logo,
            wxid = _arr[0].wxid,
            type = '1',
            flock_logo = _arr[0].flock_logo;

          wxShare({
            title: title,
            desc: desc,
            timelineTitle: timelineTitle,
            link: shareUrl,
            logo: logo,
            flock_logo: flock_logo,
            sort: type,
            wxid: wxid
          });
          next();
        });

      }

    }
  }
})

router.afterEach(( to, from ) => {
  //处理跳转;
})

export default router;
