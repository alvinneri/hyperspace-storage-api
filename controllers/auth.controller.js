const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config");

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
  res.json({
    message: "Signup successful",
    success: true,
    user: req.user,
  });
};
