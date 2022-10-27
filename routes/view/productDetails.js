const express = require("express");
const  { productDetailsViewAPI } = require('../../controllers');
const router = express.Router()

router.get("/:productId", productDetailsViewAPI.getProductDetails)

module.exports = router;
