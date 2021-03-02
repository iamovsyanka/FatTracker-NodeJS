const express = require('express');
const dayController = require('../controllers/dayController');

const dayRouter = express.Router();

dayRouter.put('/updateWeight', dayController.updateCurrentWeight);

module.exports = dayRouter;
