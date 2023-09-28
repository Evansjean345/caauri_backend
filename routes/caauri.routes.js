const express = require("express");
const router = express.Router();
const caauriCtrl = require("../controllers/caauri.controller");

router.post("/caauri", caauriCtrl.createCaauri);
router.get("/caauri", caauriCtrl.getCaauri);
router.get("/caauri/:id", caauriCtrl.getOneCaauri);
router.put("/caauri/:id", caauriCtrl.modifyCaauri);
router.delete("/caauri/:id", caauriCtrl.deleteCaauri);

module.exports = router;
