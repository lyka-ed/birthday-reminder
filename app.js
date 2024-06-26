const express = require("express");
const connectToMongoDB = require("./src/config/db");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// DB connection
connectToMongoDB(MONGODB_URI);

app.get("/", (req, res) => {
  res.send("HAPPY BIRTHDAY");
});

app.listen(PORT, () => {
  console.log(`Server is listening at PORT ${PORT}`);
});
