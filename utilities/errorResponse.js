class ErrorResponse extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
    }
  }
  // A global error handler, useful when handling frontend and backend errors
  module.exports = ErrorResponse;