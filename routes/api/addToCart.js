const express = require("express");
const  { addItemToCartAPI } = require('../../controllers');
const router = express.Router()

router.post("/addItem", Auth, addItemToCartAPI.addItem)

module.exports = router;
