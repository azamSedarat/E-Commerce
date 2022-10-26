const axios = require("axios").default;
const dotenv = require('dotenv')
dotenv.config()

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
        return res.json({
          message: "تراکنش موفق",
          peymnet: verifyBuy.data.payment,
        });
      }

      if (verifyBuy.data.status == 101) {
        return res.json({
          message: "تراکنش قبلا پرداخت و تایید شده است",
          peymnet: verifyBuy.data.payment,
        });
      } else {
        res.json(req.body);
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