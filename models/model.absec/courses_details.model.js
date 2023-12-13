const mongoose = require("mongoose");
const coursesDetailsSchema = new mongoose.Schema({
  p1: { type: String },
  p2: { type: String },
});

module.exports = mongoose.model("courses_details_absec", coursesDetailsSchema);
