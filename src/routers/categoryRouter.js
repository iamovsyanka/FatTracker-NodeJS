const express = require('express');
const categoryController = require('../controllers/categoryController');
const categoryRouter = express.Router();

categoryRouter.get("/all", categoryController.getAllCategories);

module.exports = categoryRouter;
