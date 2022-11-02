const express = require("express");
const  { orderController } = require('../../controllers');
const router = express.Router()
const Auth = require("../middlewares/authentication");

router.get("/list", Auth, orderController.getOrders())

module.exports = router;
