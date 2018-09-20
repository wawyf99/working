<template>
  <div>
    <Header></Header>
    <div class="main">
      <div class="ui-logo"></div>
      <div class="ui-title">再测试一遍</div>
      <div class="ui-num">352人</div>
    </div>
    <Footer></Footer>
  </div>

</template>
<style>
  @import '../assets/style/main.less';
</style>
<script>
  import Header from "../components/Header";
  import Footer from "../components/Footer";
  export default {
    components: {Header, Footer},
    name: 'Main',
    data () {
      return {
        msg: ''
      }
    },
    created(){
      document.querySelector('body').addEventListener('touchstart',function (ev) {
        event.preventDefault();
      })
/*      documentElement.clientHeight.style.height = "100%";
      documentElement.body.style.height = "100%";
      document.getElementById("app").style.height = "100%";*/
    }
  }
</script>
