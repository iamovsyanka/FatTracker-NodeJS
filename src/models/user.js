const bcrypt = require('bcrypt');
const enums = require('./enums/enums');
const { SALT_ROUNDS } = require('../config/config');

module.exports = function (sequelize, DataTypes) {
  // TODO: status
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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
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
      type: new DataTypes.VIRTUAL(DataTypes.STRING), get: () => {
        return 'user';
      }
    },
    sex: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    birthDay: {
      type: DataTypes.ENUM(enums.sex),
      allowNull: true
    },
    activity: {
      type: DataTypes.ENUM(enums.activity),
      allowNull: true
    },
    requiredCalories: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  }, {
    paranoid: true,
    tableName: 'users'
  });

  User.beforeCreate((model) => {
    model.hashPassword();
  });

  User.prototype.hashPassword = function () {
    this.password = bcrypt.hashSync(this.password, SALT_ROUNDS);
  };

  User.associate = function (models) {
    User.hasMany(models.Day, {
      as: 'days',
      foreignKey: 'userId',
    });

    User.hasMany(models.Product, {
      as: 'products',
      foreignKey: 'userId'
    })
  };

  return User;
};
