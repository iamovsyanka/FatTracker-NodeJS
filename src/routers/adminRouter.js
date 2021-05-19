const express = require('express');

const categoryController = require('../controllers/categoryController');
const productController = require('../controllers/productController');
const userController = require('../controllers/userController');

const adminRouter = express.Router();

adminRouter.post('/category/add', categoryController.add);
adminRouter.put('/category/update', categoryController.update);
adminRouter.delete('/category/delete', categoryController.delete);

adminRouter.put('/product/update', productController.updateByAdmin);
adminRouter.delete('/product/delete', productController.deleteByAdmin);

adminRouter.put('/user/restore', userController.restoreUserByAdmin);

module.exports = adminRouter;
