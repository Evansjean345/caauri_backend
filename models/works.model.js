const mongoose = require("mongoose");

const workSchema = new mongoose.Schema({
  title: { type: String },
  genre: { type: String },
  content: { type: String },
  picture: { type: String },
});

module.exports = mongoose.model("work", workSchema);
