const mealService = require('../services/mealService');

module.exports = {
  async getMeal(request, response) {
    await mealService.getMealById(request.query.id)
      .then((result) => {
        response.type('json');
        response.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async getMealsByDay(request, response) {
    await mealService.getMealsByDayId(request.query)
      .then((result) => {
        response.type('json');
        response.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async getAllMealsByDay(request, response) {
    await mealService.getAllMealsByDayId(request.query.id)
      .then((result) => {
        response.type('json');
        response.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async addMeal(request, response) {
    await mealService.addMeal(request.body)
      .then((result) => {
        response.type('json');
        response.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async updateMeal(request, response) {
    await mealService.updateMeal(request.body)
      .then((result) => {
        response.type('json');
        response.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async deleteMeal(request, response) {
    await mealService.deleteMeal(request.query.id)
      .then((result) => {
        response.type('json');
        response.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  }
};

