'use strict';
const {
  Model
} = require('sequelize');
const {DataTypes} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class WithDraw extends Model {
    static associate(models) {
      WithDraw.belongsTo(models.Seller)
    }
  }
  WithDraw.init({
    date: DataTypes.DATE,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'WithDraw',
    timestamps: false
  });
  return WithDraw;
};