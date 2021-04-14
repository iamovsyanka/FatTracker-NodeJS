const express = require('express.oi');
// const swaggerUI = require('swagger-ui-express');

const logger = require('./logging/logger');
const categoryRouter = require('./routers/categoryRouter');
const userRouter = require('./routers/userRouter');
const authRouter = require('./routers/authAndRegisterRouter');
const dayRouter = require('./routers/dayRouter');
const productRouter = require('./routers/productRouter');
const adminRouter = require('./routers/adminRouter');
const mealRouter = require('./routers/mealRouter');
const authMiddleware = require('./middlewares/authMiddleware');
const authAdminMiddleware = require('./middlewares/authAdminMiddleware');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();
// const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

const filesHelper = require('./fileLoader/fileLoader');

filesHelper.createDir('./', 'photos');
filesHelper.createDir('./photos', 'categories');
filesHelper.createDir('./photos', 'products');
filesHelper.createDir('./photos', 'users');

app.use(express.static('./photos'));
app
  .use(express.json())
  // .use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
  .use(logger.url)
  .use(errorMiddleware)
  .use('/api/v1', authRouter)
  .use('/api/v1/admin', authAdminMiddleware, adminRouter)
  .use('/api/v1/category', authMiddleware, categoryRouter)
  .use('/api/v1/user', authMiddleware, userRouter)
  .use('/api/v1/day', authMiddleware, dayRouter)
  .use('/api/v1/product', authMiddleware, productRouter)
  .use('/api/v1/meal', authMiddleware, mealRouter);

module.exports = app;
