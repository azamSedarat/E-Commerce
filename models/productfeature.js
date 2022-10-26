'use strict';
const {
  Model
} = require('sequelize');
const product = require('./product');
module.exports = (sequelize, DataTypes) => {
  class ProductFeature extends Model {
    static associate(models) {
      ProductFeature.belongsTo(models.Product),
      ProductFeature.belongsToMany(models.Cart, {through: 'CartItems'})
      ProductFeature.belongsToMany(models.Seller, {through: 'ProductSeller'})
    }
  }
  ProductFeature.init({
    varientFeature: DataTypes.JSONB,
    photo: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'ProductFeature',
    timestamps: false
  });
  return ProductFeature;
};