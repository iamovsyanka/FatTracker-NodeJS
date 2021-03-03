const express = require('express');
const multer = require('multer');
const categoryController = require('../controllers/categoryController');

const categoryRouter = express.Router();

categoryRouter.get('/all', categoryController.getAllCategories);
categoryRouter.post('/add', multer().single('photo'), categoryController.addCategory);
categoryRouter.put('/update', multer().single('photo'), categoryController.updateCategory);

module.exports = categoryRouter;
