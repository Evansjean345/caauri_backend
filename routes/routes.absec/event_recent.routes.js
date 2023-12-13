const express = require("express");
const router = express.Router();
const EventCtrl = require("../../controllers/controller.absec/event_recent.controller");
const {upload} = require('../../middlewares/multer')

router.post("/event_recent/absec", upload.single('imageUrl') , EventCtrl.createEvent );
router.get("/event_recent/absec", EventCtrl.getEvent);
router.get("/event_recent/absec/:id", EventCtrl.getOneEvent);
router.put("/event_recent/absec/:id", upload.single('imageUrl') , EventCtrl.updateEvent);
router.delete("/event_recent/absec/:id", EventCtrl.deleteEvent);

module.exports = router;
