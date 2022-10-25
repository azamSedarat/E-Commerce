const db = require("../../models");
const {Op} = require("sequelize");
const { sequelize } = require("../../models");
const paymentStatus= async(req, res) => {
    try {
      let paymentFlag = false;
      if(req.body.id && req.body.link){
        //update payment db


        res.render("checkout-successful", {product,category})
      }
      else{
        //


        res.render("checkout-unsuccessful", {product,category})
      }
    } catch (error) {
        
        res.send(error.message)
    }
}



module.exports = {
  paymentStatus
}