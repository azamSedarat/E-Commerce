const express = require("express");
const  { getCartAPI } = require('../../controllers');
const router = express.Router()

router.get("/cartItems", Auth, getCartAPI.getCart)

module.exports = router;
