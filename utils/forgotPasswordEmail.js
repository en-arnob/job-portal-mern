const nodemailer = require("nodemailer");
const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "testmail.arnob@gmail.com",
      pass: "w3bdev69",
    },
  });

  const mailOptions = {
    from: `testmail.arnob@gmail.com`,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
