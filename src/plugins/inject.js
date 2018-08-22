import axios from './axios';
import apiInstance from './api';
import consts from './const';
import moduleLoad, { loadModuleService } from './module-load';

// window.GLOBAL.ajax = axios;
export default {
  /* eslint no-param-reassign: "error" */
  install: (Vue) => {
    Vue.prototype.$api = apiInstance.api;
    Vue.prototype.$ajax = axios;
    Vue.prototype.$const = consts;
    Vue.prototype.$loadModule = loadModuleService;
    Vue.use(moduleLoad);
  },
};
