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
                    userName: req.body.username
                }
            })
            
            if(!user){
            passwordhash = await bcrypt.hash(req.body.password, 10)
            await db.User.create({
                email:req.body.email,
                password:passwordhash,
                userName:req.body.username,
                userRole:"customer"

            })
            res.render("login.pug",{req})
        }
        
        } catch (error) {
            return res.send(error.message)
        }
    }
}


module.exports = {
    registerForm
}