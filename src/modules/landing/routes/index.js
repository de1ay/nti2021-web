const routes = [
  {
    path: '/welcome',
    name: 'Landing',
    component: () => import(
      /* webpackChunkName: "landing" */
      '../Landing.vue'
    ),
    props: (route) => ({ modal: route.query.modal }),
  },
];

export default routes;
