const dayService = require('../services/dayService');
const error = require('../errors/appError');

module.exports = {
  async add(req, res) {
    try {
      const addedDay = await dayService.add(req);
      res.type('json');
      res.end(JSON.stringify(addedDay));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  },

  async get(req, res) {
    try {
      const day = await dayService.get(req);
      res.type('json');
      res.end(JSON.stringify(day));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  },

  async getAllByUser(req, res) {
    try {
      const day = await dayService.getAllByUser(req.user.id);
      res.type('json');
      res.end(JSON.stringify(day));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  },

  async getSinceDate(req, res) {
    try {
      const day = await dayService.getSinceDate(req.user.id, req.body.date);
      res.type('json');
      res.end(JSON.stringify(day));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  }
};
