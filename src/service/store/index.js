import actions from './common/actions';
import getters from './common/getters';
import { mutations, state } from './common/mutations';
import log from './modules/log';

console.log(log);
export default {
  state,
  getters,
  mutations,
  actions,
  modules: {
    log,
  },
};
