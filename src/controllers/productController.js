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
};
