const express = require("express");
const  { checkoutController , checkoutVerifyController } = require('../../controllers');
const router = express.Router()

router.post("/buy", checkoutController.createTransaction)
router.post("/callback", checkoutVerifyController.callback)


module.exports = router;
