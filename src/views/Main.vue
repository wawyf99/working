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

      window.addEventListener("popstate", function(e) {
// pushHistory();
        alert("我监听到了浏览器的返回按钮事件啦");//根据自己的需求实现自己的功能
      }, false);

      window.document.oncontextmenu = function (e) {
        e.preventDefault();
      };

      var startX = 0, startY = 0;

      function touchStart(e) {
        try {
          var touch = e.touches[0],
            x = Number(touch.pageX),
            y = Number(touch.pageY);
          startX = x;
          startY = y;
        } catch (e) {
          alert(e);
        }
      }

      document.addEventListener('touchstart', touchStart);
      var ele = document.getElementById('main');
      ele.ontouchmove = function (e) {
        var point = e.touches[0],
          eleTop = ele.scrollTop,
          eleScrollHeight = ele.scrollHeight,
          eleOffsetHeight = ele.offsetHeight,
          eleTouchBottom = eleScrollHeight - eleOffsetHeight;
        if (eleTop === 0) {
          if (point.clientY > startY) {
            e.preventDefault();
          }
        }
        else if (eleTop === eleTouchBottom) {
          if (point.clientY < startY) {
            e.preventDefault()
          }
        }
      };

    }
  }
</script>
