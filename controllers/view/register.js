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
            const createuser = await db.User.create({
                email:req.body.email,
                password:req.body.username,
                username:req.body.password
            })
        }
            const validPassword = await bcrypt.compare(req.body.password, createuser.password);
    
            if(validPassword){
                const token = jwt.sign({ username: user.username }, process.env.SECRET_KEY, { expiresIn: 60 * 60 }, { algorithm: 'HS256' });
                res.cookie("access-token", token, { maxAge: 60 * 60 * 1000})
                return res.redirect("/")
            }else{
                return res.render("error", { errors: ["pass ghalate"] })
            }
            
        } catch (error) {
            return res.render("error", { errors: error.message })
        }
    }
}


module.exports = {
    registerForm
}