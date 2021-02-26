const userService = require('../services/userService');
const { HTTP_HEADER_AUTHORIZATION } = require('../config/config');

module.exports = {
  async authUser(request, response) {
    if (!(request.body.email && request.body.password)) {

    }
    await userService.login(request.body)
      .then((token) => {
        response
          .header(HTTP_HEADER_AUTHORIZATION, token)
          .send({ token });
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async registerUser(request, response) {
    await userService.registerUser(request.body)
      .then((result) => {
        response.type('json');
        response.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },
};
