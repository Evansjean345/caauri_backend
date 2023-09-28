const mongoose = require("mongoose");
const homeSchema = new mongoose.Schema({
  title: { type: String },
  subtitle: { type: String },
  portfolio: {
    title: { type: String },
    subtitle: { type: String },
  },
  section: {
    p1: { type: String },
    p2: { type: String },
    p3: { type: String },
    p4: { type: String },
  },
  pub: {
    p1: { type: String },
    p2: { type: String },
    p3: { type: String },
  },
});

module.exports = mongoose.model("home", homeSchema);
