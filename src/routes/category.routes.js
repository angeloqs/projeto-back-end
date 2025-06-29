const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');

// GET /api/categories → Listar
router.get('/', categoryController.listCategories);

// POST /api/categories → Criar
router.post('/', categoryController.createCategory);

module.exports = router;