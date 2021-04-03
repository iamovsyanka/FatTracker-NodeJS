const express = require('express');
const multer = require('multer');
const categoryController = require('../controllers/categoryController');

const categoryRouter = express.Router();

categoryRouter.get('/all', categoryController.getAllCategories);

module.exports = categoryRouter;
