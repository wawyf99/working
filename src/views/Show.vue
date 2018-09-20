<template>
  <div>
    <div class="show">
      <div class="ui-show-step1" ref="go1">{{now}}</div>
      <div class="ui-show-step2" ref="go2">"<span>亦柔</span>"邀请你加入了群聊，群聊参与人还有: 这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德哈卡烧烤、这是阿是会撒娇德</div>
      <div class="ui-show-step3 clearfix" ref="go3">
        <div class="show-left"></div>
        <div class="show-right">
          <div class="show-person">我们不一样</div>
          <div class="show-img-01"></div>
        </div>
      </div>
      <div class="ui-show-step3 clearfix" ref="go4">
        <div class="show-left"></div>
        <div class="show-right">
          <div class="show-person">我们不一样</div>
          <div class="show-img-02"></div>
        </div>
      </div>
      <div class="ui-show-step3 clearfix" ref="go5">
        <div class="show-left"></div>
        <div class="show-right">
          <div class="show-person">我们不一样</div>
          <div class="show-img-03"></div>
        </div>
      </div>
      <div class="ui-show-step3 clearfix" ref="go6">
        <div class="show-left"></div>
        <div class="show-right">
          <div class="show-person">我们不一样</div>
          <div class="show-text">
            这里是一段很啰嗦的废话，这里是一段很啰嗦的废话，这里是一段很啰嗦的废话，这里是一段很啰嗦的废话，这里是一段很啰嗦的废话，这里是一段很啰嗦的废话，这里是一段很啰嗦的废话。
          </div>
        </div>
      </div>
      <div class="ui-show-step4" ref="go7">
        你被"<span>群主</span>"移除群聊
      </div>
    </div>
  </div>

</template>
<style>
  @import '../assets/style/show.less';
</style>
<script>
  export default {
    name: 'Show',
    data () {
      return {
        now: ''
      }
    },
    created(){
      this.getNowTime();
      this.go();
    },
    methods:{
      getNowTime(){
        var myDate = new Date();
        var _minutes = '';

        if(myDate.getMinutes() < 10){
          _minutes = "0" + myDate.getMinutes();
        }else{
          _minutes = myDate.getMinutes();
        }

        var _time = myDate.getHours()+":"+ _minutes;
        this.now = _time;
      },
      go(){
        let self = this;
        var _i = 1;
        document.body.scrollTop = '10';
        var s = setInterval(() => {
          switch (_i) {
            case 1:
              self.$refs.go1.style.display = 'block';
              break;
            case 2:
              self.$refs.go2.style.display = 'block';
              break;
            case 3:
              self.$refs.go3.style.display = 'block';
              break;
            case 4:
              self.$refs.go4.style.display = 'block';
              break;
            case 5:
              self.$refs.go5.style.display = 'block';
              break;
            case 6:
              self.$refs.go6.style.display = 'block';
              break;
            case 7:
              self.$refs.go7.style.display = 'block';
              break;
            case 8:
              clearInterval(s);
              break;
          }
          _i ++;
          var _top = document.documentElement.scrollHeight || document.body.scrollHeight;
          //alert(_top);
          document.documentElement.scrollTop =  _top;
          document.body.scrollTop =  _top;
        },800)

      }
    }
  }
</script>
