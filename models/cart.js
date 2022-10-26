'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
      Cart.belongsTo(models.Customer),
      Cart.belongsToMany(models.Product,{through : "CartItems"}),
      Cart.hasOne(models.Order)
    }
    
  }
  Cart.init({
    status: DataTypes.ENUM("open","PaymentProcessing","canceled","closed")
  }, {
    sequelize,
    modelName: 'Cart',
    timestamps: false
  });
  return Cart;
};