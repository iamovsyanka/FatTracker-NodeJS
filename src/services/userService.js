const bcrypt = require('bcrypt');
const db = require('../db/db');
const jwtToken = require('../token/jwt');
const fileLoader = require('../fileLoader/fileLoader');
const confirm = require('../mail/confirm');

const registerUser = async (data) => {
  await db.models.User.create({
    email: data.email,
    name: data.name,
    password: data.password,
    verified: false
  }).catch(err => console.error(err));

  await confirm(data.email);
};

const login = async function (data) {
  const user = await db.models.User.findOne({ where: { email: data.email } });
  if (!user || !(await bcrypt.compare(data.password, user.password))) {
    // return response.sendStatus(403);
  }

  return jwtToken.generateAccessToken(user.id, user.role);
};

const verifyAccount =  async function(token) {
  try {
    const decodedToken = jwtToken.verifyToken(token);
    const existUser = await db.models.User.findOne({ where: { email: decodedToken.email } });

    //if (!existUser) throw new AppError({status: 404, message: errorMessages.USER_NOT_FOUND});

    return await existUser.update({verified: true});
  } catch (err) {
    // if (err instanceof AppError) throw err;
    // throw new AppError({err: err});
  }
};

const updateInformation = async function(data) {
  return await db.models.User.update({
    height: data.body.height,
    desiredWeight: data.body.desiredWeight,
    birthDay: data.body.birthDay,
    sex: data.body.sex,
    activity: data.body.activity
  },{
      where:{
        id: data.user.id
      }
  })
};

const updatePhoto = async function(data, file) {
  let photo;
  if (file) {
    const fileNameArray = file.originalname.split('.');
    const fileFormat = fileNameArray[fileNameArray.length - 1];
    if (fileNameArray.length === 1 || !(fileFormat === 'png' || fileFormat === 'jpg' || fileFormat === 'jpeg'))
      //throw new AppError({status: 400, message: errorMessages.WRONG_PHOTO_FORMAT});

      console.log(fileLoader.savePhoto(file, 'users'));
      photo = await fileLoader.savePhoto(file, 'users');
  }

  return await db.models.User.update({ photo: photo }, { where: { id: data.user.id }});
};

const countCalories = async function(data) {
  const user = await db.models.User.find({ where: {
      id: data.user.id
    }
  });

  const calories = 9.99 * user;
};

module.exports = {
  registerUser,
  login,
  verifyAccount,
  updateInformation,
  updatePhoto
};
