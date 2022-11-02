const db = require("../models")

class PaymentService {
    async getOrCreatePayment(userData){
        const [payment, created] = db.Payment.findOrCreate({
            where: { 
                UserId : userData.userId,
                status: "pending"
            },
            include: db.User,
            defaults: {
                UserId : userData.userId,
                OrderId : userData.orderId,
                status : "in progress",
                amount : userData.amount,
                paymentDate : Date.now(),
                description : userData.description
            }
        })
        return payment
    }
    async updatePayment(payment, data){
        if(data.link){
            payment.update({ trackId: data.id, trackLink : data.link})
        }
        }
    }

module.exports = new PaymentService();
