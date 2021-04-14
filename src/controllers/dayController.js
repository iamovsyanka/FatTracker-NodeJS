const dayService = require('../services/dayService');

module.exports = {
  async addDay(req, res) {
    await dayService.addDay(req)
      .then((result) => {
        res.type('json');
        res.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async getDay(req, res) {
    await dayService.getDay(req)
      .then((result) => {
        res.type('json');
        res.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async updateCurrentWeight(req, res) {
    await dayService.updateCurrentWeight(req)
      .then((result) => {
        res.type('json');
        res.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  }

};
