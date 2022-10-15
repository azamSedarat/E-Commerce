'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Address.belongsTo(models.User),
      Address.belongsToMany(models.Order)
    }
  }
  Address.init({
    province: DataTypes.STRING,
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    plaque: DataTypes.INTEGER,
    floor: DataTypes.INTEGER,
    postalCode: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};