'use strict';
const {
  Model
} = require('sequelize');
const productfeatures = require('./productfeatures');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Category),
      Product.hasMany(models.ProductFeatures),
      Product.hasMany(models.Comment),   
      Product.belongsToMany(models.FavoriteList, {through: 'favoriteProduct'})
    }
  }
  Product.init({
    name: DataTypes.STRING,
    EnName: DataTypes.STRING,
    feature: DataTypes.JSONB,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};