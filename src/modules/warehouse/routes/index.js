const routes = [
  {
    path: 'warehouse',
    name: 'Warehouse',
    components: {
      default: () => import(
        /* webpackChunkName: "warehouse" */
        '../Warehouse.vue'
      ),
    },
  },
];

export default routes;
