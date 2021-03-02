const Sequelize = require('sequelize');
const config = require('../config/config');
const logger = require('../logging/logger');

if (!config.DB) return logger.error(new Error('The database is not set'));
if (!config.USERNAME) return logger.error(new Error('The username to db is not set'));
if (!config.PASSWORD) return logger.error(new Error('The password to db is not set'));

const sequelize = new Sequelize(config.DB, config.USERNAME, config.PASSWORD, {
    host: config.HOST,
    dialect: config.DIALECT,
    port: config.DB_PORT,
    pool: {
        max: 100,
        min: 0,
        idle: 10000
    },
    dialectOptions: {
        options: {
            encrypt: true
        }
    }
});

let models = {};

const files = require('../models');
files.forEach(file => {
    const model = require(file)(sequelize, Sequelize.DataTypes);
    models[model.name] = model;
});

Object.keys(models).forEach(modelName => {
    if ('associate' in models[modelName]) {
        models[modelName].associate(models);
    }
});

console.log('Database loaded');
console.log(models);

module.exports = {
    models: models,
    sequelize: sequelize
};



