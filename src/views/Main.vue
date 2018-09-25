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
    beforeRouteEnter(){
      this.getApi();
    },
    created() {

    },
    methods:{
      getApi(){
        let self = this;
        self.$http.post(global.url.chatGetTitle,{}).then(res => {
          if(res){
            this.title = res.title;
            this.enrollment = res.enrollment;
            this.invitor = res.invitor;
          }
        });
      },
      jumpFun(){
        window.location.href = 'http://www.baidu.com';
      }
    },
    mounted(){

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
