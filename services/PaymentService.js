const db = require("../models")

class PaymentService {
    async getPayment(userId){
        return payment= await db.Payment.findOne({
            where:{
                UserId : userId,
                status: null
            },
             include:{
                model: db.User,
                attributes: ['firstName','lastName','phoneNumber','email']
              }
            })
        }
    async updaatePayment(payment, data){
        if(data.link){
            payment.update({ trackId: data.id, trackLink : data.link})
        }
        }
    }

module.exports = new PaymentService();
