import { createApp } from 'vue';
import mdiVue from 'mdi-vue';
import * as mdijs from '@mdi/js';
import VuePlyr from 'vue-plyr';
import 'vue-plyr/dist/vue-plyr.css';
import VueSnap from 'vue-snap';
import 'vue-snap/dist/vue-snap.css';
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import App from '@core/App.vue';
import router from '@core/router';
import store from '@core/store';

createApp(App)
  .use(router)
  .use(store)
  .use(mdiVue, {
    icons: mdijs,
  })
  .use(VuePlyr, {
    plyr: {
      autoplay: true,
      muted: true,
    },
  })
  .use(VueSnap)
  .use(Toast, {
    position: POSITION.TOP_LEFT,
  })
  .mount('#app');
