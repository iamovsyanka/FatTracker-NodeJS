const express = require('express');
const multer = require('multer');
const categoryController = require('../controllers/categoryController');
const productController = require('../controllers/productController');

const adminRouter = express.Router();

adminRouter.get('/product/all', productController.getAllProducts);
adminRouter.post('/category/add', multer().single('photo'), categoryController.addCategory);
adminRouter.put('/category/update', multer().single('photo'), categoryController.updateCategory);
adminRouter.delete('/category/delete', categoryController.deleteCategory);

module.exports = adminRouter;
