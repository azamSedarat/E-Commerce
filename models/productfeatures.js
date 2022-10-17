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
      ProductFeatures.belongsTo(models.Product)
      ProductFeatures.belongsToMany(models.Cart, {through: 'CartItems'}),
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