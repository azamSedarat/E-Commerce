const {userService} = require("../../services")

class UserController{
    async register(req,res){
        try{
            const createUser = await userService.register(req)
            if (!createUser) {
                return res.render("error", { errors: error.message })
            }
            return res.render("register", {req})
        }catch{
            throw error
        }
    }

    async login(req,res){
        try {
           const token = await userService.login(req.body.username)
           res.cookie("access-token", token, { maxAge: 60 * 60 * 1000})
           return res.redirect("home.pug")
        } catch (error) {
            return res.render("error", { errors: error.message })
        }
    }
    
    async renderloginPage (req,res){
        return res.render("login.pug", {req})
    }

    async logout(req,res){
        res.clearCookie("access-token");
        return res.render("index", { req })
    }
}

module.exports = new UserController();