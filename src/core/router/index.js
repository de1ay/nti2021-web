import { createRouter, createWebHistory } from 'vue-router';
import store from '@core/store';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth === true) {
    if (!store.getters.isAuthorized) {
      window.location.replace('/welcome');
    }
  }
  if (to.meta.requiresAdmin === true) {
    if (!store.getters.isUserAdmin) {
      window.location.replace('/welcome');
    }
  }
  if (store.getters.isAuthorized) {
    store.dispatch('getUser');
  }
  next();
});

export default router;
