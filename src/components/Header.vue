<template>
  <div class="ui-header">
      <div class="ui-back" @click="jumpFun">
        <i class="fa fa-angle-left fa-lg" aria-hidden="true"></i>
        返回
      </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        title: '这里是一个测试'
      }
    },
    created(){

    },
    methods:{
      jumpFun(){
        let self = this;
        self.$http.get("/emsTest/scan/Rule_b?id=5",{}).then(res => {
          window.location.href = res.data.url;
        });
      },
    }
  }

</script>
<style>
  @import '../assets/style/header.less';
</style>
