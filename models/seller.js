'use strict';
const {
  Model
} = require('sequelize');
const {User} = sequelize.models
module.exports = (sequelize, DataTypes) => {
  class Seller extends User {
    static associate(models) {
      Seller.hasOne(models.Address),
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