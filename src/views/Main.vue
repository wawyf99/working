<template>
  <div id="main">
    <Header></Header>
    <div class="main">
      <div class="ui-logo"></div>
      <div class="ui-title" v-cloak>{{title}}</div>
      <div class="ui-num" v-cloak>{{enrollment}}人</div>
    </div>
    <Footer :invitor = invitor></Footer>
  </div>

</template>
<style>
  @import '../assets/style/main.less';
</style>
<script>
  import Global from "../utils/global";
  import Header from "../components/Header";
  import Footer from "../components/Footer";
  export default {
    components: {Header, Footer},
    name: 'Main',
    data () {
      return {
        title: '*',
        enrollment: '*',
        invitor : '*',
      }
    },
    beforeRouteEnter(to, from, next){
      next(vm=>{
        //vm.num=19;
        /*vm.$http.post(global.url.chatGetTitle,{}).then(res => {
          if(res){
            vm.title = res.title;
            vm.enrollment = res.enrollment;
            vm.invitor = res.invitor;
          }
        });*/
      })
    },
    created() {
      this.$vux.loading.show()
      this.getApi();
    },
    methods:{
      getApi(){
        let self = this;

        self.$http.post(global.url.chatGetTitle,{}).then(res => {
          if(res){
            self.$vux.loading.hide()
            this.title = res.title;
            this.enrollment = res.enrollment;
            this.invitor = res.invitor;
          }
        });
      },
      jumpFun(){
        window.location.href = 'http://www.baidu.com';
      },
      shareBtn:function () {
        let self = this;
        var _url = document.domain;
        console.log(_url);
        var u = navigator.userAgent;
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        if (isiOS) {
          _url = Global.appEntryUrl;
        }
        alert(_url);
        self.$http.get(global.url.wx_share, {
          url : _url
        }).then(res => {
          self.wxShare(res);
        });
      }
    },
    mounted(){

      let self = this,
          _url = window.location.href;

      var agent = navigator.userAgent.toLowerCase();
      //console.log(agent);
      if (agent.match(/MicroMessenger/i) == "micromessenger") {
        self.shareBtn();
      }

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


      //禁止右键
      window.document.oncontextmenu = function (e) {
        e.preventDefault();
      };

      //禁止下拉
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
      var ele = document.getElementById('main');
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
