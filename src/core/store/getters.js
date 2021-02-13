const getters = {
  isAuthorized: (state) => !!state.token,
  isUserAdmin: (state) => !!state.user.is_staff,
};

export default getters;
