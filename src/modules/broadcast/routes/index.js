const routes = [
  {
    path: 'broadcast',
    name: 'Broadcast',
    components: {
      default: () => import(
        /* webpackChunkName: "broadcast" */
        '../Broadcast.vue'
      ),
    },
    meta: {
      requiresAuth: true,
      requiresAdmin: true,
    },
  },
];

export default routes;
