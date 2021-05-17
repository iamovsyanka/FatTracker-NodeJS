const express = require('express');
const categoryController = require('../controllers/categoryController');

const categoryRouter = express.Router();

categoryRouter.get('/all', categoryController.getAll);
categoryRouter.get('/allName', categoryController.getAllName);

module.exports = categoryRouter;
