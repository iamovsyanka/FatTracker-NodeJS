const productService = require('../services/productService');
const errMessages = require('../errors/errMessages');
const error = require('../errors/appError');

module.exports = {
  async searchByName(req, res) {
    try {
      const products = await productService.getByName(req.body.name);
      res.type('json');
      res.end(JSON.stringify(products));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  },

  async getById(req, res) {
    try {
      if(!req.body.id) {
        return res.status(400).json(new error({ status: 400, message: errMessages.BAD_DATA }));
      }

      const product = await productService.getById(req.body.id);
      res.type('json');
      res.end(JSON.stringify(product));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  },

  async add(req, res) {
    try {
      if(!(req.body || req.user.id)) {
        return res.status(400).json(new error({ status: 400, message: errMessages.BAD_DATA }));
      }

      const addedProduct = await productService.add(req.body, req.user.id);
      res.type('json');
      res.end(JSON.stringify(addedProduct));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  },

  async updateByUser(req, res) {
    try {
      if(!(req.body || req.user)) {
        return res.status(400).json(new error({ status: 400, message: errMessages.BAD_DATA }));
      }

      const updatedProduct = await productService.updateByUser(req.body, req.user);
      res.type('json');
      res.end(JSON.stringify(updatedProduct));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  },

  async updateByAdmin(req, res) {
    try {
      if(!req.body) {
        return res.status(400).json(new error({ status: 400, message: errMessages.BAD_DATA }));
      }

      const updatedProduct = await productService.updateByAdmin(req.body);
      res.type('json');
      res.end(JSON.stringify(updatedProduct));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  },

  async deleteByUser(req, res) {
    try {
      if(!(req.body.id || req.user)) {
        return res.status(400).json(new error({ status: 400, message: errMessages.BAD_DATA }));
      }

      const deletedProduct = await productService.deleteByUser(req.body.id, req.user);
      res.type('json');
      res.end(JSON.stringify(deletedProduct));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  },

  async deleteByAdmin(req, res) {
    try {
      if(!req.query.id) {
        return res.status(400).json(new error({ status: 400, message: errMessages.BAD_DATA }));
      }

      const deletedProduct = await productService.deleteByAdmin(req.query.id);
      res.type('json');
      res.end(JSON.stringify(deletedProduct));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  }
};
