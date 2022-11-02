const db = require("../models")

class PaymentService {
    getOrCreatePayment(userData){
        const [payment, created] = db.Payment.findOrCreate({
            where: { 
                UserId : userData.userId,
                status: "pending" | "in progress"
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

    updatePayment(payment, data){
        if(data.link){
            payment.update({ trackId: data.id, trackLink : data.link})
        }
        }
    }

module.exports = new PaymentService();
