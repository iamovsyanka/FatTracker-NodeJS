const bcrypt = require('bcrypt');
const db = require('./db');
const token = require('./generateAccessToken');

const registerUser = async (data) => await db.models.User.create({
  email: data.email,
  firstName: data.firstName,
  lastName: data.lastName,
  password: data.password,
  verified: true,
  role: 'user',
});

const login = async function (data) {
  const user = await db.models.User.findOne({ where: { email: data.email } });
  if (!user || !(await bcrypt.compare(data.password, user.password))) {
    // return response.sendStatus(403);
  }

  return token(user.id, user.role);
};

module.exports = {
  registerUser,
  login,
};
