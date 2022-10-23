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
      ProductFeatures.belongsToMany(models.Seller, {through: 'ProductSeller'})
    }
  }
  ProductFeatures.init({
    varientFeature: DataTypes.JSONB,
    photo: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'ProductFeatures',
  });
  return ProductFeatures;
};