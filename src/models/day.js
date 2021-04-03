module.exports = function (sequelize, DataTypes) {
  const Day = sequelize.define('Day', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    totalCalories: {
      type: new DataTypes.VIRTUAL(DataTypes.INTEGER), get: () => {
        let calories = 0;
        calories += meals.forEach((meal)=>{calories+meal.weight});
      }
    },
    totalFats: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    totalProtein: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    totalCarbs: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    tableName: 'days',
  });

  Day.associate = function (models) {
    Day.belongsTo(models.User, {
      as: 'User',
      foreignKey: 'userId'
    });

    Day.hasMany(models.Meal, {
      as: 'meals',
      foreignKey: 'dayId',
    });
  };

  return Day;
};
