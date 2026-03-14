// ================= Imports =================
const bcrypt = require("bcryptjs");
const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");


// ================= Signup Controller =================
module.exports.Signup = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const user = await User.create({ email, username, password });

    return res.status(201).json({
      message: "User created successfully",
      success: true,
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};


// ================= Login Controller =================
module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = createSecretToken(user._id);
    
    // ✅ Set cookie properly 
    res.cookie("token", token, {
      httpOnly: true, // secure option 
      secure: false, // local testing ke liye 
      sameSite: "Strict",
    });

    return res.status(200).json({
      message: "Login successful",
      success: true,
      token,
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};