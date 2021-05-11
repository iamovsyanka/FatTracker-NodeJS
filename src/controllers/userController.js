const userService = require('../services/userService');
const errMessages = require('../errors/errMessages');
const error = require('../errors/appError');

module.exports = {
  async updateInformation(req, res) {
    await userService.updateInformation(req)
      .then((result) => {
        res.type('json');
        res.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async updatePhoto(req, res) {
    await userService.updatePhoto(req, req.file)
      .then((result) => {
        res.type('json');
        res.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async getInfo(req, res) {
    try {
      const user = await userService.getInfo(req.user.id);
      res.end(JSON.stringify(user));
    } catch (ex) {
      return res.status(500).json(new error({ status: 500, message: ex.message }));
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
