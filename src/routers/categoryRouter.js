const express = require('express');
const categoryController = require('../controllers/categoryController');

const categoryRouter = express.Router();

categoryRouter.get('/all', categoryController.getAll);

module.exports = categoryRouter;
