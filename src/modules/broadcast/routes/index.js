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
  },
];

export default routes;
