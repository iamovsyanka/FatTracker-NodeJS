module.exports = function (sequelize, DataTypes) {
    //TODO: photo?
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
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fats: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        protein: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        carbs: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        brandName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },{
        tableName: 'products'
    });

    Product.associate = function (models) {
        Product.belongsTo(models.Category, {
            as: 'products',
            foreignKey: 'id',
            sourceKey: 'categoryId'
        });
    };

    return Product;
};
