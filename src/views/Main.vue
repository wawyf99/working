<template>
  <div id="main">
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
    created() {

    },
    mounted(){


      document.getElementById('main').addEventListener('touchmove', function(evt) {
          //In this case, the default behavior is scrolling the body, which
          //would result in an overflow.  Since we don't want that, we preventDefault.
          if(!evt._isScroller) {
            evt.preventDefault()
          }
      })

    }
  }
</script>
