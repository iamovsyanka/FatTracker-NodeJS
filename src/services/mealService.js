const db = require('../db/db');
const { Op } = require('sequelize');

const getMealById = async function (id) {
  return await db.models.Meal.findOne({
    where: {
      id: id
    }
  });
};

const getAllMealsByDayId = async function (dayId) {
  return await db.models.Meal.findAll({
    where: {
      dayId: dayId
    }
  });
};

const addMeal = async function (data) {
  return await db.models.Meal.create({
    dayId: data.dayId,
    meal: data.meal,
    productId: data.productId,
    weight: data.weight
  });
};

const updateMeal = async function (data) {
  return await db.models.Meal.update({
    productId: data.productId,
    weight: data.weight,
    meal: data.meal
  }, {
    where: {
      id: data.id
    }
  });
};

const deleteMeal = function (id) {
  return db.models.Meal.destroy({
    where: {
      id: id
    }
  });
};

module.exports = {
  addMeal,
  updateMeal,
  deleteMeal,
  getMealById,
  getAllMealsByDayId
};
