import axios from '@core/api/axios';

const actions = {
  async getUser(store) {
    const { commit, dispatch } = store;
    return axios({
      url: '/users/me/',
      method: 'GET',
    })
      .then((resp) => {
        if (resp.data.error !== undefined) {
          return Promise.reject(resp.data.error);
        }
        commit('setUser', resp.data);
        dispatch('getUserInfo');
        return Promise.resolve(resp.data);
      })
      .catch((err) => {
        const { data } = err.response;
        if (data.detail) {
          return Promise.reject(data.detail);
        }
        return Promise.reject(data);
      });
  },
  async getUserInfo(store) {
    const { state, commit } = store;
    return axios({
      url: `/users-info/user/${state.user.id}/`,
      method: 'GET',
    })
      .then((resp) => {
        if (resp.data.error !== undefined) {
          return Promise.reject(resp.data.error);
        }
        commit('setUserInfo', resp.data);
        return Promise.resolve(resp.data);
      })
      .catch((err) => {
        const { data } = err.response;
        if (data.detail) {
          return Promise.resolve(data.detail);
        }
        return Promise.resolve(data);
      });
  },
  async authorize(store, { username, password, token }) {
    const { commit } = store;
    return axios({
      url: '/dj-rest-auth/login/',
      method: 'POST',
      data: {
        password,
        username,
        token,
      },
    })
      .then((resp) => {
        if (resp.data.error !== undefined) {
          return Promise.reject(resp.data.error);
        }
        commit('setToken', resp.data.key);
        localStorage.setItem('token', resp.data.key);
        axios.defaults.headers.common.Authorization = `Token ${resp.data.key}`;
        return Promise.resolve(resp.data);
      })
      .catch((err) => {
        const { data } = err.response;
        if (data.non_field_errors) {
          return Promise.reject(data.non_field_errors);
        }
        return Promise.reject(data);
      });
  },
  async logout(store) {
    const { commit } = store;
    return axios({
      url: '/dj-rest-auth/logout/',
      method: 'POST',
    })
      .then((resp) => {
        if (resp.data.error !== undefined) {
          return Promise.reject(resp.data.error);
        }
        commit('setToken', null);
        localStorage.removeItem('token');
        axios.defaults.headers.common.Authorization = '';
        return Promise.resolve(resp.data);
      })
      .catch((err) => {
        commit('setToken', null);
        localStorage.removeItem('token');
        axios.defaults.headers.common.Authorization = '';
        if (err.non_field_errors) {
          return Promise.resolve(err.non_field_errors);
        }
        return Promise.resolve(err);
      });
  },
};

export default actions;
