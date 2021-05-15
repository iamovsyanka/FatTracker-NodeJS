const logger = require('../logging/logger');
const errorMessages = require('./errMessages');

class AppError extends Error {
  constructor(settings) {
    super();
    settings = (settings || {});
    this.name = 'AppError';
    this.type = (settings.type || 'Application');
    this.message = (settings.message || errorMessages.SERVER_ERROR);
    this.err = (settings.err || {});
    this.stack = settings.stack;
    this.details = (settings.details || {});
    this.status = (settings.status || 500);
    this.status >= 500 ? logger.error(this) : logger.warn(this);
  }

  toJSON() {
    return {
      message: this.message,
      stack: this.stack,
      details: this.details,
      error: (this.err instanceof Error) ? {
        message: this.err.message,
        stack: this.err.stack,
        error: this.err.stack ? this.err.error : this.err
      } : this.err
    };
  }
}

module.exports = AppError;
