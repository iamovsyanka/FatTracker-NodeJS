const express = require('express');
const productController = require('../controllers/productController');
const multer = require('multer');

const productRouter = express.Router();

productRouter.get('/all', productController.getAllProducts);
productRouter.get('/category', productController.getAllProductsByCategory);
productRouter.post('/add', productController.addProduct);
productRouter.put('/update', productController.updateProductByUser);
productRouter.put('/updatePhoto', multer().single('photo'), productController.updatePhotoByUser);
productRouter.delete('/delete', productController.deleteProductByUser);

module.exports = productRouter;
