const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../../models")

const login = {
    get: async(req, res) => {
        return res.render("login.pug", {req})
    },
    post: async(req, res) => {
        console.log(req.body);
        
        try {
            const user = await db.User.findOne({
                where: {
                    userName: req.body.username
                }
            })
            if(!user){
                return res.render("error", { errors: ["hamchin useri nadarim"] })
            }
            const validPassword = await bcrypt.compare(req.body.password, user.password);
    
            if(validPassword){
                const token = jwt.sign({ userName: user.userName }, process.env.SECRET_KEY, { expiresIn: 60 * 60 }, { algorithm: 'HS256' });
                res.cookie("access-token", token, { maxAge: 60 * 60 * 1000})
                return res.redirect("home.pug")
            }else{
                return res.render("error", { errors: ["pass ghalate"] })
            }
            
        } catch (error) {
            console.log(error,"saeed");
            return res.render("error", { errors: error.message })
        }
    }
}

const logout = async(req, res) => {
    res.clearCookie("access-token");
    return res.render("index", { req })

}


module.exports = {
    login,
    logout
}