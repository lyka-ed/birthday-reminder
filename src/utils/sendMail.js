const sendEmail = require("../services/email.service");

const recipientEmail = "huntinglyka@gmail.com";
const recipientName = "Recipient Name";

sendEmail(recipientEmail, recipientName)
  .then(() => console.log("Email sent successfully!"))
  .catch((err) => console.error("Failed to send email:", err));

// For testing Purposes
