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

  async updatePhoto(request, response) {
    await productService.updatePhoto(request, request.file)
      .then((result) => {
        response.type('json');
        response.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  }
};
