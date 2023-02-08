const errorHandler = (err, req, res, next) => {
  // check if headers already sent before being here
  if (res.headersSent) return next(err);

  // get env mode
  const NODE_ENV = process.env.NODE_ENV || 'development';

  // get error stack
  let errorStack = err.stack || '';

  // get error message
  let errorMessage = err.message || 'Something went wrong';

  // get error status code
  let errorStatus;
  // check is there is an already response with status code
  if (isErrorCode(res.statusCode)) {
    errorStatus = res.statusCode;
  } else if (isErrorCode(err.status)) {
    errorStatus = err.status;
  } else {
    errorStatus = 500; // fallback error status
  }

  // send response
  const errorResponse = {
    success: false,
    message: errorMessage,
  };

  NODE_ENV == 'development' && (errorResponse.stack = errorStack);

  res.status(errorStatus).json(errorResponse);

  // call next middlware if exists :)
  return next();
};

// check for error status codes
function isErrorCode(status) {
  return status >= 400 && status < 600;
}

module.exports = errorHandler;
