
import app from './app';
import './assets/main.css';
import store from './store';

var storeEl = document.querySelector('#store');
if (storeEl != null) {
  var rawData = storeEl.getAttribute('content');

  console.log('store:', store);
  store.replaceState(JSON.parse(rawData));

  console.debug('initial store:', store);
}

app.$mount('#app');
