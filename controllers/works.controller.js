const Works = require("../models/works.model");
const cloud = require("../middlewares/cloudinary");
const ObjectID = require("mongoose").Types.ObjectId;

//createHome logic
exports.createWorks = async (req, res) => {
  let file = null;
  if (req.file) {
    const cloudinary = cloud.v2.uploader.upload(req.file.path);
    file = (await cloudinary).secure_url;
  }
  const works = new Works({
    ...req.body,
    picture: file,
  });
  works
    .save()
    .then(() =>
      res
        .status(201)
        .json({ message: `les informations ont bien étées enregistrées` })
    )
    .catch((err) => res.status(400).json({ err }));
};

//getHome logic
exports.getWorks = async (req, res) => {
  try {
    await Works.find()
      .sort({ $natural: -1 })
      .then((el) => res.status(200).json(el))
      .catch((err) => res.status(400).json(err));
  } catch (error) {
    res.status(500).json({ err });
  }
};

//getOne blog
exports.getOneWorks = async (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send(`ID unknown : ${req.params.id}`);
  } else {
    try {
      await Works.findById({ _id: req.params.id })
        .then((el) => res.status(200).json(el))
        .catch((error) => res.status(400).json(`ID unknown : ${error}`));
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
};

//modifyHome logic
exports.modifyWorks = async (req, res) => {
  const worksId = req.params.id;
  if (!ObjectID.isValid(worksId))
    return res.status(400).json({ message: `ID unknown : ${worksId}` });

  const existingWorks = await Works.findById(worksId);

  if (!existingWorks)
    return res.status(404).json({ message: "Ressource non trouvée" });

  let updatedData = { ...req.body };

  if (req.file) {
    const cloudinaryResponse = await cloud.v2.uploader.upload(req.file.path);

    if (existingWorks.picture) {
      const public_id = existingWorks.picture.split("/").pop().split(".")[0];
      await cloud.v2.uploader.destroy(public_id);
    }

    updatedData.picture = cloudinaryResponse.secure_url;
  }

  const updatedWorks = await Works.findByIdAndUpdate(
    worksId,
    { $set: updatedData },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  )
    .then((el) => console.log(el))
    .then(() =>
      res
        .status(200)
        .json({ message: "les changements ont bien été pris en compte" })
    )
    .catch((err) => res.status(401).json({ err }));
};

exports.deleteWorks = async (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send(`ID unknown : ${req.params.id}`);
  } else {
    await Works.deleteOne({ _id: req.params.id })
      .then((el) => console.log(el))
      .then(() =>
        res
          .status(200)
          .json({ message: "les informations ont bien étées supprimées" })
      )
      .catch((err) => res.status(500).json({ err }));
  }
};
