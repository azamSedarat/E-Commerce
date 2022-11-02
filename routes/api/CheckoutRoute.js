const express = require("express");
const  { checkoutController } = require('../../controllers');
const router = express.Router()

router.post("/buy", checkoutController.createTransaction)
router.post("/callback", checkoutController.verifyCallback)


module.exports = router;
