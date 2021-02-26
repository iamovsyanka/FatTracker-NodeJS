const categoryService = require('../services/categoryService');

module.exports = {
  async getAllCategories(request, response) {
    await categoryService.getAllCategories()
      .then((result) => {
        response.type('json');
        response.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },
};
