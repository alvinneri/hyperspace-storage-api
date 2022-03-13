const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config");
const User = require("../models/User");
const { userRoles } = require("../lib/user.lib");

exports.loginIn = async (req, res, next) => {
  passport.authenticate("login", async (err, user, info) => {
    try {
      if (err || !user) {
        return res
          .status(401)
          .json({ success: false, message: "Invalid login" });
      }

      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);

        const body = { _id: user._id, email: user.email };
        const token = jwt.sign({ user: body }, config.jwtSecret);

        return res
          .status(200)
          .json({ success: true, message: "Login successful", token });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
};

exports.signUp = async (req, res, next) => {
  if (req.user && userRoles.values.includes(req.body.role)) {
    const user = await User.create({
      email: req.user.email,
      password: req.user.password,
      role: req.body.role,
    });
    res.json({
      message: "Signup successful",
      success: true,
      user: user,
    });
  } else {
    if (!userRoles.values.includes(req.body.role)) {
      res.status(400).json({
        message: userRoles.message,
        success: false,
      });
    } else {
      res.status(400).json({
        message: "Signup unsuccessful",
        success: false,
      });
    }
  }
};
