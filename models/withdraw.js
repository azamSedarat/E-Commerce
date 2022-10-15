'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WithDraw extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      WithDraw.belongsTo(models.Seller)
    }
  }
  WithDraw.init({
    date: DataTypes.date,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'withDraw',
  });
  return WithDraw;
};