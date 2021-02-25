const express = require('express');
//const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');
const logger = require('./services/logger');

const app = express();
//const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app
    .use(express.json())
    //.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
    .use(logger.url);

module.exports = app;
