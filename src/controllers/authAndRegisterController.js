const userService = require('../services/userService');
const { HTTP_HEADER_AUTHORIZATION } = require('../config/config');
const errMessages = require('../errors/errMessages');
const error = require('../errors/appError');

module.exports = {
  async authUser(req, res) {
    if (!(req.body.email && req.body.password)) {
      return res.status(400).json(new error({status: 400, message: errMessages.BAD_DATA}));
    }
    await userService.login(req.body)
      .then((token) => {
        res
          .header(HTTP_HEADER_AUTHORIZATION, token)
          .send({ token });
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async registerUser(req, res) {
    if (!(req.body.email && req.body.password && req.body.name)) {
      return res.status(400).json(new error({status: 400, message: errMessages.BAD_DATA}));
    }
    await userService.registration(req.body)
      .then((result) => {
        res.type('json');
        res.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async verifyAccount(req, res) {
    console.log(req.query);
    if (req.query.token) {
      await userService.verifyAccount(req.query.token)
        .then((result) => {
          res.type('json');
          res.end(JSON.stringify(result));
        })
        .catch((err) => {
          console.error(err.message);
        });
    }
  }
};
