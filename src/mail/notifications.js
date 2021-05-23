const nodemailer = require('nodemailer');

module.exports = mailConfirm = async (email, name) => {
  let transporter = nodemailer.createTransport(getEmail());

  await transporter.sendMail({
    from: getEmail().auth.user,
    to: email,
    subject: 'Notifications',
    text: `Hey, ${name}, don't forget to add some products. With love, your FatTracker! 💙💙💙`
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
      pass: 'isamjvguqxwbmtqr'
    }
  };
};
