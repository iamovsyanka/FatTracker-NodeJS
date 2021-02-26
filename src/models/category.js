module.exports = function (sequelize, DataTypes) {
    //TODO: photo?
    const Category = sequelize.define('Category', {
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
            photo: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },{
        tableName: 'categories'
    });

    Category.associate = function (models) {
        Category.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'categoryId'
        });
    };

    return Category;
};
