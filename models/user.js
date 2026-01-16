const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  // properties of applications
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
