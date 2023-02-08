const nodemailer = require('nodemailer');
const email = process.env.EMAIL_ADDRESS;
const password = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: email,
    pass: password,
  },
});

const emailSender = async (receiver, subject, body) => {
  const options = {
    from: email,
    to: receiver,
    subject,
    html: body,
  };

  await transporter.sendMail(options);
};

module.exports = emailSender;
