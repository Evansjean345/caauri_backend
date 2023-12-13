const express = require("express");
const router = express.Router();
const aboutCtrl = require("../../controllers/controller.absec/about.controller");

router.post("/about/absec", aboutCtrl.createAbout );
router.get("/about/absec", aboutCtrl.getAbout);
router.get("/about/absec/:id", aboutCtrl.getOneAbout);
router.put("/about/absec/:id", aboutCtrl.modifyAbout);
router.delete("/about/absec/:id", aboutCtrl.deleteAbout);

module.exports = router;
