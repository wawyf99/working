<template>
  <div id="show">
    <div class="show">
      <div class="ui-show-step1 step" ref="go1">{{now}}</div>
      <div class="ui-show-step2 step" ref="go2">"<span>{{invitor}}</span>"邀请你加入了群聊，群聊参与人还有: 这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德</div>
      <div class="ui-show-step3 step clearfix" ref="go3">
        <div class="show-left"></div>
        <div class="show-right">
          <div class="show-person">我们不一样</div>
          <div class="show-img-01"></div>
        </div>
      </div>
      <div class="ui-show-step3 step clearfix" ref="go4">
        <div class="show-left"></div>
        <div class="show-right">
          <div class="show-person">我们不一样</div>
          <div class="show-img-02"></div>
        </div>
      </div>
      <div class="ui-show-step3 step clearfix" ref="go5">
        <div class="show-left"></div>
        <div class="show-right">
          <div class="show-person">我们不一样</div>
          <div class="show-img-03"></div>
        </div>
      </div>
      <div class="ui-show-step3 step clearfix" ref="go6">
        <div class="show-left"></div>
        <div class="show-right">
          <div class="show-person">我们不一样</div>
          <div class="show-text">
            这里是一段很啰嗦的废话，这里是一段很啰嗦的废话，这里是一段很啰嗦的废话，这里是一段很啰嗦的废话，这里是一段很啰嗦的废话，这里是一段很啰嗦的废话，这里是一段很啰嗦的废话。
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
  export default {
    name: 'Show',
    components: {
      Alert,
      XDialog
    },
    data () {
      return {
        now: '',
        invitor: '123'
      }
    },
    created(){
      this.getNowTime();
      this.go();
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
      //开始流程
      go(){
        let self = this;
        var _i = 1;
        var s = setInterval(() => {
          switch (_i) {
            case 1:
              self.$refs.go1.style.display = 'block';
              break;
            case 2:
              self.$refs.go2.style.display = 'block';
              break;
            case 3:
              self.$refs.go3.style.display = 'block';
              break;
            case 4:
              self.$refs.go4.style.display = 'block';
              break;
            case 5:
              self.$refs.go5.style.display = 'block';
              break;
            case 6:
              self.$refs.go6.style.display = 'block';
              break;
            case 7:
              self.$refs.go7.style.display = 'block';
              break;
            case 8:
              self.$refs.go8.style.display = 'block';

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
      },
      shareBtn:function () {
        let self = this;
        var _url = window.location.href;
        var u = navigator.userAgent;
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        if (isiOS) {
          _url = Global.appEntryUrl;
        }
        _url = _url.split('#');
        _url = _url[0];
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

      let agent = navigator.userAgent.toLowerCase();

      if (agent.match(/MicroMessenger/i) == "micromessenger") {
        self.shareBtn();
      }


    }
  }
</script>
