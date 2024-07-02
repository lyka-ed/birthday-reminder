const express = require("express");
const {
  addUser,
  getAllUsers,
  //   deleteUserById,
} = require("../controllers/user.controller");

const router = express.Router();

router.post("/users", addUser);
router.get("/users", getAllUsers);
// router.delete("/users/:userId", deleteUserById);

module.exports = router;
