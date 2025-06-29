const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
require('dotenv').config();

class AuthService {
  async generateToken(email, password) {
    const user = await User.findOne({ where: { email } });
    
    // Comparação direta de senhas (sem hash)
    if (!user || user.password !== password) {
      throw new Error('Invalid credentials');
    }
    
    return jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN
    });
  }

  async verifyToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
  }
}

module.exports = new AuthService();