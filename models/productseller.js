'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductSeller extends Model {
    static associate(models) {
    }
  }
  ProductSeller.init({
    warranty: DataTypes.STRING,
    price: DataTypes.STRING,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductSeller',
    timestamps: false
  });
  return ProductSeller;
};