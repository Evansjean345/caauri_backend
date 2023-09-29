const express = require("express");
const router = express.Router();
const portfolioCtrl = require("../controllers/portfolio.controller");
const { upload } = require("../middlewares/multer");

router.post(
  "/portfolio",
  upload.array("picture"),
  portfolioCtrl.createPortfolio
);
router.get("/portfolio", portfolioCtrl.getPortfolio);
router.get("/portfolio/:id", portfolioCtrl.getOnePortfolio);
router.put("/portfolio/:id", portfolioCtrl.modifyPortfolio);
router.delete("/portfolio/:id", portfolioCtrl.deletePortfolio);

module.exports = router;
