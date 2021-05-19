const db = require('../db/db');
const AppError = require('../errors/appError');
const errMessage = require('../errors/errMessages');

const getAll = async (page, limit) => await db.models.Category.findAndCountAll({
  limit: limit,
  offset: page ? page * limit : 0
});

const getAllName = async () => await db.models.Category.findAll({
  attributes: ['id', 'name']
});

const add = async (data) => {
  const category = await db.models.Category.findOne({ where: { name: data.name } });

  if (category) {

  } else {
    return await db.models.Category.create({
      name: data.name,
      description: data.description
    });
  }
};

const update = async (data) => {
  return await db.models.Category.update({
    name: data.name,
    description: data.description
  }, {
    where: {
      id: data.id
    }
  });
};

const drop = (id) => {
  return db.models.Category.destroy({ where: { id: id } });
};

module.exports = {
  getAll,
  getAllName,
  add,
  update,
  drop
};
