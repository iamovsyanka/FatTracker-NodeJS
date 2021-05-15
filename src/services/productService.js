const db = require('../db/db');
const { Op } = require('sequelize');
const fileLoader = require('../fileLoader/fileLoader');

const getByCategory = async function (id) {
  return await db.models.Product.findAll({
    include: [{ model: db.models.Category, as: 'Category', required: true }],
    where: { categoryId: id }
  });
};

const getById = async function (id) {
  return await db.models.Product.findOne({
    where: { id: id }
  });
};

const getByName = async function (name) {
  return await db.models.Product.findAll({
    where: db.sequelize.where(
      db.sequelize.fn('lower', db.sequelize.col('name')),
     {[Op.like]: `${name.toLowerCase()}%`})
  });
};

const add = async function (data, userId) {
  const product = await db.models.Product.findOne({ where: { name: data.name } });

  if (product) {

  } else {
    return await db.models.Product.create({
      name: data.name,
      calories: data.calories,
      fats: data.fats,
      protein: data.protein,
      carbs: data.carbs,
      brandName: data.brandName,
      categoryId: data.categoryId,
      userId: userId
    });
  }
};

const updatePhotoByUser = async function (data, file) {
  let photo;
  if (file) {
    const fileNameArray = file.originalname.split('.');
    const fileFormat = fileNameArray[fileNameArray.length - 1];
    if (fileNameArray.length === 1 || !(fileFormat === 'png' || fileFormat === 'jpg' || fileFormat === 'jpeg'))
      //throw new AppError({status: 400, message: errorMessages.WRONG_PHOTO_FORMAT});
    {
    }
    photo = await fileLoader.savePhoto(file, 'products');
  }

  return await db.models.Product.update({ photo: photo }, {
    where: {
      [Op.and]: {
        userId: data.user.id,
        id: data.body.id
      }
    }
  });
};

const updatePhotoByAdmin = async function (data, file) {
  let photo;
  if (file) {
    const fileNameArray = file.originalname.split('.');
    const fileFormat = fileNameArray[fileNameArray.length - 1];
    if (fileNameArray.length === 1 || !(fileFormat === 'png' || fileFormat === 'jpg' || fileFormat === 'jpeg'))
      //throw new AppError({status: 400, message: errorMessages.WRONG_PHOTO_FORMAT});
    {
    }
    photo = await fileLoader.savePhoto(file, 'products');
  }

  return await db.models.Product.update({ photo: photo }, {
    where: {
      id: data.body.id
    }
  });
};

const updateByUser = async function (data, user) {
  return await db.models.Product.update({
      name: data.name,
      calories: data.calories,
      fats: data.fats,
      protein: data.protein,
      carbs: data.carbs,
      brandName: data.brandName,
      categoryId: data.categoryId
    },
    {
      where: {
        [Op.and]: {
          userId: user.id,
          id: data.id
        }
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
      brandName: data.brandName,
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
  getByCategory,
  getByName,
  getById,
  add,
  updatePhotoByUser,
  updatePhotoByAdmin,
  updateByUser,
  updateByAdmin,
  deleteByUser,
  deleteByAdmin
};
