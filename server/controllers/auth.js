const Admin = require('../models/admin');
const bcrypt = require('bcryptjs');
const jwtChecker = require('../utils/jwtChecker');
const jwtGenerator = require('../utils/jwtGenerator');

/**
 * @route   POST api/auth
 * @desc    Authenticate admin and get token
 * @access  Public
 * @method  POST
 */
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      let error = new Error('Please enter all fields');
      error.status = 400;
      throw error;
    }

    // check if admin exists
    const admin = await Admin.findOne({ email });
    if (!admin) {
      let error = new Error('Invalid credentials');
      error.status = 400;
      throw error;
    }

    // check if password matches
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      let error = new Error('Invalid credentials');
      error.status = 400;
      throw error;
    }

    // generate jwt token
    const token = jwtGenerator({ _id: admin._id, email: admin.email });

    // send token in cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24 * 2, // 2 days
    });

    res.status(200).json({
      success: true,
      admin,
    });
  } catch (e) {
    next(e);
  }
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
