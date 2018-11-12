<template>
  <div id="show1">
    <div class="section" id="shows">
      <div style="height: 1.5rem;"></div>
      <div class="ui-show-step1 step" ref="go1">{{now}}</div>
      <div class="ui-show-step2 step" ref="go2">"<span>{{invitor}}</span>"邀请你加入群聊，群聊参与人还有：辞予、那一夜、床摇得厉害、你的呻吟、甜腻、强哥、七尺大乳、漂洋过海、用贞操换真钞、清晨的眼泪、孟老师、性感↗小娘们、孤寂、淫领风骚、小影、爱到深处て腿自开、无心、吻我杀我、林萌</div>
      <div class="ui-show-step3 step clearfix" ref="go3">
        <div class="show-left" :style="background4"></div>
        <div class="show-right">
          <div class="show-person">{{name1}}</div>
          <div class="show-img-01"></div>
        </div>
      </div>
      <div class="ui-show-step3 step clearfix" ref="go4">
        <div class="show-left" :style="background1"></div>
        <div class="show-right">
          <div class="show-person">{{name2}}</div>
          <div class="show-img-02"></div>
        </div>
      </div>
      <div class="ui-show-step3 step clearfix" ref="go5">
        <div class="show-left" :style="background2"></div>
        <div class="show-right">
          <div class="show-person">{{name3}}</div>
          <div class="show-img-03"></div>
        </div>
      </div>
      <div class="ui-show-step3 step clearfix" ref="go6">
        <div class="show-left" :style="background3"></div>
        <div class="show-right">
          <div class="show-person">{{name4}}</div>
          <div class="show-text">
            群里有没有{{city}}本地的小哥哥要约的，本人在校大学生，因经济困难想做下兼职补贴下零用，要求素质高，体贴，必须带TT，进群加我私聊。
          </div>
        </div>
      </div>
      <div class="ui-show-step4 step" ref="go7">
        你被"<span>群主</span>"移除群聊
      </div>
    </div>
    <div class="footer" id="footerId">
      <span class="show-voice"></span>
      <span class="show-input"></span>
      <span class="show-smile"></span>
      <span class="show-plus"></span>
    </div>
    <div class="ui-show-cen1" @click="modalbox"  ref="go8" id="cen"></div>
    <div class="ui-show-alert1" ref="alertBox">
      <div class="alert-title">提示：完成分享任务，可重新进群<br>（请分享到一个微信群）</div>
      <div class="alert-content">当前群人数<span>321</span>人</div>
      <div class="alert-btn" @click="toggles">好的</div>
    </div>
  </div>
</template>
<style>
  @import '../assets/style/shows.less';
</style>

<script>
  import { Alert, XDialog } from 'vux'
  import Global from "../utils/global";
  import ua from "../utils/userAgent";
  export default {
    name: 'Show',
    components: {
      Alert,
      XDialog
    },
    data () {
      return {
        uaSort: {
          webkitOverflowScrolling: '',
        },
        now: '',
        invitor: '',
        shareUrl: '',
        wxid : this.$route.query.wxid,
        city : '',
        background1:{
          backgroundImage: '',
          backgroundRepeat: 'no-repeat',
        },
        background2:{
          backgroundImage: '',
          backgroundRepeat: 'no-repeat',
        },
        background3:{
          backgroundImage: '',
          backgroundRepeat: 'no-repeat',
        },
        background4:{
          backgroundImage: '',
          backgroundRepeat: 'no-repeat',
        },
        name1 : '',
        name2 : '',
        name3 : '',
      }
    },
    created(){
      let self = this;
      let name = ["辞予","那一夜","床摇得厉害","你的呻吟","甜腻","强哥","七尺大乳","漂洋过海","用贞操换真钞","清晨的眼泪","孟老师","性感↗小娘们","孤寂","淫领风骚","小影","爱到深处て腿自开","无心","吻我杀我","林萌"];
      let num = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16'];

      let index1 = Math.floor((Math.random()*num.length));
      let index2 = Math.floor((Math.random()*name.length));
      let index3 = Math.floor((Math.random()*name.length));
      let index4 = Math.floor((Math.random()*name.length));
      let index5 = Math.floor((Math.random()*name.length));
      let index6 = Math.floor((Math.random()*name.length));
      let index7 = Math.floor((Math.random()*num.length));
      let index8 = Math.floor((Math.random()*num.length));
      let index9 = Math.floor((Math.random()*num.length));
      self.background1.backgroundImage = "url('http://working.ssmulu.com/avatar/avatar-"+num[index1]+".jpg')";
      self.background2.backgroundImage = "url('http://working.ssmulu.com/avatar/avatar-"+num[index7]+".jpg')";
      self.background3.backgroundImage = "url('http://working.ssmulu.com/avatar/avatar-"+num[index8]+".jpg')";
      self.background4.backgroundImage = "url('http://working.ssmulu.com/avatar/avatar-"+num[index9]+".jpg')";
      self.name1 = name[index2];
      self.name2 = name[index4];
      self.name3 = name[index5];
      self.name4 = name[index6];
      self.invitor = name[index3];
      self.getNowTime();
      self.go();
      //self.getWxShare();

      let city = IpQuery.city,
        province = IpQuery.province,
        _str = '';

      if(city){
        _str = city.replace(/市/, '');
      }else{
        _str = province.replace(/省/, '');
      }
      this.city = _str;
    },
    methods:{
      go(){
        let self = this;
        var _i = 1;
        console.log(_i);
        var s = setInterval(() => {
          switch (_i) {
            case 1:
              //document.getElementById('footerId').style.position = 'absolute';
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
              var e2 = self.$refs.alertBox;
              if(el){
                el.style.display = 'block';
                e2.style.display = 'block';
              }
              break;
            case 9:
              clearInterval(s);
              break;
          }

          var ele = document.getElementById('show1');
          var _a = ele.scrollHeight;
          document.getElementById("app").scrollTop = _a;
          document.getElementById("cen").style.height = _a + "px";
          _i ++;

        },800)
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
      //跳转
      jumpFun(){
        let self = this;
        self.$http.get("/emsTest/index/adv/AinterfaceS",{}).then(res => {
          window.location.href = res.data.url;
        });
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
      if(ua.versions.android){
        this.uaSort.webkitOverflowScrolling = 'touch';
        var ele = document.getElementById('show1');
      }else{
        var ele = document.getElementById('app');
      }

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
