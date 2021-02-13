import Axios from 'axios';

Axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;
Axios.defaults.headers.common.Accept = 'application/json';

const token = localStorage.getItem('token');
if (token) {
  Axios.defaults.headers.common.Authorization = `Token ${token}`;
}

export default Axios;
