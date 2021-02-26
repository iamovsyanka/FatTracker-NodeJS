const jwt = require('jsonwebtoken');
const { AUTHORIZATION_SCHEMA, JWT_SECRET_KEY } = require('../config/config');

const authMiddleware = (request, response, next) => {
  const token = request.header('Authorization');
  if (!token) {
    response.status(401).end();
  }
  try {
    request.user = jwt.verify(
      token.replace(AUTHORIZATION_SCHEMA, '').replace(' ', ''),
      JWT_SECRET_KEY
    );
  } catch (error) {
    response.status(400).end();
  }

  next();
};

module.exports = authMiddleware;
