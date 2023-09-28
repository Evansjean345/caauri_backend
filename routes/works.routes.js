const express = require("express");
const router = express.Router();
const worksCtrl = require("../controllers/works.controller");

router.post("/works", worksCtrl.createWorks);
router.get("/works", worksCtrl.getWorks);
router.get("/works/:id", worksCtrl.getOneWorks);
router.put("/works/:id", worksCtrl.modifyWorks);
router.delete("/works/:id", worksCtrl.deleteWorks);

module.exports = router;
