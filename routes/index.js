const express = require("express");
const router = express.Router();

const userRoute = require("./user");

// @mounts
router.use("/api/v1/user", userRoute);

module.exports = router;
