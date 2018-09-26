<template>

</template>
<script>
  export default {
    data () {
      return {
      }
    },
    created(){
      let agent = navigator.userAgent.toLowerCase();
      if (agent.match(/MicroMessenger/i) == "micromessenger") {
        this.share();
      }
    },
    methods:{
      share:function () {
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
    }
  }

</script>
<style>
  @import '../assets/style/header.less';
</style>
