const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const db = require("../models")

const createUser = async (userData)=> {
    try {
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

    } catch (error) {
        throw error
    }
}

module.exports = {
    createUser
}