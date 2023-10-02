const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
  subtitle: { type: String },
  p: { type: String },
  featureOne: { type: String },
  featureTwo: { type: String },
  featureThree: { type: String },
  featureFour: { type: String },
  featureFive: { type: String },
  featureSix: { type: String },
  featureSeven: { type: String },
  descriptionOne: { type: String },
  descriptionTwo: { type: String },
  descriptionThree: { type: String },
  picture: [String],
  title: { type: String },
  type: { type: String },
  problematic: {
    p1: { type: String },
    p2: { type: String },
  },
  strategy: {
    p1: { type: String },
    p2: { type: String },
  },
  client: {
    p: { type: String },
    name: { type: String },
    role: { type: String },
  },
});

module.exports = mongoose.model("portfolio", portfolioSchema);
