const express = require("express");
const router = express.Router();
const coursesCtrl = require("../../controllers/controller.absec/courses.controller");
const {upload} = require('../../middlewares/multer')

router.post("/courses/absec", upload.single('imageUrl') , coursesCtrl.createCourse );
router.get("/courses/absec", coursesCtrl.getCourse);
router.get("/courses/absec/:id", coursesCtrl.getOneCourse);
router.put("/courses/absec/:id", upload.single('imageUrl') , coursesCtrl.updateCourse);
router.delete("/courses/absec/:id", coursesCtrl.deleteCourses);

module.exports = router;
