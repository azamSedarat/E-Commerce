const express = require("express");
const  { productList } = require('../../controllers/view/productList');
const router = express.Router()

router.get("/", productList)

module.exports = router