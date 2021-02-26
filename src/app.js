const express = require('express');
//const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');
const logger = require('./services/logger');
const categoryRouter = require('./routers/categoryRouter');
const userRouter = require('./routers/userRouter');
const authRouter = require('./routers/authRouter');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();
//const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app
    .use(express.json())
    //.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
    .use(logger.url)
    .use('/api/v1', authRouter)
    .use('/api/v1/categories', authMiddleware, categoryRouter)
    .use('/api/v1/users', userRouter);

module.exports = app;
