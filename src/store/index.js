import { createStore } from "vuex";

const user = JSON.parse(localStorage.getItem('user'));
const store = createStore({
  state: {
    logginIn: false,
    user:user ? user : null
  },
  mutations:{
    loginSuccess(state,val){
      state.logginIn=val
    }
  },
  actions:{
    login({commit},val){
      commit('loginSuccess', val)
    }
  }
});

export default store;
