const express = require("express");
const router = express.Router();
const clientCtrl = require("../controllers/client.controller");

router.post("/client", clientCtrl.createClient);
router.get("/client", clientCtrl.getClient);
router.get("/client/:id", clientCtrl.getOneClient);
router.put("/client/:id", clientCtrl.modifyClient);
router.delete("/client/:id", clientCtrl.deleteClient);

module.exports = router;
