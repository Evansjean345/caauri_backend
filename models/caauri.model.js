const mongoose = require("mongoose");

const caauriSchema = new mongoose.Schema({
  firstSection: {
    p1: { type: String },
    p2: { type: String },
    p3: { type: String },
    p4: { type: String },
  },
  lastSection: {
    p: { type: String },
  },
});

module.exports = mongoose.model("caauri", caauriSchema);
