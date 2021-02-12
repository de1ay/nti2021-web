import { createApp } from 'vue';
import App from '@core/App.vue';
import router from '@core/router';
import store from '@core/store';

createApp(App)
  .use(router)
  .use(store)
  .mount('#app');
