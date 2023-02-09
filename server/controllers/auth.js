const Admin = require('../models/admin');
const bcrypt = require('bcryptjs');
const jwtChecker = require('../utils/jwtChecker');
const jwtGenerator = require('../utils/jwtGenerator');
const emailSender = require('../utils/emailSender');
const jwt = require('jsonwebtoken');

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
  const { token } = req.cookies;

  try {
    const decoded = jwtChecker(token);

    if (!decoded) {
      throw new Error('Invalid token');
    }

    res.status(200).json({
      success: true,
    });
  } catch (e) {
    e.status = 401;
    next(e);
  }
};

/**
 * @route   POST api/auth/forget
 * @desc    get reset password email
 * @access  Private
 * @method  POST
 */
const forgetPassword = async (req, res, next) => {
  let { email } = req.body;
  let error;
  try {
    if (!email) {
      error = new Error('Email is required');
      error.status = 400;
      throw error;
    }

    const admin = await Admin.findOne({
      email,
    });

    if (!admin) {
      error = new Error('Invalid email');
      error.status = 400;
      throw error;
    }

    let resetToken = jwtGenerator(admin, '10m');
    resetToken = resetToken.split('.').join('');
    // email message
    let subject = 'Reset password | PharmaGard';
    let emailBody = `
      <h1>Hello ${admin.username} </h1>
      <p>You are receiving this email because you (or someone else) have requested the reset of a password.</p>
      <p>Please click on the following link, or paste this into your browser to complete the process:</p>
      <a style="background-color: #22c6ff; padding: 10px 20px; color: #000" href="${process.env.FRONT_END_URL}/resetpassword/${resetToken}">Reset Password</a>
      <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>
    `;

    // send email
    await emailSender(email, subject, emailBody);

    res.status(200).json({
      success: true,
      message: 'Check your email to reset your password',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @route   POST api/auth/reset/:id
 * @desc    reset the password for the provided id
 * @access  Private
 * @method  POST
 */
const resetPassword = async (req, res, next) => {
  let token = req.params.token;
  let password = req.body.password;
  let error;
  console.log(token, password);

  try {
    if (!password) {
      error = new Error('Password is required');
      error.status = 400;
      throw error;
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (e) {
      error = new Error('Invalid reset token');
      error.status = 401;
      throw error;
    }

    const user = await Admin.findOne({
      email: decoded.email,
    });

    if (!user) {
      error = new Error('Invalid reset token');
      error.status = 401;
      throw error;
    }

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newPass = {
      password: hashedPassword,
    };

    await Admin.findOneAndUpdate(
      {
        email: decoded.email,
      },
      {
        $set: newPass,
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
  verify,
  forgetPassword,
  resetPassword,
};
