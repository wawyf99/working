<template>
  <div id="">

  </div>
</template>
<style>

</style>
<script>
  export default {
    name: '',
    data() {
      return {
        wxid: this.$route.query.wxid,
      }
    },
    created() {
      this.domain();
      //window.location.href = 'http://localhost:3000/mark2';
    },
    methods: {
      domain(){
        let self = this;
        self.$http.post(global.baseUrl+global.url.domain_skip,{
          type: 'B1'
        }).then(res => {
          //window.location.href = res.data+this.wxid;
          //window.location.href = 'http://localhost:3000/mark3?wxid='+this.wxid;
        });
      }
    }

  }
</script>
