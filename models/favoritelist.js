'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FavoriteList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      FavoriteList.belongsToMany(models.Product, {through: 'FavoriteProduct'})
    }
  }
  FavoriteList.init({
    CustomerId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FavoriteList',
    timestamps: false
  });
  return FavoriteList;
};