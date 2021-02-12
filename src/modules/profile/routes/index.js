const routes = [
  {
    path: 'profile',
    name: 'Profile',
    components: {
      default: () => import(
        /* webpackChunkName: "profile" */
        '../Profile.vue'
      ),
    },
  },
];

export default routes;
