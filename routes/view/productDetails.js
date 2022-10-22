const express = require("express");
const  { productViewAPI } = require('../../controllers');
const router = express.Router()


router.get("/:productId", productViewAPI.getProductDetails)


module.exports = router;
