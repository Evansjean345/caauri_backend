const mongoose = require("mongoose");

const allBlogSchema = new mongoose.Schema({
  cover: { type: String },
  title: { type: String },
  subtitle: { type: String },
  content: { type: String },
  date: { type: String },
});

module.exports = mongoose.model("allBlog", allBlogSchema);
