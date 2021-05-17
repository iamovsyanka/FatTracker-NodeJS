const categoryService = require('../services/categoryService');
const errMessages = require('../errors/errMessages');
const error = require('../errors/appError');

module.exports = {
  async getAll(req, res) {
    try {
      const categories = await categoryService.getAll(req.query.page, req.query.size);
      res.type('json');
      res.end(JSON.stringify(categories));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  },

  async getAllName(req, res) {
    try {
      const categories = await categoryService.getAllName();
      res.type('json');
      res.end(JSON.stringify(categories));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  },

  async add(req, res) {
    try {
      if (!(req.body.name && req.file)) {
        return res.status(400).json(new error({ status: 400, message: errMessages.BAD_DATA }));
      }

      const addedCategory = await categoryService.add(req.body, req.file);
      res.type('json');
      res.end(JSON.stringify(addedCategory));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  },

  async update(req, res) {
    try {
      const updatedCategory = await categoryService.update(req.body, req.file);
      res.type('json');
      res.end(JSON.stringify(updatedCategory));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  },

  async delete(req, res) {
    try {
      const deletedCategory = await categoryService.drop(req.query.id);
      res.type('json');
      res.end(JSON.stringify(deletedCategory));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  }
};
