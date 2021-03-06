const db = require('../db/db');
const { Op } = require('sequelize');
const fileLoader = require('../fileLoader/fileLoader');

const getAllProducts = async () => await db.models.Product.findAll();

const getProductsByCategory = async function(id) {
  return await db.models.Product.findAll({
      include: [{ model: db.models.Category, as: 'Category', required: true}],
      where: { categoryId: id }
    })
};

const addProduct = async function(data, userId) {
  const product = await db.models.Product.findOne({ where: { name: data.name }});

  if (product) {

  }
  else {
    return await db.models.Product.create({
      name: data.name,
      calories: data.calories,
      fats: data.fats,
      protein: data.protein,
      carbs: data.carbs,
      brandName: data.brandName,
      categoryId: data.categoryId,
      userId: userId
    })
  }
};

const updatePhoto = async function(data, file) {
  let photo;
  if (file) {
    const fileNameArray = file.originalname.split('.');
    const fileFormat = fileNameArray[fileNameArray.length - 1];
    if (fileNameArray.length === 1 || !(fileFormat === 'png' || fileFormat === 'jpg' || fileFormat === 'jpeg'))
      //throw new AppError({status: 400, message: errorMessages.WRONG_PHOTO_FORMAT});
    {}
    photo = await fileLoader.savePhoto(file, 'products');
  }

  return await db.models.Product.update({ photo: photo }, { where: {
        [Op.and]: {
          userId: data.user.id,
          id: data.body.id
      }}});
};

module.exports = {
  getAllProducts,
  getProductsByCategory,
  addProduct,
  updatePhoto
};
