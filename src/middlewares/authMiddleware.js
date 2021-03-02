const jwtToken = require('../token/jwt');

const authMiddleware = (request, response, next) => {
  const token = request.header('Authorization');
  if (!token) {
    response.status(401).end();
  }
  try {
    request.user = jwtToken.verifyToken(token);
  } catch (error) {
    response.status(400).end();
  }

  next();
};

module.exports = authMiddleware;
