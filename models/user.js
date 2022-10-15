'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

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
      type :DataTypes.ENUM("admin","customer","seller")
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    nationalityCode: DataTypes.INTEGER,
    birthDay: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};