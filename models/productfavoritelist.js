'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductFavoriteList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductFavoriteList.init({
    productId: DataTypes.INTEGER,
    favoriteListId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductFavoriteList',
  });
  return ProductFavoriteList;
};