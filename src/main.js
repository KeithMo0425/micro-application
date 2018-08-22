import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@/directives';

import router from '@/plugins/router';
import store from '@/plugins/store';
import inject from '@/plugins/inject';

// import moduleLoad from '@/plugins/module-load';
import App from './App.vue';

Vue.use(inject);
Vue.use(ElementUI);
// Vue.use(moduleLoad);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
