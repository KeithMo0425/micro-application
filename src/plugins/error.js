import log from '@/utils/log';
// import store from '@/service/store';
import { NODE_ENV } from '@/config';

export default {
  install(Vue) {
    Vue.config.errorHandler = (err, vm, info) => {
      Vue.nextTick(() => {
        vm.$store.dispatch('log/add', {
          type: 'error',
          err,
          vm,
          info,
        });
        // 添加 log
        // 只在开发模式下打印 log
        if (NODE_ENV === 'development') {
          log.capsule('YchAdmin', 'ErrorHandler', 'danger');
          log.danger('>>>>>> 错误信息 >>>>>>');
          console.log(info);
          log.danger('>>>>>> Vue 实例 >>>>>>');
          console.log(vm);
          log.danger('>>>>>> Error >>>>>>');
          console.log(err);
        }
      });
    };
  },
};
