'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cart.belongsTo(models.Customer),
      Cart.belongsToMany(models.Product,{through : "CartItems"}),
      Cart.hasOne(models.Order)
    }
    
  }
  Cart.init({
    status: DataTypes.ENUM("PaymentProcessing","PaymentProcessing","canceled","closed")
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};