const { createLogger, format, transports } = require('winston');
const moment = require('moment');
const onFinished = require('on-finished');

const logger = createLogger({
    format: format.combine(
        format.simple(),
        format.printf(info => `${info.level}: ${info.message}`)
    ),

    exitOnError: false,

    transports: [
        new transports.Console({
            level: 'debug',
            format: format.combine(format.colorize(), format.simple())
        }),
        new transports.File({
            filename: '../logs/logger.log',
            level: 'info',
            format: format.combine(format.colorize(), format.json())
        }),
        new transports.File({
            filename: '../logs/error.log',
            level: 'error',
            format: format.combine(format.colorize(), format.json())
        })
    ]
});

logger.url = (request, response, next) => {
    const { method, originalUrl, body, query } = request;
    const start = Date.now();

    onFinished(response, () => {
        const ms = Date.now() - start;
        const { statusCode } = response;
        logger.info(
            `DateTime: ${moment().format('YYYY-MM-DD hh:mm:ss')}
      Method: ${method}, URL: ${decodeURI(originalUrl)},
      Query object: ${JSON.stringify(query)},
      Request body: ${JSON.stringify(body)}, 
      StatusCode: ${statusCode} [${ms}ms]`
        );
    });

    next();
};

logger.stream = {
    write(message) {
        logger.info(message);
    }
};

module.exports = logger;
