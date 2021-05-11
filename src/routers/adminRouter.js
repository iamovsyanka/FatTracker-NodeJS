const express = require('express');
const multer = require('multer');
const categoryController = require('../controllers/categoryController');
const productController = require('../controllers/productController');
const userController = require('../controllers/userController');

const adminRouter = express.Router();

adminRouter.post('/category/add', multer().single('photo'), categoryController.addCategory);
adminRouter.put('/category/update', multer().single('photo'), categoryController.updateCategory);
adminRouter.delete('/category/delete', categoryController.deleteCategory);

adminRouter.put('/product/update', productController.updateProductByAdmin);
adminRouter.put('/product/updatePhoto', productController.updatePhotoByAdmin);
adminRouter.delete('/product/delete', productController.deleteProductByAdmin);

adminRouter.put('/user/restore', userController.restoreUserByAdmin);

module.exports = adminRouter;
