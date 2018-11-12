<template>
  <iscroll-view ref="scrollView" class="scroll-view" @pullUp="pullUp" @pullDown="pullDown" :options="{mouseWheel:true}">
    <h1>测试</h1>
    <h1>测试</h1>
    <h1>测试</h1>
    <h1>测试</h1>
    <h1>测试</h1>
    <h1>测试</h1>
    <h1>测试</h1>
    <h1>测试</h1>
    <h1>测试</h1>
    <h1>测试</h1>
    <h1>测试</h1>
    <h1>测试</h1>
    <h1>测试</h1>
    <h1>测试</h1>
    <h1>测试</h1>
    <h1>测试</h1>
    <h1>测试</h1>
    <h1>测试</h1>
    <p>1234567890</p>
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
        name3 : '',
      }
    },
    created(){

    },
    methods:{
      pullUp(){
        console.log(1);
      },
      pullDown(){
        console.log(2);
      }
    },
    mounted(){
      this.$refs.scrollView.refresh()
    }
  }
</script>
