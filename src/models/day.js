module.exports = function (sequelize, DataTypes) {
  const Day = sequelize.define('Day', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'days'
  });

  Day.associate = function (models) {
    Day.belongsTo(models.User, {
      as: 'User',
      foreignKey: 'userId'
    });

    Day.hasMany(models.Meal, {
      as: 'meals',
      foreignKey: 'dayId'
    });
  };

  Day.prototype.toJSON = function () {
    return {
      id: this.id,
      userId: this.userId,
      date: this.date,
      totalCalories: +this.totalCalories,
      totalFats: +this.totalFats,
      totalProtein: +this.totalProtein,
      totalCarbs: +this.totalCarbs
    }
  };

  return Day;
};
