const Courses = require("../../models/model.absec/courses.model");
const cloud = require("../../middlewares/cloudinary");
const ObjectID = require("mongoose").Types.ObjectId;

//createHome logic
exports.createCourse = async (req, res) => {
    try {
      let file = null;
      
      if (req.file) {
        const cloudinaryResponse = await cloud.v2.uploader.upload(req.file.path);
        file = cloudinaryResponse.secure_url;
      }
  
      const courses = new Courses({
        ...req.body,
        imageUrl: file,
      });
  
      await courses.save();
  
      res.status(201).json({ message: `les informations ont bien été enregistrées` });
    } catch (error) {
      console.error("Error during image upload:", error);
      res.status(400).json({ error: "Error during image upload" });
    }
  };

//getHome logic
exports.getCourse = async (req, res) => {
  try {
    await Courses.find()
      .sort({ $natural: -1 })
      .then((el) => res.status(200).json(el))
      .catch((err) => res.status(400).json(err));
  } catch (error) {
    res.status(500).json({ err });
  }
};

//getOne blog
exports.getOneCourse = async (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send(`ID unknown : ${req.params.id}`);
  } else {
    try {
      await Courses.findById({ _id: req.params.id })
        .then((el) => res.status(200).json(el))
        .catch((error) => res.status(400).json(`ID unknown : ${error}`));
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
};

exports.updateCourse = async (req, res) => {
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
  
    await Courses.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          ...req.body,
          ...obj,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    )
      .then((course) => console.log(course))
      .then(() =>
        res
          .status(200)
          .json({ message: "Les informations ont bien été mises à jour" })
      )
      .catch((error) => res.status(401).json({ error }));
  };

exports.deleteCourses = async (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send(`ID unknown : ${req.params.id}`);
  } else {
    await Courses.deleteOne({ _id: req.params.id })
      .then((el) => console.log(el))
      .then(() =>
        res
          .status(200)
          .json({ message: "les informations ont bien étées supprimées" })
      )
      .catch((err) => res.status(500).json({ err }));
  }
};
