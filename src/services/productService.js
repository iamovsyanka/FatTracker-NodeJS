const db = require('../db/db');
const { Op } = require('sequelize');
const AppError = require('../errors/appError');
const errMessage = require('../errors/errMessages');

const getById = async function (id) {
  const product = await db.models.Product.findOne({ where: { id: id } });
  if (!product) throw new AppError({ status: 404, message: errMessage.PRODUCT_NOT_FOUND });

  return product;
};

const getByName = async function (name) {
  return await db.models.Product.findAll({
    where: db.sequelize.where(
      db.sequelize.fn('lower', db.sequelize.col('name')),
      { [Op.like]: `${name.toLowerCase()}%` })
  });
};

const add = async function (data, userId) {
  const product = await db.models.Product.findOne({ where: { name: data.name } });
  if (product) throw new AppError({ status: 409, message: errMessage.PRODUCT_EXISTS });

  return await db.models.Product.create({
    name: data.name,
    calories: data.calories,
    fats: data.fats,
    protein: data.protein,
    carbs: data.carbs,
    categoryId: data.categoryId,
    userId: userId
  });
};

const updateByUser = async function (data, user) {
  const product = await db.models.Product.findOne({ where: { id: data.id } });
  if (!product) throw new AppError({ status: 404, message: errMessage.PRODUCT_NOT_FOUND });

  console.log(data)
  return await db.models.Product.update({
      name: data.name,
      calories: data.calories,
      fats: data.fats,
      protein: data.protein,
      carbs: data.carbs,
      categoryId: data.categoryId
    },
    {
      where: {
          userId: user.id,
          id: data.id
      }
    });
};

const updateByAdmin = async function (data) {
  return await db.models.Product.update({
      name: data.name,
      calories: data.calories,
      fats: data.fats,
      protein: data.protein,
      carbs: data.carbs,
      categoryId: data.categoryId
    },
    {
      where: {
        id: data.id
      }
    });
};

const deleteByUser = (id, user) => {
  return db.models.Product.destroy({
    where: {
      [Op.and]: {
        userId: user.id,
        id: id
      }
    }
  });
};

const deleteByAdmin = (id) => {
  return db.models.Product.destroy({
    where: {
      id: id
    }
  });
};

module.exports = {
  getByName,
  getById,
  add,
  updateByUser,
  updateByAdmin,
  deleteByUser,
  deleteByAdmin
};
