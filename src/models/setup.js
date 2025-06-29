const User = require('./user');
const Category = require('./category');
const Product = require('./product');
const ProductImage = require('./productImage');
const ProductOption = require('./productOption');
const ProductCategory = require('./productCategory');

function setupModels(sequelize) {
  User.init(sequelize);
  Category.init(sequelize);
  Product.init(sequelize);
  ProductImage.init(sequelize);
  ProductOption.init(sequelize);
  ProductCategory.init(sequelize);

  // Definir associações
  User.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
  ProductImage.associate(sequelize.models);
  ProductOption.associate(sequelize.models);
}

module.exports = setupModels;