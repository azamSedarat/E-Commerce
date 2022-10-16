'use strict';
const {
  Model
} = require('sequelize');
const {User} = sequelize.models
module.exports = (sequelize, DataTypes) => {
  class Customer extends User {
    static associate(models) {
      Customer.hasMany(models.Cart),
      Customer.hasMany(models.Comment),
      Customer.hasOne(models.FavoriteList),
      Customer.hasMany(models.Order),
      Customer.hasMany(models.Payment)
    }
  }
  Customer.init({
    credit:DataTypes.INTEGER,
    paybackType: DataTypes.ENUM("Deposit to wallet","Deposit to bank account."),
    job: DataTypes.STRING,
    customerType:{
      type:DataTypes.ENUM("person","company"),
      defaultValue:"person"
    } ,
    companyName: DataTypes.STRING,
    financialNumber: DataTypes.INTEGER,
    registerIdentity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};