const express = require("express");
const { authAPI } = require("../../controllers");
const { validate } = require("../../middlewares/validation");
const {check} = require("express-validator");

const router = express.Router();




router.post("/register", validate([
    check("username").not().isEmpty().withMessage("username field required!"),
    check("password").not().isEmpty().withMessage("password field required!").isLength({ min: 8 }).withMessage('must be at least 8 chars long'),

]), authAPI.register)


module.exports = router;
