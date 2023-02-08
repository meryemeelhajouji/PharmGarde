const jwt = require('jsonwebtoken');
const jwtGenerator = ({ _id, email }) => {
  return jwt.sign({ _id, email }, process.env.JWT_SECRET, { expiresIn: '2d' });
};

module.exports = jwtGenerator;
