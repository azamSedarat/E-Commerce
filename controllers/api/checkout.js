const request = require('request')
const db = require("../../models")
const dotenv = require('dotenv')
dotenv.config()
const {getPayment}=require("../../middlewares/userPayment")

const currentPayment = getPayment(1)
const options = {
  method: 'POST',
  url: 'https://api.idpay.ir/v1.1/payment',
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': process.env.X-API-KEY,
    'X-SANDBOX': 1,
  },
  body: {
    'order_id': `${currentPayment.id}`,
    'amount': currentPayment.amount,
    'name': `${currentPayment.users.firstName} ${currentPayment.users.lastName}`,
    'phone': `${currentPayment.users.phoneNumber}`,
    'mail': currentPayment.users.email,
    'desc': '',
    'callback': "./view/checkoutResponse",
  },
  json: true,
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});