const express = require("express");
const  {registerForm} = require('../../controllers/view/register');
const { validate } = require("../../middlewares/validation");
const {check} = require("express-validator");

const router = express.Router()


router.route("/register")
    .get(registerForm.get)
    .post(validate([
        check("username").not().isEmpty().withMessage("username field required!"),
        check("password").not().isEmpty().withMessage("password field required!")
    ]),registerForm.post)




module.exports = router;
