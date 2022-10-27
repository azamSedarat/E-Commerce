const express = require("express");
const  { productListViewAPI } = require('../../controllers');
const router = express.Router()

router.get("/list", productListViewAPI.getProducts)

module.exports = router