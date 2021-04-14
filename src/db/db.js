const Sequelize = require('sequelize');
const config = require('../config/config');
const logger = require('../logging/logger');

if (!config.DB) return logger.error(new Error('The database is not set'));
if (!config.USERNAME) return logger.error(new Error('The username to db is not set'));
if (!config.PASSWORD) return logger.error(new Error('The password to db is not set'));
if (!config.HOST) return logger.error(new Error('The host is not set'));
if (!config.DIALECT) return logger.error(new Error('The dialect is not set'));
if (!config.DB_PORT) return logger.error(new Error('The database port is not set'));
if (config.POOL_MAX === undefined) return logger.error(new Error('The pool max is not set'));
if (config.POOL_MIN === undefined) return logger.error(new Error('The pool min is not set'));
if (config.POOL_IDLE === undefined) return logger.error(new Error('The pool idle is not set'));

const sequelize = new Sequelize(config.DB, config.USERNAME, config.PASSWORD, {
  host: config.HOST,
  dialect: config.DIALECT,
  port: config.DB_PORT,
  pool: {
    max: config.POOL_MAX,
    min: config.POOL_MIN,
    idle: config.POOL_IDLE
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
  models,
  sequelize
};
