const db = require("../../models");

const getPayment = async (userId)=> {
    try {
        const payment= await db.Payment.findOne({
            where:{
                UserId : userId,
                status: null
            },
             include:{
                model: db.User,
                attributes: ['firstName','lastName','phoneNumber','email']
              }
            })
        return payment
    } catch (error) {
        throw error
    }
}

module.exports = {
    getPayment
}