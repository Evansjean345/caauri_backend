const Client = require("../models/client.model");
const cloud = require("../middlewares/cloudinary");
const ObjectID = require("mongoose").Types.ObjectId;

//createHome logic
exports.createClient = async (req, res) => {
  let testimony_pic = null;
  let cover_pic = "texte";
  let pic_one = null;
  let pic_two = null;

  // Vérifiez si les images existent dans la requête
  if (req.files) {
    if (req.files.testimony_pic) {
      const cloudinaryResponse1 = await cloud.v2.uploader.upload(
        req.files.testimony_pic.path
      );
      testimony_pic = cloudinaryResponse1.secure_url;
    }

    if (req.files.cover_pic) {
      const cloudinaryResponse2 = await cloud.v2.uploader.upload(
        req.files.cover_pic.path
      );
      cover_pic = cloudinaryResponse2.secure_url;
    }

    if (req.files.pic_one) {
      const cloudinaryResponse3 = await cloud.v2.uploader.upload(
        req.files.pic_one.path
      );
      pic_one = cloudinaryResponse3.secure_url;
    }

    if (req.files.pic_two) {
      const cloudinaryResponse4 = await cloud.v2.uploader.upload(
        req.files.pic_two.path
      );
      pic_two = cloudinaryResponse4.secure_url;
    }
  }

  const client = new Client({
    ...req.body,
    cover: cover_pic,
    pictureOne: pic_one,
    pictureTwo: pic_two,
    testimonyPicture: testimony_pic,
  });
  client
    .save()
    .then(() =>
      res
        .status(201)
        .json({ message: `les informations ont bien étées enregistrées` })
    )
    .catch((err) => res.status(400).json({ err }));
};

//getHome logic
exports.getClient = async (req, res) => {
  try {
    await Client.find()
      .sort({ $natural: -1 })
      .then((el) => res.status(200).json(el))
      .catch((err) => res.status(400).json(err));
  } catch (error) {
    res.status(500).json({ err });
  }
};

//getOne client
exports.getOneClient = async (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send(`ID unknown : ${req.params.id}`);
  } else {
    try {
      await Client.findById({ _id: req.params.id })
        .then((el) => res.status(200).json(el))
        .catch((error) => res.status(400).json(`ID unknown : ${error}`));
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
};

//modifyHome logic
exports.modifyClient = async (req, res) => {
  const clientId = req.params.id;
  if (!ObjectID.isValid(clientId))
    return res.status(400).json({ message: `ID unknown : ${clientId}` });

  const existingClient = await Client.findById(clientId);

  if (!existingClient)
    return res.status(404).json({ message: "Ressource non trouvée" });

  let updatedData = { ...req.body };

  if (req.files) {
    const cloudinaryResponse1 = await cloud.v2.uploader.upload(
      req.files.testimony_pic.path
    );
    const cloudinaryResponse2 = await cloud.v2.uploader.upload(
      req.files.cover_pic.path
    );
    const cloudinaryResponse3 = await cloud.v2.uploader.upload(
      req.files.pic_one.path
    );
    const cloudinaryResponse4 = await cloud.v2.uploader.upload(
      req.files.pic_two.path
    );

    // Supprimez les anciennes images si elles existent
    if (existingClient.testimonyPicture) {
      const public_id1 = existingClient.testimonyPicture
        .split("/")
        .pop()
        .split(".")[0];
      await cloud.v2.uploader.destroy(public_id1);
    }

    if (existingClient.cover) {
      const public_id2 = existingClient.cover.split("/").pop().split(".")[0];
      await cloud.v2.uploader.destroy(public_id2);
    }

    if (existingClient.pictureOne) {
      const public_id3 = existingClient.pictureOne
        .split("/")
        .pop()
        .split(".")[0];
      await cloud.v2.uploader.destroy(public_id3);
    }

    if (existingClient.pictureTwo) {
      const public_id4 = existingClient.pictureTwo
        .split("/")
        .pop()
        .split(".")[0];
      await cloud.v2.uploader.destroy(public_id4);
    }

    updatedData.testimonyPicture = await cloudinaryResponse1.secure_url;
    updatedData.cover = await cloudinaryResponse2.secure_url;
    updatedData.pictureOne = await cloudinaryResponse3.secure_url;
    updatedData.pictureTwo = await cloudinaryResponse4.secure_url;
  }

  const updatedClient = await Client.findByIdAndUpdate(
    clientId,
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

exports.deleteClient = async (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send(`ID unknown : ${req.params.id}`);
  } else {
    await Client.deleteOne({ _id: req.params.id })
      .then((el) => console.log(el))
      .then(() =>
        res
          .status(200)
          .json({ message: "les informations ont bien étées supprimées" })
      )
      .catch((err) => res.status(500).json({ err }));
  }
};
