
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

var state = {
  count: 0
};

var mutations = {
  increment: function(state) {
    state.count = state.count + 1;
  },
  decrement: function(state) {
    state.count = state.count - 1;
  }
};

var getters = {
  count: function(state) {
    return state.count;
  }
};

var actions = {
  inc: function({commit}) {
    commit('increment');
  },
  dec: function(commit) {
    commit('increment');
  }
};

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
});
