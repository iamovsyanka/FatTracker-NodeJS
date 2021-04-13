const dayService = require('../services/dayService');

module.exports = {
  async addDay(request, response) {
    await dayService.addDay(request)
      .then((result) => {
        response.type('json');
        response.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async getDay(request, response) {
    await dayService.getDay(request)
      .then((result) => {
        response.type('json');
        response.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async updateCurrentWeight(request, response) {
    await dayService.updateCurrentWeight(request)
      .then((result) => {
        response.type('json');
        response.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  }

};
