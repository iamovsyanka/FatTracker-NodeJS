const userService = require('../services/userService');
const error = require('../errors/appError');

module.exports = {
  async updateInformation(req, res) {
    try {
      const updatedUser = await userService.updateInformation(req);
      res.type('json');
      res.end(JSON.stringify(updatedUser));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  },

  async countCalories(req, res) {
    try {
      const updatedUser = await userService.countCalories(req.user.id);
      res.type('json');
      res.end(JSON.stringify(updatedUser));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  },

  async getInfo(req, res) {
    try {
      const user = await userService.getInfo(req.user.id);
      res.type('json');
      res.end(JSON.stringify(user));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  },

  async deleteUser(req, res) {
    try {
      const deletedUser = await userService.deleteUser(req.user.id);
      res.end(JSON.stringify(deletedUser));
    } catch (ex) {
      return res.status(500).json(new error({ status: 500, message: ex.message }));
    }
  },

  async deleteUserByAdmin(req, res) {
    try {
      const deletedUser = await userService.deleteUser(req.body.id);
      res.end(JSON.stringify(deletedUser));
    } catch (ex) {
      return res.status(500).json(new error({ status: 500, message: ex.message }));
    }
  },

  async restoreUser(req, res) {
    try {
      const restoredUser = await userService.restoreUser(req.body);
      res.end(JSON.stringify(restoredUser));
    } catch (ex) {
      return res.status(500).json(new error({ status: 500, message: ex.message }));
    }
  },

  async restoreUserByAdmin(req, res) {
    try {
      const restoredUser = await userService.restoreUserByAdmin(req.body.id);
      res.end(JSON.stringify(restoredUser));
    } catch (ex) {
      return res.status(500).json(new error({ status: 500, message: ex.message }));
    }
  }
};
