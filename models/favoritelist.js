'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FavoriteList extends Model {
    static associate(models) {
      FavoriteList.belongsToMany(models.Product, {through: 'FavoriteProduct'})
      FavoriteList.belongsTo(models.Customer)
    }
  }
  FavoriteList.init({
  }, {
    sequelize,
    modelName: 'FavoriteList',
    timestamps: false
  });
  return FavoriteList;
};