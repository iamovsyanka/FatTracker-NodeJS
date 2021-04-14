const productService = require('../services/productService');

module.exports = {
  async getAllProducts(req, res) {
    await productService.getAllProducts()
      .then((result) => {
        res.type('json');
        res.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async getAllProductsByCategory(req, res) {
    await productService.getProductsByCategory(req.query.id)
      .then((result) => {
        res.type('json');
        res.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
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
