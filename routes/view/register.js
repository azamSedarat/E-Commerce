const express = require("express");
const  {registerViewAPI} = require('../../controllers');
const { validate } = require("../../middlewares/validation");
const {check} = require("express-validator");
const router = express.Router()

router.post("/register")
    .post(validate([
        check("username").not().isEmpty().withMessage("username field required!"),
        check("password").not().isEmpty().withMessage("password field required!")
    ]),registerViewAPI.register)

module.exports = router;
