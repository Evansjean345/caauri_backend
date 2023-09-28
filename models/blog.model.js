const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  head: {
    title: { type: String },
    subtitle: { type: String },
  },
  picture: { type: String },
  date: { type: String },
  min: { type: String },
  text: { type: String },
});

module.exports = mongoose.model("blog", blogSchema);
