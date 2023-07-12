const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.signup = async (request, response) => {
  try {
    const { name, email, password, role } = request.body;
    const existingUser = await User.findOne({ email });

    // check existing user
    if (existingUser) {
      return response.status(400).json({
        success: false,
        message: "Account already exist",
      });
    }

    // created hashed password
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (err) {
      return response.status(500).json({
        success: false,
        message: err.message,
      });
    }

    // Create user object
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    // final resposne
    return response.status(200).json({
      success: true,
      message: "Account successfully created.",
    });
  } catch (err) {
    console.log(err);
    response.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
