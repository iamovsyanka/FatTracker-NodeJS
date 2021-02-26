const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY, EXPIRES_IN } = require('../config/config');

module.exports = generateAccessToken = (id, role) => {
    return jwt.sign( {id, role}, JWT_SECRET_KEY, { expiresIn: EXPIRES_IN })
};
