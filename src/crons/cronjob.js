const cron = require("node-cron");
const sendEmail = require("../services/email.service");
const userService = require("../services/user.service");

// To check, retrieve and send birthday mails.
const checkBirthdays = async () => {
  console.log("Checking birthdays......");
  const today = new Date();
  const currentDay = today.getDay();
  const currentMonth = today.getMonth() + 1;

  try {
    const users = await userService.getAllUsers();
    // console.log('Cron job started', users);
    users.forEach(async (user) => {
      // Cron job started
      const birthDay = user.birthdate.getDay();
      const birthMonth = user.birthdate.getMonth() + 1;

      // Check if user's birthday is today
      if (birthDay === currentDay && birthMonth === currentMonth) {
        await sendEmail(user.email, user.username);
      }
    });
  } catch (error) {
    console.error("Error checking for birthday", error);
  } finally {
    console.log("Cronjob ended");
  }
};

// Cronjob will start at 7am daily to check for user an send email on the date of their birthday.
const startCronJob = () => {
  cron.schedule("* * * * *", checkBirthdays, {
    timezone: "Africa/Lagos",
  });
  console.log("Birthday reminder cronjob  is active");
};

module.exports = startCronJob;
