const db = require('../db/db');
const { Op } = require('sequelize');
const moment = require('moment');

const updateCurrentWeight = async function (data) {
  const day = await db.models.Day.findOne({
    where: {
      [Op.and]: {
        userId: data.user.id,
        date: moment().utc().format('Y-M-D')
      }
    }
  });

  if (day) {
    return await db.models.Day.update({
      weight: data.body.weight,
      requiredCalories: 1500
    }, {
      where: {
        [Op.and]: {
          userId: data.user.id,
          date: moment().utc().format('Y-M-D')
        }
      }
    });
  }
};

const addDay = async function (data) {
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

const getDay = async function (data) {
  return await db.models.Day.findOne({
    where: {
      [Op.and]: {
        userId: data.user.id,
        date: data.body.date || moment().utc().format('Y-M-D')
      }
    }
  });
};

module.exports = {
  updateCurrentWeight,
  addDay,
  getDay
};
