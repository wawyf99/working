import Vue from 'vue';
import Router from 'vue-router';
import until from '../utils/until';
import store from '../vuex/store';
import wxShare from '../utils/wxshare';
import userAgent from '../utils/userAgent';
import Mark4 from '../views/Mark4';
import Mark2 from '../views/Mark2';
import Mark1 from '../views/Mark1';
import Mark3 from '../views/Mark3';
import Count from '../components/count';
import Mark5 from '../views/Mark5';

import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';
/*
import store from '../vuex/store';*/

Vue.use(Router);

//console.log(store.getters.getRoter);



const router = new Router({
  hashbang: false,
  mode:'history',
  routes: [
    { path: "/main", name: '首页', component : Mark1 },
  ]
});

router.beforeEach((to, from, next) => {
  if(userAgent.isWechat()){
    if (router.options.routes.length < 2) {
      document.getElementById('titleId').innerHTML = '首页';
      router.options.routes.push({path: '/main', name: '首页', component: Mark1});
      router.addRoutes(router.options.routes);
      router.push({path: '/main'})
    }
    next();
  }else {

    if(to.path.length == 65) {
      let _str = until.aesDecrypt(to.path.slice(1, to.path.length), 'router');
      _str = _str.slice(13, to.path.length);
      switch (_str) {
        case 'RouterA':
          console.log(document.referrer);
          store.commit('setRouter', {type: 'A', str: to.path});
          Vue.http.post(global.baseUrl + global.url.domain_skip, {
            type: 'B1'
          }).then(res => {
            window.location.href = res.data;
          });
          break;
        case 'RouterB':
          console.log(document.referrer);
            document.getElementById('titleId').innerHTML = '群聊邀请';
            store.commit('setRouter', {type: 'B', str: to.path});
            let _B = store.state.Roter.B;
            let _arr = {
              path: '/' + _B,
              name: '群聊邀请',
              component: Mark3
            }
            if (router.options.routes.length < 2) {
              router.options.routes.push(_arr);
              router.addRoutes(router.options.routes);
              router.push({path: '/' + _B})
            }
            next();

          break;
        case 'RouterC':
          console.log(document.referrer);
          if(document.referrer != ''){
            document.getElementById('titleId').innerHTML = '邀您加入群聊';
            store.commit('setRouter', {type: 'C', str: to.path});
            let _C = store.state.Roter.C;
            let _arrs = {
              path: '/' + _C,
              name: '邀您加入群聊',
              component: Mark4
            }
            if (router.options.routes.length < 3) {
              router.options.routes.push(_arrs);
              router.addRoutes(router.options.routes);
              router.push({path: '/' + _C})
            }
            var _step = store.state.step;
            if (_step == 0) {
              Vue.http.post(global.baseUrl + global.url.get_wx_share, {}).then(res => {
                //储存到Vuex
                var _arr = res.data.data;
                store.state.Wxshare = res.data.data;
                var city = IpQuery.city,
                  province = IpQuery.province,
                  _str = '';

                var emjoy = ['👑', '🔥', '✨', '🌟', '💫', '💥', '💦', '💤', '💋', '💎', '❤', '💕', '💘', '🐾', '🌹', '🌴', '🍀', '✏', '✈', '🔞', '✅', '🍭', '🍦', '🍉', '☀', '⚡', '⭐', '🐝', '🐕', '👣', '🌂', '🍎', '🎀', '🏀', '🍼', '👠', '💐', '🌺', '🌻', '🌀', '🎈', '💡', '🍒', '🍇', '🍌', '🔍', '♨', '🚀', '🚲', '💉', '🔑', '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒'];
                var index = Math.floor((Math.random() * emjoy.length));
                var icon = emjoy[index];
                var index1 = Math.floor((Math.random() * emjoy.length));
                var icon1 = emjoy[index1];
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
                  type = _step,
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
            }else{
              if (router.options.routes.length < 2) {
                document.getElementById('titleId').innerHTML = '首页';
                router.options.routes.push({path: '/main', name: '首页', component: Mark1});
                router.addRoutes(router.options.routes);
                router.push({path: '/main'})
              }
              next();
            }
          }else{
            if (router.options.routes.length < 2) {
              document.getElementById('titleId').innerHTML = '首页';
              router.options.routes.push({path: '/main', name: '首页', component: Mark1});
              router.addRoutes(router.options.routes);
              router.push({path: '/main'})
            }
            next();
          }

          break;
        default:
          if (router.options.routes.length < 2) {
            document.getElementById('titleId').innerHTML = '首页';
            router.options.routes.push({path: '/main', name: '首页', component: Mark1});
            router.addRoutes(router.options.routes);
            router.push({path: '/main'})
          }
          next();
          break;
      }
    }else{
      if (router.options.routes.length < 2) {
        document.getElementById('titleId').innerHTML = '首页';
        router.options.routes.push({path: '/main', name: '首页', component: Mark1});
        router.addRoutes(router.options.routes);
        router.push({path: '/main'})
      }
      next();
    }
  }
})

router.afterEach(( to, from ) => {
  //处理跳转;
})

export default router;
