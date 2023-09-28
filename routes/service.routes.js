const express = require("express");
const router = express.Router();
const serviceCtrl = require("../controllers/service.controller");

router.post("/service", serviceCtrl.createService);
router.get("/service", serviceCtrl.getService);
router.get("/service/:id", serviceCtrl.getOneService);
router.put("/service/:id", serviceCtrl.modifyService);
router.delete("/service/:id", serviceCtrl.deleteService);

module.exports = router;
