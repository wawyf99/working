<template>
  <div id="join"  v-if="!step">
    <div id="wrapper">
      <div id="scroller">
        <p style="height: 0.5rem;"></p>
        <div class="ui-show-step1 step" ref="go1">{{now}}</div>
        <div class="ui-show-step2 step" ref="go2">"<span>{{invitor}}</span>"邀您加入群聊，群聊参与人还有：辞予、那一夜、床摇得厉害、你的呻吟、甜腻、强哥、七尺大乳、漂洋过海、用贞操换真钞、清晨的眼泪、孟老师、性感↗小娘们、孤寂、淫领风骚、小影、爱到深处て腿自开、无心、吻我杀我、林萌</div>
        <div class="ui-show-step3 step clearfix" ref="go3">
          <div class="show-left" :style="background4"></div>
          <div class="show-right">
            <div class="show-person">{{name1}}</div>
            <div :class="group1"></div>
          </div>
        </div>
        <div class="ui-show-step3 step clearfix" ref="go4">
          <div class="show-left" :style="background1"></div>
          <div class="show-right">
            <div class="show-person">{{name2}}</div>
            <div :class="group2"></div>
          </div>
        </div>
        <div class="ui-show-step3 step clearfix" ref="go5">
          <div class="show-left" :style="background2"></div>
          <div class="show-right">
            <div class="show-person">{{name3}}</div>
            <div :class="group3"></div>
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
        <div style="height: 0.5rem"></div>
      </div>
      <div class="last-cen">
        <div class="ui-show-cen" @click="modalbox"  ref="go8" id="cen"></div>
        <div class="ui-show-alert" ref="alertBox">
          <div class="alert-title">提示：完成分享任务，可重新进群<br>（请分享到一个微信群）</div>
          <div class="alert-content">当前群人数<span>321</span>人</div>
          <div class="alert-btn" @click="toggles">好的</div>
        </div>
      </div>
    </div>
