'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seller extends Model {
    static associate(models) {
      Seller.belongsTo(models.User)
      Seller.belongsToMany(models.Product, {through: 'ProductSeller'}),
      Seller.hasMany(models.WithDraw)
    }
  }
  Seller.init({
    sellerType: DataTypes.ENUM("person","store"),
    gender: DataTypes.ENUM("male","female"),
    birthCertificateNumber: DataTypes.INTEGER,
    storeName: DataTypes.STRING,
    ibanNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Seller',
  });
  return Seller;
};