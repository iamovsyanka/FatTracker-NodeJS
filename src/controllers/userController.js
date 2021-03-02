const userService = require('../services/userService');

module.exports = {
  async updateInformation(request, response) {
    await userService.updateInformation(request)
      .then((result) => {
        response.type('json');
        response.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async updatePhoto(request, response) {
    await userService.updatePhoto(request, request.file)
      .then((result) => {
        response.type('json');
        response.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  }
};
