const Blog = require("../models/allBlog.model");
const cloud = require("../middlewares/cloudinary");
const ObjectID = require("mongoose").Types.ObjectId;

//createHome logic
exports.createBlog = async (req, res) => {
  let file = null;
  if (req.file) {
    const cloudinary = cloud.v2.uploader.upload(req.file.path);
    file = (await cloudinary).secure_url;
  }
  const blog = new Blog({
    ...req.body,
    cover: file,
    date: new Date().toLocaleString("en-GB"),
  })
    .save()
    .then(() =>
      res
        .status(201)
        .json({ message: `les informations ont bien étées enregistrées` })
    )
    .catch((err) => res.status(400).json({ err }));
};

//getHome logic
exports.getBlog = async (req, res) => {
  try {
    await Blog.find()
      .sort({ $natural: -1 })
      .then((el) => res.status(200).json(el))
      .catch((err) => res.status(400).json(err));
  } catch (error) {
    res.status(500).json({ err });
  }
};

//getOne blog
exports.getOneBlog = async (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send(`ID unknown : ${req.params.id}`);
  } else {
    try {
      await Blog.findById({ _id: req.params.id })
        .then((el) => res.status(200).json(el))
        .catch((error) => res.status(400).json(`ID unknown : ${error}`));
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
};

//modifyHome logic
exports.modifyBlog = async (req, res) => {
  const blogId = req.params.id;
  if (!ObjectID.isValid(blogId))
    return res.status(400).json({ message: `ID unknown : ${blogId}` });

  const existingBlog = await Blog.findById(blogId);

  if (!existingBlog)
    return res.status(404).json({ message: "Ressource non trouvée" });

  let updatedData = { ...req.body };

  if (req.file) {
    const cloudinaryResponse = await cloud.v2.uploader.upload(req.file.path);

    if (existingBlog.picture) {
      const public_id = existingBlog.cover.split("/").pop().split(".")[0];
      await cloud.v2.uploader.destroy(public_id);
    }

    updatedData.picture = cloudinaryResponse.secure_url;
  }

  const updatedBlog = await Blog.findByIdAndUpdate(
    blogId,
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

exports.deleteBlog = async (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send(`ID unknown : ${req.params.id}`);
  } else {
    await Blog.deleteOne({ _id: req.params.id })
      .then((el) => console.log(el))
      .then(() =>
        res
          .status(200)
          .json({ message: "les informations ont bien étées supprimées" })
      )
      .catch((err) => res.status(500).json({ err }));
  }
};
