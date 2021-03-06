const db = require('../db/db');
const { Op } = require('sequelize');
const moment = require('moment');
const AppError = require('../errors/appError');
const errMessage = require('../errors/errMessages');

const add = async function (data) {
  const day = await db.models.Day.findOne({
    where: {
      [Op.and]: {
        userId: data.user.id,
        date: data.body.date || moment().utc().format('Y-M-D')
      }
    }
  });

  if (!day) {
    return await db.models.Day.create({
      date: data.body.date || moment().utc().format('Y-M-D'),
      userId: data.user.id
    });
  }
};

const get = async function (data) {
  try {
    const day = await db.models.Day.findOne({
      where: {
        [Op.and]: {
          userId: data.user.id,
          date: data.body.date || moment().utc().format('Y-M-D')
        }
      },
      include: {
        model: db.models.Meal, as: 'meals',
        include: { model: db.models.Product, as: 'Product' }
      }
    });
    if (!day) {
      throw new AppError({ status: 404, message: 'Day not found' });
    }

    day.totalCalories = 0;
    day.totalFats = 0;
    day.totalProtein = 0;
    day.totalCarbs = 0;

    if (day.meals) {
      day.meals.forEach(meal => {
        if (meal.Product) {
          day.totalCalories += meal.Product.calories * meal.weight / 100;
          day.totalFats += meal.Product.fats * meal.weight / 100;
          day.totalProtein += meal.Product.protein * meal.weight / 100;
          day.totalCarbs += meal.Product.carbs * meal.weight / 100;
        }
      });
    }

    return day.toJSON();
  } catch (e) {
    console.log('error stack', e.stack);
    console.log('error message', e.message);
  }
};

const getAllByUser = async function (userId) {
  const days = await db.models.Day.findAll({
    where: {
      userId: userId
    },
    include: {
      model: db.models.Meal, as: 'meals',
      include: { model: db.models.Product, as: 'Product' }
    }
  });

  days.forEach(day => {
    day.totalCalories = 0;
    day.totalFats = 0;
    day.totalProtein = 0;
    day.totalCarbs = 0;

    if (day.meals) {
      day.meals.forEach(meal => {
        if (meal.Product) {
          day.totalCalories += meal.Product.calories * meal.weight / 100;
          day.totalFats += meal.Product.fats * meal.weight / 100;
          day.totalProtein += meal.Product.protein * meal.weight / 100;
          day.totalCarbs += meal.Product.carbs * meal.weight / 100;
        }
      });
    }
  });

    return days;
};

const getSinceDate = async function (userId, date) {
  const days = await db.models.Day.findAll({
    where: {
      userId: userId,
      date: {
        [Op.gte]: date
      }
    },
    include: {
      model: db.models.Meal, as: 'meals',
      include: { model: db.models.Product, as: 'Product' }
    }
  });

  days.forEach(day => {
    day.totalCalories = 0;
    day.totalFats = 0;
    day.totalProtein = 0;
    day.totalCarbs = 0;

    if (day.meals) {
      day.meals.forEach(meal => {
        if (meal.Product) {
          day.totalCalories += meal.Product.calories * meal.weight / 100;
          day.totalFats += meal.Product.fats * meal.weight / 100;
          day.totalProtein += meal.Product.protein * meal.weight / 100;
          day.totalCarbs += meal.Product.carbs * meal.weight / 100;
        }
      });
    }
  });

  return days;
};

module.exports = {
  add,
  get,
  getAllByUser,
  getSinceDate
};
