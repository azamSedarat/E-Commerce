const express = require("express");
const  { productViewAPI } = require('../../controllers');
const router = express.Router()


router.get("/status", checkoutViewAPI.paymentStatus)


module.exports = router;
