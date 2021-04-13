const express = require('express');
const multer = require('multer');
const categoryController = require('../controllers/categoryController');
const productController = require('../controllers/productController');

const adminRouter = express.Router();

adminRouter.post('/category/add', multer().single('photo'), categoryController.addCategory);
adminRouter.put('/category/update', multer().single('photo'), categoryController.updateCategory);
adminRouter.delete('/category/delete', categoryController.deleteCategory);

adminRouter.get('/product/all', productController.getAllProducts);
adminRouter.put('/product/update', productController.updateProductByAdmin);
adminRouter.put('/product/updatePhoto', productController.updatePhotoByAdmin);
adminRouter.delete('/product/delete', productController.deleteProductByAdmin);

module.exports = adminRouter;
