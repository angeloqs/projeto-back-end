const Product = require('../models/product.model'); // Importação direta do modelo

module.exports = {
  searchProducts: async (req, res) => {
    try {
      console.log(Product); // Verifique se o modelo está carregado
      const products = await Product.findAll();
      res.json({ data: products });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
  }
};