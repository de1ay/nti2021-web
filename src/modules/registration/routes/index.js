const routes = [
  {
    path: '/registration',
    name: 'Registration',
    redirect: { name: 'Landing', query: { modal: 'registration' } },
  },
];

export default routes;
