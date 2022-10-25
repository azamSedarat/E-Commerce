'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate(models) {
      Customer.belongsTo(models.User),
      Customer.hasMany(models.Cart),
      Customer.hasMany(models.Comment),
      Customer.hasOne(models.FavoriteList),
      Customer.hasMany(models.Order)
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