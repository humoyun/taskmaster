const fakeAuth = {
  authenticated: false,
  authenticate(cb) {
    fakeAuth.authenticated = true;
    setTimeout(cb, 400); // fake async
  },

  signout(cb) {
    fakeAuth.authenticated = false;
    setTimeout(cb, 400);
  }
};

export default fakeAuth;
