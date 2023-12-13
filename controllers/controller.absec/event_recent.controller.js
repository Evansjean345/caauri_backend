const Event = require("../../models/model.absec/event_recent.model");
const cloud = require("../../middlewares/cloudinary");
const ObjectID = require("mongoose").Types.ObjectId;

//createHome logic
exports.createEvent = async (req, res) => {
    try {
      let file = null;
      if (req.file) {
        const cloudinaryResponse = await cloud.v2.uploader.upload(req.file.path);
        file = cloudinaryResponse.secure_url;
      }
  
      const event = new Event({
        ...req.body,
        imageUrl: file,
      });
  
      await event.save();
  
      res.status(201).json({ message: `les informations ont bien été enregistrées` });
    } catch (error) {
      console.error("Error during image upload:", error);
      res.status(400).json({ error: "Error during image upload" });
    }
  };

//getHome logic
exports.getEvent = async (req, res) => {
  try {
    await Event.find()
      .sort({ $natural: -1 })
      .then((el) => res.status(200).json(el))
      .catch((err) => res.status(400).json(err));
  } catch (error) {
    res.status(500).json({ err });
  }
};

//getOne blog
exports.getOneEvent = async (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send(`ID unknown : ${req.params.id}`);
  } else {
    try {
      await Event.findById({ _id: req.params.id })
        .then((el) => res.status(200).json(el))
        .catch((error) => res.status(400).json(`ID unknown : ${error}`));
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
};

exports.updateEvent = async (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
      return res.status(400).send(`ID unknown: ${req.params.id}`);
    }
  
    // Créez un objet vide
    let obj = {}; 
    if (req.file) {
        let file = null
        const cloudinary = cloud.v2.uploader.upload(req.file.path);
        file = (await cloudinary).secure_url;
        obj = {
            ...obj,
            imageUrl: file,
          };
      }
  
    await Event.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          ...req.body,
          ...obj,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    )
      .then((event) => console.log(event))
      .then(() =>
        res
          .status(200)
          .json({ message: "Les informations ont bien été mises à jour" })
      )
      .catch((error) => res.status(401).json({ error }));
  };

exports.deleteEvent = async (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send(`ID unknown : ${req.params.id}`);
  } else {
    await Event.deleteOne({ _id: req.params.id })
      .then((el) => console.log(el))
      .then(() =>
        res
          .status(200)
          .json({ message: "les informations ont bien étées supprimées" })
      )
      .catch((err) => res.status(500).json({ err }));
  }
};
