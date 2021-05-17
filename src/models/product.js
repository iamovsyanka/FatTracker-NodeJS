module.exports = function (sequelize, DataTypes) {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    calories: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    fats: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    protein: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    carbs: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'products'
  });

  Product.associate = function (models) {
    Product.belongsTo(models.Category, {
      as: 'Category',
      foreignKey: 'categoryId',
      onDelete: 'CASCADE'
    });

    Product.hasMany(models.Meal, {
      as: 'meals',
      foreignKey: 'productId'
    });

    Product.belongsTo(models.User, {
      as: 'User',
      foreignKey: 'userId'
    });
  };

  return Product;
};
