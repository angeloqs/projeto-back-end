const Product = require('../models/product.model');
const ProductImage = require('../models/product_image.model');
const ProductOption = require('../models/product_option.model');
const ProductCategory = require('../models/product_category.model');

class ProductService {
  async createProduct(productData) {
    const transaction = await Product.sequelize.transaction();
    
    try {
      // Cria o produto
      const product = await Product.create(productData, { transaction });
      
      // Processa imagens
      if (productData.images && productData.images.length) {
        await ProductImage.bulkCreate(
          productData.images.map(img => ({
            product_id: product.id,
            path: img.content,
            enabled: true
          })),
          { transaction }
        );
      }
      
      // Processa opções
      if (productData.options && productData.options.length) {
        await ProductOption.bulkCreate(
          productData.options.map(opt => ({
            product_id: product.id,
            ...opt
          })),
          { transaction }
        );
      }
      
      // Processa categorias
      if (productData.category_ids && productData.category_ids.length) {
        await ProductCategory.bulkCreate(
          productData.category_ids.map(cat_id => ({
            product_id: product.id,
            category_id: cat_id
          })),
          { transaction }
        );
      }
      
      await transaction.commit();
      return product;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
}

module.exports = new ProductService();