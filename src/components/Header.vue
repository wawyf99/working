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

    }
  }

</script>
<style>
  @import '../assets/style/header.less';
</style>
