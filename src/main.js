import { createApp } from 'vue';
import mdiVue from 'mdi-vue';
import * as mdijs from '@mdi/js';
import App from '@core/App.vue';
import router from '@core/router';
import store from '@core/store';

createApp(App)
  .use(router)
  .use(store)
  .use(mdiVue, {
    icons: mdijs,
  })
  .mount('#app');
