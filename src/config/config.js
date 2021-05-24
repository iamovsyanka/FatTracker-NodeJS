const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.join(__dirname, '../../.env')
});

module.exports = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  DB: process.env.DB,
  USERNAME: process.env.NAME,
  PASSWORD: process.env.PASSWORD,
  HOST: process.env.HOST,
  DB_PORT: process.env.DB_PORT,
  DIALECT: process.env.DIALECT,
  POOL_MAX: Number(process.env.POOL_MAX),
  POOL_MIN: Number(process.env.POOL_MIN),
  POOL_IDLE: Number(process.env.POOL_IDLE),
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  AUTH_MODE: process.env.AUTH_MODE === 'true',
  SALT_ROUNDS: Number(process.env.SALT_ROUNDS),
  HTTP_HEADER_AUTHORIZATION: process.env.HTTP_HEADER_Authorization,
  AUTHORIZATION_SCHEMA: process.env.Authorization_Schema,
  EXPIRES_IN: process.env.EXPIRES_IN
};
