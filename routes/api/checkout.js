const express = require("express");
const  { checkoutAPI , checkoutVerifyAPI } = require('../../controllers');
const router = express.Router()


router.use("/buy", checkoutAPI.createTransaction)
router.post("/callback", checkoutVerifyAPI.callback)


module.exports = router;
