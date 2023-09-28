const express = require("express");
const router = express.Router();
const homeCtrl = require("../controllers/home.controller");

router.post("/home", homeCtrl.createHome);
router.get("/home", homeCtrl.getHome);
router.get("/home/:id", homeCtrl.getOneHome);
router.put("/home/:id", homeCtrl.modifyHome);
router.delete("/home/:id", homeCtrl.deleteHome);

module.exports = router;
