const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const db = require("../models")

class UserService {
    async register(userData) {
        const salt = await bcrypt.genSalt(10);
        const hashpass = await bcrypt.hash(userData.password, salt)

        const [user, created] = await db.User.findOrCreate({
            where: {
                userName: userData.username
            },
            defaults: {
                userName: userData.username,
                password : hashpass,
                email:userData.email,
                userRole:"customer"
              }
        })
        return created
    }

    async login(username) {
        const user = await db.User.findOne({
            where: {
                userName: username
            }
        })
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!user){
            throw new Error("this user not exist");
        }
        if(validPassword){
            const token = jwt.sign({ userName: user.userName }, process.env.SECRET_KEY, { expiresIn: 60 * 60 }, { algorithm: 'HS256' });
            return token
        }else{
            throw new Error("password is incorrect");
        }
    }
  
    async logout() {
        res.clearCookie("access-token");
        return res.render("index", { req })
    }
  }
  module.exports = new UserService();
  