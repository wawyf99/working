<template>
  <div id="Process">
    <div id="ProcessDiv" class="box-one" v-if="step == 1"></div>
    <div id="ProcessDiv" class="box-two" v-else-if="step == 2"></div>
    <div id="ProcessDiv" class="box-three" v-else-if="step == 3"></div>
    <div id="ProcessDiv" class="box-four" v-else-if="step == 4"></div>
    <div id="ProcessDiv" class="box-five" v-else-if="step == 5"></div>
  </div>

</template>
<style>
  .box-one{
    background: url("../assets/image/shareback/1.jpg") no-repeat;
    width: 100%;
    min-height: 13.34rem;
    height: 100%;
    background-size: cover;
  }
  .box-two{
    background: url("../assets/image/shareback/2.jpg") no-repeat;
    width: 100%;
    min-height: 13.34rem;
    height: 100%;
    background-size: cover;
  }
  .box-three{
    background: url("../assets/image/shareback/3.jpg") no-repeat;
    width: 100%;
    min-height: 13.34rem;
    height: 100%;
    background-size: cover;
  }
  .box-four{
    background: url("../assets/image/shareback/4.jpg") no-repeat;
    width: 100%;
    min-height: 13.34rem;
    height: 100%;
    background-size: cover;
  }
  .box-five{
    background: url("../assets/image/shareback/5.jpg") no-repeat;
    width: 100%;
    min-height: 13.34rem;
    height: 100%;
    background-size: cover;
  }
</style>
<script>
  import wxShare from '../utils/wxshare';
  export default {
    name: 'Process',
    data () {
      return {
        step: this.$route.query.step,
        wxid: this.$route.query.wxid,
      }
    },
    created() {
      let self = this;
      self.$http.post(global.baseUrl+global.url.get_wx_share,{}).then(res => {
        this.shareUrl = res.data
        var shareUrl = this.shareUrl+this.wxid;
        wxShare({ title: '444', desc: '555', link: shareUrl , logo: ''});
      });
    },
    watch: {
      '$route' (to, from) {
        this.step = this.$route.query.step;
      }
    },
    methods:{
      jumpFun(){
        window.location.href = 'http://www.baidu.com';
      },
      //获取A域名
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
      var ele = document.getElementById('Process');
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

      var _h = document.documentElement.clientHeight;
      document.getElementById('Process').style.height = _h + 'px';

    }
  }
</script>
