const Admin = require('../models/admin');
const connectDb = require('./connectDB');
const bcrypt = require('bcryptjs');

const adminInfo = {
  username: process.env.ADMIN_USERNAME,
  password: process.env.ADMIN_PASSWORD,
  email: process.env.ADMIN_EMAIL,
};

async function initDB() {
  await connectDb();
  await initAdmin();
}

async function initAdmin() {
  // check if admin exists
  const admin = await Admin.findOne({ email: adminInfo.email });
  if (!admin) {
    // create admin
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(adminInfo.password, salt);
    const newAdmin = new Admin({
      username: adminInfo.username,
      password: hashedPassword,
      email: adminInfo.email,
    });
    await newAdmin.save();
  }
}

module.exports = initDB;
