/**
 * @route   POST api/auth
 * @desc    Authenticate admin and get token
 * @access  Public
 * @method  POST
 */
const login = async (req, res, next) => {
  // TODO: login controller
};

/**
 * @route   GET api/auth
 * @desc    Verify admin
 * @access  Private
 * @method  GET
 */
const verify = async (req, res, next) => {
  // TODO: authentication verification
};

module.exports = {
  login,
  verify,
};
