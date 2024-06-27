const cron = require("node-cron");
const sendEmail = require("../services/email.service");
const userService = require("../services/user.service");

const checkBirthdays = async () => {
  console.log("Check your birthday.");
  const today = new Date();
  const day = today.getDay();
  const month = today.getMonth() + 1;

  try {
    const users = await userService.getAllUsers();
    // console.log('Cron job started', users);
    users.forEach(async (user) => {
      // Cron job started
      const birthDay = user.birthdate.getDay();
      const birthMonth = user.birthdate.getMonth() + 1;

      if (birthDay === day && birthMonth === month) {
        await sendEmail(user.email, user.username);
      }
    });
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Cronjob ended");
  }
};

const startCronJob = () => {
  cron.schedule("* * * * *", checkBirthdays, {
    timezone: "Africa/Lagos",
  });
  console.log("Cronjob is active");
};

module.exports = startCronJob;
