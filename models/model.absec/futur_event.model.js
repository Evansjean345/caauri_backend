const mongoose = require("mongoose");
const event_futur_Schema = new mongoose.Schema({
  theme : { type: String },
  title : { type: String },
  category : { type: String },
  place : { type: String },
  date : { type: String },
  by : { type: String },
  theme1  : { type: String },
  theme2 : { type: String },
  theme3 : { type: String },
  synopsis : { type: String },
  picture : [ String ],
});

module.exports = mongoose.model("event_futur_absec", event_futur_Schema);
