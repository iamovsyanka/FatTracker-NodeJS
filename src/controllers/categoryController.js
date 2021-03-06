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

  async addCategory(request, response) {
    await categoryService.addCategory(request.body.name, request.file)
      .then((result) => {
        response.type('json');
        response.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async updateCategory(request, response) {
    await categoryService.updateCategory(request.body, request.file)
      .then((result) => {
        response.type('json');
        response.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  },

  async deleteCategory(request, response) {
    await categoryService.deleteCategory(request.query.id)
      .then((result) => {
        response.type('json');
        response.end(JSON.stringify(result));
      })
      .catch((err) => {
        console.error(err.message);
      });
  }
};
