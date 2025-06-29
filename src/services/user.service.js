const User = require('../models/user.model');

class UserService {
  async createUser(userData) {
    return await User.create({
      firstname: userData.firstname,
      surname: userData.surname,
      email: userData.email,
      password: userData.password // Sem hash
    });
  }
}

module.exports = new UserService();