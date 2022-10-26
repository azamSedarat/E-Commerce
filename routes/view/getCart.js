const express = require("express");
const  { addToCartAPI } = require('../../controllers');
const router = express.Router()

router.get("/itemList", Auth, addToCartAPI.getCart)

module.exports = router;
