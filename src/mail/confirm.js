const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../config/config');

module.exports = mailConfirm = async email => {
  const token = jwt.sign({
    email: email
  }, JWT_SECRET_KEY, { expiresIn: '24h' });

  const TOKEN_URL = 'http://localhost:8080/api/v1/verify?token=' + token;

  let transporter = nodemailer.createTransport(getEmail());

  await transporter.sendMail({
    from: getEmail().auth.user,
    to: email,
    subject: 'Verify your email',
    text: `Hello, verify ur FatTracker account ${TOKEN_URL}`,
    html: `<h3>Hello, verify your FatTracker account</h3>
                <a href="${TOKEN_URL}">VERIFY</a>`
  });
};

const getEmail = function () {
  return {
    host: 'smtp.yandex.com',
    port: 465,
    secure: true,
    service: 'Yandex',
    auth: {
      user: 'fattracker4notify@yandex.by',
      pass: '94x-gDY-W7N-9cd'
    }
  };
};
