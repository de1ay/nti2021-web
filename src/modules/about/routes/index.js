const routes = [
  {
    path: 'about',
    name: 'About',
    components: {
      default: () => import(
        /* webpackChunkName: "about" */
        '../About.vue'
      ),
    },
  },
];

export default routes;
