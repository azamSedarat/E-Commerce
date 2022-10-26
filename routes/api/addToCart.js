const express = require("express");
const  { addToCartAPI } = require('../../controllers');
const router = express.Router()

router.post("/addItem", Auth, addToCartAPI.addItem)

module.exports = router;
