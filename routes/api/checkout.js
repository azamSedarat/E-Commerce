const express = require("express");
const  { checkoutAPI , checkoutCallbackAPI } = require('../../controllers');
const router = express.Router()


router.use("/buy", checkoutAPI.createTransaction)
router.post("/callback", checkoutCallbackAPI.callback)


module.exports = router;
