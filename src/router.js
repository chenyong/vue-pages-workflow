
import VueRouter from 'vue-router';

import Home from './components/home';
import About from './components/about';

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Home
    }, {
      path: '/about.html',
      component: About
    }
  ]
});
