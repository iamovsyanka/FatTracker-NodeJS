const db = require('../db/db');
const { Op } = require('sequelize');
const errMessage = require('../errors/errMessages');

const getById = async function (id) {
  return await db.models.Meal.findOne({
    where: { id: id }
  });
};

const getAllByDayId = async function (dayId) {
  return await db.models.Meal.findAll({
    where: {
      dayId: dayId
    }
  });
};

const add = async function (data) {
  return await db.models.Meal.create({
    dayId: data.dayId,
    meal: data.meal,
    productId: data.productId,
    weight: data.weight
  });
};

const update = async function (data) {
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

const drop = function (id) {
  return db.models.Meal.destroy({
    where: {
      id: id
    }
  });
};

module.exports = {
  add,
  update,
  drop,
  getById,
  getAllByDayId
};
