const express = require('express');
// const swaggerUI = require('swagger-ui-express');
const logger = require('./services/logger');
const categoryRouter = require('./routers/categoryRouter');
const userRouter = require('./routers/userRouter');
const authRouter = require('./routers/authAndRegisterRouter');
const dayRouter = require('./routers/dayRouter');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();
// const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app
  .use(express.json())
// .use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
  .use(logger.url)
  .use('/api/v1', authRouter)
  .use('/api/v1/categories', authMiddleware, categoryRouter)
  .use('/api/v1/users', authMiddleware, userRouter)
  .use('/api/v1/days', authMiddleware, dayRouter);

module.exports = app;
