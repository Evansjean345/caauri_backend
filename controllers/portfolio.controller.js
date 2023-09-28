const Portfolio = require("../models/portfolio.model");
const cloud = require("../middlewares/cloudinary");
const ObjectID = require("mongoose").Types.ObjectId;

//createHome logic
exports.createPortfolio = async (req, res) => {
  let file = null;
  if (req.file) {
    const cloudinary = cloud.v2.uploader.upload(req.file.path);
    file = (await cloudinary).secure_url;
  }
  const portfolio = new Portfolio({
    ...req.body,
    picture: file,
  });
  portfolio
    .save()
    .then(() =>
      res
        .status(201)
        .json({ message: `les informations ont bien étées enregistrées` })
    )
    .catch((err) => res.status(400).json({ err }));
};

//getHome logic
exports.getPortfolio = async (req, res) => {
  try {
    await Portfolio.find()
      .sort({ $natural: -1 })
      .then((el) => res.status(200).json(el))
      .catch((err) => res.status(400).json(err));
  } catch (error) {
    res.status(500).json({ err });
  }
};

exports.getOnePortfolio = async (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send(`ID unknown : ${req.params.id}`);
  } else {
    try {
      await Portfolio.findById({ _id: req.params.id })
        .then((el) => res.status(200).json(el))
        .catch((error) => res.status(400).json(`ID unknown : ${error}`));
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
};

//modifyHome logic
exports.modifyPortfolio = async (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send(`ID unknown : ${req.params.id}`);
  }
  await Portfolio.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        ...req.body,
      },
    },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  )
    .then((el) => console.log(el))
    .then(() => {
      res
        .status(200)
        .json({ message: "les changements ont bien étés pris en compte" });
    })
    .catch((err) => res.status(401).json({ err }));
};

exports.deletePortfolio = async (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send(`ID unknown : ${req.params.id}`);
  } else {
    await Portfolio.deleteOne({ _id: req.params.id })
      .then((el) => console.log(el))
      .then(() =>
        res
          .status(200)
          .json({ message: "les informations ont bien étées supprimées" })
      )
      .catch((err) => res.status(500).json({ err }));
  }
};
