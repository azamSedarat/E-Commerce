const express = require("express");
const  { ordersListViewAPI } = require('../../controllers');
const router = express.Router()
const Auth = require("../middlewares/authentication");

router.get("/list", Auth, ordersListViewAPI.getOrders)

module.exports = router;
