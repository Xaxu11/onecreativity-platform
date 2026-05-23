const userModel = require("../models/userModel");

const registerUser = async (req, res) => {
  try {
    const { fullName, email, phone, role } = req.body;

    const user = await userModel.createUser(fullName, email, phone, role);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    console.error("Register error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to register user",
    });
  }
};

module.exports = { registerUser };