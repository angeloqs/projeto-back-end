const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

// Certifique-se que o controller existe e exporta a função
console.log(productController.searchProducts); // Deve mostrar [Function]

// Rota corrigida
router.get('/search', productController.searchProducts);
//router.get('/:id', productController.getProductById);
//router.post('/', productController.createProduct);
//router.put('/:id', productController.updateProduct);
//router.delete('/:id', productController.deleteProduct);

module.exports = router;