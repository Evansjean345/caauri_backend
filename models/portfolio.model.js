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
  problematicOne: { type: String },
  problematicTwo: { type: String },
  strategyOne: { type: String },
  strategyTwo: { type: String },
  clientName: { type: String },
  clientJob: { type: String },
  clientContent: { type: String },
});

module.exports = mongoose.model("portfolio", portfolioSchema);
