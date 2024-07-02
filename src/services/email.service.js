const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const sendEmail = async (recipient, name) => {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USERNAME, // sender gmail
      pass: process.env.MAIL_PASSWORD, // app password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const username = name.charAt(0).toUpperCase() + name.slice(1);

  const emailtemplatePath = path.join(__dirname, "../utils/emailTemplate.html");
  let emailtemplate = fs.readFileSync(emailtemplatePath, "utf-8");

  // Replace placeholders with actual values
  emailtemplate = emailtemplate.replace("${username}", username);

  const mailOptions = {
    from: process.env.MAIL_USERNAME,
    to: recipient,
    subject: "Happy Birthday !!",
    html: emailtemplate,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully to ${recipient}`);
  } catch (err) {
    console.error("Error sending email", err);
    throw new Error("Error sending email");
  }
};

module.exports = sendEmail;
