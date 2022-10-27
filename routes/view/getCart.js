const express = require("express");
const  { getCartAPI } = require('../../controllers');
const router = express.Router()
const Auth = require("../middlewares/authentication");

router.get("/cartItems", Auth, getCartAPI.getCart)

module.exports = router;
