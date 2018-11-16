<template>
    <div>
      <h1>{{msg}}</h1><hr>
      <h1>{{count}}</h1>
      <p>
        <button @click="$store.commit('add',10)">+</button>
        <button @click="reduce">-</button>
      </p>
      <p>
        <button @click="addAction">+</button>
        <button @click="reduceAction">-</button>
      </p>
    </div>
</template>

<script>
  import store from '../vuex/store';
  import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';
    export default {
      name: "count",
      data(){
        return{
          msg : 'Hello Wolrd !'
        }
      },
      /*computed:{
        count(){
          return this.$store.state.count;
        }
      },*/
      /*computed:mapState({
        count:function (state) {
          return state.count
        }
      }),*/
      computed:{
        ...mapState(['count']),
        /*count(){

          return this.$store.getters.count;
        }*/
        //...mapGetters(['count']),
      },

      //methods:mapMutations(['add','reduce']),
      methods:{
        ...mapMutations(['add','reduce']),
        ...mapActions(['addAction','reduceAction']),
      },
      //computed:mapState(['count']),
      store



    }
</script>

<style scoped>

</style>
