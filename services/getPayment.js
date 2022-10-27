const db = require("../../models");

const getPayment = async (userId)=> {
    try {
        return currentPayment= await db.Payment.findOne({
            where:{
                UserId : userId,
                status: null
            },
             include:{
                model: db.User,
                attributes: ['firstName','lastName','phoneNumber','email']
              }
            })
    } catch (error) {
        throw error
    }
}
module.exports = {
    getPayment
}