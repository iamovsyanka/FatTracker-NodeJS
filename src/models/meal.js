module.exports = function (sequelize, DataTypes) {
    const enums = require('./enums/enums');

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
            type: DataTypes.SMALLINT,
            allowNull: false
        },
        meal: {
            type: DataTypes.ENUM(enums.meals),
            allowNull: false
        }
    },{
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
         })
     };

    return Meal;
};
