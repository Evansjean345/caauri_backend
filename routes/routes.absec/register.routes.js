const express = require("express");
const router = express.Router();
const registerCtrl = require("../../controllers/controller.absec/regsiter.controller");

router.post("/register/absec", registerCtrl.createRegister );
router.get("/register/absec", registerCtrl.getRegister);
router.get("/register/absec/:id", registerCtrl.getOneRegister);
router.put("/register/absec/:id", registerCtrl.modifyRegister);
router.delete("/register/absec/:id", registerCtrl.deleteRegister);

module.exports = router;
