'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Category),
      Product.hasMany(models.ProductFeature),
      Product.hasMany(models.Comment),   
      Product.belongsToMany(models.FavoriteList, {through: 'favoriteProduct'})

    }
  }
  Product.init({
    name: DataTypes.STRING,
    EnName: DataTypes.STRING,
    feature: DataTypes.JSONB,
    review: DataTypes.TEXT,
    expertReview: DataTypes.TEXT,
    generalFeatures: DataTypes.JSONB

  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};