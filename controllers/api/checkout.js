const axios = require("axios").default;
const dotenv = require('dotenv')
dotenv.config()
const  { getPaymentService , updatePaymentService } = require('../../services');


const createTransaction = async (req, res) => {
  try {
    const currentPayment = getPaymentService.getPayment(1)
    let params = {
      method: "post",
      url: "https://api.idpay.ir/v1.1/payment",
      headers: {
        'Content-Type': 'application/json',
        "X-API-KEY": `${process.env.API_KEY}`,
        "X-SANDBOX": 1,
      },
      data: {
        'order_id': `${currentPayment.Orders.id}`,
        'amount': currentPayment.amount,
        'name': `${currentPayment.users.firstName} ${currentPayment.users.lastName}`,
        'phone': `${currentPayment.users.phoneNumber}`,
        'mail': currentPayment.users.email,
        'desc': '',
        'callback': "/checkout/callback",
      }
    }

    let requestBuy = await axios(params);
    updatePaymentService.updatePayment(currentPayment, requestBuy);
    res.redirect(requestBuy.data.link);
    
  } catch (err) {
    if (err) {
      return res.status(400).send(err.response.data);
    }
  }
}

module.exports = {
  createTransaction
}