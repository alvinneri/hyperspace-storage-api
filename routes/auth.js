const passport = require("passport");
const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth.controller");

router.post(
  "/signup",
  passport.authenticate("signup", { session: false }),
  AuthController.signUp
);

router.post("/login", AuthController.loginIn);

module.exports = router;
