<template>
  <div id="show">
    <div class="show">
      <div class="ui-show-step1 step" ref="go1">{{now}}</div>
      <div class="ui-show-step2 step" ref="go2">"<span>{{invitor}}</span>"邀请你加入群聊，群聊参与人还有：辞予、那一夜、床摇得厉害、你的呻吟、甜腻、强哥、七尺大乳、漂洋过海、用贞操换真钞、清晨的眼泪、孟老师、性感↗小娘们、孤寂、淫领风骚、小影、爱到深处て腿自开、无心、吻我杀我、林萌</div>
      <div class="ui-show-step3 step clearfix" ref="go3">
        <div class="show-left" :style="background"></div>
        <div class="show-right">
          <div class="show-person">{{name}}</div>
          <div class="show-img-01"></div>
        </div>
      </div>
      <div class="ui-show-step3 step clearfix" ref="go4">
        <div class="show-left" :style="background"></div>
        <div class="show-right">
          <div class="show-person">{{name}}</div>
          <div class="show-img-02"></div>
        </div>
      </div>
      <div class="ui-show-step3 step clearfix" ref="go5">
        <div class="show-left" :style="background"></div>
        <div class="show-right">
          <div class="show-person">{{name}}</div>
          <div class="show-img-03"></div>
        </div>
      </div>
      <div class="ui-show-step3 step clearfix" ref="go6">
        <div class="show-left" :style="background"></div>
        <div class="show-right">
          <div class="show-person">{{name}}</div>
          <div class="show-text">
            群里有没有{{city}}本地的小哥哥要约的，本人在校大学生，因经济困难想做下兼职补贴下零用，要求素质高，体贴，必须带TT，进群加我私聊。
          </div>
        </div>
      </div>
      <div class="ui-show-step4 step" ref="go7">
        你被"<span>群主</span>"移除群聊
      </div>

      <div class="ui-show-step5 step" ref="go8">
        <div class="ui-show-cen" @click="modalbox"></div>
        <div class="ui-show-alert" ref="alertBox">
          <div class="alert-title">提示：完成分享任务，可重新进群<br>（请分享到一个微信群）</div>
          <div class="alert-content">当前群人数<span>321</span>人</div>
          <div class="alert-btn" @click="toggles">好的</div>
        </div>
      </div>

      <div class="show-footer">
        <span class="show-voice"></span>
        <span class="show-input"></span>
        <span class="show-smile"></span>
        <span class="show-plus"></span>
      </div>

    </div>
  </div>

</template>
<style>
  @import '../assets/style/show.less';
