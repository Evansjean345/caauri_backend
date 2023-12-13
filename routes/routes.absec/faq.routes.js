const express = require("express");
const router = express.Router();
const faqtCtrl = require("../../controllers/controller.absec/faq.controller");

router.post("/faq/absec", faqtCtrl.createFaq );
router.get("/faq/absec", faqtCtrl.getFaq);
router.get("/faq/absec/:id", faqtCtrl.getOneFaq);
router.put("/faq/absec/:id", faqtCtrl.modifyFaq);
router.delete("/faq/absec/:id", faqtCtrl.deleteFaq);

module.exports = router;
