const { Sequelize } = require('sequelize');
const sequelize = require('../config/database'); // Caminho corrigido

// Model imports
const User = require('./user.model');
const Product = require('./product.model');

// Associations (se necessário)
Product.belongsToMany(User, { through: 'UserProducts' });

module.exports = {
  sequelize,
  User,
  Product
}; 