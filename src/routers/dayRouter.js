const express = require('express');
const dayController = require('../controllers/dayController');

const dayRouter = express.Router();

dayRouter.post('/get', dayController.get);
dayRouter.post('/getAllByUser', dayController.getAllByUser);
dayRouter.post('/getSinceDate', dayController.getSinceDate);
dayRouter.post('/add', dayController.add);

module.exports = dayRouter;
