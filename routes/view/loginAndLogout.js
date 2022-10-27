const express = require("express")
const { login, logout } = require("../../controllers/view/loginAndLogout")
const { validate } = require("../../middlewares/validation")
const { check } = require("express-validator")
const router = express.Router()

router.route("/login")
    .get(login.get)
    .post(validate([
        check("username").not().isEmpty().withMessage("username field required!"),
        check("password").not().isEmpty().withMessage("password field required!")
    ]), login.post)

router.get("/logout",logout)

module.exports = router