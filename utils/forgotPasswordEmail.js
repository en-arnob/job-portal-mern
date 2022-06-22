const nodemailer = require("nodemailer");
const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    name: "laptop-repair-putney.co.uk",
    pool: true,
    host: "mail.laptop-repair-putney.co.uk", //<----change
    port: 587, //<----change
    secure: false, //<----change
    auth: {
      user: "jobtest@laptop-repair-putney.co.uk",
      pass: "Email@Test.Job247",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: `jobtest@laptop-repair-putney.co.uk`,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
