'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Payment.belongsTo(models.User),
      Payment.belongsTo(models.Order)
    }
  }
  Payment.init({
    id :  DataTypes.INTEGER,
    status : DataTypes.INTEGER,
    track_id :  DataTypes.INTEGER,
    amount :  DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Payment',
    timestamps: false
  });
  return Payment;
};