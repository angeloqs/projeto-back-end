const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

console.log(userController);

// Rotas
router.get('/', userController.getUsers);
router.post('/', userController.createUser);

module.exports = router;