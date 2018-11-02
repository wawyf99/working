<template>
  <div id="main">
    <Header></Header>
    <div class="main">
      <div class="ui-logo"></div>
      <div class="ui-title" v-cloak>{{title}}</div>
      <div class="ui-num" v-cloak ref="c">{{enrollment}}人</div>
    </div>
<!--    <Footer :invitor = invitor></Footer>-->
    <div class="ui-footer">
      <div class="ui-invite" v-cloak>{{invitor}}邀请你加入群聊</div>
      <input type="button" value="加入群聊" class="ui-btn" @click="show">
      <div class="ui-role">
        <p>1.您和群里其他人都不是朋友关系，请注意隐私安全。</p>
        <p>2.该群聊人数较多，为减少新信息给您带来的打扰，建议进群后屏蔽消息通知。</p>
      </div>
    </div>
  </div>


</template>
<style>
  @import '../assets/style/main.less';
</style>
<script>
  import Header from "../components/Header";
  //import Footer from "../components/Footer";
  //import Global from "../utils/global";
  export default {
    components: {Header},
    name: 'Main',
    data () {
      return {
        title: '*',
        enrollment: '*',
        invitor : '*',
        wxid : this.$route.query.wxid,
        url : ''
      }
    },
    created() {

      var self = this;
      self.$vux.loading.show()
      self.getApi();
    },
    methods:{
      getApi(){
        let self = this;
        self.$http.post(global.baseUrl+global.url.chatGetTitle,{}).then(res => {
          if(res.status){
            self.$vux.loading.hide()
            self.title = res.data.title;
            self.enrollment = res.data.enrollment;
            self.invitor = res.data.invitor;

            self.$http.post(global.baseUrl+global.url.domain_skip,{
              type: 'C1'
            }).then(res => {
              //window.location.href = res.data+this.wxid;
              this.url = 'http://localhost:3000/mark4?wxid='+this.wxid+'&invitor='+this.invitor;
            });
          }
        });

      },
      jumpFun(){
        window.location.href = 'http://www.baidu.com';
      },
      show(){
       // let self = this;
        //self.$router.push({path: '/show',query :{wxid: this.wxid, invitor:this.invitor}});
        window.location.href = this.url;
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
