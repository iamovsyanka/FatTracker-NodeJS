const dayService = require('../services/dayService');

module.exports = {
  async updateCurrentWeight(request, response) {
    await dayService.updateCurrentWeight(request)
      .then((result) => {
        response.type('json');
        response.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

};
