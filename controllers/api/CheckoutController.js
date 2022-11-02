const axios = require("axios").default;
const dotenv = require('dotenv').config()
const  { paymentService} = require("../../services");

const createTransaction = async (req, res) => {
  try {
    const activePayment = paymentService.getOrCreatePayment(req.body)
    let params = {
      method: "post",
      url: "https://api.idpay.ir/v1.1/payment",
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
        'callback': "./checkoutVerify"
      }
    }

    let requestBuy = await axios(params);
    await paymentService.updatePayment(activePayment, requestBuy);
    res.redirect(requestBuy.data.link);

  } catch (err) {
    return res.render("error", { errors: requestBuy.data.error_message })
  }
}

module.exports = {
  createTransaction
}