</style>
<script>
  import { Alert, XDialog } from 'vux'
  import Global from "../utils/global";
  import wxShare from '../utils/wxshare';
  export default {
    name: 'Show',
    components: {
      Alert,
      XDialog
    },
    data () {
      return {
        now: '',
        invitor: this.$route.query.invitor,
        shareUrl: '',
        wxid : this.$route.query.wxid,
        city : '',
        background:{
          backgroundImage: '',
          backgroundRepeat: 'no-repeat',
        },
        name : ''
      }
    },
    created(){
      let self = this;
      let name = ["辞予","那一夜","床摇得厉害","你的呻吟","甜腻","强哥","七尺大乳","漂洋过海","用贞操换真钞","清晨的眼泪","孟老师","性感↗小娘们","孤寂","淫领风骚","小影","爱到深处て腿自开","无心","吻我杀我","林萌"];
      let num = ['01', '02', '03', '04'];
      let index1 = Math.floor((Math.random()*num.length));
      let index2 = Math.floor((Math.random()*name.length));
      self.background.backgroundImage = "url('http://working.rzzc.ltd/avatar/avatar-"+num[index1]+".jpg')"
      self.name = name[index2]
      self.getNowTime();
      self.go();
      self.getWxShare();
    },
    methods:{
      //获取分享链接
      getWxShare(){
        let self = this;
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
        this.city = _str;

        self.$http.post(global.baseUrl+global.url.get_wx_share,{}).then(res => {
          self.shareUrl = res.data.url+this.wxid;
          var shareUrl = res.data.url+this.wxid,
            title = res.data.title.replace(/city/, _str).replace(/icon/, icon),
            desc = res.data.describe.replace(/city/, _str).replace(/icon/, icon),
            timelineTitle = res.data.flock_title.replace(/city/, _str).replace(/icon/, icon),
            logo = res.data.logo,
            flock_logo = res.data.flock_logo;
          wxShare({ title: title, desc: desc, timelineTitle: timelineTitle, link: shareUrl , logo: logo , flock_logo: flock_logo});
        });
      },
      //点击模态框
      modalbox(){
        this.$refs.alertBox.style.display = 'block';
      },
      //点击弹框关闭
      toggles(){
        this.$refs.alertBox.style.display = 'none';
      },
      //获取当前时间
      getNowTime(){
        var myDate = new Date();
        var _minutes = '';

        if(myDate.getMinutes() < 10){
          _minutes = "0" + myDate.getMinutes();
        }else{
          _minutes = myDate.getMinutes();
        }
        var _time = myDate.getHours()+":"+ _minutes;
        this.now = _time;
      },
      //开始流程
      go(){
        let self = this;
        var _i = 1;
        var s = setInterval(() => {
          switch (_i) {
            case 1:
              var el = self.$refs.go1;
              if(el){
                el.style.display = 'block';
              }
              break;
            case 2:
              var el = self.$refs.go2;
              if(el){
                el.style.display = 'block';
              }
              break;
            case 3:
              var el = self.$refs.go3;
              if(el){
                el.style.display = 'block';
              }
              break;
            case 4:
              var el = self.$refs.go4;
              if(el){
                el.style.display = 'block';
              }
              break;
            case 5:
              var el = self.$refs.go5;
              if(el){
                el.style.display = 'block';
              }
              break;
            case 6:
              var el = self.$refs.go6;
              if(el){
                el.style.display = 'block';
              }
              break;
            case 7:
              var el = self.$refs.go7;
              if(el){
                el.style.display = 'block';
              }
              break;
            case 8:
              var el = self.$refs.go8;
              if(el){
                el.style.display = 'block';
              }
              break;
            case 9:
              clearInterval(s);
              break;
          }
          _i ++;

          var ele = document.getElementById('show');
          var _a = ele.scrollHeight;
          ele.scrollTop =  _a;

        },800)
      },
      jumpFun(){
        window.location.href = 'http://www.baidu.com';
      }
    },
    mounted(){



      let self = this,
        _url = window.location.href;

      pushHistory();

      window.addEventListener("popstate", function(e) {
        self.jumpFun();
      }, false);

      function pushHistory() {
        var state = {
          title: "title",
          url: _url
        };
        window.history.pushState(state, "title", _url);
      }



      window.document.oncontextmenu = function (e) {
        e.preventDefault();
      };

      var startX = 0, startY = 0;

      function touchStart(e) {
        try {
          var touch = e.touches[0],
            x = Number(touch.pageX),
            y = Number(touch.pageY);
          startX = x;
          startY = y;
        } catch (e) {
          alert(e);
        }
      }

      document.addEventListener('touchstart', touchStart);
      var ele = document.getElementById('show');
      ele.ontouchmove = function (e) {
        var point = e.touches[0],
          eleTop = ele.scrollTop,
          eleScrollHeight = ele.scrollHeight,
          eleOffsetHeight = ele.offsetHeight,
          eleTouchBottom = eleScrollHeight - eleOffsetHeight;
        if (eleTop === 0) {
          if (point.clientY > startY) {
            e.preventDefault();
          }
        }
        else if (eleTop === eleTouchBottom) {
          if (point.clientY < startY) {
            e.preventDefault()
          }
        }
      };

    }
  }
</script>
