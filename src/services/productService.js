const db = require('../db/db');

const createProduct = async function(data) {
  return await db.models.Product.create({
    name: data.name,
    weight: data.body.weight,
    userId: data.user.id,
    requiredCalories: 1500
  })
};
