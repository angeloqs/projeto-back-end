const { Op } = require('sequelize');
const Category = require('../models/category.model');

class CategoryService {
  async searchCategories(options = {}, pagination = {}) {
    const { limit = 12, page = 1 } = pagination;
    const offset = limit > 0 ? (page - 1) * limit : undefined;
    
    const result = await Category.findAndCountAll({
      ...options,
      limit: limit > 0 ? limit : undefined,
      offset
    });
    
    return {
      data: result.rows,
      total: result.count,
      limit: limit > 0 ? limit : -1,
      page
    };
  }

  async getCategoryById(id) {
    return await Category.findByPk(id);
  }

  async createCategory(categoryData) {
    return await Category.create(categoryData);
  }

  async updateCategory(id, categoryData) {
    const category = await Category.findByPk(id);
    if (!category) throw new Error('Category not found');
    return await category.update(categoryData);
  }

  async deleteCategory(id) {
    const category = await Category.findByPk(id);
    if (!category) throw new Error('Category not found');
    return await category.destroy();
  }
}

module.exports = new CategoryService();