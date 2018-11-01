<template>
  <div id="Process">
    <div class="box-one" v-if="step == 1"></div>
    <div class="box-two" v-else-if="step == 2"></div>
    <div class="box-three" v-else-if="step == 3"></div>
    <div class="box-four" v-else-if="step == 4"></div>
    <div class="box-five" v-else-if="step == 5"></div>
  </div>

</template>
<style>
  .box-one{
    background: url("../assets/image/shareback/1.jpg") 0 0 no-repeat scroll transparent;
    background-size:100% 100%;
    width: 100%;
    height: auto;
    min-height: 100%;
  }
  .box-two{
    background: url("../assets/image/shareback/2.jpg") no-repeat;
    width: 100%;
    height: 13.34rem;
    background-size: contain;
  }
  .box-three{
    background: url("../assets/image/shareback/3.jpg") no-repeat;
    width: 100%;
    height: 13.34rem;
    background-size: contain;
  }
  .box-four{
    background: url("../assets/image/shareback/4.jpg") no-repeat;
    width: 100%;
    height: 13.34rem;
    background-size: contain;
  }
  .box-five{
    background: url("../assets/image/shareback/5.jpg") no-repeat;
    width: 100%;
    height: 13.34rem;
    background-size: contain;
  }
</style>
<script>
  import wxShare from '../utils/wxshare';
  export default {
    name: 'Process',
    data () {
      return {
        step: this.$route.query.step,
      }
    },
    created() {
      wxShare({ title: '444', desc: '555', link: 'http://working.rzzc.ltd/?wxid=1', logo: ''});
    },
    watch: {
      '$route' (to, from) {
        location = location;
      }
    },
    methods:{
      jumpFun(){
        window.location.href = 'http://www.baidu.com';
      },
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
