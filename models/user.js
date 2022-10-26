'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.Customer),
      User.hasOne(models.Seller),
      User.hasMany(models.Payment),
      User.hasMany(models.Address)
    }
  }
  User.init({
    userName: {
      type:DataTypes.STRING,
      allowNull :false,
      unique: true
    },
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    userRole: {
      type :DataTypes.ENUM("admin","customer","seller"),
      defaultValue :"customer"
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    nationalityCode: DataTypes.INTEGER,
    birthDay: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false
  });
  return User;
};