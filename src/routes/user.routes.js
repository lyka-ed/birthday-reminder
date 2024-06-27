const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();

router.post("/users", userController.addUser);
router.get("/users", userController.getAllUsers);

module.exports = router;
