const express = require("express");
const  { addItemToCartAPI } = require('../../controllers');
const router = express.Router()
const {jwtTokenAuthentication} = require("../../middlewares/authentication");

router.post("/addItem", jwtTokenAuthentication, addItemToCartAPI.addItem)

module.exports = router;
