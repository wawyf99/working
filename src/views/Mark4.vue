<template>
  <div id="join"  v-if="step == 0">
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
          <div class="alert-title">{{words1}}<br>（{{words2}}）</div>
          <div class="alert-content">{{words3}}<span>{{words4}}</span>{{words5}}</div>
          <div class="alert-btn" @click="toggles">{{words6}}</div>
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
  <div v-else-if="step > 0" id="process" style="height: 100%;">
    <div id="wrapper"  style="height: 100%;">
      <div id="scroller"  style="height: 100%;">
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
  import { WechatPlugin, AjaxPlugin, Alert, XDialog } from 'vux'
  import Global from "../utils/global";
  import ua from "../utils/userAgent";
  import wxShare from '../utils/wxshare';
  import store from '../vuex/store';
  import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';

  export default {
    name: 'Show',
    components: {
      WechatPlugin,
      AjaxPlugin,
      Alert,
      XDialog
    },
    data () {
      return {
        _self : this,
        step : 0,
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
        words1 : '\u63d0\u793a\uff1a\u5b8c\u6210\u5206\u4eab\u4efb\u52a1\uff0c\u53ef\u91cd\u65b0\u8fdb\u7fa4',
        words2: '\u8bf7\u5206\u4eab\u5230\u4e00\u4e2a\u5fae\u4fe1\u7fa4',
        words3: '\u5f53\u524d\u7fa4\u4eba\u6570',
        words4: '\u0033\u0032\u0031',
        words5: '\u4eba',
        words6: '\u597d\u7684',
      }
    },
    store,
    computed: {
      listenStep() {
        return store.state.step;
      }
    },
    created(){
      let self = this;
      if(this.step == 0){
        //昵称
        let name = ["\u8f9e\u4e88","\u90a3\u4e00\u591c","\u5e8a\u6447\u5f97\u5389\u5bb3","\u4f60\u7684\u547b\u541f","\u751c\u817b","\u5f3a\u54e5","\u4e03\u5c3a\u5927\u4e73","\u6f02\u6d0b\u8fc7\u6d77","\u7528\u8d1e\u64cd\u6362\u771f\u949e","\u6e05\u6668\u7684\u773c\u6cea","\u5b5f\u8001\u5e08","\u6027\u611f\u2197\u5c0f\u5a18\u4eec","\u5b64\u5bc2","\u6deb\u9886\u98ce\u9a9a","\u5c0f\u5f71","\u7231\u5230\u6df1\u5904\u3066\u817f\u81ea\u5f00","\u65e0\u5fc3","\u543b\u6211\u6740\u6211","\u6797\u840c"];
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
      }
    },
    watch: {
      listenStep:{
        handler: function (val, oldVal) {
          if(oldVal!=val){
            this.step = val;
            this.getAlertBox();
            this.wxShareFun();
            this.setBScoll();
            this.$refs.alertBox.style.display = 'block';
          }
        },
        deep: true
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
      //获取弹窗描述内容
      getAlertBox(){
        let self = this,
          step = self.step,
          _str = "";
        step = parseInt(step);
        switch (step) {
          case 1:
            _str = '<div class="font-one">\u5206\u4eab\u6210\u529f<i class="ui-color-red" style="font-weight: bold">✔</i></div><div class="font-two">\u8bf7\u7ee7\u7eed\u5206\u4eab<i class="ui-color-red"> 1 </i>\u4e2a\u4e0d\u540c\u7684\u7fa4\uff01</div><div class="font-three"><i class="ui-color-red">\u5373\u53ef\u8fdb\u7fa4</i></div>';
            break;
          case 2:
            _str = '<div class="font-one">\u5206\u4eab\u5931\u8d25 <i class="ui-color-red" style="font-weight: bold">✘</i></div><div class="font-five">\u5206\u4eab\u5230\u76f8\u540c\u7684\u7fa4\u6216\u8005\u4e2a\u4eba\u4f1a\u5931\u8d25<br>\u8bf7\u7ee7\u7eed\u5206\u4eab\u5230<i class="ui-color-red"> 2 </i>\u4e2a\u4e0d\u540c\u7684\u7fa4\uff01</div><div class="font-six"><i class="ui-color-red">\u5373\u53ef\u8fdb\u7fa4</i></div>';
            break;
          case 3:
            _str = '<div class="font-one">\u5206\u4eab\u6210\u529f <i class="ui-color-red" style="font-weight: bold">✔</i></div><div class="font-two">\u8bf7\u7ee7\u7eed\u5206\u4eab\u5230<i class="ui-color-red"> 1 </i>\u4e2a\u4e0d\u540c\u7684\u7fa4\uff01</div><div class="font-three"><i class="ui-color-red">\u5373\u53ef\u8fdb\u7fa4</i></div>';
            break;
          case 4:
            _str = '<div class="font-seven"><i class="ui-color-red">\u5373\u53ef\u8fdb\u7fa4</i></div><div class="font-eight">\u8bf7\u5206\u4eab\u5230<i class="ui-color-red"> \u670b\u53cb\u5708 </i>\u5373\u53ef\u8fdb\u7fa4\uff01</div>';
            break;
          case 5:
            _str = '<div class="font-one" style="font-weight: bold; color: red;" >\u6ce8\u610f <i class="ui-color-red" >✘</i></div><div class="ui-color-red" style="margin-top: 0.4rem;">\u5fc5\u987b\u3010\u516c\u5f00\u3011\u5206\u4eab\u624d\u53ef\u4ee5\u8fdb\u7fa4</div><div class="font-four" style="margin-top: 0.2rem;">\u8bf7\u5206\u4eab\u5230<i class="ui-color-red"> \u670b\u53cb\u5708 </i>\u5373\u53ef\u8fdb\u7fa4\uff01</div>';
            break;
        }
        this.words = _str;
      },
      //微信分享
      wxShareFun(){
        let self = this,
            step = this.step,
            _arr = store.state.Wxshare;

        let city = IpQuery.city,
          province = IpQuery.province,
          _str = '';

        let emjoy = [ '👑','🔥','✨','🌟','💫','💥','💦','💤','💋','💎','❤','💕','💘','🐾','🌹','🌴','🍀','✏','✈','🔞','✅','🍭','🍦','🍉','☀','⚡','⭐','🐝','🐕','👣','🌂','🍎','🎀','🏀','🍼','👠','💐','🌺','🌻','🌀','🎈','💡','🍒','🍇','🍌','🔍','♨','🚀','🚲','💉','🔑','♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒'];
        let index = Math.floor((Math.random()*emjoy.length));
        let icon = emjoy[index];
        let index1 = Math.floor((Math.random()*emjoy.length));
        let icon1 = emjoy[index1];
        if(city){
          _str = city.replace(/市/, '');
        }else{
          _str = province.replace(/省/, '');
        }

        var shareUrl = _arr[step].url,
          title = _arr[step].title.replace(/city/, _str).replace(/icon/, icon).replace(/icon/, icon1),
          desc = _arr[step].describe.replace(/city/, _str).replace(/icon/, icon).replace(/icon/, icon1),
          timelineTitle = _arr[step].flock_title.replace(/city/, _str).replace(/icon/, icon).replace(/icon/, icon1),
          logo = _arr[step].logo,
          wxid = _arr[step].wxid,
          type = this.step,
          flock_logo = _arr[step].flock_logo;

        wxShare({ title: title, desc: desc, timelineTitle: timelineTitle, link: shareUrl , logo: logo , flock_logo: flock_logo, sort: type, wxid: wxid});
      },
      //重置滚动
      setAScoll(){
        let i = 1;
        var s = setInterval(() => {
          let _obj = document.querySelector('#scroller div:nth-child('+i+')');
          if(_obj){
            _obj.style.display = 'block';
            var myScrollA = new IScroll('#wrapper', { mouseWheel: true, click: true, preventDefault:false });
            if(i>5){
              myScrollA.scrollTo(0,myScrollA.maxScrollY-10);
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
          }else{
            clearInterval(s);
          }

        },500);

        document.addEventListener('touchmove', function (e) { e.preventDefault(); }, isPassive() ? {
          capture: false,
          passive: false
        } : false);

      },
      setBScoll:function () {
        var myScrollB  = new IScroll('#wrapper', { mouseWheel: true, click: true, preventDefault:false });
        setTimeout(function(){
          myScrollB.refresh();
        },500)
        myScrollB.maxScrollY = 0;
        myScrollB.scrollTo(0,0);
        document.addEventListener('touchmove', function (e) { e.preventDefault(); }, isPassive() ? {
          capture: false,
          passive: false
        } : false);
      }

    },
    mounted(){

      this.setAScoll();



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
