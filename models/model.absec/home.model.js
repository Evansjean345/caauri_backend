const mongoose = require("mongoose");
const homeSchema = new mongoose.Schema({
  title: { type: String },
  titleTwo : { type: String },
  synopsis: { type: String },
  mission: {type: String },
  excellence : {type: String },
  innovation : {type: String },
  ouverture : {type: String },
  pragmatisme : {type: String },
  vision : {type: String },
  comments : {type: String },
  iconBook : {type : String},
  iconBag : {type : String},
});

module.exports = mongoose.model("home_absec", homeSchema);
