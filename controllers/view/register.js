const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../../models")

const registerForm = {
    get: async(req, res) => {
        return res.render("register", {req})
    },
    post: async(req, res) => {
        try {
            const user = await db.User.findOne({
                where: {
                    username: req.body.username
                }
            })
            
            if(!user){
            passwordhash = await bcrypt.hash(req.body.password, salt);
            const createuser = await db.User.create({
                email:req.body.email,
                password:passwordhash,
                username:req.body.password,
                userRole:"customer"

            })
        }
        
        } catch (error) {
            return res.render("error", { errors: error.message })
        }
    }
}


module.exports = {
    registerForm
}