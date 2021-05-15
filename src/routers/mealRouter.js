const express = require('express');
const mealController = require('../controllers/mealController');

const mealRouter = express.Router();

mealRouter.get('/get', mealController.get);
mealRouter.post('/getAllByDay', mealController.getAllByDay);
mealRouter.post('/add', mealController.add);
mealRouter.put('/update', mealController.update);
mealRouter.delete('/delete', mealController.delete);

module.exports = mealRouter;
