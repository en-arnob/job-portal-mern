const nodemailer = require("nodemailer");
const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "test_arnob@hotmail.com",
      pass: "w3bdev69",
    },
  });

  const mailOptions = {
    from: "test_arnob@hotmail.com",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
