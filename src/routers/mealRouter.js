const express = require('express');
const mealController = require('../controllers/mealController');

const mealRouter = express.Router();

mealRouter.get('/get', mealController.getMeal);
mealRouter.get('/getByDay', mealController.getMealsByDay);
mealRouter.get('/getAllByDay', mealController.getAllMealsByDay);
mealRouter.post('/add', mealController.addMeal);
mealRouter.put('/update', mealController.updateMeal);
mealRouter.delete('/delete', mealController.deleteMeal);

module.exports = mealRouter;
