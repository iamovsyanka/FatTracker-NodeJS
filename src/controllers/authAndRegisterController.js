const userService = require('../services/userService');
const { HTTP_HEADER_AUTHORIZATION } = require('../config/config');
const errMessages = require('../errors/errMessages');
const error = require('../errors/appError');

module.exports = {
  async auth(req, res) {
    try {
      if (!(req.body.email && req.body.password)) {
        return res.status(400).json(new error({ status: 400, message: errMessages.BAD_DATA }));
      }

      const token = await userService.login(req.body);
      res.header(HTTP_HEADER_AUTHORIZATION, token).send({ token });
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message}));
    }
  },

  async register(req, res) {
    try {
      if (!(req.body.email && req.body.password && req.body.name)) {
        return res.status(400).json(new error({ status: 400, message: errMessages.BAD_DATA }));
      }

      const newUser = await userService.registration(req.body);
      res.type('json');
      res.end(JSON.stringify(newUser));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: 500, message: ex.message}));
    }
  },

  async verifyAccount(req, res) {
    try {
      if (req.query.token) {
        const user = await userService.verifyAccount(req.query.token);
        let page = '<body style="background: rgba(99,226,130,0.82);">' +
          '<h1 style="font-size: 45px; color: rgba(245,248,242,0.82); ' +
          'text-align: center; margin: auto;">' +
          `Thank you for the email confirmations, ${user.name}!</h1>` +
          '</body>';

        res.type('html');
        res.end(page);
      }
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message}));
    }
  }
};
