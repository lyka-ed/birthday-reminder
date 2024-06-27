const userService = require("../services/user.service");

const addUser = async (req, res) => {
  const { username, email, birthdate } = req.body;

  try {
    const user = await userService.addUser({ username, email, birthdate });
    if (user) {
      return res.status(201).json({
        success: true,
        message: "User details added successfully",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};
const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).json({
      success: true,
      message: "Users retrieved successfully",
      users: users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Invalid User",
    });
  }
};

module.exports = {
  addUser,
  getAllUsers,
};
