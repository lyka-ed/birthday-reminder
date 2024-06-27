const express = require("express");
const cors = require("cors");
const { join } = require("path");
const router = require("./src/routes/user.routes");

const app = express();

// Middleware
app.use(express.static(join(__dirname, "./public")));
app.use(cors());
app.use(express.json());
app.use("/api", router);

// app.get("/", (req, res) => {
//   res.send("HAPPY BIRTHDAY");
// });
app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "./public/index.html"));
});

module.exports = app;
