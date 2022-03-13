const express = require("express");
const router = express.Router();
const passport = require("passport");
const userRoute = require("./user");
const authRoute = require("./auth");

router.use(
  "/api/v1/user",
  passport.authenticate("jwt", { session: false }),
  userRoute
);
router.use("/api/v1/auth", authRoute);

module.exports = router;
