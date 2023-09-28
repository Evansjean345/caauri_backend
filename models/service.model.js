const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  title: { type: String },
  subtitle: { type: String },
  web: {
    pp: { type: String },
    p1: { type: String },
    p2: { type: String },
    p3: { type: String },
    p4: { type: String },
  },
  formation: {
    p1: { type: String },
    p2: { type: String },
    p3: { type: String },
    p4: { type: String },
  },
  event: {
    pp: { type: String },
    p1: { type: String },
    p2: { type: String },
    p3: { type: String },
  },
});

module.exports = mongoose.model("service", serviceSchema);
