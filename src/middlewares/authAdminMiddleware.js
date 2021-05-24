const jwtToken = require('../token/jwt');

const authMiddleware = (request, response, next) => {
  const token = request.header('Authorization');
  if (!token) {
    response.status(401).end();
  }
  try {
    request.user = jwtToken.verifyToken(token);
    if (request.user.role !== 'admin') {
      response.status(403).end();
    }

    next();
  } catch (error) {
    response.status(400).end();
  }
};

module.exports = authMiddleware;
