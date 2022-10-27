'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartItems extends Model {
    static associate(models) {
    }
  }
  CartItems.init({
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CartItems',
    timestamps: false
  });
  return CartItems;
};