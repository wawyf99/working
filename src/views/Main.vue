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
    created() {

      var wrapper = document.getElementById( 'app' );
      var touchstartY;

      wrapper.addEventListener( 'touchstart', function (ev) {
        var events = ev.touches[ 0 ] || ev;
        touchstartY = events.clientY;
      }, false );

      wrapper.addEventListener( 'touchmove', function (ev) {
        var events = ev.touches[ 0 ] || ev;
        var scrollTop = wrapper.scrollTop;
        var	offsetHeight = wrapper.offsetHeight;
        var	scrollHeight = wrapper.scrollHeight;
        if ( events.clientY > touchstartY && (wrapper.scrollTop === 0) ) {
          // 下拉时并且页面已经到顶部时
          ev.preventDefault();
        } else if ( events.clientY < touchstartY && (scrollTop + offsetHeight >= scrollHeight) ) {
          // 上拉时并且页面已经到底部时
          ev.preventDefault();
        }
      }, false );

    }
  }
</script>
