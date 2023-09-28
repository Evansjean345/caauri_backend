const express = require("express");
const router = express.Router();
const blogCtrl = require("../controllers/blog.controller");

router.post("/blog", blogCtrl.createBlog);
router.get("/blog", blogCtrl.getBlog);
router.get("/blog/:id", blogCtrl.getOneBlog);
router.put("/blog/:id", blogCtrl.modifyBlog);
router.delete("/blog/:id", blogCtrl.deleteBlog);

module.exports = router;
