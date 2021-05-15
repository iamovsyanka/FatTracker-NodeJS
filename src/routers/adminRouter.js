const express = require('express');
const multer = require('multer');

const categoryController = require('../controllers/categoryController');
const productController = require('../controllers/productController');
const userController = require('../controllers/userController');

const adminRouter = express.Router();

adminRouter.post('/category/add', multer().single('photo'), categoryController.add);
adminRouter.put('/category/update', multer().single('photo'), categoryController.update);
adminRouter.delete('/category/delete', categoryController.delete);

adminRouter.put('/product/update', productController.updateByAdmin);
adminRouter.put('/product/updatePhoto', productController.updatePhotoByAdmin);
adminRouter.delete('/product/delete', productController.deleteByAdmin);

adminRouter.put('/user/restore', userController.restoreUserByAdmin);

module.exports = adminRouter;
