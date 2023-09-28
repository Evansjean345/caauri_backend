const express = require("express");
const router = express.Router();
const blogCtrl = require("../controllers/allBlog.controller");
const { upload } = require("../middlewares/multer");

router.post("/all_blog", upload.single("cover"), blogCtrl.createBlog);
router.get("/all_blog", blogCtrl.getBlog);
router.get("/all_blog/:id", blogCtrl.getOneBlog);
router.put("/all_blog/:id", blogCtrl.modifyBlog);
router.delete("/all_blog/:id", blogCtrl.deleteBlog);

module.exports = router;
