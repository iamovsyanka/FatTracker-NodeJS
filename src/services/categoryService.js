const db = require('./db');

const getAllCategories = async () => await db.models.Category.findAll();

module.exports = {
  getAllCategories,
};
