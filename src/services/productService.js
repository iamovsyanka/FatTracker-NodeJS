const db = require('../db/db');
const fileLoader = require('../fileLoader/fileLoader');

const getAllProducts = async () => await db.models.Product.findAll();

module.exports = {
  getAllProducts,
};
