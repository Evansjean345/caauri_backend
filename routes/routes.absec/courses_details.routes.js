const express = require("express");
const router = express.Router();
const coursesCtrl = require("../../controllers/controller.absec/courses_details.controller");

router.post("/courses_details/absec", coursesCtrl.createCourses );
router.get("/courses_details/absec", coursesCtrl.getCourses);
router.get("/courses_details/absec/:id", coursesCtrl.getOneCourses);
router.put("/courses_details/absec/:id", coursesCtrl.modifyCourses);
router.delete("/courses_details/absec/:id", coursesCtrl.deleteCourses);

module.exports = router;
