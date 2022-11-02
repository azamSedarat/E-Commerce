const axios = require("axios").default;
const dotenv = require('dotenv').config()
const  {paymentService } = require('../../services');

const callback = async (req, res) => {
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
        },
      };

      let verifyBuy = await axios(params);
    }
    else if (verifyBuy.data.status == 100) {
        paymentService.updatePayment(currentPayment, requestBuy);
        return res.render("checkout-successful", {verifyBuy})

      }
    else if (verifyBuy.data.status == 101) {
      return res.json({
        message: "تراکنش قبلا پرداخت و تایید شده است",
        peymnet: verifyBuy.data.payment,
      });
    } 
    else {
      return res.render("checkout-unsuccessful", {verifyBuy})
    }
  } catch (err) {
    return res.render("error", { errors: requestBuy.data.error_message })
  }
}

module.exports = {
  callback
}
