'use strict';
const {
  Model
} = require('sequelize');
const product = require('./product');
module.exports = (sequelize, DataTypes) => {
  class ProductFeatures extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductFeatures.belongsTo(product)
    }
  }
  ProductFeatures.init({
    feature: DataTypes.STRING,
    price: DataTypes.INTEGER,
    photo: DataTypes.STRING,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductFeatures',
  });
  return ProductFeatures;
};