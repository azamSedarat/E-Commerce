const db = require("../../models");
const {Payment} = db
const getPayment = async (userId)=> {
    try {
        return currentPayment= await Payment.findOne({
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