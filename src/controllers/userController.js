const userService = require('../services/userService');
const errMessages = require('../errors/errMessages');
const error = require('../errors/appError');

module.exports = {
  async updateInformation(req, res) {
    try {
      if (!(req.user.id || req.body)) {
        return res.status(400).json(new error({ status: 400, message: errMessages.BAD_DATA }));
      }

      const updatedUser = await userService.updateInformation(req);
      res.type('json');
      res.end(JSON.stringify(updatedUser));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  },

  async countCalories(req, res) {
    try {
      if (!req.user.id) {
        return res.status(400).json(new error({ status: 400, message: errMessages.BAD_DATA }));
      }

      const updatedUser = await userService.countCalories(req.user.id);
      res.type('json');
      res.end(JSON.stringify(updatedUser));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  },

  async getInfo(req, res) {
    try {
      if (!req.user.id) {
        return res.status(400).json(new error({ status: 400, message: errMessages.BAD_DATA }));
      }

      const user = await userService.getInfo(req.user.id);
      res.type('json');
      res.end(JSON.stringify(user));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  },

  async deleteUser(req, res) {
    try {
      if (!req.user.id) {
        return res.status(400).json(new error({ status: 400, message: errMessages.BAD_DATA }));
      }

      const deletedUser = await userService.deleteUser(req.user.id);
      res.type('json');
      res.end(JSON.stringify(deletedUser));
    } catch (ex) {
      return res.status(500).json(new error({ status: 500, message: ex.message }));
    }
  },

  async deleteUserByAdmin(req, res) {
    try {
      if (!req.body.id) {
        return res.status(400).json(new error({ status: 400, message: errMessages.BAD_DATA }));
      }

      const deletedUser = await userService.deleteUserByAdmin(req.body.id);
      res.type('json');
      res.end(JSON.stringify(deletedUser));
    } catch (ex) {
      return res.status(500).json(new error({ status: 500, message: ex.message }));
    }
  },

  async restoreUser(req, res) {
    try {
      if (!req.body) {
        return res.status(400).json(new error({ status: 400, message: errMessages.BAD_DATA }));
      }

      const restoredUser = await userService.restoreUser(req.body);
      res.type('json');
      res.end(JSON.stringify(restoredUser));
    } catch (ex) {
      return res.status(500).json(new error({ status: 500, message: ex.message }));
    }
  },

  async restoreUserByAdmin(req, res) {
    try {
      if (!req.body.id) {
        return res.status(400).json(new error({ status: 400, message: errMessages.BAD_DATA }));
      }

      const restoredUser = await userService.restoreUserByAdmin(req.body.id);
      res.type('json');
      res.end(JSON.stringify(restoredUser));
    } catch (ex) {
      return res.status(500).json(new error({ status: 500, message: ex.message }));
    }
  }
};
