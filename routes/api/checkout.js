const express = require("express");
const  { checkoutAPI , checkoutCallbackAPI } = require('../../controllers');
const router = express.Router()


router.use("/buy", checkoutAPI.createTransaction)
router.post("/callback", checkoutCallbackAPI.callback)
router.get("/", (req, res) => {
    res.setHeader("content-type", "text/html");
  });

module.exports = router;
