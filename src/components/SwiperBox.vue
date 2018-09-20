<template>
  <swiper :options="swiperOption" ref="mySwiper" class="swiperBox">
    <!-- slides -->
    <swiper-slide class="one"></swiper-slide>
    <swiper-slide class="two"></swiper-slide>
    <swiper-slide class="three"></swiper-slide>
    <swiper-slide class="four"></swiper-slide>
    <swiper-slide class="five"></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
  </swiper>
</template>
<style>
  .swiperBox{

  }
  .swiper-button-next, .swiper-button-prev{
    background-size: 40% !important;
  }
  .swiperBox .one{
    background: url("../assets/image/3.jpg") no-repeat;
    background-size: 100%;
    width: 100%;
    height: 3.6rem;
  }
  .swiperBox .two{
    background: url("../assets/image/2.jpg") no-repeat;
    background-size: 100%;
    width: 100%;
    height: 3.6rem;
  }
  .swiperBox .three{
    background: url("../assets/image/1.jpg") no-repeat;
    background-size: 100%;
    width: 100%;
    height: 3.6rem;
  }
  .swiperBox .four{
    background: url("../assets/image/4.jpg") no-repeat;
    background-size: 100%;
    width: 100%;
    height: 3.6rem;
  }
  .swiperBox .five{
    background: url("../assets/image/5.jpg") no-repeat;
    background-size: 100%;
    width: 100%;
    height: 3.6rem;
  }
</style>
<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          notNextTick: true,
          loop: true,
          autoplay: {
            delay: 3000,//1秒切换一次
          },
          setWrapperSize :true,
          observeParents:true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            hideOnClick: true,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            clickableClass : 'swiper-pagination',
          },
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      console.log('mounted');
    }
  }
</script>
