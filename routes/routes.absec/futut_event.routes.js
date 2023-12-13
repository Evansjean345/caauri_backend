const express = require("express");
const router = express.Router();
const eventCtrl = require("../../controllers/controller.absec/futur_event.controller");
const { upload } = require("../../middlewares/multer");

router.post(
  "/futur_event/absec",
  upload.array("picture"),
  eventCtrl.createEvent
);
router.get("/futur_event/absec", eventCtrl.getEvent);
router.get("/futur_event/absec/:id", eventCtrl.getOneEvent);
router.put("/futur_event/absec/:id", eventCtrl.modifyEvent);
router.delete("/futur_event/absec/:id", eventCtrl.deleteEvent);

module.exports = router;
