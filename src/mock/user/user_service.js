class UserService {
  constructor(userClient) {
    this.userClient = userClient;
    this.isLoggedIn = false;
  }

  login(id, password) {
    if (!this.isLoggedIn) {
      return this.userClient
        .login(id, password)
        .then((data) => (this.isLoggedIn = true));
    }
  }
}

module.exports = UserService;
