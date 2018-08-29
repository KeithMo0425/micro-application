import Vue from 'vue';

import '@/directives';

import router from '@/plugins/router';
import store from '@/plugins/store';
import inject from '@/plugins/inject';

import '@/plugins/element';
import App from './App.vue';

Vue.use(inject);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
