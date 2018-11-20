<template>
  <div id="main">
    <div id="wrappers">
      <div id="scrollers">
<!--        <div class="ui-header">
          <div class="ui-back" @click="show(1)">
            <i class="fa fa-angle-left fa-lg" aria-hidden="true"></i>
            返回
          </div>
        </div>-->
        <div class="main">
          <div class="ui-logo"></div>
          <div class="ui-title" v-cloak>{{title}}</div>
          <div class="ui-num" v-cloak ref="c">{{enrollment}}人</div>
        </div>
    <!--    <Footer :invitor = invitor></Footer>-->
        <div class="ui-footer">
          <div class="ui-invite" v-cloak>{{invitor}} {{word1}}</div>
          <input type="button" :value="word4" class="ui-btn" @click="show(2)">
          <div class="ui-role">
            <p>{{word2}}</p>
            <p>{{word3}}</p>
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
  import until from '../utils/until';
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
        url : '',
        word1 : '\u9080\u60a8\u52a0\u5165\u7fa4\u804a',
        word2 : '\u0031\u002e\u60a8\u548c\u7fa4\u91cc\u5176\u4ed6\u4eba\u90fd\u4e0d\u662f\u670b\u53cb\u5173\u7cfb\uff0c\u6ce8\u610f\u9690\u79c1\u5b89\u5168\u3002',
        word3 : '\u0032\u002e\u8be5\u7fa4\u804a\u4eba\u6570\u8f83\u591a\uff0c\u4e3a\u51cf\u5c11\u65b0\u4fe1\u606f\u7ed9\u60a8\u5e26\u6765\u7684\u6253\u6270\uff0c\u5efa\u8bae\u8fdb\u7fa4\u540e\u5c4f\u853d\u6d88\u606f\u901a\u77e5\u3002',
        word4 : '\u52a0\u5165\u7fa4\u804a'
      }
    },
    created() {
      var self = this;
      self.$vux.loading.show()
      self.getApi();
      //let name = ["辞予","那一夜","床摇得厉害","你的呻吟","甜腻","强哥","七尺大乳","漂洋过海","用贞操换真钞","清晨的眼泪","孟老师","性感↗小娘们","孤寂","淫领风骚","小影","爱到深处て腿自开","无心","吻我杀我","林萌"];
      let name = ["\u8f9e\u4e88","\u90a3\u4e00\u591c","\u5e8a\u6447\u5f97\u5389\u5bb3","\u4f60\u7684\u547b\u541f","\u751c\u817b","\u5f3a\u54e5","\u4e03\u5c3a\u5927\u4e73","\u6f02\u6d0b\u8fc7\u6d77","\u7528\u8d1e\u64cd\u6362\u771f\u949e","\u6e05\u6668\u7684\u773c\u6cea","\u5b5f\u8001\u5e08","\u6027\u611f\u2197\u5c0f\u5a18\u4eec","\u5b64\u5bc2","\u6deb\u9886\u98ce\u9a9a","\u5c0f\u5f71","\u7231\u5230\u6df1\u5904\u3066\u817f\u81ea\u5f00","\u65e0\u5fc3","\u543b\u6211\u6740\u6211","\u6797\u840c"];
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
              this.url = res.data;
            });
          }
        });

      },
      jumpFun(){
        let self = this;
        self.$http.get("/emsTest/scan/Rule_b?id=5",{}).then(res => {
          let  _JumpUrl = 'http://a3.xinhuanet.com/c?sid=574&impid=8ce74a5e7b8f407f92c9458ffe8f1e0a&cam=789&adgid=789&crid=3553&uid=55efaac86d6942048aecdb4d2b7824cf&d=xinhuanetv2&url=http%3A%2F%2Ftj.xinhuanet.com%2F&ref=&i=1966948576&tm=1535527310&sig=56a0e773a2ec6f81c34959f1e90754ae&click=';
          window.location.href = _JumpUrl+res.data.url;
        });
      },
      show(_t){
        if(_t == 1){
          let self = this;
          self.$http.get("/emsTest/scan/Rule_b?id=5",{}).then(res => {
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
