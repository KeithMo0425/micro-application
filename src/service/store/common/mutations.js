export const state = {
  userInfo: null,
};

/* eslint-disable no-shadow */
export const mutations = {
  setUserInfo(state, info) {
    state.userInfo = info;
  },
};
