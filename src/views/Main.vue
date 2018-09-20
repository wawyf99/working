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

    },
    mounted(){

/*      var overscroll = function(el) {
        el.addEventListener('touchstart', function() {
          var top = el.scrollTop
            , totalScroll = el.scrollHeight
            , currentScroll = top + el.offsetHeight
          //If we're at the top or the bottom of the containers
          //scroll, push up or down one pixel.
          //
          //this prevents the scroll from "passing through" to
          //the body.
          if(top === 0) {
            el.scrollTop = 1
            document.documentElement.scrollTop =  1;
            document.body.scrollTop =  1;
          } else if(currentScroll === totalScroll) {
            alert(3)
            el.scrollTop =  top - 1;
            document.documentElement.scrollTop =  top - 1;
            document.body.scrollTop =  top - 1;
          }
        })
        el.addEventListener('touchmove', function(evt) {
          //if the content is actually scrollable, i.e. the content is long enough
          //that scrolling can occur
          if(el.offsetHeight < el.scrollHeight)
            alert(4);
            evt._isScroller = true
        })
      }*/
      overscroll(document.getElementById('app'));

        document.body.addEventListener('touchmove', function(evt) {
          //In this case, the default behavior is scrolling the body, which
          //would result in an overflow.  Since we don't want that, we preventDefault.
          if(!evt._isScroller) {
            evt.preventDefault()
          }
        })
    }
  }
</script>
