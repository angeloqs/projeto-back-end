const Category = require('../models/category.model');

module.exports = {
  // Listar todas as categorias
  listCategories: async (req, res) => {
    try {
      const categories = await Category.findAll();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Criar nova categoria
  createCategory: async (req, res) => {
    try {
      const { name, slug, use_in_menu } = req.body;
      const category = await Category.create({ name, slug, use_in_menu });
      res.status(201).json(category);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};