const categoryService = require('../services/categoryService');

module.exports = {
  async getAllCategories(req, res) {
    await categoryService.getAllCategories()
      .then((result) => {
        res.type('json');
        res.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async addCategory(req, res) {
    await categoryService.addCategory(req.body.name, req.file)
      .then((result) => {
        res.type('json');
        res.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async updateCategory(req, res) {
    await categoryService.updateCategory(req.body, req.file)
      .then((result) => {
        res.type('json');
        res.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async deleteCategory(req, res) {
    await categoryService.deleteCategory(req.query.id)
      .then((result) => {
        res.type('json');
        res.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  }
};
