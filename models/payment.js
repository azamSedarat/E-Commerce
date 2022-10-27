'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate(models) {
      Payment.belongsTo(models.User),
      Payment.belongsTo(models.Order)
    }
  }
  Payment.init({
    status : DataTypes.ENUM("pending","in progress","complete","failed"),
    trackID :  DataTypes.INTEGER,
    trackLink : DataTypes.STRING,
    amount : DataTypes.INTEGER,
    paymentDate : DataTypes.DATE,
    description : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Payment',
    timestamps: false
  });
  return Payment;
};