const logger = require('../logging/logger');

const onUncaughtException = err => {
  logger.error(`Unhandled exception: ${err.message}, stack: ${err.stack}`);
};

const onUnhandledPromiseRejection = err => {
  logger.error(
    `Unhandled promise rejection: ${err.message}, stack: ${err.stack}`
  );
};

module.exports = {
  onUnhandledPromiseRejection,
  onUncaughtException
};
