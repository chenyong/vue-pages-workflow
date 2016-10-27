
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Container from './components/container';

import router from './router';
import store from './store';

export default new Vue({
  router: router,
  store: store,
  render: function(h) {
    return h(Container, {});
  }
});
