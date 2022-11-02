const express = require("express")
const { validate } = require("../../middlewares/validation")
const { check } = require("express-validator")
const router = express.Router()
const {userController} = require("../../controllers")


router.route("/login")
    .get(userController.renderloginPage)
    .post(validate([
        check("username").not().isEmpty().withMessage("username field required!"),
        check("password").not().isEmpty().withMessage("password field required!")
    ]), userController.login)

router.get("/logout",userController.logout)

router.route("/register")
    .get(userController.renderloginPage)
    .post(validate([
        check("username").not().isEmpty().withMessage("username field required!"),
        check("password").not().isEmpty().withMessage("password field required!")
    ]), userController.login)

module.exports = router