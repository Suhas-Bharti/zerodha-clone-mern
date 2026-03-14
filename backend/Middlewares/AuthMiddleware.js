const User = require("../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.verifyUser = async (req, res, next) => {

  const token = req.cookies.token;
  if (!token) 
    return res.json({ status: false });

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(decoded.id);
    if (!user) 
      return res.json({ status: false });

    req.user = user;   // attach user to request
    next();            // pass control to next handler
  } catch (err) {
    return res.json({ status: false });
  }
};
