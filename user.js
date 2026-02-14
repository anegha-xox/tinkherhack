const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: String, // student or mentor
  company: String,
  designation: String,
  interest: String,
  gender: String
});

module.exports = mongoose.model("User", userSchema);
