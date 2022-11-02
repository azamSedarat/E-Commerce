const express = require("express");
const  { productController } = require('../../controllers');
const router = express.Router()

router.get("/list", productController.getProducts())
router.get("/:productId", productController.getProductDetails())

module.exports = router