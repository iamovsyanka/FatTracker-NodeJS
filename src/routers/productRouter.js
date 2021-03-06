const express = require('express');
const productController = require('../controllers/productController');
const multer = require('multer');

const productRouter = express.Router();

productRouter.get('/all', productController.getAllProducts);
productRouter.get('/category', productController.getAllProductsByCategory);
productRouter.post('/add', productController.addProduct);
productRouter.put('/updatePhoto', multer().single('photo'), productController.updatePhoto);

module.exports = productRouter;
