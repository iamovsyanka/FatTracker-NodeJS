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

const updateHeightAndWeight = async function(data) {
  return await db.models.User.update({
    height: data.body.height,
    desiredWeight: data.body.desiredWeight
  },{
      where:{
        id: data.user.id
      }
  })
};

module.exports = {
  registerUser,
  login,
  updateHeightAndWeight
};
