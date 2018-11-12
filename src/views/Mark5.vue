<template>
  <div id="Process">
    <div id="ProcessDiv" class="box-one" v-if="step == 1"></div>
    <div id="ProcessDiv" class="box-two" v-else-if="step == 2"></div>
    <div id="ProcessDiv" class="box-three" v-else-if="step == 3"></div>
    <div id="ProcessDiv" class="box-four" v-else-if="step == 4"></div>
    <div id="ProcessDiv" class="box-five" v-else-if="step == 5"></div>
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

</template>
<style>
  @import '../assets/style/show.less';
  .box-one{
    background: url("../assets/image/shareback/1.jpg") no-repeat;
    width: 100%;
    min-height: 13.34rem;
    height: 100%;
    background-size: cover;
  }
  #Process .ui-show-cen{
    opacity: 0;
    background: none !important;
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
  import { Alert, XDialog } from 'vux'
  export default {
    name: 'Process',
    components: {
      Alert,
      XDialog
    },
    data () {
      return {
        step: this.$route.query.step,
        wxid: this.$route.query.wxid,
        words:'',
      }
    },
    created() {
      this.getAlertBox();
    },
    watch: {
      '$route' (to, from) {
        this.step = this.$route.query.step;
        this.getAlertBox();
        this.$refs.alertBox.style.display = 'block';
      }
    },
    methods:{
      jumpFun(){
        let self = this;
        self.$http.get("/emsTest/index/adv/AinterfaceS",{}).then(res => {
          window.location.href = res.data.url;
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
                _str = '<div class="font-one">分享失败 <i class="ui-color-red" style="font-weight: bold">✘</i></div><div class="font-two">分享到相同的群或者个人会失败<br>请继续分享到<i class="ui-color-red"> 2 </i>个不同的群！</div><div class="font-three"><i class="ui-color-red">即可进群</i></div>';
                break;
              case 3:
                _str = '<div class="font-one">分享成功 <i class="ui-color-red" style="font-weight: bold">✔</i></div><div class="font-two">请继续分享到<i class="ui-color-red"> 1 </i>个不同的群！</div><div class="font-three"><i class="ui-color-red">即可进群</i></div>';
                break;
              case 4:
                _str = '<div class="font-one"><i class="ui-color-red">分享完成</i></div><div class="font-four">请分享到<i class="ui-color-red"> 朋友圈 </i>即可进群！</div>';
                break;
              case 5:
                _str = '<div class="font-one" style="font-weight: bold; color: red;" >注意 <i class="ui-color-red" >✘</i></div><div class="ui-color-red" style="margin-top: 0.2rem;">必须【公开】分享才可以进群</div><div class="font-four" style="margin-top: 0.2rem;">请分享到<i class="ui-color-red"> 朋友圈 </i>即可进群！</div>';
                break;
            }
            this.words = _str;
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
