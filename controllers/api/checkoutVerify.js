const axios = require("axios").default;
const dotenv = require('dotenv')
dotenv.config()
const  {updatePaymentService } = require('../../services');

const callback = async (req, res) => {
  try {

    if (req.body.status == 10) {
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

      if (verifyBuy.data.status == 100) {
        updatePaymentService.updatePayment(currentPayment, requestBuy);
        return res.render("checkout-successful", {verifyBuy})

      }

      if (verifyBuy.data.status == 101) {
        return res.json({
          message: "تراکنش قبلا پرداخت و تایید شده است",
          peymnet: verifyBuy.data.payment,
        });
      } else {
        return res.render("checkout-unsuccessful", {verifyBuy})

      }
    } else {
      res.json({ message: "پرداخت ناموفق", peyment: req.body });
    }
  } catch (err) {
    if (err) {
      return res.status(400).send(err);
    }
  }
}

module.exports = {
  callback
}