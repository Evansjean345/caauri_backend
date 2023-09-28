const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema({
  title: { type: String },
  subtitle: { type: String },
  job: { type: String },
  description: { type: String },
  go_to: { type: String },
});

module.exports = mongoose.model("career", careerSchema);
