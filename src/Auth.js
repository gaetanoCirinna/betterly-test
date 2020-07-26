class Auth {
  constructor() {
    this.authenticate = false;
  }

  login(callback) {
    this.authenticate = true;
    callback();
  }
  logout(callback) {
    this.authenticate = false;
    callback();
  }

  isAuth() {
    return this.authenticate;
  }
}

export default new Auth();
