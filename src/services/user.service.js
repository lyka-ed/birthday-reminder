const User = require("../models/user.model");
const validateForm = require("../validation/validate");

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
    await validateForm.validateAsync({ username, email, birthdate });

    const user = await User.create({ username, email, birthdate });
    return user;
  } catch (error) {
    throw new Error(`Failed to Add user: ${error.message}`);
  }
};

const deleteUserById = async (userId) => {
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    return deletedUser;
  } catch (error) {
    throw new Error(`Failed to delete user: ${error.message}`);
  }
};

module.exports = {
  getAllUsers,
  addUser,
  deleteUserById,
};
