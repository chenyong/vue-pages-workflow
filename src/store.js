
import Vuex from 'vuex';

var state = {
  count: 0
};

var mutations = {
  increment: function(state) {
    return state.count = state.count + 1;
  },
  decrement: function(state) {
    return state.count = state.count - 1;
  }
};

var getters = {
  count: function(state) {
    return state.count;
  }
};

var actions = {
  inc: function(_arg) {
    var commit;
    commit = _arg.commit;
    return commit('increment');
  },
  dec: function(_arg) {
    var commit;
    commit = _arg.commit;
    return commit('increment');
  }
};

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
});
