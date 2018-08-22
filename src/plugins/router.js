import Vue from 'vue';
import Router from 'vue-router';
import routes from '@/routes';

import { ROUTER_DEFAULT_CONFIG } from '@/config/index';

Vue.use(Router);

const routerInstance = new Router({
  ...ROUTER_DEFAULT_CONFIG,
  routes,
});

export default routerInstance;
