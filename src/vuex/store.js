import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

//状态
const state = {
  step : 0,
  WxConfig : '',
  WxShare : ''
}

//改变
const mutations = {
  add(state,n){
    state.count +=n;
  },
  reduce(state){
    state.count --;
  },
  update(state, step){
    state.step = step;
  }
}

//过滤
const getters = {
  count:function (state) {
    return state.count+=10;
  }
}

//异步操作
const actions = {
  addAction(context){
    context.commit('add', 10);
    setTimeout(()=>{context.commit('reduce')},1000);
  },
  reduceAction({commit}){
    commit('reduce');
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

