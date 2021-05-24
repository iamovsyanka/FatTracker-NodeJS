const mealService = require('../services/mealService');
const errMessages = require('../errors/errMessages');
const error = require('../errors/appError');

module.exports = {
  async get(req, res) {
    try {
      const meal = mealService.getById(req.query.id);
      res.type('json');
      res.end(JSON.stringify(meal));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  },

  async getAllByDay(req, res) {
    try {
      const meals = await mealService.getAllByDayId(req.body.dayId);
      res.type('json');
      res.end(JSON.stringify(meals));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  },

  async add(req, res) {
    try {
      const addedMeal = await mealService.add(req.body);
      res.type('json');
      res.end(JSON.stringify(addedMeal));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  },

  async update(req, res) {
    try {
      const updatedMeal = await mealService.update(req.body);
      res.type('json');
      res.end(JSON.stringify(updatedMeal));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  },

  async delete(req, res) {
    try {
      const deletedMeal = await mealService.drop(req.query.id);
      res.type('json');
      res.end(JSON.stringify(deletedMeal));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  }
};

