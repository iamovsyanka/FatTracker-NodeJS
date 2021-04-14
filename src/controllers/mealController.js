const mealService = require('../services/mealService');

module.exports = {
  async getMeal(req, res) {
    await mealService.getMealById(req.query.id)
      .then((result) => {
        res.type('json');
        res.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async getMealsByDay(req, res) {
    await mealService.getMealsByDayId(req.query)
      .then((result) => {
        res.type('json');
        res.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async getAllMealsByDay(req, res) {
    await mealService.getAllMealsByDayId(req.query.id)
      .then((result) => {
        res.type('json');
        res.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async addMeal(req, res) {
    await mealService.addMeal(req.body)
      .then((result) => {
        res.type('json');
        res.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async updateMeal(req, res) {
    await mealService.updateMeal(req.body)
      .then((result) => {
        res.type('json');
        res.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async deleteMeal(req, res) {
    await mealService.deleteMeal(req.query.id)
      .then((result) => {
        res.type('json');
        res.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  }
};

