const dayService = require('../services/dayService');
const error = require('../errors/appError');

module.exports = {
  async addDay(req, res) {
    try {
      const day = await dayService.addDay(req);
      res.end(JSON.stringify(day));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  },

  async getDay(req, res) {
    try {
      const day = await dayService.getDay(req);
      res.end(JSON.stringify(day));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  }
};
