const express = require('express');
const dayController = require('../controllers/dayController');

const dayRouter = express.Router();

dayRouter.post('/addDay', dayController.addDay);
dayRouter.put('/updateWeight', dayController.updateCurrentWeight);

module.exports = dayRouter;
