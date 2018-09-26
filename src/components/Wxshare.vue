<template>
</template>
<script>
 // import Global from '../utils/global'
  export default {
    data () {
      return {
      }
    },
    created(){
      let self = this;
      let agent = navigator.userAgent.toLowerCase();

      if (agent.match(/MicroMessenger/i) == "micromessenger") {
        self.shareBtn();
      }
    },
    methods:{
      shareBtn:function () {
        let self = this;
        var _url = global.wxUrl;
        var u = navigator.userAgent;
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        if (isiOS) {
          _url = global.appEntryUrl;
        }
        self.$http.get(global.url.wx_share, {
          url : _url
        }).then(res => {
          self.wxShare(res);
        });
      }
    },
    mounted(){


    }
  }

</script>
<style>

</style>
