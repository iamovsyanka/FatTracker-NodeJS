module.exports = function (sequelize, DataTypes) {
    const enums = require('./enums/enums');

    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // status: {
        //     type: DataTypes.STRING(DataTypes.ENUM(enums.onlineStatuses)),
        //     allowNull: false
        // },
        verified: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, {
        paranoid: true,
        tableName: 'users'
    });

    return User;
};
