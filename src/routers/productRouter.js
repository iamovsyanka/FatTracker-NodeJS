const express = require('express');
const productController = require('../controllers/productController');

const productRouter = express.Router();

productRouter.get('/category', productController.getByCategory);
productRouter.post('/get', productController.getById);
productRouter.post('/search', productController.searchByName);
productRouter.post('/add', productController.add);
productRouter.put('/update', productController.updateByUser);
productRouter.delete('/delete', productController.deleteByUser);

module.exports = productRouter;
