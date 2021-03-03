const db = require('../db/db');
const fileLoader = require('../fileLoader/fileLoader');

const getAllCategories = async () => await db.models.Category.findAll();

const addCategory = async (name, file) => {
  const category = await db.models.Category.findOne({ where: { name: name }});

  if (category) {

  }
  else {
    let photo;
    if (file) {
      const fileNameArray = file.originalname.split('.');
      const fileFormat = fileNameArray[fileNameArray.length - 1];
      if (fileNameArray.length === 1 || !(fileFormat === 'png' || fileFormat === 'jpg' || fileFormat === 'jpeg'))
        //throw new AppError({status: 400, message: errorMessages.WRONG_PHOTO_FORMAT});
      {}
      photo = await fileLoader.savePhoto(file, 'categories');
    }

    return await db.models.Category.create({
      name: name,
      photo: photo
    })
  }
};

module.exports = {
  getAllCategories,
  addCategory
};
