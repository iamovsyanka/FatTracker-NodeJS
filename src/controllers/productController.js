const productService = require('../services/productService');
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
      const product = await productService.getById(req.body.id);
      res.type('json');
      res.end(JSON.stringify(product));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  },

  async getByCategory(req, res) {
    try {
      const products = await productService.getByCategory(req.query.id);
      res.type('json');
      res.end(JSON.stringify(products));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  },

  async add(req, res) {
    try {
      const addedProduct = await productService.add(req.body, req.user.id);
      res.type('json');
      res.end(JSON.stringify(addedProduct));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  },

  async updatePhotoByUser(req, res) {
    try {
      const updatedProduct = await productService.updatePhotoByUser(req, req.file);
      res.type('json');
      res.end(JSON.stringify(updatedProduct));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  },

  async updatePhotoByAdmin(req, res) {
    try {
      const updatedProduct = await productService.updatePhotoByAdmin(req, req.file);
      res.type('json');
      res.end(JSON.stringify(updatedProduct));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  },

  async updateByUser(req, res) {
    try {
      const updatedProduct = await productService.updateByUser(req.body, req.user);
      res.type('json');
      res.end(JSON.stringify(updatedProduct));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  },

  async updateByAdmin(req, res) {
    try {
      const updatedProduct = await productService.updateByAdmin(req.body);
      res.type('json');
      res.end(JSON.stringify(updatedProduct));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  },

  async deleteByUser(req, res) {
    try {
      const deletedProduct = await productService.deleteByUser(req.body.id, req.user);
      res.type('json');
      res.end(JSON.stringify(deletedProduct));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  },

  async deleteByAdmin(req, res) {
    try {
      const deletedProduct = await productService.deleteByAdmin(req.body.id);
      res.type('json');
      res.end(JSON.stringify(deletedProduct));
    } catch (ex) {
      return res.status(ex.status).json(new error({ status: ex.status, message: ex.message }));
    }
  }
};
