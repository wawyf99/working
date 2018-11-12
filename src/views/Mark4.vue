<template>
  <div id="join">
    <div class="section" id="section">
      1
      2
      3
      4
      5
      6
      7
      8
    </div>
    <div class="footer">
      <span class="show-voice"></span>
      <span class="show-input"></span>
      <span class="show-smile"></span>
      <span class="show-plus"></span>
    </div>
    <div class="joinCen"></div>

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
        name3 : '',
      }
    },
    created(){
      var $container = document.querySelector('.section');
      var $button = document.querySelector('.footer');
      $container.style.height = (document.documentElement.clientHeight - $button.clientHeight) + 'px';
      var myScroll = new IScroll('#section', {
        mouseWheel: true,
        scrollbars: true
      });
    },
    methods:{
      go(){
        let self = this;
        var _i = 1;
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
              document.getElementById('footerId').style.position = 'fixed';
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
      var ele = document.getElementById('join');

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
