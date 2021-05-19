const db = require('../db/db');
const AppError = require('../errors/appError');
const errMessage = require('../errors/errMessages');

const getAll = async () => await db.models.Category.findAll();

const getAllName = async () => await db.models.Category.findAll({
  attributes: ['id', 'name']
});

const getProducts = async function (id) {
  const products = await db.models.Category.findOne({
    include: [{ model: db.models.Product, as: 'products', required: true }],
    where: { id: id }
  });

  if (!products) throw new AppError({ status: 404, message: errMessage.PRODUCT_NOT_FOUND });

  return products;
};

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
  getProducts,
  getAll,
  getAllName,
  add,
  update,
  drop
};
