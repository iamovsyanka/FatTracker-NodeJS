const db = require('../services/db');

const registerUser = async (data) =>
    await db.models.User.create({
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password,
        verified: true,
        role: 'user'
    });

module.exports = {
        registerUser
};
