const bcrypt = require("bcryptjs")
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
        if(!created){
            throw new Error("this username is unavailable");
        }
        else{
            return user
        }
    }

    async login(userData) {
        const user = await db.User.findOne({
            where: {
                userName: userData.username
            }
        })
        const validPassword = await bcrypt.compare(userData.password, user.password);
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
  }
  module.exports = new UserService();
  