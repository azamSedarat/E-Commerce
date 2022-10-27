const express = require("express");
const  { cartDetailsViewAPI } = require('../../controllers');
const router = express.Router()
const {jwtTokenAuthentication} = require("../../middlewares/authentication");

router.get("/cartItems", jwtTokenAuthentication, cartDetailsViewAPI.getCart)

module.exports = router;
