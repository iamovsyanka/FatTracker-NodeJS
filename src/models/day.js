module.exports = function (sequelize, DataTypes) {
  const Day = sequelize.define('Day', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    totalCalories: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    requiredCalories: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'days',
  });

  Day.associate = function (models) {
    Day.belongsTo(models.User, {
      as: 'User',
      foreignKey: 'userId',
    });

    Day.hasMany(models.Meal, {
      as: 'meals',
      foreignKey: 'dayId',
    });
  };

  return Day;
};
