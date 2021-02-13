const routes = [
  {
    path: '/login',
    name: 'Login',
    redirect: { name: 'Landing', query: { modal: 'authorization' } },
  },
];

export default routes;
