const userService = require('../services/userService');

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
  }
};
