const mongoose = require("mongoose");
const coursesSchema = new mongoose.Schema({
  imageUrl : { type: String },
  lessons : { type: String },
  title : { type: String },
});

module.exports = mongoose.model("courses_absec", coursesSchema);
