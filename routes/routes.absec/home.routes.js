const express = require("express");
const router = express.Router();
const homeCtrl = require("../../controllers/controller.absec/home.controller");

router.post("/home/absec",homeCtrl.createHome );
router.get("/home_absec", homeCtrl.getHome);
router.get("/home/absec/:id", homeCtrl.getOneHome);
router.put("/home/absec/:id", homeCtrl.modifyHome);
router.delete("/home/absec/:id", homeCtrl.deleteHome);

module.exports = router;
