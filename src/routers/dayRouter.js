const express = require('express');
const dayController = require('../controllers/dayController');

const dayRouter = express.Router();

dayRouter.post('/get', dayController.getDay);
dayRouter.post('/add', dayController.addDay);

module.exports = dayRouter;
