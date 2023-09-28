const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  title: { type: String },
  subtitle: { type: String },
  cover: { type: String },
  project_name: { type: String },
  domain: { type: String },
  service: {
    li1: { type: String },
    li2: { type: String },
    li3: { type: String },
    li4: { type: String },
  },
  problematic: {
    p1: { type: String },
    p2: { type: String },
  },
  strategy: {
    p1: { type: String },
    p2: { type: String },
  },
  pictureOne: { type: String },
  pictureTwo: { type: String },
  testimony: {
    message: { type: String },
    post: { type: String },
  },
  testimonyPicture: { type: String },
});

module.exports = mongoose.model("client", clientSchema);
