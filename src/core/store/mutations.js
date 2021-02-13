const mutations = {
  setToken(state, payload) {
    state.token = payload;
  },
  setUser(state, payload) {
    state.user = {
      ...payload,
    };
  },
  setUserInfo(state, payload) {
    state.userInfo = {
      ...payload,
    };
  },
};

export default mutations;
