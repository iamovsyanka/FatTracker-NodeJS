const enums = require('./enums/enums');

module.exports = function (sequelize, DataTypes) {
  const Meal = sequelize.define('Meal', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    dayId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    meal: {
      type: DataTypes.STRING(DataTypes.ENUM(enums.meals)),
      allowNull: false
    }
  }, {
    tableName: 'meals'
  });

  Meal.associate = function (models) {
    Meal.belongsTo(models.Product, {
      as: 'Product',
      foreignKey: 'productId'
    });

    Meal.belongsTo(models.Day, {
      as: 'Day',
      foreignKey: 'dayId'
    });
  };

  Meal.prototype.toJSON = function () {
    return {
      id: +this.id,
      dayId: +this.dayId,
      productId: +this.productId,
      productName: this.productName,
      weight: +this.weight,
      totalCalories: +this.totalCalories,
      totalFats: +this.totalFats,
      totalProtein: +this.totalProtein,
      totalCarbs: +this.totalCarbs,
      meal: this.meal
    }
  };

  return Meal;
};
