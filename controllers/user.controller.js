const User = require("../models/User");

exports.getUser = async (req, res) => {
  try {
    res.status(201).json({
      message: "You made it to the secure route",
      user: req.user,
      token: req.query.secret_token,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};
