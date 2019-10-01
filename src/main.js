// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import UniqueId from 'vue-unique-id';

Vue.config.productionTip = false;

Vue.use(UniqueId);

const prod = process.env.NODE_ENV === 'production'
const shouldSW = 'serviceWorker' in navigator && prod
if (shouldSW) {
  navigator.serviceWorker.register('/service-worker.js').then(() => {
    console.log("Service Worker Registered!")
  })
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
