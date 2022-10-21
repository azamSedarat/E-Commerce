const express = require("express");
const  { authTemplate } = require('../../controllers');
const { validate } = require("../../middlewares/validation");
const {check} = require("express-validator");

const router = express.Router()


router.route("/login-form")
    .get(authTemplate.loginForm.get)
    .post(validate([
        check("username").not().isEmpty().withMessage("username field required!"),
        check("password").not().isEmpty().withMessage("password field required!")
    ]),authTemplate.loginForm.post)

router.get("/logout", authTemplate.logout)


module.exports = router;
