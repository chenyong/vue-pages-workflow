
var app = require('./app');

var storeEl = document.querySelector('#store');
if (storeEl != null) {
  var rawData = storeEl.getAttribute('content');
  store.replaceState(JSON.parse(rawData));
}

console.debug('initial store:', store);

app.mount('#app');
