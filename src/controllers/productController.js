const productService = require('../services/productService');

module.exports = {
  async getAllProducts(request, response) {
    await productService.getAllProducts()
      .then((result) => {
        response.type('json');
        response.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async getAllProductsByCategory(request, response) {
    await productService.getProductsByCategory(request.query.id)
      .then((result) => {
        response.type('json');
        response.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async addProduct(request, response) {
    await productService.addProduct(request.body, request.user.id)
      .then((result) => {
        response.type('json');
        response.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async updatePhotoByUser(request, response) {
    await productService.updatePhotoByUser(request, request.file)
      .then((result) => {
        response.type('json');
        response.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async updatePhotoByAdmin(request, response) {
    await productService.updatePhotoByUser(request, request.file)
      .then((result) => {
        response.type('json');
        response.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async updateProductByUser(request, response) {
    await productService.updateProductByUser(request.body, request.user)
      .then((result) => {
        response.type('json');
        response.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async updateProductByAdmin(request, response) {
    await productService.updateProductByAdmin(request.body)
      .then((result) => {
        response.type('json');
        response.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async deleteProductByUser(request, response) {
    await productService.deleteProductByUser(request.body.id, request.user)
      .then((result) => {
        response.type('json');
        response.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async deleteProductByAdmin(request, response) {
    await productService.deleteProductByAdmin(request.body.id)
      .then((result) => {
        response.type('json');
        response.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  }
};
