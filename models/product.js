'use strict';
const {
  Model
} = require('sequelize');
const productfeatures = require('./productfeatures');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(Category)
      Product.hasMany(productfeatures)
      Product.hasMany(Comment)
      Product.belongsToMany(Cart, {through: 'CartItems'})
      Product.belongsToMany(FavoriteList, {through: 'ProductFavoriteList'})
      Product.belongsToMany(Seller, {through: 'ProductSeller'})
    }
  }
  Product.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};