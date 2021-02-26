module.exports = function (sequelize, DataTypes) {
    const enums = require('./enums/enums');
    const bcrypt = require('bcrypt');
    const { SALT_ROUNDS } = require('../config/config');
    //TODO: status
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
        verified: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        height: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        desiredWeight: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        role: {
            type: DataTypes.ENUM(enums.roles),
            allowNull: false
        }
    }, {
        paranoid: true,
        tableName: 'users'
    });

    User.beforeCreate((model, options) => {
        model.hashPassword();
    });

    User.prototype.hashPassword = async function () {
        const salt = await bcrypt.genSalt(SALT_ROUNDS);
        this.password = await bcrypt.hash(this.password, salt);
    };

    return User;
};
