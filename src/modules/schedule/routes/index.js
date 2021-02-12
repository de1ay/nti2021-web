const routes = [
  {
    path: 'schedule',
    name: 'Schedule',
    components: {
      default: () => import(
        /* webpackChunkName: "schedule" */
        '../Schedule.vue'
      ),
    },
  },
];

export default routes;
