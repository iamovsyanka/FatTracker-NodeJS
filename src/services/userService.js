const bcrypt = require('bcrypt');
const db = require('../db/db');
const jwtToken = require('../token/jwt');
const confirm = require('../mail/confirm');
const AppError = require('../errors/appError');
const errMessage = require('../errors/errMessages');

function getAge(birthday) {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let dob = new Date(birthday);
  let dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
  let age;

  age = today.getFullYear() - dob.getFullYear();
  if (today < dobnow) {
    age = age - 1;
  }

  return age;
}

function f() {

}

const registration = async (data) => {
  const user = await db.models.User.findOne({ where: { email: data.email } });
  if (user) {
    throw new AppError({ status: 409, message: errMessage.USER_EXISTS });
  } else {
    const newUser = await db.models.User.create({
      email: data.email,
      name: data.name,
      password: data.password,
      verified: false,
      role: 'user'
    });
    await confirm(data.email);

    return newUser;
  }
};

const login = async function (data) {
  const user = await db.models.User.findOne({ where: { email: data.email } });
  if (!user) throw new AppError({ status: 404, message: errMessage.USER_NOT_FOUND });
  if (!(await bcrypt.compare(data.password, user.password))) {
    throw new AppError({ status: 401, message: errMessage.WRONG_PASSWORD });
  }
  if(!user.verified) {
    throw new AppError({ status: 403, message: errMessage.EMAIL_NOT_CONFIRMED });
  }

  return jwtToken.generateAccessToken(user.id, user.role);
};

const verifyAccount = async function (token) {
  const decodedToken = jwtToken.verifyToken(token);
  const existUser = await db.models.User.findOne({ where: { email: decodedToken.email } });

  if (!existUser) throw new AppError({ status: 404, message: errMessage.USER_NOT_FOUND });

  return await existUser.update({ verified: true });
};

const updateInformation = async function (data) {
  const user = await db.models.User.findOne({ where: { id: data.user.id } });
  if (!user) {
    throw new AppError({ status: 404, message: errMessage.USER_NOT_FOUND });
  } else {
    return await db.models.User.update({
      height: data.body.height,
      weight: data.body.weight,
      birthDay: data.body.birthDay,
      sex: data.body.sex.name,
      activity: data.body.activity
    }, {
      where: {
        id: data.user.id
      }
    });
  }
};

const countCalories = async function (id) {
  const user = await db.models.User.findOne({
    where: {
      id: id
    }
  });

  let calories = 0;
  if (user.sex === 'men') {
    calories = (9.99 * user.weight + 6.25 * user.height - 4.92 * getAge(user.birthDay) + 5) * user.activity;
  } else if (user.sex === 'women') {
    calories = (9.99 * user.weight + 6.25 * user.height - 4.92 * getAge(user.birthDay) - 161) * user.activity;
  }

  return await db.models.User.update({
    requiredCalories: calories.toFixed(1)
  }, {
    where: {
      id: id
    }
  });
};

const getInfo = async function (id) {
  return await db.models.User.findOne({
    where: {
      id: id
    }
  });
};

const deleteUser = function (id) {
  return db.models.User.destroy({
    where: {
      id: id
    }
  });
};

const deleteUserByAdmin = function (id) {
  return db.models.User.destroy({
    where: {
      id: id
    }, paranoid: false
  });
};

const restoreUserByAdmin = function (id) {
  return db.models.User.update({ deletedAt: null }, {
    where: {
      id: id
    }, paranoid: false
  });
};

const restoreUser = function (data) {
  return db.models.User.update({ deletedAt: null }, {
    where: {
      email: data.email,
      password: data.password
    }, paranoid: true
  });
};

module.exports = {
  registration,
  login,
  verifyAccount,
  updateInformation,
  getInfo,
  deleteUser,
  deleteUserByAdmin,
  restoreUserByAdmin,
  restoreUser,
  countCalories
};
