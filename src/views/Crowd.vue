<template>
  <div id="">
    <div class="">
      12345678
    </div>
  </div>

</template>
<style>
  @import '../assets/style/show.less';
</style>
<script>
  export default {
    name: '',
    data() {
      return {
        now: '',
        invitor: this.$route.query.invitor,
        url: ''
      }
    },
    created() {

    },
    method: {
      getApi(){
        let self = this;
        self.$http.post(global.url.chatGetTitle,{}).then(res => {
          console.log(res);
        });
      }
    },
    methods:{
      getApis(){
        let self = this;
        self.$http.post(global.url.chatGetTitle,{}).then(res => {
          console.log(res);
        });
      }
    },
    mounted(){
      this.getApis();
      console.log(this);
    }

  }
</script>
