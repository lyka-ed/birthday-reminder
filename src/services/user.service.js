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
    throw new Error(`Failed to add user: ${error.message}`);
  }
};

// const deleteUserById = (req, res) => {
//   const { userId } = req.params;

//   User.findByIdAndDelete(userId, (error, deletedUser) => {
//     if (error) {
//       return res
//         .status(500)
//         .json({ error: `Failed to delete user: ${error.message}` });
//     }
//     if (!deletedUser) {
//       return res.status(404).json({ error: "User not found" });
//     }
//     res.status(200).json({ message: "User deleted successfully", deletedUser });
//   });
// };

module.exports = {
  getAllUsers,
  addUser,
  // deleteUserById,
};
