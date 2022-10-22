const express = require("express");
const  { authTemplate } = require('../../controllers');
const { validate } = require("../../middlewares/validation");
const {check} = require("express-validator");

const router = express.Router()


router.route("/register")
    .get(authTemplate.registerForm.get)
    .post(validate([
        check("username").not().isEmpty().withMessage("username field required!"),
        check("password").not().isEmpty().withMessage("password field required!")
    ]),authTemplate.registerForm.post)




module.exports = router;
