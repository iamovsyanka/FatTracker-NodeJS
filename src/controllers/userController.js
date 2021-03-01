const userService = require('../services/userService');

module.exports = {
  async updateHeightAndWeight(request, response) {
    await userService.updateHeightAndWeight(request)
      .then((result) => {
        response.type('json');
        response.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async updateCurrentWeight(request, response) {
    await userService.updateHeightAndWeight(request)
      .then((result) => {
        response.type('json');
        response.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },
};
