const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.generateToken = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    
    if (!user || user.password !== password) { // Comparação direta
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN
    });
    
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};