const express = require('express');
const productController = require('../controllers/productController');
const multer = require('multer');

const productRouter = express.Router();

productRouter.get('/category', productController.getByCategory);
productRouter.post('/get', productController.getById);
productRouter.post('/search', productController.searchByName);
productRouter.post('/add', productController.add);
productRouter.put('/update', productController.updateByUser);
productRouter.put('/updatePhoto', multer().single('photo'), productController.updatePhotoByUser);
productRouter.delete('/delete', productController.deleteByUser);

module.exports = productRouter;
