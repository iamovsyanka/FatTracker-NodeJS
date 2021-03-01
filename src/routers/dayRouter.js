const express = require('express');
const dayController = require('../controllers/dayController');

const dayRouter = express.Router();

dayRouter.post('/updateWeight', dayController.updateCurrentWeight);

module.exports = dayRouter;
