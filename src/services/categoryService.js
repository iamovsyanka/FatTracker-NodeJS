const db = require('../db/db');
const fileLoader = require('../fileLoader/fileLoader');

const getAllCategories = async (page, limit) => await db.models.Category.findAndCountAll({
  limit: limit,
  offset: page ? page * limit : 0
});

const addCategory = async (data, file) => {
  const category = await db.models.Category.findOne({ where: { name: data.name } });

  if (category) {

  } else {
    let photo;
    if (file) {
      const fileNameArray = file.originalname.split('.');
      const fileFormat = fileNameArray[fileNameArray.length - 1];
      if (fileNameArray.length === 1 || !(fileFormat === 'png' || fileFormat === 'jpg' || fileFormat === 'jpeg'))
        //throw new AppError({status: 400, message: errorMessages.WRONG_PHOTO_FORMAT});
      {
      }
      photo = await fileLoader.savePhoto(file, 'categories');
    }

    return await db.models.Category.create({
      name: data.name,
      description: data.description,
      photo: photo
    });
  }
};

const updateCategory = async (data, file) => {
  let photo;
  if (file) {
    const fileNameArray = file.originalname.split('.');
    const fileFormat = fileNameArray[fileNameArray.length - 1];
    if (fileNameArray.length === 1 || !(fileFormat === 'png' || fileFormat === 'jpg' || fileFormat === 'jpeg'))
      //throw new AppError({status: 400, message: errorMessages.WRONG_PHOTO_FORMAT});
    {
    }
    photo = await fileLoader.savePhoto(file, 'categories');
  }

  return await db.models.Category.update({
    name: data.name,
    photo: photo
  }, {
    where: {
      id: data.id
    }
  });
};

const deleteCategory = (id) => {
  return db.models.Category.destroy({ where: { id: id } });
};

module.exports = {
  getAllCategories,
  addCategory,
  updateCategory,
  deleteCategory
};