<!--    <div id="footer">iScroll</div>-->
    <div class="footerId" id="footerId">
      <span class="show-voice"></span>
      <span class="show-input"></span>
      <span class="show-smile"></span>
      <span class="show-plus"></span>
      <div class="footerCen"></div>
    </div>
  </div>
  <div v-else-if="step" id="process">
    <div id="wrapper" >
      <div id="scroller">
        <div class="box-one" v-if="step == 1"></div>
        <div class="box-two" v-if="step == 2"></div>
        <div class="box-three" v-if="step == 3"></div>
        <div class="box-four" v-if="step == 4"></div>
        <div class="box-five" v-if="step == 5"></div>
        <div class="ui-show-step5 process">
          <div class="ui-show-cen" @click="modalbox"></div>
          <div class="ui-show-alert" ref="alertBox">
            <!--<div class="ui-content">
              <div class="font-six">由于参与人数过多！<br>群主稍后拉你进群，请耐心等待</div>
              <div class="font-seven">朋友圈信息不可删除 <br><i>否则无法核实！</i></div>
            </div>-->
            <div v-html="words" class="ui-content"></div>
            <div class="alert-btn" @click="toggles">好的</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  @import '../assets/style/join.less';
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
        step : this.$route.query.step,
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
        group1:'',
        group2:'',
        group3:'',
        name1 : '',
        name2 : '',
        name3 : '',
      }
    },
    created(){
      console.log(this.step);
      let self = this;

      if(!this.step){
        //昵称
        let name = ["辞予","那一夜","床摇得厉害","你的呻吟","甜腻","强哥","七尺大乳","漂洋过海","用贞操换真钞","清晨的眼泪","孟老师","性感↗小娘们","孤寂","淫领风骚","小影","爱到深处て腿自开","无心","吻我杀我","林萌"];
        //头像
        let num = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16'];
        //背景图
        let sort = ['01', '02', '03', '04', '05', '06', '07', '08'];

        name = name.sort(function(){ return 0.5 - Math.random() });
        num = num.sort(function(){ return 0.5 - Math.random() });
        sort = sort.sort(function(){ return 0.5 - Math.random() });

        let sort1 = Math.floor((Math.random()*sort.length));
        sort.splice(sort1, 1);
        let sort2 = Math.floor((Math.random()*sort.length));
        sort.splice(sort2, 1);
        let sort3 = Math.floor((Math.random()*sort.length));
        sort.splice(sort3, 1);

        self.background1.backgroundImage = "url('http://working.ssmulu.com/avatar/avatar-"+num.splice(1, 1)[0]+".jpg')";
        self.background2.backgroundImage = "url('http://working.ssmulu.com/avatar/avatar-"+num.splice(1, 1)[0]+".jpg')";
        self.background3.backgroundImage = "url('http://working.ssmulu.com/avatar/avatar-"+num.splice(1, 1)[0]+".jpg')";
        self.background4.backgroundImage = "url('http://working.ssmulu.com/avatar/avatar-"+num.splice(1, 1)[0]+".jpg')";
        self.name1 = name.splice(1, 1)[0];
        self.name2 = name.splice(1, 1)[0];
        self.name3 = name.splice(1, 1)[0];
        self.name4 = name.splice(1, 1)[0];
        self.invitor = name.splice(1, 1)[0];
        self.group1 = "show-img-"+sort.splice(1, 1)[0];
        self.group2 = "show-img-"+sort.splice(1, 1)[0];
        self.group3 = "show-img-"+sort.splice(1, 1)[0];
        console.log(self.group1,self.group2,self.group3)
        self.getNowTime();
        let city = IpQuery.city,
          province = IpQuery.province,
          _str = '';

        if(city){
          _str = city.replace(/市/, '');
        }else{
          _str = province.replace(/省/, '');
        }
        this.city = _str;
      }else{
        this.getAlertBox();
      }

    },
    watch: {
      '$route' (to, from) {
        this.step = this.$route.query.step;
        this.getAlertBox();
        this.$refs.alertBox.style.display = 'block';
      }
    },
    methods:{
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
        self.$http.get("/emsTest/scan/Rule_b?id=5",{}).then(res => {
          window.location.href = res.data.url;
        });
      },
      //获取弹框
      //获取弹窗描述内容
      getAlertBox(){
        let self = this,
          step = self.step,
          _str = "";
        step = parseInt(step);
        switch (step) {
          case 1:
            _str = '<div class="font-one">分享成功 <i class="ui-color-red" style="font-weight: bold">✔</i></div><div class="font-two">请继续分享<i class="ui-color-red"> 1 </i>个不同的群</div><div class="font-three"><i class="ui-color-red">即可进群</i></div>';
            break;
          case 2:
            _str = '<div class="font-one">分享失败 <i class="ui-color-red" style="font-weight: bold">✘</i></div><div class="font-five">分享到相同的群或者个人会失败<br>请继续分享到<i class="ui-color-red"> 2 </i>个不同的群！</div><div class="font-six"><i class="ui-color-red">即可进群</i></div>';
            break;
          case 3:
            _str = '<div class="font-one">分享成功 <i class="ui-color-red" style="font-weight: bold">✔</i></div><div class="font-two">请继续分享到<i class="ui-color-red"> 1 </i>个不同的群！</div><div class="font-three"><i class="ui-color-red">即可进群</i></div>';
            break;
          case 4:
            _str = '<div class="font-seven"><i class="ui-color-red">分享完成</i></div><div class="font-eight">请分享到<i class="ui-color-red"> 朋友圈 </i>即可进群！</div>';
            break;
          case 5:
            _str = '<div class="font-one" style="font-weight: bold; color: red;" >注意 <i class="ui-color-red" >✘</i></div><div class="ui-color-red" style="margin-top: 0.4rem;">必须【公开】分享才可以进群</div><div class="font-four" style="margin-top: 0.2rem;">请分享到<i class="ui-color-red"> 朋友圈 </i>即可进群！</div>';
            break;
        }
        this.words = _str;
      }
    },
    mounted(){

      if(!this.step){

        //开始显示
        let i = 1;
        var s = setInterval(() => {
          let _obj = document.querySelector('#scroller div:nth-child('+i+')');
          if(_obj){
            _obj.style.display = 'block';
          }
          myScroll = new IScroll('#wrapper', { mouseWheel: true, click: true });
          if(i>5){
            myScroll.scrollTo(0,myScroll.maxScrollY-10);
          }
          i++;
          if(i == 10){
            let _obj1 = document.querySelector('.last-cen');
            let _obj2 = document.querySelector('.footerCen');
            if(_obj1){
              _obj1.style.display = 'block';
            }
            if(_obj2){
              _obj2.style.display = 'block';
            }
            clearInterval(s);
          }
        },500);

        let myScroll;

        loaded();
        function loaded () {
          myScroll = new IScroll('#wrapper', { mouseWheel: true,  click: true, taps:true });
        }
        document.addEventListener('touchmove', function (e) { e.preventDefault(); }, isPassive() ? {
          capture: false,
          passive: false
        } : false);


      }else{
        let myScroll;

        loaded();
        function loaded () {
          myScroll = new IScroll('#wrapper', { mouseWheel: true,  click: true, taps:true });
        }
        document.addEventListener('touchmove', function (e) { e.preventDefault(); }, isPassive() ? {
          capture: false,
          passive: false
        } : false);
      }


      let self = this,
        _url = window.location.href;
      //监听返回
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


    }
  }
</script>
