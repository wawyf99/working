<template>
  <iscroll-view ref="scrollView" class="scroll-view join" id="join" :options="{mouseWheel:true}">
    <div class="section" id="section">
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>
      <div>1111111</div>

    </div>
    <div class="footer"></div>
  </iscroll-view>

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
        uaSort: {
          webkitOverflowScrolling: '',
        },
        now: '',
        invitor: '',
        shareUrl: '',
        wxid : this.$route.query.wxid,
        city : '',
        background1:{
          backgroundImage: '',
          backgroundRepeat: 'no-repeat',
        },
        background2:{
          backgroundImage: '',
          backgroundRepeat: 'no-repeat',
        },
        background3:{
          backgroundImage: '',
          backgroundRepeat: 'no-repeat',
        },
        background4:{
          backgroundImage: '',
          backgroundRepeat: 'no-repeat',
        },
        name1 : '',
        name2 : '',
        name3 : '',
      }
    },
    created(){

      //document.getElementById('section').style.height = _h+"px";
    },
    methods:{

    },
    mounted(){
      this.$refs.scrollView.refresh();
      var _h = document.getElementById('join').clientHeight;
      console.log(_h);
      document.getElementById('section').style.height = _h+"px";
    }
  }
</script>
