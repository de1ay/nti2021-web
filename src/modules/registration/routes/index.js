const routes = [
  {
    path: '/registration',
    name: 'Registration',
    components: {
      default: () => import(
        /* webpackChunkName: "registration" */
        '../Registration.vue'
      ),
    },
  },
];

export default routes;
