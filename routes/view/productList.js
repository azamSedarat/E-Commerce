const express = require("express");
const  { productList } = require('../../controllers/view/productList');
const router = express.Router()

router.get("/list", productList)

module.exports = router