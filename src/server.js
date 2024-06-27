const connectToMongoDB = require("./config/db");
const express = require("express");
const app = require("../app");
const dotenv = require("dotenv");
const startCronJob = require("../src/crons/cronjob");

dotenv.config();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
connectToMongoDB(MONGODB_URI)
  .then(() => {
    // Start Cron Job after MongoDB connection is established
    startCronJob();

    // Start Express Server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
    process.exit(1); // Exit process on database connection error
  });
