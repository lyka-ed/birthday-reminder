const User = require("../models/user.model");

const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(`Failed to fetch users: ${error.message}`);
  }
};

const addUser = async ({ username, email, birthdate }) => {
  try {
    const user = await User.create({ username, email, birthdate });
    return user;
  } catch (error) {
    throw new Error(`Failed to add user: ${error.message}`);
  }
};

module.exports = {
  getAllUsers,
  addUser,
};
