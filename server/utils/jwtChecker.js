const jwt = require('jsonwebtoken');

const jwtChecker = (token) => {
  const error = new Error('You are not authorized to access this route');
  error.status = 401;

  if (!token) {
    throw error;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (e) {
    throw error;
  }
};

module.exports = jwtChecker;
