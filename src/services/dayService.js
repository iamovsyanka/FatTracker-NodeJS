const db = require('./db');
const { Op } = require('sequelize');
const moment = require('moment');

const updateCurrentWeight = async function(data) {
  const day = await db.models.Day.findOne({ where: {
      [Op.and]: {
        userId: data.user.id,
        date: moment().utc().format('Y-M-D')
      }
  } });

  if (day) {
    return await db.models.Day.update({
      weight: data.body.weight,
      requiredCalories: 1500
    },{
      where: {
        [Op.and]: {
          userId: data.user.id,
          date: moment().utc().format('Y-M-D')
        }
      }
    })
  }
  else {
    return await db.models.Day.create({
      date: moment().utc().format('Y-M-D'),
      weight: data.body.weight,
      userId: data.user.id,
      requiredCalories: 1500
    })
  }

};

module.exports = {
  updateCurrentWeight,
};
