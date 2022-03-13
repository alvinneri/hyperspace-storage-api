const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
  },
  role: {
    type: String,
    default: "user",
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("User", UserSchema);
