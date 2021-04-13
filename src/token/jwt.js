const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY, EXPIRES_IN, AUTHORIZATION_SCHEMA } = require('../config/config');

module.exports = {
  generateAccessToken(id, role) {
    return jwt.sign({ id, role }, JWT_SECRET_KEY, { expiresIn: EXPIRES_IN });
  },

  verifyToken(token) {
    return jwt.verify(
      token.replace(AUTHORIZATION_SCHEMA, '').replace(' ', ''),
      JWT_SECRET_KEY
    );
  }
};
