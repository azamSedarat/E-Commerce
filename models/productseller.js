'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductSeller extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductSeller.init({
    productId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductSeller',
  });
  return ProductSeller;
};