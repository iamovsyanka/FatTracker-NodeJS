const db = require('../services/db');

const getAllCategories = async () =>
    await db.models.Category.findAll();

module.exports = {
    getAllCategories
};
