const mongoose = require("mongoose");
const event_recent_Schema = new mongoose.Schema({
  imageUrl : { type: String },
  theme : { type: String },
  title : { type: String },
  hours : { type: String },
  place : { type: String },
  by : { type: String },
});

module.exports = mongoose.model("event_recent_absec", event_recent_Schema);
