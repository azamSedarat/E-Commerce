const db = require("../models")

const getUser = async (username)=> {
    try {
        const user = await db.User.findOne({
            where: {
                userName: username
            }
        })
        
        return user
    } catch (error) {
        throw error
    }
}

module.exports = {
    getUser
}