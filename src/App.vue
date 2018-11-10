<template>
  <div id="app" :style="uaSort">
    <router-view/>
  </div>
</template>

<script>
  import ua from "./utils/userAgent";
export default {
  name: 'App',
  data () {
    return {
      uaSort: {
        webkitOverflowScrolling: '',
      },}
    },
  created(){
    if(ua.versions.android){
      this.uaSort.webkitOverflowScrolling = 'touch';
    }
  }
}
</script>


<style lang="less" scoped="" type="text/css">

</style>
