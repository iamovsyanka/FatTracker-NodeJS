const categoryService = require('../services/categoryService');
const errMessages = require('../errors/errMessages');
const error = require('../errors/appError');

module.exports = {
  async getAllCategories(req, res) {
    try {
      const categories = await categoryService.getAllCategories(req.query.page, req.query.size);
      res.end(JSON.stringify(categories));
    } catch (ex) {
      return res.status(500).json(new error({ status: 500, message: ex.message }));
    }
  },

  async addCategory(req, res) {
    try {
      if(!(req.body.name && req.file)) {
        return res.status(400).json(new error({ status: 400, message: errMessages.BAD_DATA }));
      }

      const newCategory = await categoryService.addCategory(req.body, req.file);
      res.end(JSON.stringify(newCategory));
    } catch (ex) {
      return res.status(500).json(new error({ status: 500, message: ex.message }));
    }
  },

  //TODO validation
  async updateCategory(req, res) {
    try {
      const updatedCategory = await categoryService.updateCategory(req.body, req.file);
      res.end(JSON.stringify(updatedCategory));
    } catch (ex) {
      return res.status(500).json(new error({ status: 500, message: ex.message }));
    }
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
