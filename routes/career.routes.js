const express = require("express");
const router = express.Router();
const careerCtrl = require("../controllers/career.controller");

router.post("/career", careerCtrl.Career);
router.get("/career", careerCtrl.getCareer);
router.get("/career/:id", careerCtrl.getOneCareer);
router.put("/career/:id", careerCtrl.modifyCareer);
router.delete("/career/:id", careerCtrl.deleteCareer);

module.exports = router;
