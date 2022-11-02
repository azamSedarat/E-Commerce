const axios = require("axios").default;
const dotenv = require('dotenv').config()
const  { paymentService} = require("../../services");

class CheckoutController {
    async createTransaction(req, res) {
        try {
            const activePayment = paymentService.getOrCreatePayment(req.body)
            let params = {
              method: "post",
              url: 'https://api.idpay.ir/v1.1/payment',
              headers: {
                'Content-Type': 'application/json',
                "X-API-KEY": `${process.env.API_KEY}`,
                "X-SANDBOX": 1,
              },
              data: {
                'order_id': `${activePayment.OrderId}`,
                'amount': activePayment.amount,
                'name': `${activePayment.users.firstName} ${activePayment.users.lastName}`,
                'phone': `${activePayment.users.phoneNumber}`,
                'mail': activePayment.users.email,
                'desc': activePayment.description,
                'callback': "localhost:3000/payment/callback"
              }
            }
        
            let requestBuy = await axios(params);
        
            await paymentService.updatePayment(activePayment, requestBuy);
            res.redirect(requestBuy.data.link);
        
          } catch (err) {
            return res.render("error", { errors: err.response.data})
          }
    }


    async verifyCallback(req, res) {
      try {
        if (req.body.status === 10) {
          let params = {
            headers: {
              "X-API-KEY": process.env.API_KEY,
              "X-SANDBOX": 1,
            },
            method: "post",
            url: "https://api.idpay.ir/v1.1/payment/verify",
            data: {
              id: req.body.id,
              order_id: req.body.order_id,
            }
          }

        const verifyBuy = await axios(params);

        if (verifyBuy.data.status == 100) {
            paymentService.updatePayment(currentPayment, requestBuy);
            return res.render("checkout-successful", {verifyBuy})
          }
        if (verifyBuy.data.status == 101) {
          return res.json({
            message: "تراکنش قبلا پرداخت و تایید شده است",
            peymnet: verifyBuy.data.payment,
          });
        } else{
          res.json(req.body);
        }
        
      }else {
        return res.render("checkout-unsuccessful", {verifyBuy})
      }

    } catch (err) {
        return res.render("error", { errors: requestBuy.data.error_message })
      }
    }  
}


module.exports = new CheckoutController();
