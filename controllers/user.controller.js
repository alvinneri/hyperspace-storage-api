const User = require("../models/User");

exports.getUser = async (req, res) => {
  try {
    res.status(201).json({
      user: "sample",
      success: true,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};
