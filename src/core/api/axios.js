import Axios from 'axios';
import store from '@core/store';

Axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;
Axios.defaults.headers.common.Accept = 'application/json';

const { token } = store.state.session;
if (token) {
  Axios.defaults.headers.common.Authorization = `Token ${token}`;
}

export default Axios;
