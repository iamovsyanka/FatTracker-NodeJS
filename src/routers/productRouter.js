const express = require('express');
const productController = require('../controllers/productController');
const multer = require('multer');

const productRouter = express.Router();

productRouter.put('/all', productController.getAllProducts);
//productRouter.put('/updatePhoto', multer().single('photo'), productController.updatePhoto);

module.exports = productRouter;
