const productService = require('../services/productService');
const errMessages = require('../errors/errMessages');
const error = require('../errors/appError');

module.exports = {
  async getAllProducts(req, res) {
    try {
      const products = await productService.getAllProducts();
      res.end(JSON.stringify(products));
    } catch (ex) {
      return res.status(500).json(new error({ status: 500, message: ex.message }));
    }
  },

  async searchByName(req, res) {
    try {
      const products = await productService.getProductsByName(req.query.name);
      res.end(JSON.stringify(products));
    } catch (ex) {
      return res.status(500).json(new error({ status: 500, message: ex.message, stack: ex.stack }));
    }
  },

  async getAllProductsByCategory(req, res) {
    try {
      const products = await productService.getProductsByCategory(req.query.id);
      res.end(JSON.stringify(products));
    } catch (ex) {
      return res.status(500).json(new error({ status: 500, message: ex.message }));
    }
  },

  async addProduct(req, res) {
    await productService.addProduct(req.body, req.user.id)
      .then((result) => {
        res.type('json');
        res.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async updatePhotoByUser(req, res) {
    await productService.updatePhotoByUser(req, req.file)
      .then((result) => {
        res.type('json');
        res.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async updatePhotoByAdmin(req, res) {
    await productService.updatePhotoByUser(req, req.file)
      .then((result) => {
        res.type('json');
        res.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async updateProductByUser(req, res) {
    await productService.updateProductByUser(req.body, req.user)
      .then((result) => {
        res.type('json');
        res.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async updateProductByAdmin(req, res) {
    await productService.updateProductByAdmin(req.body)
      .then((result) => {
        res.type('json');
        res.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async deleteProductByUser(req, res) {
    await productService.deleteProductByUser(req.body.id, req.user)
      .then((result) => {
        res.type('json');
        res.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async deleteProductByAdmin(req, res) {
    await productService.deleteProductByAdmin(req.body.id)
      .then((result) => {
        res.type('json');
        res.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  }
};
