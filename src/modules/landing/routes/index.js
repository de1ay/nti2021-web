const routes = [
  {
    path: '/welcome',
    name: 'Landing',
    components: {
      default: () => import(
        /* webpackChunkName: "landing" */
        '../Landing.vue'
      ),
    },
  },
];

export default routes;
