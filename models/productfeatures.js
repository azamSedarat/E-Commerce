'use strict';
const {
  Model
} = require('sequelize');
const product = require('./product');
module.exports = (sequelize, DataTypes) => {
  class ProductFeatures extends Model {
    static associate(models) {
      ProductFeatures.belongsTo(models.Product),
      ProductFeatures.belongsToMany(models.Cart, {through: 'CartItems'})
    }
  }
  ProductFeatures.init({
    feature: DataTypes.JSONB,
    price: DataTypes.INTEGER,
    photo: DataTypes.STRING,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductFeatures',
  });
  return ProductFeatures;
};