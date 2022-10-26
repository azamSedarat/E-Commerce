'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Payment.belongsTo(models.User),
      Payment.belongsTo(models.Order)
    }
  }
  Payment.init({
    id :  DataTypes.INTEGER,
    status : DataTypes.ENUM([
      1 = "پرداخت انجام نشده است",
      2 = "پرداخت ناموفق بوده است",
      3 = "خطا رخ داده است",
      4 = "بلوکه شده",
      5 = "برگشت به پرداخت کننده",
      6 = "برگشت خورده سیستمی",
      7 = "انصراف از پرداخت",
      8 = "به درگاه پرداخت منتقل شد",
      10 = "در انتظار تایید پرداخت",
      100 = "پرداخت تایید شده است",
      101 = "پرداخت قبلا تایید شده است",
      200 = "به دریافت کننده واریز شد"
    ]),
    trackID :  DataTypes.INTEGER,
    trackLink : DataTypes.STRING,
    amount : DataTypes.INTEGER,
    paymentDate : DataTypes.DATE,
    description : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};