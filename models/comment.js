'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.Customer),
      Comment.belongsTo(models.Product)
    }
  }
  Comment.init({
    text : DataTypes.STRING,
    insertDate:  DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Comment',
    timestamps: false
  });
  return Comment;
};