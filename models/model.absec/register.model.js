const mongoose = require("mongoose");
const registerSchema = new mongoose.Schema({
  fullname : { type: String },
  email : { type: String },
  course : { type: String },
  motivation : { type: String },
});

module.exports = mongoose.model("register_absec", registerSchema);
