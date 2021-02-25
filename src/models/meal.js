module.exports = function (sequelize, DataTypes) {
//TODO: productId, граммовка
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
        }

    },{
        tableName: 'meals'
    });

    // Meal.associate = function (models) {
    //     Meal.hasMany(models.Product, {
    //         as: 'products',
    //         foreignKey: 'categoryId',
    //         sourceKey: 'id'
    //     });
    // };

    return Meal;
};
